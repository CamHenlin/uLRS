
/*!
 * Module dependencies.
 */
var Activity          = mongoose.model('Activity');
var Actor             = mongoose.model('Actor');
var ActorVerbActivity = mongoose.model('ActorVerbActivity');
var Context           = mongoose.model('Context');
var Definition        = mongoose.model('Definition');
var Result            = mongoose.model('Result');
var User              = mongoose.model('User');
var Verb              = mongoose.model('Verb');

exports.index = function (req, res) {
  res.render('home/index', {
    title: 'uLRS'
  });
};

exports.index = function (req, res) {
  res.send({});
}