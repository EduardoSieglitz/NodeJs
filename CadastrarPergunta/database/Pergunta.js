const Sequelize = require("sequelize");
const conexao = require("./dados.js");
const Pergunta = conexao.define("pergunta", {
    id_pergunta:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    descricao:{
        type:Sequelize.TEXT,
        allowNull: false,
    },
});
Pergunta.sync();
module.exports = Pergunta;