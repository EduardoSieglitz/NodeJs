const Sequelize = require("sequelize"),
    conexao = new Sequelize("empresa354", "root", "", {
        host: "localhost",
        dialect: "mysql",
        define: {
            timeStamps: false,
            freezeTableName: true,
        }
    });

module.exports = conexao;