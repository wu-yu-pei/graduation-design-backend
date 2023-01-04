import * as QRCode from 'qrcode';
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

    let qr_code = await QRCode.toDataURL(String(res.dataValues.id));

    try {
      await ShopModel.update(
        { qr_code: qr_code },
        {
          where: { id: String(res.dataValues.id) },
        }
      );
    } catch (error) {
      return error;
    }

    const finalRes = await ShopModel.findOne({
      where: {
        id: res.dataValues.id,
      },
    });

    return finalRes;
  }
}

export default new ShopService();
