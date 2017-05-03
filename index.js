require('dotenv').config();
const slackin = require('slackin');

slackin.default({
  token: process.env.SLACK_API_TOKEN,
  org: process.env.SLACK_SUBDOMAIN,
  interval: 1000,
  silent: false
}).listen(3000)
