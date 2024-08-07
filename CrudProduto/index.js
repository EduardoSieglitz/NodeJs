const express = require("express"),
    app = express(),
    tabela = require("./database/tabela"),
    cadastro = require("./cont_produto/crud");

const conexao = require("./database/dados");
conexao.authenticate().then(() => {
    console.log("Conectado")
}).catch((err) => {
    console.log(err)
});

app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", (req, res) => {
    res.render("produtos/home");
});

app.get("/telaCadastro", (req, res) => {
    res.render("produtos/cadastro");
});


app.use("/", cadastro);

app.listen(3000, () => {
    console.log("Tudo Ok");
});