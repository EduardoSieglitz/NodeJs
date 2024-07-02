const express = require("express"),
    router = express(),
    bodyparser = require("body-parser"),
    cliente = require("./tb_cliente")

router.use(bodyparser.urlencoded({ extended: true }));

router.post("/cadastroCliente", (req, res) => {
    var nome_form = req.body.nome,
        cpf_form = req.body.cpf,
        telefone_form = req.body.telefone,
        email_form = req.body.email,
        dataNascimento_form = "11-11-2005";
        cliente.create({
            nome : nome_form,
            cpf : cpf_form,
            telefone : telefone_form,
            email : email_form,
            datanascimento : dataNascimento_form
        }).then(() => {
            res.redirect("/")
        });
});
module.exports = router;
