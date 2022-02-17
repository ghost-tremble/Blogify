const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Blogpost = new Schema(
  {
    post: { type: String },
  },
  {
    collection: "blogpost",
  }
);

const Models = mongoose.model("blog", Blogpost);
module.exports = Models;
