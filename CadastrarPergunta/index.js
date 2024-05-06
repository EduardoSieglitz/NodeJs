const { render } = require("ejs");
const express = require("express");
const app = express();
const conexao = require("./database/dados");
const Pergunta = require("./database/ControleCadastro.js")
const bodys = require("body-parser");

conexao.authenticate().then(() =>{
    console.log("Conexão foi bem sucedida")
}).catch((msgErro)=>{
    console.log(msgErro)
});

app.use(bodys.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/",(req, res)=>{
    res.render("index");
});
app.get("/perguntar",(req, res)=>{
    res.render("perguntas/perguntar");
});

app.post("/salvarpergunta", (req, res)=>{
var titulo = req.body.titulo;
var descricao = req.body.descricao;
Pergunta.create({
    titulo:titulo,
    descricao:descricao
}).then(()=>{
    res.redirect("/");
})
    
})
app.listen(3000, () => {
    console.log("Tudo ok");
});