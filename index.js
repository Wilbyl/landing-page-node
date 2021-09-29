const express = require("express");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
// Substituição de function por arrow function
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("Hello World");
  });
  
  app.get("/index", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("index", { titulo: "Blue", devList: devList, analyticsList: analyticsList});
  });

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));