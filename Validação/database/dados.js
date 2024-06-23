const { timeStamp } = require("console");

const sequelize = require("sequelize"),
    conexao = new sequelize("CadastroUsuario", "root", "", {
        dialect: "mysql",
        host: "localhost",
        define: {
            timestamps: false,
            freezeTableName: true
        }
    });
    module.exports = conexao;