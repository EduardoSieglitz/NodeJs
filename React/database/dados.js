const sequelize = require("sequelize"),
conexao = new sequelize("cliente", "root", "",{
    host : "localhost",
    dialect : "mysql",
    define:{
        timestamps : false,
        freezeTableName : true
    }
});
module.exports = conexao;