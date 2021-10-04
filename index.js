const express = require("express");
const app = express();
const port = 3000; 
const path = require("path");

app.use(express.static(path.join(__dirname, "/landing-page-node/views/index.ejs")));

app.set("view engine", "ejs");

app.get("/will");
app.post("/will", (req, res) => {
  res.send("formulario recebido");
})

  

  app.get("/index", (req, res) => {
    res.render("index"); 
  });

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));