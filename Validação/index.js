const express = require("express"),
    app = express(),
    usuario = require("./CadastroUsuario/cadastro"),
    bodyparser = require("body-parser"),
    controleUsuario = require("./CadastroUsuario/controleCadastro");

app.set("view engine", "ejs");
app.use("/", controleUsuario);

app.get("/", (req, res) => {
    res.render("index");
});
app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.listen(3000, () => {
    console.log("Servidor Rodando");
});