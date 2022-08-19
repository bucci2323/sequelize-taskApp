const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = 3000;

const path = require("path");
app.set("view engine", "pug");

app.set("views", path.resolve("./src/views"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

// db connection
require("./src/database/connection");
require("./src/bootstrap")();

app.use((err, req, res, next) => {
  if (err) {
    return res.send(err.message);
  }
});

app.listen(PORT, (err) => {
  if (err) return console.log(`cannot listen to PORT: ${PORT}`);
  console.log(`Server is listening on http//: ${PORT}`);
});
