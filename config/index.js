const Sequelize = require("sequelize");
const config = require("./contant")

const sequelize = new Sequelize(...config);

// 测试连接是否成功
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功！')
  })
  .catch(err => {
    console.log('无法连接到数据库！', err)
  })

module.exports = {sequelize, Sequelize};
