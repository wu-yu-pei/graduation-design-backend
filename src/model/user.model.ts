import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define(
  'User',
  {
    account: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://wuyupei.top:8888/upload/82cb385f028de68e02ddd7b14.jpg',
    },
    time: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    isvip: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

User.sync({ alter: true });

export default User;
