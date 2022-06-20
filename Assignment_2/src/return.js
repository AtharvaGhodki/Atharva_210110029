const express = require("express");
const mongoose = reqiure("mongoose");
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
const port = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/DoubtSection", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const doubtbtn = document.querySelector(".doubtbutton");
doubtbtn.addEventListener("click", function () {
  app.get("/doubtviewing", (req, res) => {
    res.send("working");
  });
});
app.listen(port, () => {
  console.log(`server is running at port no ${port}`);
});
