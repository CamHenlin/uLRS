
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

exports.newActivity = function (req, res, next) {

};

exports.newActorVerbActivity = function (req, res, next) {
  var actorVerbActivity = new ActorVerbActivity();
  actorVerbActivity.actor = new Actor();
  actorVerbActivity.verb = new Verb();
  actorVerbActivity.object = new Activity();
  actorVerbActivity.context = new Context();

  res.send(200, actorVerbActivity();
};

exports.newActor = function (req, res, next) {

};

exports.newContext = function (req, res, next) {

};

exports.newDefinition = function (req, res, next) {

};

exports.newResult = function (req, res, next) {

};

exports.newVerb = function (req, res, next) {

};

