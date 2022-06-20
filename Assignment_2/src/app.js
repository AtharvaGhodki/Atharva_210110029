const express = require("express");
const app = express();
const path = require("path");
require("./db/conn");
const Register = require("./models/doubtregister");
const { json } = require("express");
const ejs = require("ejs");
const { monitorEventLoopDelay } = require("perf_hooks");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  var info = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    doubt: req.body.doubt,
  };
  var me = new Register(info);

  me.save(function (err, dbt) {
    if (err) {
      console.log("error occured");
      res.send(err);
    } else {
      console.log("Done!");
      res.redirect("/doubtviewing");
    }
  });
});
app.get("/doubtviewing", (req, res) => {
  Register.find({}, function (err, doubts) {
    res.render("doubtviewing", {
      doubtList: doubts,
    });
  });
});
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
