const express = require("express");
const router = express.Router();

const { ContactForm } = require("../Controllers/ContactController");

router.post("/contact", ContactForm);

module.exports = router;
