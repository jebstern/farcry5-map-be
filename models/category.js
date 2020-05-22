const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let categorySchema = new Schema({
  id: {
    type: Number,
  },
});

module.exports = mongoose.model("category", categorySchema);


