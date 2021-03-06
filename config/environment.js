const fs = require('fs');

const rfs = require('rotating-file-stream');
const logger = require('morgan');
const path = require('path');

const logDirectory = path.join(__dirname, '../production_logs');
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: logDirectory,
});

const development = {
  name: 'development',
  asset_path: '/ats',
  session_cookie_keys: 'blahsooomething',
  db: 'codeial_development',
  db_pass: 'q',
  DB: 'mon',
  DB_LOCAL: 'y',
  smtp: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'nityam1@gmail.com', // generated ethereal user
      pass: '35', // generated ethereal password
      //activate in gmail "less secure app" option
    },
  },
  google_client_id: '10',
  google_client_secret: 'jK',
  google_call_back_url: 'htp',
  jwt_secret: 'coal',
  morgan: {
    mode: 'dev',
    options: { stream: accessLogStream },
  },
};

const production = {
  name: 'production',
  asset_path: process.env.CODEIAL_ASSET_PATH,
  session_cookie_keys: process.env.CODEIAL_SESSION_COOKIE_KEYS,
  db: process.env.CODEIAL_DB,
  db_pass: process.env.CODEIAL_DB_PASS,
  DB: process.env.CODEIAL_DB_ATLAS,
  DB_LOCAL: process.env.CODEIAL_DB_LOCAL,
  smtp: {
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.CODEIAL_GOOGLE_USER, // generated ethereal user
      pass: process.env.CODEIAL_GMAIL_PASSWORD, // generated ethereal password
      //activate in gmail "less secure app" option
    },
  },
  google_client_id: process.env.CODEIAL_GOOGLE_CLIENT_ID,
  google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
  google_call_back_url: process.env.CODEIAL_GOOGLE_CALL_BACk_URL,
  jwt_secret: process.env.CODEIAL_JWT_SECRET,
  morgan: {
    mode: 'combined',
    options: { stream: accessLogStream },
  },
  // stream: accessLogStream,
};

module.exports =
  eval(process.env.CODEIAL_ENVIRONMENT) == undefined ? development : eval(process.env.CODEIAL_ENVIRONMENT);
