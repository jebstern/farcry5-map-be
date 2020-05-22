const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let locationSchema = new Schema({
  id: {
    type: Number,
  },
  category_id: {
    type: Number,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  title: {
    type: String,
  },
  found: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("location", locationSchema);
