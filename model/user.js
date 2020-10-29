const {sequelize, Sequelize} = require("../config");
const users = sequelize.define(
  'user',  // 定义的表会自动加s，这里的表名为users
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    sex: {
      type: Sequelize.INTEGER,
      default: 0,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(200),
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING(11),
      allowNull: false,
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    wechat_id: {
      type: Sequelize.STRING(64),
      allowNull: false,
    },
    wechat_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    }
  },
  {
    timestamps: true  // 不自动生成时间
  }
);
// 导出数据模型model
module.exports = users;