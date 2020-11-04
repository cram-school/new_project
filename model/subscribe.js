const {sequelize, Sequelize} = require("../config");
const users = require("./user");

const subscribes = sequelize.define(
  'subscribe',  // 定义的表会自动加s，这里的表名为subscribes
  {
// id自动叠加
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    remark: {
      type: Sequelize.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: true  // 自动生成时间
  }
);

// 外键约束

users.hasOne(subscribes, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

subscribes.belongsTo(users, {
  foreignKey: 'userId'
});

subscribes.belongsTo(users, {
  foreignKey: 'subscribeId'
});


// 导出数据模型model
module.exports = subscribes;