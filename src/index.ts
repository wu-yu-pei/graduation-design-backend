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


usePlugin(app);
useRouter(app);

app.listen(7552, () => {
  console.log('server is runing at 7552');
});
