/**
 * this the controller
 * the controller is the business logic that binds routes/endpoinds in app.js
 * to the operations they'll perform follwing the schema we defined in the model
 * 
 * that each of these start with `exports.` is that we want to use each of these
 * functions separately in app.js exports. exports the function as is and not the whole
 * script
 */

const new_bar = require("../models/New_Bar");

exports.createNewBar = (req, res) => {
  let newBar = new new_bar(req.body);
  newBar.save((err, new_bar) => {
    if(err) {
      res.status(500).send(err);
    }
    res.status(201).json(new_bar)
  })
};