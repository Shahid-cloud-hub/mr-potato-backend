const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./Routes");
const connectDB = require("./Config/DatabaseConfig");

const app = express();

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

app.listen(5000, () => {
  console.log(`Port Startingss at 5000`);
});
