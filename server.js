var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose'),
	usersController = require('./server/controllers/users-controller'),
	postsController = require('./server/controllers/posts-controller'),
	storesController = require('./server/controllers/stores-controller'),
	submerchantsController = require('./server/controllers/submerchants-controller');


mongoose.connect('mongodb://localhost:27017/Twitch');
var db = mongoose.connection;
db.on('error', function (err) {
console.log('MongoDB Connection Error', err);
});
db.once('open', function () {
console.log('MongoDB Connected');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
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
app.get('/cart', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/cart.html');
});
app.get('/footer', function (req, res) {
	res.sendFile(__dirname + '/client/www/templates/footer.html');
});
app.get('/users', usersController.list);
app.route('/blog_posts/')
	.get(postsController.list)
	.post(postsController.create);

app.route('/blog_posts/:blog_postId')
.delete(postsController.delete);
app.param('blog_postId', postsController.blog_postByID);
app.get('/store_items/', storesController.list);
app.get('/submerchants', submerchantsController.list);
app.post('/users', usersController.create);

app.post('/store_items', storesController.create);
app.post('/submerchants', submerchantsController.create);
app.use(bodyParser.urlencoded({
  extended: true
}));





app.listen(8080, function() {
	console.log('I\'m Listening...');
})
