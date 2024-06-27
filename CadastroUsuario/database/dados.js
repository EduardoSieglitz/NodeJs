const sequelize = require("sequelize"),
  conexao = new sequelize("EnviaDados", "root", "", {
    host: "localhost",
    dialect: "mysql",
    define: {
      timeStamps: false,
      FreezeTableName: true
    }
  });

module.exports = conexao;