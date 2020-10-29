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
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true
    },
    nick_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING(16),
      allowNull: false,
      is: /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?]).*$/
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
      unique: true,
      is: /^[1][345789]\d{9}$/
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      is: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    },
    avatar: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true  // 自动生成时间
  }
);
// 导出数据模型model
module.exports = users;