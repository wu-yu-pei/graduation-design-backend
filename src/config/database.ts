import { Sequelize } from 'sequelize';
import { DB, USER, PASSWORD, HOST, DIALECT } from './index';

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

(async function () {
  try {
    await sequelize.authenticate();
    console.log('数据库链接成功....');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
