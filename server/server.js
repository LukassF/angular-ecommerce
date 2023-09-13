const express = require("express");
const app = express();
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());

const port = process.env.PORT || "5000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

const clothesRouter = require("./routes/clothes");
app.use("/api/clothes", clothesRouter);

const paymentsRouter = require("./routes/payments");
app.use("/api/checkout", paymentsRouter);

app.listen(port, () => {
  console.log("App running on port 5000");
});
