const sequelize = require("sequelize"),
conexao = require("./cadastroControle"),
usuario = conexao.define("ususario",{
    id_usuario:{
        type: sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome:{
        type: sequelize.STRING,
        alowNull: false
    },
});
usuario.sync();
module.exports = usuario;
