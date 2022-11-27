import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Shop = sequelize.define(
  'Shop',
  {
    id: {
      // 商品id
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      // 此商品的 发货着 id
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      // 商品名称
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_time: {
      // 商品什么时间 到达的当前地址
      type: DataTypes.STRING,
      allowNull: true,
    },
    current_position: {
      // 商品当前地址
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_position: {
      // 商品 发货地址
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_position: {
      // 商品 收获地址
      type: DataTypes.STRING,
      allowNull: false,
    },

    current_position_geo: {
      // 商品当前经纬度
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_position_geo: {
      // 商品 发货时的经纬度
      type: DataTypes.STRING,
      allowNull: false,
    },
    end_position_geo: {
      // 商品 收获时的经纬度
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      // 发货时间
      type: DataTypes.STRING,
      allowNull: false,
    },
    qr_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // 0已送达 1 未送达
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

Shop.sync({ alter: true });

export default Shop;
