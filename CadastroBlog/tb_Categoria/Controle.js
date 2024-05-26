const Categoria = require("./Categoria");
const express = require("express"),
Router = express.Router(),
BodyParser = require("body-parser"),
Slugify = require("slugify");

Router.use(BodyParser.urlencoded({extended : true}));

Router.get("/novo", (req, res)=>{
    res.render("categorias/cad_categoria");
});

Router.post("/categoria/salva", (req, res)=>{
    var titulo_form = req.body.titulo;
Categoria.create({
    titulo : titulo_form,
    slug : Slugify(titulo_form)
}).then(()=>{
    res.redirect("/")
});
});

module.exports = Router;

