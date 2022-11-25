// middleware
import bodyParser from 'koa-bodyparser';
export default function (app: any) {
  app.use(bodyParser());
}
