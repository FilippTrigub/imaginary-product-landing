const redis = require('redis');

// Redis connection details
const redisConfig = {
  url: 'rediss://default:AUGJAAIncDJjMWY2YmM1NDAwNDE0ODIxOTkzNTIyYjYyZDkwMGQ1OXAyMTY3Nzc@knowing-rodent-16777.upstash.io:6379'
};

async function testRedisConnection() {
  console.log('Testing Upstash Redis connection...');
  
  const client = redis.createClient(redisConfig);
  
  client.on('error', (err) => {
    console.error('Redis Client Error:', err);
  });
  
  client.on('connect', () => {
    console.log('Successfully connected to Upstash Redis');
  });
  
  try {
    await client.connect();
    
    // Test basic operations
    console.log('\n--- Testing Basic Operations ---');
    
    // SET operation
    await client.set('test-key', 'test-value');
    console.log('✓ SET test-key = test-value');
    
    // GET operation
    const value = await client.get('test-key');
    console.log(`✓ GET test-key = ${value}`);
    
    // Test expiration
    await client.setEx('temp-key', 5, 'expires-in-5-seconds');
    console.log('✓ SETEX temp-key (5 seconds TTL)');
    
    // List operations
    await client.lPush('my-list', ['item1', 'item2', 'item3']);
    console.log('✓ LPUSH items to my-list');
    
    const listItems = await client.lRange('my-list', 0, -1);
    console.log(`✓ LRANGE my-list = [${listItems.join(', ')}]`);
    
    // Hash operations
    await client.hSet('user:1', {
      name: 'John Doe',
      email: 'john@example.com',
      age: '30'
    });
    console.log('✓ HSET user:1 fields');
    
    const userName = await client.hGet('user:1', 'name');
    console.log(`✓ HGET user:1 name = ${userName}`);
    
    // Clean up test data
    await client.del('test-key', 'temp-key', 'my-list', 'user:1');
    console.log('✓ Cleaned up test keys');
    
    console.log('\n--- All Tests Passed! ---');
    
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    await client.quit();
  }
}

testRedisConnection();