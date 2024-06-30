const express = require("express"),
app = express;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("login", (req, res)=>{
    res.render("login");
});

app.get("/cadastro", (req, res)=>{
    res.render("cadstro")
});

app.get("/tabela", (req, res)=>{
    render("tabela");
});