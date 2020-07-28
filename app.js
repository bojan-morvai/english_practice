const express = require('express');
const mongoose = require('mongoose');
const Sentences = require('./models/sentence');
const Stories = require('./models/story');
const Sentences2 = require('./models/sentence2');
const Sentences3 = require('./models/sentence3');

const app = express();

app.use(express.static('public'));

mongoose
	.connect('mongodb+srv://Bojan:klisaklisa@cluster0-rfxxc.mongodb.net/english?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('connected to db');
	})
	.catch((err) => {
		console.log('ERROR:', err.message);
	});
mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
	res.render('index.ejs');
});

app.get('/get-sentences', (req, res) => {
	Sentences.find({}, function(err, allSentences) {
		if (err) {
			console.log('Error connecting to db...', err);
		}
		res.send(allSentences);
	});
});

app.get('/get-stories', (req,res) => {
	Stories.find({}, function(err, allStories) {
		if(err){
			console.log('Error connecting to db...', err);
		}
		res.send(allStories)
	});
});

app.get('/get-sentences2', (req, res) => {
	Sentences2.find({}, function(err, allSentences) {
		if (err) {
			console.log('Error connecting to db...', err);
		}
		res.send(allSentences);
	});
});

app.get('/get-sentences3', (req, res) => {
	Sentences3.find({}, function(err, allSentences) {
		if (err) {
			console.log('Error connecting to db...', err);
		}
		res.send(allSentences);
	});
});

const hostname = process.env.IP// || '127.0.0.1';
const port = process.env.PORT// || 3000;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
