const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hey: "there" });
});

app.listen(3000);
//http://localhost:3000/