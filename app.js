const express = require('express');
const mongoose = require('mongoose');
const Sentences = require('./models/sentence');

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

app.get('/dictionary', (req, res) => {
	res.render('dictionary.ejs');
});

app.get('/get-sentences', (req, res) => {
	Sentences.find({}, function(err, allSentences) {
		if (err) {
			alert('Error connecting to db...', err);
		}
		res.send(allSentences);
	});
});

const hostname = process.env.IP// || '127.0.0.1';
const port = process.env.PORT// || 3000;

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
