const sequelize = require("sequelize");
const conexao = new sequelize("avaliacao01", "root", "",{
    host : "localhost",
    dialect : "mysql",
    define: {
        timestamps: false,
        freezeTableName: true
    }
});
module.exports = conexao;
