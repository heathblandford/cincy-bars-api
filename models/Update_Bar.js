/****************************************************
 * Fowllowing the MVC (model-view-controller) model this is the "Model"
 * this defines what the database will receive/respond with
 * 
 * The collection part of this (the end) is the name of the collection that
 * is in the DB. So in the case of this mongoDB cloud instance, 'disappointmentList'
 * is the name of the collection inside the database
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const update_bar_schema = new Schema({
  // TODO: update schema when needed
  Bar             : { type: String },
  Description     : { type: String },
  Neighborhood    : { type: String }, 
  Address         : { type: String },
  Phone           : { type: String },
  Website         : { type: String },
  hoursMonday     : { type: String },
  hoursTuesday    : { type: String },
  hoursWednesday  : { type: String },
  hoursThursday   : { type: String },
  hoursFriday     : { type: String },
  hoursSaturday   : { type: String },
  hoursSunday     : { type: String },
  specialMonday   : { type: String },
  specialTuesday  : { type: String },
  specialWednesday: { type: String },
  specialThursday : { type: String },
  specialFriday   : { type: String },
  specialSaturday : { type: String },
  specialSunday   : { type: String },
}, {collection: 'cincy-bars-updated', timestamps: true});

// * [database_name].[collection] -- test is the database name
module.exports = mongoose.model("cincy-bars.cincy-bars-updated", update_bar_schema);