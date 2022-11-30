const express = require("express");
const router = express.Router();

const { ContactForm, GetTest } = require("../Controllers/ContactController");

router.post("/contact", ContactForm);
router.get("/home", GetTest);

module.exports = router;
