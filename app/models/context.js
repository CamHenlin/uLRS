
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

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */

ContextSchema.method({

});

/**
 * Statics
 */

ContextSchema.static({

});

/**
 * Register
 */

mongoose.model('Context', ContextSchema);
