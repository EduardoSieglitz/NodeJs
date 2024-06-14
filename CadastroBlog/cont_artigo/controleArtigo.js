const express = require("express"),
router = express(),
bodyParser = require("body-parser"),
slugify = require("slug"),
Artigo = require("./artigo"),
Categoria = require("../cont_categoria/categoria");

router.use(bodyParser.urlencoded({extended:true}));
router.use(express.json());

router.get("/novoartigo", (req,res) => {
    Categoria.findAll().then((categoria) => {
        res.render("artigos/cad_artigo", {categoria:categoria});
    });
});
router.get("/controleartigo", (req, res)=>{
    Artigo.findAll({
        include:[{model:Categoria,as:'categoria'}]
    }).then((artigo)=>{

        res.render("artigos/controle_artigos",{artigo:artigo})
    });
});
router.post("/delataartigo", (req, res)=>{
    id = req.body.id;
    console.log(id)
    Artigo.destroy({
        where:{
            id_artigo:id
        }
    }).then(()=>{
        res.redirect("artigos/controle_artigos")
    });
});

router.post("/salvaartigo", (req,res) => {
    var titulo = req.body.titulo,
    body = req.body.body,
    categoria = req.body.categoria;
    console.log(titulo)
    Artigo.create({
        titulo:titulo,
        body:body,
        slug:slugify(titulo),
        categoria_id:categoria
    }).then(() => {
        res.redirect("/novoartigo");
    });
});

module.exports=router;