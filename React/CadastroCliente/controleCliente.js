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
        dataNascimento_form = req.body.ano + "-" + req.body.mes + "-" + req.body.dia;
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
router.get("/tabela", (req, res)=>{
    cliente.findAll().then((clientes)=>{
        res.render("tabela", {client : clientes});
    });
});

router.get("/editar/:id", (req, res)=>{
    let id = req.params.id;
    cliente.findByPk(id).then((clientes)=>{
        res.render("editar", {cliente : clientes})
    });
});
module.exports = router;
