const serverless = require('serverless-http');
const app = require('./src/app'); // pastikan ini mengarah ke app Express-mu

module.exports.handler = serverless(app);
