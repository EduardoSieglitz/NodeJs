const Sequelize = require('sequelize');
const conexao = require('../database/banco');
const pesquisa = conexao.define('tab_email', {
    id_email: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

pesquisa.sync();
module.exports = pesquisa;