const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
