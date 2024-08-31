const Sequelize = require("sequelize"), conexao = require("../database/basedados"),
    Produto = conexao.define("produto", {
        id_produto: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        preco: {
            type: Sequelize.REAL,
            allowNull: false,
        },
        imagem: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });

Produto.sync();
module.exports = Produto;