import Koa from 'koa';

import https from 'https';
import fs from 'fs';
import path from 'path';

// database
import './config/database';

// middleware
import usePlugin from './middleware/usePlugin';

// router
import useRouter from './router/index';

const app: Koa = new Koa();

const options = {
  key: fs.readFileSync(path.join(__dirname, './config/https/7892505_wuyupei.top.key')),
  cert: fs.readFileSync(path.join(__dirname, './config/https/7892505_wuyupei.top.pem')),
};

const server = https.createServer(options, app.callback());

usePlugin(app);
useRouter(app);

server.listen('10240', () => {
  console.log('server is runing at 10240');
});
