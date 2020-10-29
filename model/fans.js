const {sequelize, Sequelize} = require("../config");
const users = require("./user");

const fans = sequelize.define(
  'fans',  // 定义的表会自动加s，这里的表名为fans
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
    fans_id: {
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

users.hasOne(fans, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

fans.belongsTo(users, {
  foreignKey: 'user_id'
});

fans.belongsTo(users, {
  foreignKey: 'fans_id'
});


// 导出数据模型model
module.exports = fans;