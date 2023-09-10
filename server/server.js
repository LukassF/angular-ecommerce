const express = require("express");
const app = express();
require("dotenv/config");

const clothesRouter = require("./routes/clothes");
app.use("/api/clothes", clothesRouter);

app.listen(5000, () => {
  console.log("App running on port 5000");
});
