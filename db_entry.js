const mongoose = require('mongoose');
const Sentences = require('./models/sentence');
const Stories = require('./models/story');
const Sentences2 = require('./models/sentence2');

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

// Populate this array with sentences objects to insert into DB
const sentencesToInsert = [];

// Populate this array with story objects to insert into DB
const storiesToInsert = [];

// Populate this array with sentences2 objects to insert into DB
const sentences2ToInsert = [];

Sentences.insertMany([ ...sentencesToInsert ], () => {
	if (sentencesToInsert.length !== 0) {
		console.log('Successfully inserted sentences to db');
	} else {
		console.log('No sentences to insert!');
	}
});

Stories.insertMany([ ...storiesToInsert ], () => {
	if (storiesToInsert.length !== 0) {
		console.log('Successfully inserted stories to db');
	} else {
		console.log('No stories to insert!');
	}
});

Sentences2.insertMany([ ...sentences2ToInsert ], () => {
	if (sentences2ToInsert.length !== 0) {
		console.log('Successfully inserted sentences2 to db');
	} else {
		console.log('No sentences2 to insert!');
	}
});
