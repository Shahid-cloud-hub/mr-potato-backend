const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./Routes");
const connectDB = require("./Config/DatabaseConfig");

const app = express();
const port = 2000;

dotenv.config();
app.use(cors());

connectDB();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/api", router);

app.listen(port || 5000, () => {
  console.log(`Port Startings at ${port}`);
});
