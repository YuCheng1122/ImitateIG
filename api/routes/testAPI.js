var express = require("express");
var router = express.Router();
const app = express();
const path = require("path");

router.get("/", function (req, res, next) {
  res.send("API is working properly");
  console.log('API')
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
