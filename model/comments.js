const {sequelize, Sequelize} = require("../config");
const users = require("./user");
const articles = require("./articles");

const comments = sequelize.define(
  'comment',  // 定义的表会自动加s，这里的表名为comments
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    content: {
      type: Sequelize.STRING(200),
      allowNull: false,
    }
  },
  {
    timestamps: true  // 自动生成时间
  }
);

// 外键约束

users.hasOne(comments, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

comments.belongsTo(users, {
  foreignKey: 'userId'
});

articles.hasOne(comments, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

comments.belongsTo(articles, {
  foreignKey: 'articleId'
});

// 导出数据模型model
module.exports = comments;