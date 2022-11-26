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
}

export default new ShopService();
