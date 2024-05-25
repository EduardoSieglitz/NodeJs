const Sequelize = require("sequelize"),
Conexao = require("../database/dados"),
Categoria = Conexao.define("Categoria",{
    id_categoria:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement : true,
        primaryKey : true
    },
    titulo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});
Categoria.sync();
module.exports = Categoria;