var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose   = require('mongoose'),

// mongoose.connect('mongodb://localhost:27017/ArtSFBlog');

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/client/views/index.html');
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use('/js', express.static(__dirname + '/client/js'));

app.listen(3000, function() {
	console.log('I\'m Listening...');
})
