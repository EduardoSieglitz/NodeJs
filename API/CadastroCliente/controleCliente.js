const express = require("express"),
    router = express(),
    bodyparser = require("body-parser"),
    cliente = require("./tb_cliente");
router.use(bodyparser.urlencoded({ extended: true }));

router.post("/cadastroCliente", (req, res) => {
    var nome_form = req.body.nome,
        senha_form = req.body.senha,
        telefone_form = req.body.telefone,
        email_form = req.body.email,
        dataNascimento_form = req.body.ano + "-" + req.body.mes + "-" + req.body.dia;
    cliente.create({
        nome: nome_form,
        senha: senha_form,
        telefone: telefone_form,
        email: email_form,
        datanascimento: dataNascimento_form
    }).then(() => {
        res.redirect("/")
    });
});

router.post("/update", (req, res) => {
    var id = req.body.id,
        nome_form = req.body.nome,
        senha_form = req.body.senha,
        email_form = req.body.email,
        dataNascimento_form = req.body.ano + "-" + req.body.mes + "-" + req.body.dia;
    cliente.update({
        nome: nome_form,
        senha: senha_form,
        email: email_form,
        datanascimento: dataNascimento_form
    },
        {
            where: { id: id }
        }).then(() => {
            res.redirect("/tabela")
        });
});

router.post("/deletar", (req, res) => {
    var id = req.body.id;
    cliente.destroy({
        where: { id: id }
    }).then(() => {
        res.redirect("/tabela")
    })
})

router.get("/tabela", (req, res) => {
    cliente.findAll().then((clientes) => {
        res.render("tabela", { client: clientes });
    });
});

router.get("/editar/:id", (req, res) => {
    let id = req.params.id;
    cliente.findByPk(id).then((clientes) => {
        res.render("editar", { cliente: clientes })
    });
});
module.exports = router;
