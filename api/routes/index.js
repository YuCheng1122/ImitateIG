var express = require("express");
var router = express.Router();
const app = express();
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = router;
