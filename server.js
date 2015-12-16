var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose');
	usersController = require('./server/controllers/users-controller');
	postsController = require('./server/controllers/posts-controller');


mongoose.connect('mongodb://localhost:27017/WebApp');

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.get('/api/users', usersController.list);
app.post('/api/users', usersController.create);
app.get('/api/blog_posts/', postsController.list);
app.post('/api/blog_posts', postsController.create);
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/');
});
app.get('/index', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/index.html');
});
app.get('/main', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/main.html');
});
app.get('/login', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/login.html');
});
app.get('/signup', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/signup.html');
});
app.get('/userchannel', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/userchannel.html');
});
app.get('/profile', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/profile.html');
});
app.get('/livenow', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/livenow.html');
});
app.get('/channels', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/channels.html');
});
app.get('/menu1', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/menu1.html');
});
app.get('/menu2', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/menu2.html');
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());




app.listen(8080, function() {
	console.log('I\'m Listening...');
})
