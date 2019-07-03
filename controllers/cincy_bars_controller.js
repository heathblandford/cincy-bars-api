/**
 * this the controller
 * the controller is the business logic that binds routes/endpoinds in app.js
 * to the operations they'll perform follwing the schema we defined in the model
 *
 * that each of these start with `exports.` is that we want to use each of these
 * functions separately in app.js exports. exports the function as is and not the whole
 * script
 */

const all_bars = require("../models/All_Bars");

exports.listAllBars = (req, res) => {
  all_bars.find({}, (err, bars) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(bars);
  });
};

exports.listNeighborhoodBars = (req, res) => {
  all_bars.find({Neighborhood: `${req.params.neighborhood}`}, (err, bars) => {
    if(err) {
      res.status(500).send(err);
    }
    res.status(200).json(bars);
  })
}