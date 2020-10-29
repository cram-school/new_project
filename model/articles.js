const {sequelize, Sequelize} = require("../config");
const users = require('./user');
const articles = sequelize.define(
  'article',  // 定义的表会自动加s，这里的表名为articles
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.INTEGER,
      default: 0,
      allowNull: false,
    },
    desc: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    author_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: true  // 自动生成时间
  }
);

// 外键约束

users.hasOne(articles, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

articles.belongsTo(users, {
  foreignKey: 'author_id'
});

// 导出数据模型model
module.exports = articles;