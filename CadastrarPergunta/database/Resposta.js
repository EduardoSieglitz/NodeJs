const Sequelize = require("sequelize");
const conexao = require("./dados.js");
const Resposta = conexao.define("resposta", {
    id_resposta:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    corpo:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    id_pergunta:{
        type:Sequelize.INTEGER,
        allowNull: false,
    },
});
Resposta.sync();
module.exports = Resposta;