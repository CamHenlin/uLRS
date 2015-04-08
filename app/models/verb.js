
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Verb schema
 */

var VerbSchema = new Schema({
  id: { type: String, default: '' }
});