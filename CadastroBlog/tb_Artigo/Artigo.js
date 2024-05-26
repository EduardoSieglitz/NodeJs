const Sequelize = require("sequelize"),
Conexao = require("../database/dados"),
Categoria = require("../tb_Categoria/Categoria"),
Artigo = Conexao.define("Artigo",{
    id_artigo:{
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
    body:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    categoria_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});
Categoria.hasMany(Artigo,{
    foreignKey : 'td_categoria',
    as : 'artigo_id'
});
module.exports = Artigo;