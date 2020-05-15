const Poi = require("../models/poi");

exports.all = function (req, res) {
  Poi.find({}, "-_id -__v", function (err, items) {
    if (err) {
      return res.status(500).send({ mode: "find", error: err });
    }
    res.status(200).send(items);
  });
};

exports.toggle = function (req, res) {
  const markerSlug = req.body.markerSlug;
  Poi.findOne({ markerSlug: markerSlug }, function (err, userData) {
    if (userData == null) {
      console.log("userData is null");
      res.status(500).send(err);
    } else {
      found = !userData.found;
      Poi.findOneAndUpdate(
        { markerSlug: markerSlug },
        { found: found },
        function (err, doc) {
          if (err) {
            res.status(500).send({ mode: "upsert", error: err });
          }
          res.status(200).send(doc);
        }
      );
    }
  });
};
