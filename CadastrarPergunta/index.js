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
app.get("/verperguntas", (req, res)=>{
Pergunta.findAll({raw:true}).then(pergunta=>{
    res.render("perguntas/verperguntas",{
        perguntas : pergunta
    });
});
});

app.get("/responder/:id",(req, res)=>{
    let id = req.params.id;
    Pergunta.findOne({
        where:{id_pergunta : id}
    }).then(pergunta =>{
        if(pergunta != undefined){
           Resposta.findAll({
            where : {pergunta_id : pergunta.id_pergunta},
            order :[['id_resposta', 'DESC']]
           }).then(resposta =>{
                res.render("perguntas/pergunta_resposta",{
                    questao : pergunta,
                    respondido : resposta
                })
           })
        }else{
            res.redirect("/");
        }
    });
});
app.post("/responder",(req, res)=>{
    let corpo_Node = req.body.corpo;
    let perguntaid_Node = req.body.Perguntaid;
    Resposta.create({
        corpo : corpo_Node,
        pergunta_id : perguntaid_Node
    }).then(()=>{
        res.redirect("/responder/" + perguntaid_Node);
    });
});
app.listen(3000, ()=> {
    console.log("Tudo ok");
});