const sequelize = require("sequelize");
const conexao = new sequelize("pergunta", "root", "",{
    host : "localhost",
    dialect : "mysql"
});
module.exports = conexao;
