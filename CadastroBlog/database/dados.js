const Sequelize = require("sequelize"),
Conexao = new Sequelize("guiablog", "root", "",{
    host : "localhost",
    dialect : "mysql",
    define:{
        timestamps : false,
        freezeTableName : true
    }
});
module.exports = Conexao;