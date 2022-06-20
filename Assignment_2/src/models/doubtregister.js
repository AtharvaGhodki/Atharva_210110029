const mongoose = require("mongoose");
const doubtSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  doubt: {
    type: String,
    required: true,
  },
});

const Doubt = new mongoose.model("Userdoubt", doubtSchema);
module.exports = Doubt;
