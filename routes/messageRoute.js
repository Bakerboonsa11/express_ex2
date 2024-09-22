const express = require('express');
const router = express.Router();

const messages= require('/home/bonsa/repos/express_ex2/messages.js')
console.log(messages)
router.route("/")
  .get((req, res) => {
    res.render("form");
  })
  .post((req, res) => {
    const { text, user } = req.body;
    messages.push({ text, user, added: new Date(),id:messages.length+1 });
    res.redirect('/'); // Redirect to the home page after submitting
  });
router.route("/:id/details")
  .get((req, res) => {
    const id = parseInt(req.params.id, 10); // Get the id from the URL
    const mess=messages.find((mess)=>{
        return mess.id===id
    })
    console.log(mess)
    // res.end()
    res.render("details",{mess});
  });

module.exports = router;
