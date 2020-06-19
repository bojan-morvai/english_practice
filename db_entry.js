const mongoose = require('mongoose');
const Sentences = require('./models/sentence');
const Stories = require('./models/story');

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
