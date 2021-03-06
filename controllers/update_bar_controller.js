/**
 * this the controller
 * the controller is the business logic that binds routes/endpoinds in app.js
 * to the operations they'll perform follwing the schema we defined in the model
 *
 * that each of these start with `exports.` is that we want to use each of these
 * functions separately in app.js exports. exports the function as is and not the whole
 * script
 */

const update_bar = require("../models/Update_Bar");

// TODO: make `updateBars` have the ability to update any info that's displayed
// TODO: like update the deal for the specific day
// TODO: update address, website, or phone number
//* if address is updated, will need to run address to lat/long python script again -- how to do? EC2 instance that runs periodically?

exports.updateBar = (req, res) => {
  let updatedBar = new update_bar(req.body);
  updatedBar.save((err, updated_bar) => {
      if(err) {
          res.status(500).send(err);
      }
      res.status(200).json(updated_bar);
  })
};