const express = require("express"),
    router = express.Router(),
    bodyparser = require("body-parser"),
    usuario = require("./cadastro");

router.use(bodyparser.urlencoded({ extended: true }));

router.post("/cadastroUsuario", (req, res) => {
    var nome_form = req.body.nome;
    var error = [];
    if (req.body.nome == undefined || req.body.nome == null || req.body.nome.length < 3 || req.body.nome.trim() == "") {
        error.push({ text: "O nome está vazio" });
    }
    if (error.length > 0) {
        error.findAll().then((erro)=>{
        res.render("index", {error : erro});
        });
    } else {
        usuario.create({
            nome: nome_form
        }).then(() => {
            res.redirect("/sucesso")
        });
    }
});
module.exports = router;