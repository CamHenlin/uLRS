
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * ActorVerbActivity schema
 */

var ActorVerbActivitySchema = new Schema({
  actor: { type: Object, default: null },
  verb: { type: Object, default: null },
  object: { type: Object, default: null },
  context: { type: Object, default: null }
});