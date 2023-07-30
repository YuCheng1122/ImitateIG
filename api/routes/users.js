const express = require("express");
const app = express();
var router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
app.use(express.static(path.join(__dirname, "public")));

module.exports = router;
