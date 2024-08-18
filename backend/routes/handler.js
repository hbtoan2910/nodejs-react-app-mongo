const express = require("express");
const router = express.Router();

router.get("/tweets", (req, res) => {
  const str = [
    {
      t_id: 1,
      name: "Ryan Huynh",
      msg: "This is my 1st tweet",
      username: "ryanhuynh2910",
    },
    {
      t_it: 2,
      name: "Kent Nguyen",
      msg: "This is my 1st tweet about VN trip (^_^)",
      username: "tunginusa",
    },
  ];
  res.end(JSON.stringify(str));
  console.log(
    "GET request triggered and returned with result: " + JSON.stringify(str)
  );
});

router.post("/addTweet", (req, res) => {
  res.end("N/A");
});

module.exports = router;
