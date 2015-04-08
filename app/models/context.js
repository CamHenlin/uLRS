
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Context schema
 */

var ContextSchema = new Schema({
  contextActivities: {
    parent: { type: Array, default: null }
  }
});