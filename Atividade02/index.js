const express = require("express");
const app = express();

app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("Home");
});
app.get("/Soma",(req,res)=>{
    res.render("Mostar_Soma",{
        numero1 : "20",
        numero2 : "5",
        numero3 : "10"
    })
});

app.listen(80, ()=>{
    console.log("SERVIDOR RADANDO COM SUCESSO");
});