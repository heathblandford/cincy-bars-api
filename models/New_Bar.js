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

const new_bar_schema = new Schema({
  Bar: {
    type: String,
    required: true
  },

  deal: {
    type: String, 
    required: true
  },

  neighborhood: {
    type: String,
    required: true
  },

  createdOn: {
    type: Date,
    default: Date.now
  }

}, {collection: 'add-new-bar'});

//this is where we tell mongoose that this is the model we're using and that 'test.disappointmentList' is the collection we're connecting to
// so test.[collection] -- test is the database name
module.exports = mongoose.model("cincy-bars.add-new-bar", new_bar_schema);