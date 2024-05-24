const express = require("express"),
app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/",(req, res)=>{
    res.render("primeiro");
});

app.listen(3000,()=>{
    console.log("Ok");
});

