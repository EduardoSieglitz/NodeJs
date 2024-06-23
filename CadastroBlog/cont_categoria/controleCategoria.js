const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const slugify = require('slug');
const Categoria = require('./categoria');

router.use(bodyParser.urlencoded({ extended: true }))

router.get("/novo", (req, res) => {
    res.render("categorias/cad_categoria");
});

router.get("/controlecategoria", (req, res) => {
    Categoria.findAll().then((categoria) => {
        res.render("categorias/controle_categ", { categoria: categoria });
    });
});

router.get("/editacateg/:id", (req, res) => {
    let id = req.params.id;
    Categoria.findByPk(id).then((categoria) => {
        res.render("categorias/alte_categoria", { categoria: categoria });
    });
});

router.post("/deletacateg", (req, res) => {
    let id = req.body.id;
    Categoria.destroy({
        where: { id_categoria: id }
    }).then(() => {
        res.redirect("/controlecategoria");
    });
});

router.post("/updatecateg", (req, res) => {
    let id = req.body.id;
    let titulo = req.body.titulo;
    Categoria.update({
        titulo: titulo,
        slug: slugify(titulo)
    },
        {
            where: { id_categoria: id }
        }).then(() => {
            res.redirect("/controlecategoria");
        });
});

router.post("/salvacateg", (req, res) => {
    let titulo = req.body.titulo;
    Categoria.create({
        titulo: titulo,
        slug: slugify(titulo)
    }).then(() => {
        res.redirect("/controlecategoria");
    });
});

module.exports = router;