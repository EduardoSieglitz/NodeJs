const express = require("express"),
app = express(),
conexao = require("./database/dados"),
usuario = require("./CadastroCliente/tb_cliente"),
usuariocontrole = require("./CadastroCliente/controleCliente"),
autenticar = require("./autenticateUser/usuario");

conexao.authenticate().then(()=>{
    console.log("Conexao")
}).catch((msg)=>{
    console.log("Conexao Ruim" + msg)
});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/cadastro", (req, res)=>{
    res.render("cadastro")
});

app.get("/", (req, res)=>{
    res.render("home")
});

app.get("/login", (req, res)=>{
    res.render("login")
});

app.use("/", autenticar)
app.use("/", usuariocontrole)

app.listen(3000, ()=>{
    console.log("Servidor Rodando")
});