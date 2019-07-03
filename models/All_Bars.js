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

const All_Bars_Schema = new Schema({
  /* Don't need anything here, but here's the
  * general outline of the document schema. Nice.
  */
  // ID              : { type: Number},
  // Bar             : { type: String },
  // Description     : { type: String },
  // Neighborhood    : { type: String }, 
  // Address         : { type: String },
  // Phone           : { type: String },
  // Website         : { type: String },
  // hoursMonday     : { type: String },
  // hoursTuesday    : { type: String },
  // hoursWednesday  : { type: String },
  // hoursThursday   : { type: String },
  // hoursFriday     : { type: String },
  // hoursSaturday   : { type: String },
  // hoursSunday     : { type: String },
  // specialMonday   : { type: String },
  // specialTuesday  : { type: String },
  // specialWednesday: { type: String },
  // specialThursday : { type: String },
  // specialFriday   : { type: String },
  // specialSaturday : { type: String },
  // specialSunday   : { type: String },
  // Note            : { type: String },
  // lat             : { type: Schema.Types.Decimal128 },
  // long            : { type: Schema.Types.Decimal128 }
}, { collection : 'cincy-bars-collection02' });

// this is where we tell mongoose that this is the model we're using and that 'test.disappointmentList'
// is the collection we're connecting to
// so test.[collection] -- test is the database name
module.exports = mongoose.model('cincy-bars-collection02', All_Bars_Schema);