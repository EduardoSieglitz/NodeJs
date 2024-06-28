const express = require("express"),
    app = express(),
    usuario = require("./CadastroUsuario/cadastro"),
    bodyparser = require("body-parser"),
    { check, validationResult } = require("express-validator");

app.set("view engine", "ejs");
const urlenconded = bodyparser.urlencoded({ extended: false });

app.post("/cadastro", urlenconded, [
    check("nome", "Campo está vazio")
        .exists()
        .isLength({ min: 3 })
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const alert = error.array()
        res.render("index", {
            alert
        });
    }else{
        var nome_form = req.body.nome;
        usuario.create({
            nome : nome_form
        }).then(()=>{
            res.redirect("/Sucesso")
        });
    }
});
app.get("/", (req, res) => {
    res.render("index");
});
app.get("/sucesso", (req, res) => {
    res.render("Confirma");
});

app.listen(3000, () => {
    console.log("Servidor Rodando");
});