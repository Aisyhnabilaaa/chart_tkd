const app = require ('src/app');
const serverless = requaire('serverless-http')

module.exports = serverless(app)