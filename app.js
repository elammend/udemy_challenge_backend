const express = require("express");
const cors = require("cors");
const quizRouter = require("./routes/quizRoutes");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the quiz server!");
});

app.use("/quizes", quizRouter);
module.exports = app;
