const { render } = require("ejs");
const express = require("express");
const app = express();
const conexao = require("./database/dados");
const Pergunta = require("./database/ControleCadastro.js")
conexao.authenticate().then(() =>{
    console.log("Conexão foi bem sucedida")
}).catch((msgErro)=>{
    console.log(msgErro)
});
app.set("view engine", "ejs");
app.use(express.static("public"))

app.get("/",(req, res)=>{
    res.render("index");
});
app.get("/perguntar",(req, res)=>{
    res.render("perguntas/perguntar");
});
app.listen(3000, () => {
    console.log("Tudo ok");
});