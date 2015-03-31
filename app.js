var express = require('express');
var session = require('express-session');
var http = require('http');
var Datastore = require('nedb');
var genuuid = require('gen-uid');
var bodyParser = require('body-parser');
NedbStore = require('connect-nedb-session')(session);

var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(session({
	genid: function(req) {
		return genuuid.v4(); // use UUIDs for session IDs
	},
	secret: 'keyboard cat',
	resave: true,
	saveUninitialized: true,
	name: 'cookie_name',
	store: new NedbStore({ filename: 'sess' })
}))

var db = new Datastore();

/**
 * [Participant description]
 * @param {[type]} userId [userId of participant, keyed to class model]
 */
function Participant(userId) {
	this.userId = userId;

	// this will eventually get keyed group membership
	this.getGroup = function() {

	}
}

// item model
/**
 * [Item description]
 * @param {[type]} itemId      [id of item, keyed to course model]
 * @param {[type]} score       [score of item]
 * @param {[type]} participant [participant]
 */
function Item(itemId, score, participant) {

}

// dummy login endpoint
app.post('/login', function(req, res) {
	req.session.participant = new Participant(1);
	res.send(req.session.participant);
});

app.post('/sendscore/:itemId', function(req, res) {
	if (!req.session.participant) {
		res.sendStatus(500);
		return;
	}

	var itemId = req.params.itemId;
	var score = req.body.score;

	res.send(new Item(itemId, score, req.session.participant));
});

var server = http.createServer(app).listen(process.env.PORT || 3000);