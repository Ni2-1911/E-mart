const mongoose = require("mongoose");
const User  = require("./userModel");
const tagsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Wishlist", tagsSchema);
