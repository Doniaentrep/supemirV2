/**
 * Test script for n8n webhook integration
 * Run with: node test-n8n-webhook.js
 */

import https from 'https';
import http from 'http';

// Configuration
const WEBHOOK_URL = process.env.VITE_N8N_WEBHOOK_URL || 'https://your-n8n-host/webhook/your-webhook-id';

// Test data matching the RegistrationForm structure
const testData = {
  firstName: "Test",
  lastName: "User",
  email: "test@example.com",
  phone: "+1234567890",
  address: "123 Test Street, Test City, Test Country",
  educationalLevel: "Bachelor's Degree",
  interests: "Web Development, Data Science, AI",
  programType: "formation-certifiee",
  specificProgram: "Full Stack Development",
  motivation: "I want to learn modern web development technologies and advance my career in tech.",
  previousExperience: "I have some basic programming knowledge and have worked on small projects.",
  availability: "Full-time",
  source: "Website",
  submittedAt: new Date().toISOString(),
  site: "supemirV2"
};

function testWebhook() {
  return new Promise((resolve, reject) => {
    const url = new URL(WEBHOOK_URL);
    const isHttps = url.protocol === 'https:';
    const client = isHttps ? https : http;
    
    const postData = JSON.stringify(testData);
    
    const options = {
      hostname: url.hostname,
      port: url.port || (isHttps ? 443 : 80),
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log('🚀 Testing n8n webhook integration...');
    console.log('📡 Webhook URL:', WEBHOOK_URL);
    console.log('📦 Test data:', JSON.stringify(testData, null, 2));
    console.log('');

    const req = client.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        console.log('✅ Response received:');
        console.log('📊 Status Code:', res.statusCode);
        console.log('📋 Headers:', res.headers);
        console.log('📄 Response Body:', data);
        
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('🎉 Webhook test successful!');
          resolve({ success: true, statusCode: res.statusCode, data });
        } else {
          console.log('❌ Webhook test failed!');
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });

    req.on('error', (err) => {
      console.log('❌ Request failed:', err.message);
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

// Run the test
if (import.meta.url === `file://${process.argv[1]}`) {
  testWebhook()
    .then(() => {
      console.log('✅ Test completed successfully!');
      process.exit(0);
    })
    .catch((err) => {
      console.log('❌ Test failed:', err.message);
      process.exit(1);
    });
}

export { testWebhook, testData };