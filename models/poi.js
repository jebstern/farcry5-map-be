const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let poiSchema = new Schema({
  lat: {
    type: Number
  },
  lng: {
    type: Number
  },
  markerName: {
    type: String
  },
  markerSlug: {
    type: String
  },
  typeSlug: {
    type: String
  },
  found: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("poi", poiSchema);
