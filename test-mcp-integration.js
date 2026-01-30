const redis = require('redis');

// Redis connection details
const redisConfig = {
  url: 'rediss://default:AUGJAAIncDJjMWY2YmM1NDAwNDE0ODIxOTkzNTIyYjYyZDkwMGQ1OXAyMTY3Nzc@knowing-rodent-16777.upstash.io:6379'
};

async function testMCPServerIntegration() {
  console.log('Testing Upstash MCP Server Integration...');
  
  const client = redis.createClient(redisConfig);
  
  client.on('error', (err) => {
    console.error('Redis Client Error:', err);
  });
  
  try {
    await client.connect();
    
    // Test MCP-like operations
    console.log('\n--- MCP Server Operations Test ---');
    
    // 1. Test session management
    const sessionId = 'session-' + Date.now();
    await client.setEx(`session:${sessionId}`, 3600, JSON.stringify({
      user: 'test-user',
      created: new Date().toISOString(),
      status: 'active'
    }));
    console.log(`✓ Created session: ${sessionId}`);
    
    // 2. Test tool caching
    await client.setEx('tool:calculator:result', 300, JSON.stringify({
      expression: '2+2',
      result: 4,
      timestamp: Date.now()
    }));
    console.log('✓ Cached tool result');
    
    // 3. Test message queue for async operations
    await client.lPush('queue:mcp-tasks', JSON.stringify({
      id: 'task-' + Date.now(),
      type: 'async-operation',
      payload: { action: 'process_data' }
    }));
    console.log('✓ Enqueued async task');
    
    // 4. Test rate limiting
    const rateLimitKey = 'ratelimit:test-user';
    const currentCount = await client.incr(rateLimitKey);
    if (currentCount === 1) {
      await client.expire(rateLimitKey, 60);
    }
    console.log(`✓ Rate limit count: ${currentCount}/10`);
    
    // 5. Test pub/sub for real-time updates
    const pubClient = client.duplicate();
    await pubClient.connect();
    
    await pubClient.publish('mcp:notifications', JSON.stringify({
      event: 'task_completed',
      data: { taskId: 'test-task', result: 'success' }
    }));
    console.log('✓ Published real-time notification');
    await pubClient.quit();
    
    // 6. Test data structures for complex state
    await client.hSet('state:user:profile', {
      'name': 'John Doe',
      'preferences': JSON.stringify({ theme: 'dark', lang: 'en' }),
      'last_login': Date.now().toString()
    });
    console.log('✓ Stored complex user state');
    
    // 7. Test sorted sets for leaderboards/scores
    await client.zAdd('leaderboard:scores', [
      { score: 100, value: 'user1' },
      { score: 85, value: 'user2' },
      { score: 92, value: 'user3' }
    ]);
    console.log('✓ Added scores to leaderboard');
    
    // 8. Test sets for unique operations
    await client.sAdd('tags:javascript', ['nodejs', 'redis', 'mcp']);
    await client.sAdd('tags:python', ['django', 'redis', 'async']);
    console.log('✓ Managed tag sets');
    
    // 9. Test bitmaps for analytics
    await client.setBit('analytics:daily:2026-01-30', 0, 1);
    await client.setBit('analytics:daily:2026-01-30', 100, 1);
    console.log('✓ Updated analytics bitmap');
    
    // 10. Test hyperloglogs for unique counting
    await client.pfAdd('unique:visitors', 'user1', 'user2', 'user3', 'user1');
    const uniqueCount = await client.pfCount('unique:visitors');
    console.log(`✓ Unique visitors count: ${uniqueCount}`);
    
    // Verification of stored data
    console.log('\n--- Data Verification ---');
    const sessionData = await client.get(`session:${sessionId}`);
    const toolCache = await client.get('tool:calculator:result');
    const userProfile = await client.hGetAll('state:user:profile');
    const leaderboard = await client.zRangeWithScores('leaderboard:scores', 0, -1, { REV: true });
    
    console.log(`Session valid: ${sessionData ? 'Yes' : 'No'}`);
    console.log(`Tool cache hit: ${toolCache ? 'Yes' : 'No'}`);
    console.log(`Profile exists: ${Object.keys(userProfile).length > 0 ? 'Yes' : 'No'}`);
    console.log(`Leaderboard entries: ${leaderboard.length}`);
    
    // Cleanup test data
    await client.del(
      `session:${sessionId}`, 
      'tool:calculator:result',
      'queue:mcp-tasks',
      'state:user:profile',
      'leaderboard:scores',
      'tags:javascript',
      'tags:python',
      'analytics:daily:2026-01-30',
      'unique:visitors'
    );
    console.log('✓ Cleaned up test data');
    
    console.log('\n--- MCP Server Integration Test Complete! ---');
    console.log('All advanced Redis operations working correctly.');
    
  } catch (error) {
    console.error('MCP test failed:', error);
  } finally {
    await client.quit();
  }
}

testMCPServerIntegration();