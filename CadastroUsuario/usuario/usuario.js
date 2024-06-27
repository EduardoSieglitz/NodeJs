const sequelize = require("sequelize"),
  conexao = require("../database/dados"),
  usuario = conexao.define("tb_usuarios", {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: sequelize.STRING,
      allowNull : false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: sequelize.STRING,
      allowNull: false,
    },
    datanascimento: {
      type: sequelize.DATE,
      allowNull: false,
    },
    sexo: {
      type: sequelize.STRING,
      allowNull: false,
    }
  });
  //usuario.sync();
  module.exports = usuario;