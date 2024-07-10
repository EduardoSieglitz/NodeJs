const express = require("express"),
    app = express(),
    bd = require("./database/basedados"),
    cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { name } = req.body,
        { email } = req.body,
        { senha } = req.body,
        { dia } = req.body,
        { mes } = req.body,
        { ano } = req.body,
        datanascimento  = ano + "-" + mes + "-" + dia;
    let SQL = "INSERT INTO tb_cliente (nome, email, senha, datanascimento) VALUES (?,?,?,?)";

    bd.query(SQL, [name, email, senha, datanascimento], (err, result) => {
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("Servidor rodando...");
});