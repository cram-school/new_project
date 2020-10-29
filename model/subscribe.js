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
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    subscribe_id: {
      type: Sequelize.INTEGER,
      allowNull: false
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
  foreignKey: 'user_id'
});

subscribes.belongsTo(users, {
  foreignKey: 'subscribe_id'
});


// 导出数据模型model
module.exports = subscribes;