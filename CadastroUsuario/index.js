const express = require("express"),
  app = express(),
  bodyparser = require("body-parser"),
  conexao = require("./database/dados"),
  usuario = require("./usuario/usuario");

conexao.authenticate().then(() => {
  console.log("Conectado com sucesso!");
}).catch((msgErro) => {
  console.log("Edu GAY!");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/registrar", (req, res) => {
  res.render("Cadastro");
});

app.post("/Cadastro", (req, res) => {
  var nomeForm = req.body.nome,
    emailForm = req.body.email,
    senhaForm = req.body.senha,
    ano = req.body.ano,
    mes = req.body.mes,
    dia = req.body.dia,
    nascimento = ano + "-" + mes + "-" + dia;
  sexoForm = req.body.sexo,
    usuario.create({
      nome: nomeForm,
      email: emailForm,
      senha: senhaForm,
      datanascimento: nascimento,
      sexo: sexoForm
    }).then(()=>{
      res.redirect("/");
    });
});

app.listen(3000, () => {
  console.log("Servidor Rodando");
});