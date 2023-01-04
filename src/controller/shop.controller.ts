import { Context } from 'koa';
import shopService from '../service/shop.service';
import { verifyToken } from '../utils';

class ShopController {
  async findByUid(ctx: any, next: any) {
    const { uid } = ctx.query;
    let res = await shopService.findByUid(uid);
    ctx.body = res;
  }

  async createShop(ctx: Context, next: any) {
    const token: any = ctx.header?.authorization?.replace('Bearer ', '');
    const { id } = ctx.query;
    // 没有携带token
    if (!token) {
      ctx.body = { msg: '请先登录' };
    } else {
      // 携带token
      let res: any;
      try {
        res = await verifyToken(token);
      } catch (error) {
        // token无效
        if (!error) {
          ctx.body = {
            data: {
              code: 401,
              data: 'Token无效',
            },
          };
          return;
        }
      }

      // token有效
      if (res) {
        const resulte = await shopService.createShop({ ...ctx.request.body, uid: res.id });
        ctx.body = resulte;
      }
    }
  }
}

export default new ShopController();
