
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

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

ActorSchema.method({

});

/**
 * Statics
 */

ActorSchema.static({

});

/**
 * Register
 */

mongoose.model('Actor', ActorSchema);
