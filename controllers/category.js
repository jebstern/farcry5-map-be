const Category = require("../models/category");

exports.categories = function (req, res) {
  Category.find({}, "-_id -__v", function (err, items) {
    if (err) {
      return res.status(500).send({ mode: "find", error: err });
    }
    res.status(200).send(items);
  });
};
