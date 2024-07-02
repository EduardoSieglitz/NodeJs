const express = require("express"),
app = express(),
conexao = require("./database/dados"),
usuario = require("./CadastroCliente/tb_cliente"),
usuariocontrole = require("./CadastroCliente/controleCliente")


conexao.authenticate().then(()=>{
    console.log("Conexao")
}).catch((msg)=>{
    console.log("Conexao Ruim" + msg)
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/login", (req, res)=>{
    res.render("login");
});

app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
});

app.get("/tabela", (req, res)=>{
    res.render("tabela");
});

app.use("/", usuariocontrole)

app.listen(3000, ()=>{
    console.log("Servidor Rodando")
});