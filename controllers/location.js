const Location = require("../models/location");

exports.locations = function (req, res) {
  Location.find({}, "-_id -__v", function (err, items) {
    if (err) {
      return res.status(500).send({ mode: "find", error: err });
    }
    res.status(200).send(items);
  });
};

exports.toggle = function (req, res) {
  const id = req.body.id;
  Location.findOne({ id }, function (err, userData) {
    if (userData == null) {
      console.log("userData is null");
      res.status(500).send(err);
    } else {
      found = !userData.found;
      Location.findOneAndUpdate(
        { id },
        { found: found },
        { new: true },
        function (err, doc) {
          if (err) {
            res.status(500).send({ mode: "upsert", error: err });
          }
          res.status(204).send();
        }
      );
    }
  });
};
