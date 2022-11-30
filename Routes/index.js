const express = require("express");
const rootRouter = express.Router();

const r1 = require("./contact.route");

rootRouter.use(r1);

module.exports = rootRouter;
