const {sequelize, Sequelize} = require("../config");
const articles = require("./articles");
const like_list = sequelize.define(
  'like_list',  // 定义的表会自动加s，这里的表名为like_list
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    }
  },
  {
    freezeTableName: true,
    timestamps: true  // 自动生成时间
  }
);

// 外键

articles.hasOne(like_list, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

like_list.belongsTo(articles, {
  foreignKey: 'articleId'
});

// 导出数据模型model
module.exports = like_list;