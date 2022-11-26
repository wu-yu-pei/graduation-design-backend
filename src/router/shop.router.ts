import KoaRouter from 'koa-router';
import shopController from '../controller/shop.controller';

const shopRouter: KoaRouter = new KoaRouter();

shopRouter.get('/shop', shopController.findByUid);

shopRouter.post('/createshop', shopController.createShop)

export default shopRouter;
