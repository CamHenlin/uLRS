
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
  var activity = new Activity();
};

exports.newActor = function (req, res, next) {
  var actor = new Actor();
};

exports.newActorVerbActivity = function (req, res, next) {
  var actorVerbActivity = new ActorVerbActivity();

  res.send(200, actorVerbActivity);
};


exports.newContext = function (req, res, next) {
  var context = new Context();
};

exports.newDefinition = function (req, res, next) {
  var definition = new Definition();
};

exports.newResult = function (req, res, next) {
  var result = new Result();
};

exports.newVerb = function (req, res, next) {
  var verb = new Verb();
};

