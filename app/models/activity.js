
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Activity schema
 */

var ActivitySchema = new Schema({
  id: { type: String, default: '' },
  definition: { type: Object, default: null },
  objectType: { type: String, default: '' }
});