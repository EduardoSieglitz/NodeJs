const express = require('express');
const router = express.Router();
const pesquisa = require('./tb_pesquisa');
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
    res.render("pesquisa");
});

router.get("/links", (req, res) => {
    var numero = "1";
    res.render("links", {numero});
});

router.post("/links", (req, res) => {
    var numero = req.body.link;
    res.render("links", {numero});
});

router.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

router.post("/pesquisar", (req, res) => {
    const id = req.body.id;
    pesquisa.findByPk(id).then((pesquisa) => {
        if(pesquisa != null){
            res.render("tabela", { pesquisaid: pesquisa });
        }else{
            res.redirect("/cadastro");
        }
    });
});

router.post("/cadastrar", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    pesquisa.create({
        nome: nome,
        email: email
    }).then(() => {
        res.redirect("/");
    })
});

module.exports = router;