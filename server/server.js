const express = require("express");
const app = express();
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || "5000";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_KEY);

const clothesRouter = require("./routes/clothes");
app.use("/api/clothes", clothesRouter);

app.listen(port, () => {
  console.log("App running on port 5000");
});
