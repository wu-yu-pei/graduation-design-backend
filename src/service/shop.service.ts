import ShopModel from '../model/shop.model';

class ShopService {
  async findByUid(uid: any) {
    const res = await ShopModel.findAll({
      where: {
        uid: uid,
      },
    });

    return res;
  }

  async createShop(shopInfo: any) {
    const res: any = await ShopModel.create({
      ...shopInfo,
      time: +new Date(),
    });

    return res.dataValues;
  }
}

export default new ShopService();
