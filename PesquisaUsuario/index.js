const express = require("express"),
    app = express(),
    pesquisa = require("./pesquisa/tb_pesquisa"),
    HTTPs = require("./pesquisa/controleHTTP");

app.set("view engine", "ejs");
app.use(express.static("public"));


app.use("/", HTTPs);

app.listen(3000, () => {
    console.log("Servidor rodando...");
});