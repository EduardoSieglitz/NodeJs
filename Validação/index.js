const express = require("express"),
    app = express(),
    conexao = require("./database/dados");

    
conexao.authenticate().then(() => {
    console.log("Está conectado")
}).catch((erro) => {
    console.log("Erro na Conexão: " + erro);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");

});

app.listen(3000, () => {
    console.log("Servidor Rodando");
});