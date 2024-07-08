const sequelize = require("sequelize"),
conexao = require("../database/dados"),
cliente = conexao.define("tb_cliente",{
    id:{
        type: sequelize.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey : true,
    },
    nome:{
        type: sequelize.STRING,
        allowNull : false,
    },
    senha:{
        type: sequelize.STRING,
        allowNull : false,
    },
    email:{
        type: sequelize.STRING,
        allowNull : false,
    },
    datanascimento:{
        type: sequelize.DATEONLY,
        allowNull : false,
    },
});
cliente.sync();
module.exports = cliente;