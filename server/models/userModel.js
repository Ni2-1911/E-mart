const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName : { type: String , required: false},
  lastName : { type: String, required: false},
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
