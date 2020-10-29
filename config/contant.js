const db = require("./db");

// const db = {
//   database: 'your_database',
//   username: 'your_username',
//   password: 'your_password',
//   host: 'your_host',
//   port: 3306 || 'your_port'
// }

module.exports = [
  db.database,
  db.username,
  db.password,
  {
    host: db.host,
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
      max: 5,
      min: 0,
      idle: 30000
    },
    //解决中文输入问题
    define: {
      charset: 'utf8',
      dialectOptions: {
        collate: 'utf8_general_ci'
      }
    }
  }
]