const {sequelize, Sequelize} = require("../config");
const users = require("./user");

const black_list = sequelize.define(
  'black_list',  // 定义的表会自动加s，这里的表名为black_list
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
    black_list_id: {
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

users.hasOne(black_list, {
  onDelete: 'restrict',
  onUpdate: 'cascade'
})

black_list.belongsTo(users, {
  foreignKey: 'user_id'
});

black_list.belongsTo(users, {
  foreignKey: 'black_list_id'
});

// 导出数据模型model
module.exports = black_list;