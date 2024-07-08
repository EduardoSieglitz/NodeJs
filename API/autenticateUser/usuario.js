const express = require("express"),
    router = express(),
    bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));

router.post("/login", (req, res)=>{
    var usuario = "Eduardo",
    login = "eduardo@gmail.com",
    senha = "12345678";
    if(usuario === req.body.usuario && login === req.body.login && senha === req.body.senha){
       res.redirect("/tabela");
    }
    res.status(401).end();
});
module.exports = router;
