
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Actor schema
 */

var ActorSchema = new Schema({
  mbox: { type: String, default: '' }
});