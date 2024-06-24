const sequelize = require("sequelize"),
conexao = require("../database/dados"),
usuario = conexao.define("usuario",{
    id_usuario:{
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false,
    },
});
usuario.sync();
module.exports = usuario;
