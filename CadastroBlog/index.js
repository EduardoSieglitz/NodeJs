const express = require('express'),
app = express(),
conexao = require('./database/basedados'),
Categoria = require('./cont_categoria/categoria'),
Artigo = require('./cont_artigo/artigo'),
controleCategoria = require('./cont_categoria/controleCategoria'),
controleArtigo = require("./cont_artigo/controleArtigo");

app.use("/", controleCategoria);
app.use("/", controleArtigo);

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", (req, res) => {
    Artigo.findAll().then((artigos)=>{
        res.render("primeiro",{artigos});
    })
});

conexao.authenticate().then(() => {
    console.log("Conexão com o banco sucesso")
}).catch((errMsg) => {
    console.log(errMsg);
});

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO")
});