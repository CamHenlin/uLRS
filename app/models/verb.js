
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Verb schema
 */

var VerbSchema = new Schema({
  id: { type: String, default: '' },
  display: { type: String, default: '' },
  definition: {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    extensions: { type: String, default: '' }
  }
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

VerbSchema.method({

});

/**
 * Statics
 */

VerbSchema.static({

});

/**
 * Register
 */

mongoose.model('Verb', VerbSchema);
