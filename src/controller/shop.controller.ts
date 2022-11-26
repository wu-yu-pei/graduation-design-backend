import shopService from '../service/shop.service';

class ShopController {
  async findByUid(ctx: any, next: any) {
    const { uid } = ctx.query;
    let res = await shopService.findByUid(uid);
    ctx.body = res;
  }
}

export default new ShopController();
