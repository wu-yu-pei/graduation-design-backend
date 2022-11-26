import UserModel from '../model/user.model';
import { genToken } from '../utils/index';
class LoginService {
  async login(account: string, password: string) {
    const res: any = await UserModel.findOne({
      where: {
        account,
        password,
      },
    });

    if (res) {
      const token = genToken({ account, password, id: res.id });
      return Object.assign({}, res.dataValues, { msg: '登录成功', code: 200, token, password: '' });
    }

    return { code: 210, meg: '登录失败' };
  }
}

export default new LoginService();
