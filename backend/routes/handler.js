const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

// router.get("/tweets", (req, res) => {
//   const str = [
//     {
//       t_id: 1,
//       name: "Ryan Huynh",
//       msg: "This is my 1st tweet",
//       username: "ryanhuynh2910",
//     },
//     {
//       t_it: 2,
//       name: "Kent Nguyen",
//       msg: "This is my 1st tweet about VN trip (^_^)",
//       username: "tunginusa",
//     },
//   ];
//   res.end(JSON.stringify(str));
//   console.log(
//     "GET request triggered and returned with result: " + JSON.stringify(str)
//   );
// });

router.post("/addTweet", (req, res) => {
  res.end("N/A");
});

router.post("/contact/:a", async (req, res) => {
  const { name, email, website, message } = req.body;
  //console.log(name + " | " + email + " | " + website + " | " + message);
  const action = req.params.a;
  switch (action) {
    case "send":
      const newContact = new schemas.Contacts({
        name: name,
        email: email,
        website: website,
        message: message,
      });
      const saveContact = await newContact.save();
      if (saveContact) {
        res.send("Message sent. Thank you.");
      } else {
        res.send("Failed to send message. Try again.");
      }
      break;
    default:
      res.send("Invalid Request.");
  }
});

module.exports = router;
