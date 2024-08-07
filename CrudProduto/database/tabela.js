const Sequelize = require("sequelize");
const conexao = require("./dados.js");
const Produto = conexao.define("produtos", {
    id_produto:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    categoria:{
        type:Sequelize.STRING,
        allowNull: false,
    },
    preco:{
        type:Sequelize.DOUBLE,
        allowNull: false,
    },
});
Produto.sync();
module.exports = Produto;