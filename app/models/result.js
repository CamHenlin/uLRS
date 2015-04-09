
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Activity schema
 */

var ResultSchema = new Schema({
  completion: { type: Boolean, default: false },
  success: { type: Boolean, default: false },
  score: {
    scaled: { type: Decimal, default: 1 },
  },
  extensions: { type: String, default: '' }
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
