const mongoose = require('mongoose');
const Sentences = require('./models/sentence');

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


// Populate this array with objects to insert into DB
const thingsToInsert = []

Sentences.insertMany([...thingsToInsert], (err) => {
	console.log('Successfully inserted to db');
});
