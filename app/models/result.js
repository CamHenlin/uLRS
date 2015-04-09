
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Activity schema
 */

var ResultSchema = new Schema({
  id: { type: String, default: '' },
  definition: { type: Object, default: null },
  objectType: { type: String, default: '' }
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

ResultSchema.method({

});

/**
 * Statics
 */

ResultSchema.static({

});

/**
 * Register
 */

mongoose.model('Result', ResultSchema);
