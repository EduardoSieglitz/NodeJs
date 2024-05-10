const { render } = require("ejs");
const express = require("express");
const app = express();
const conexao = require("./database/dados");
const Pergunta = require("./database/Pergunta.js")
const bodys = require("body-parser");
const Resposta = require("./database/Resposta.js")
conexao.authenticate().then(() =>{
    console.log("Conexão foi bem sucedida")
}).catch((msgErro)=>{
    console.log(msgErro)
});

app.use(bodys.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/",(req, res)=>{
    res.render("index");
});
app.get("/perguntar",(req, res)=>{
    res.render("perguntas/perguntar");
});
app.get("/verperguntas",(req, res)=>{
    res.render("perguntas/verperguntas");
});
app.get("/resposta",(req, res)=>{
    res.render("perguntas/pergunta_resposta");
})

app.post("/salvarpergunta",(req, res)=>{
    var titulo_Node = req.body.titulo;
    var descricao_Node = req.body.descricao;
    Pergunta.create({
        descricao : descricao_Node,
        titulo : titulo_Node
    }).then(()=>{
        res.redirect("/");
    });
});

app.listen(3000, ()=> {
    console.log("Tudo ok");
});