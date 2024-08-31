const express = require('express'),
    app = express(),
    bodyParser = require("body-parser"),
    conexao = require("./database/basedados"),
    Produto = require("./Produtos/Produto"),
    fileupload = require("express-fileupload");

conexao.authenticate().then(() => {
    console.log("Conectado com Sucesso!");
}).catch((error) => {
    console.log(error);
});

app.use(fileupload());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("enviar");
});

app.post("/cadastrar", (req, res) => {
    let nome = req.body.nome,
        preco = req.body.valor,
        imagem = req.files.imagem.name;
    Produto.create({
        nome,
        preco,
        imagem
    }).then(() => {
        req.files.imagem.mv(__dirname+"/upload/"+req.files.imagem.name);
        res.redirect("/");
    })
})

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO");
});