const {sequelize, Sequelize} = require("../config");
const articles = require("./articles");

const collect_list = sequelize.define(
  'collect_list',  // 定义的表会自动加s，这里的表名为collect_list
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    article_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: true  // 自动生成时间
  }
);

// 外键约束

articles.hasOne(collect_list, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

collect_list.belongsTo(articles, {
  foreignKey: 'article_id'
});

// 导出数据模型model
module.exports = collect_list;