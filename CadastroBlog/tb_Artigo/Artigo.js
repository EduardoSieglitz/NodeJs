const Sequelize = require("sequelize"),
Conexao = require("../database/dados"),
Artigo = Conexao.define("Categoria",{
    id_Artigo:{
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
Artigo.sync();
module.exports = Artigo;