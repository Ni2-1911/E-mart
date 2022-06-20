const mongoose = require("mongoose");
const Product = require('./productModel')
const userSchema = new mongoose.Schema({
  firstName : { type: String , required: false},
  lastName : { type: String, required: false},
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  wishlist:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product"
    }
  ]
});

const User = mongoose.model("user", userSchema);

module.exports = User;
