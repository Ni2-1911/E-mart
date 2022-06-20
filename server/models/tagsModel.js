const mongoose = require("mongoose");
const Product  = require("./productModel");
const tagsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("tags_model", tagsSchema);
