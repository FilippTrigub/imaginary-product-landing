const redis = require('redis');

class UpstashMCPServer {
  constructor() {
    this.redisConfig = {
      url: 'rediss://default:AUGJAAIncDJjMWY2YmM1NDAwNDE0ODIxOTkzNTIyYjYyZDkwMGQ1OXAyMTY3Nzc@knowing-rodent-16777.upstash.io:6379'
    };
    this.client = redis.createClient(this.redisConfig);
  }

  async connect() {
    await this.client.connect();
    console.log('✅ Upstash MCP Server connected');
  }

  async disconnect() {
    await this.client.quit();
  }

  // Session Management
  async createSession(userId, data = {}) {
    const sessionId = 'session:' + Date.now() + ':' + Math.random().toString(36).substr(2, 9);
    const sessionData = {
      userId,
      ...data,
      createdAt: new Date().toISOString(),
      lastActivity: new Date().toISOString()
    };
    
    await this.client.setEx(sessionId, 3600, JSON.stringify(sessionData));
    await this.client.sAdd(`user:${userId}:sessions`, sessionId);
    
    return sessionId;
  }

  async getSession(sessionId) {
    const data = await this.client.get(sessionId);
    if (!data) return null;
    
    // Update last activity
    await this.client.hSet(sessionId + ':meta', 'lastActivity', new Date().toISOString());
    return JSON.parse(data);
  }

  // Tool Execution and Caching
  async cacheToolResult(toolName, params, result, ttl = 300) {
    const cacheKey = `tool:${toolName}:${this.hashParams(params)}`;
    await this.client.setEx(cacheKey, ttl, JSON.stringify({
      result,
      timestamp: Date.now(),
      toolName,
      params
    }));
  }

  async getCachedToolResult(toolName, params) {
    const cacheKey = `tool:${toolName}:${this.hashParams(params)}`;
    const data = await this.client.get(cacheKey);
    return data ? JSON.parse(data) : null;
  }

  // Queue Management for Async Operations
  async enqueueTask(taskType, payload, priority = 0) {
    const task = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      type: taskType,
      payload,
      status: 'queued',
      createdAt: new Date().toISOString()
    };
    
    if (priority > 0) {
      await this.client.zAdd('priority-queue', [{ score: priority, value: JSON.stringify(task) }]);
    } else {
      await this.client.lPush('task-queue', JSON.stringify(task));
    }
    
    return task.id;
  }

  async dequeueTask() {
    // Check priority queue first
    const priorityTask = await this.client.zPopMax('priority-queue');
    if (priorityTask.length > 0) {
      return JSON.parse(priorityTask[0].value);
    }
    
    // Then check regular queue
    const task = await this.client.rPop('task-queue');
    return task ? JSON.parse(task) : null;
  }

  // Rate Limiting
  async checkRateLimit(identifier, limit = 10, window = 60) {
    const key = `ratelimit:${identifier}`;
    const current = await this.client.incr(key);
    
    if (current === 1) {
      await this.client.expire(key, window);
    }
    
    return {
      allowed: current <= limit,
      current,
      remaining: Math.max(0, limit - current),
      resetTime: Date.now() + (window * 1000)
    };
  }

  // Real-time Notifications
  async publishNotification(channel, event, data) {
    const notification = {
      event,
      data,
      timestamp: new Date().toISOString()
    };
    
    await this.client.publish(channel, JSON.stringify(notification));
  }

  // State Management
  async setUserState(userId, state) {
    const key = `state:user:${userId}`;
    await this.client.hSet(key, {
      data: JSON.stringify(state),
      updatedAt: new Date().toISOString()
    });
  }

  async getUserState(userId) {
    const key = `state:user:${userId}`;
    const data = await this.client.hGet(key, 'data');
    return data ? JSON.parse(data) : null;
  }

  // Analytics
  async recordEvent(eventType, properties = {}) {
    const timestamp = Date.now();
    const eventKey = `events:${eventType}:${new Date().toISOString().split('T')[0]}`;
    
    await this.client.incr(eventKey);
    await this.client.lPush(`event-log:${eventType}`, JSON.stringify({
      timestamp,
      properties,
      date: new Date().toISOString()
    }));
  }

  async getEventStats(eventType, days = 7) {
    const stats = {};
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const key = `events:${eventType}:${dateStr}`;
      const count = await this.client.get(key);
      stats[dateStr] = parseInt(count) || 0;
    }
    return stats;
  }

  // Utility functions
  hashParams(params) {
    return Buffer.from(JSON.stringify(params)).toString('base64').substr(0, 16);
  }

  // Health Check
  async healthCheck() {
    try {
      await this.client.ping();
      return { status: 'healthy', timestamp: new Date().toISOString() };
    } catch (error) {
      return { status: 'unhealthy', error: error.message };
    }
  }
}

// Demo usage
async function demoMCPServer() {
  const mcpServer = new UpstashMCPServer();
  
  try {
    await mcpServer.connect();
    
    console.log('=== Upstash MCP Server Demo ===');
    
    // 1. Create session
    const sessionId = await mcpServer.createSession('user123', { plan: 'pro' });
    console.log(`✅ Created session: ${sessionId}`);
    
    // 2. Cache tool result
    await mcpServer.cacheToolResult('calculator', { expression: '2*3' }, 6);
    console.log('✅ Cached tool result');
    
    // 3. Check rate limit
    const rateLimit = await mcpServer.checkRateLimit('user123', 5, 60);
    console.log(`✅ Rate limit check: ${rateLimit.remaining}/5 remaining`);
    
    // 4. Enqueue task
    const taskId = await mcpServer.enqueueTask('data-processing', { size: 'large' }, 10);
    console.log(`✅ Enqueued task: ${taskId}`);
    
    // 5. Set user state
    await mcpServer.setUserState('user123', { preferences: { theme: 'dark' } });
    console.log('✅ Set user state');
    
    // 6. Record analytics
    await mcpServer.recordEvent('tool_used', { tool: 'calculator' });
    console.log('✅ Recorded analytics event');
    
    // 7. Publish notification
    await mcpServer.publishNotification('updates', 'task_completed', { taskId });
    console.log('✅ Published notification');
    
    // 8. Health check
    const health = await mcpServer.healthCheck();
    console.log(`✅ Health status: ${health.status}`);
    
    console.log('\n🎉 All MCP server features working correctly!');
    
  } catch (error) {
    console.error('❌ Demo failed:', error);
  } finally {
    await mcpServer.disconnect();
  }
}

demoMCPServer();