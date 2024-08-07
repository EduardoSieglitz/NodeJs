const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const produto = require('../database/tabela');

router.use(bodyParser.urlencoded({ extended: true }));

router.post("/cadastroProduto", (req, res) => {
    let nome = req.body.nome,
    categoria = req.body.categoria,
    preco = req.body.preco;
    produto.create({
        nome: nome,
        categoria : categoria,
        preco : preco
    }).then(() => {
        res.redirect("/");
    });
});

router.get("/telaTable", (req, res) => {
    produto.findAll().then((produto) => {
        res.render("produtos/tabela", { produtos: produto });
    });
});

router.get("/editaProduto/:id", (req, res)=>{
    let id = req.params.id;
    produto.findByPk(id).then((produto) => {
        res.render("produtos/editar", { produtos: produto });
    });
});


router.post("/updateProduto", (req, res) => {
    let nome = req.body.nome,
    id = req.body.id,
    categoria = req.body.categoria,
    preco = req.body.preco;
    produto.update({
        nome: nome,
        categoria : categoria,
        preco : preco
    },
        {
            where: { id_produto : id }
        }).then(() => {
            res.redirect("/");
        });
});

router.post("/deletaProduto", (req, res) => {
    let id = req.body.id;
    produto.destroy({
        where: { id_produto: id }
    }).then(() => {
        res.redirect("/");
    });
});

module.exports = router;