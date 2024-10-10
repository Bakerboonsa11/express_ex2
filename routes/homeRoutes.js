const express = require('express');
const router = express.Router();
const messages= require('/home/bonsa/repos/express_ex2/messages.js')


router.get("/", (req, res) => {
  res.render('index', { messages });
});

// Exporting the router and messages as part of an object
module.exports = router



// 