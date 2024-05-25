const express = require("express"),
app = express(),
Conexao = require("./database/dados"),
Categoria = require("./tb_Categoria/Categoria"),
Artigo = require("./tb_Artigo/Artigo");

app.set("view engine", "ejs");
app.use(express.static('public'));

Conexao.authenticate().then(()=>{
    console.log("Tudo ok");
}).catch((erro)=>{
    console.log(erro);
});

app.get("/", (req, res)=>{
    res.render("primeiro");
});

app.listen(3000, ()=>{
    console.log("Ok");
});