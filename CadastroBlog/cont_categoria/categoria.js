const Sequelize = require('sequelize');
const conexao = require('../database/basedados');
const Categoria = conexao.define('categoria', {
    id_categoria: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Categoria.sync();
module.exports = Categoria;