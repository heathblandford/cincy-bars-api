/****************************************************
 * Fowllowing the MVC (model-view-controller) model this is the "Model"
 * this defines what the database will receive/respond with
 *
 * The collection part of this (the end) is the name of the collection that
 * is in the DB. So in the case of this mongoDB cloud instance, 'disappointmentList'
 * is the name of the collection inside the database
 *
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const update_bar_schema = new Schema(
    {
        Bar: {
            type: String,
            required: true
        },

        toUpdate: {
            type: String,
            required: true
        },

        updateValue: {
            type: String,
            required: true
        },

        createdOn: {
            type: Date,
            default: Date.now
        }
    },
    { collection: "cincy-bars-updated02", timestamps: true }
);

// * [database_name].[collection] -- test is the database name
module.exports = mongoose.model(
    "cincy-bars.cincy-bars-updated02",
    update_bar_schema
);
