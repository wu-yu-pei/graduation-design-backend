import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    account: {
      type: DataTypes.STRING,
      allowNull: false,
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

User.sync({ alter: true });

export default User;
