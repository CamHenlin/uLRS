
/*!
 * Module dependencies
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Context schema
 */

var ContextSchema = new Schema({
  instructor: { type: Object, default: null }, // this is an actor
  contextActivities: {
    parent: { type: Object, default: null },
    grouping: { type: Object, default: null }
  },
  extensions: { type: Object, default: null }
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
