const {sequelize, Sequelize} = require("../config");
const users = require("./user");
const articles = require("./articles");

const photos = sequelize.define(
  'photo',  // 定义的表会自动加s，这里的表名为photos
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true  // 自动生成时间
  }
);

// 外键约束

users.hasOne(photos, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

photos.belongsTo(users, {
  foreignKey: 'userId'
});

articles.hasOne(photos, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

photos.belongsTo(articles, {
  foreignKey: 'articleId'
});



// 导出数据模型model
module.exports = photos;