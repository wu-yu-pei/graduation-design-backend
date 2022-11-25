import KoaRouter from 'koa-router';
import loginController from '../controller/login.controller';
const loginRouter: KoaRouter = new KoaRouter();

loginRouter.post('/login', loginController.login);

export default loginRouter;
