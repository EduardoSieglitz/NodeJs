const Sequelize = require('sequelize');
const conexao = require('../database/basedados');
const Categoria = require('../cont_categoria/categoria')

const Artigo = conexao.define('artigo', {
  id_artigo: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  categoria_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Categoria.hasMany(Artigo, {
  foreignKey: 'categoria_id',
});

Artigo.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
  as: 'categoria'
});

Artigo.sync();
module.exports = Artigo;