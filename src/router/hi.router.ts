import KoaRouter from 'koa-router';
import hiController from '../controller/hi.controller';
const hiRouter: KoaRouter = new KoaRouter();

hiRouter.get('/hi', (ctx, next) => {
  ctx.body = hiController.hi();
});

export default hiRouter;
