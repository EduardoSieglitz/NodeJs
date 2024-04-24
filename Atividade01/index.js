const express = require("express");
const app = express();

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/mostra_maior", (req,res)=>{
    res.render("servicos/mostra_maior")
});
app.get("/inverte_palavra", (req,res)=>{
    res.render("servicos/inverte_palavra")
});
app.listen(80, ()=>{
    console.log("SERVIDOR RADANDO COM SUCESSO");
});