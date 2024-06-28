const express = require("express"),
    router = express(),
    bodyparser = require("body-parser"),
    { check, validationResult } = require("express-validator"),
    usuario = require("./cadastro");

const urlencoded = bodyparser.urlencoded({ extended: false });

//-----------------------------------------------------------------------------------
router.post("/cadastro", urlencoded, [
    check("nome", "O campo deve ter no mínimo 3 caracteres")
        .exists()
        .isLength({ min: 3})
], (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        const alert = error.array()
        res.render("cadastro", { alert });
    } else {
        var nome_form = req.body.nome;
        usuario.create({
            nome: nome_form
        }).then(() => {
            res.redirect("/")
        });
    }
    //-------------------------------------------------------------------------------------
});
module.exports = router;