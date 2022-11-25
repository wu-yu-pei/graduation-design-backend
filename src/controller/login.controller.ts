import loginService from '../service/login.service';

class LoginController {
  async login(ctx: any, next: any) {
    const { account, password } = ctx.request.body;

    ctx.body = await loginService.login(account, password);
  }
}

export default new LoginController();
