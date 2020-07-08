const mongoose = require('mongoose');
const Sentences = require('./models/sentence');
const Stories = require('./models/story');
const Sentences2 = require('./models/sentence2');
const Sentences3 = require('./models/sentence3');



const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const parser = new xml2js.Parser();

let xml_array = [];
let answer = '';
let element = '';
let sorted_array = [];

const reading = () => {
	const FILE = path.join(__dirname, './document.xml');
	fs.readFile(FILE, (err, data) => {
		parser.parseString(data, (err, result) => {
			//                                                  ovde
			// console.log(result['w:document']['w:body'][0]['w:p'][2]['w:r'][0]['w:t'][0])
			const text = result['w:document']['w:body'][0]['w:p'];
			for (let i in text) {
				answer = '';
				for (let j in text[i]['w:r']) {
					const level_1 = text[i]['w:r'][j]['w:t'][0];
					if (typeof level_1 === 'string') {
						// console.log(level_1)
						answer += level_1;
						answer += ' ';
					} else {
						second_level(level_1);
					}
				}
				const num = +answer[0];
				if ((element && !isNaN(num)) || i == text.length - 1) {
					xml_array.push(element);
					element = '';
				}
				element += answer;
			}

			array_sorting_1();
		});
	});
};

const second_level = (data) => {
	if (data['_']) {
		answer += data['_'];
		answer += ' ';
	}
};

// {question:'string', word:'string',answers:array} check
// {question:'string', before_answer: 'string',answers:array} check
// {before_answer: 'string','after_answer:'string',answers:array} check
// {question:'string',word:'string',before_answer: 'string','after_answer:'string',answers:array} check
array_sorting_1 = () => { 
	for (let str of xml_array) {
        const wordObject = new Object();
		wordObject.answers = [];
		if(str.includes('key word:') && str.includes('kraj:') && str.includes('početak:')){
			let a = str.split('key word:')
			let question = a[0].replace(')','').replace(/[0-9]/g,'').trim().replace('’',"'");
			let second_part = a[1].split('početak:');
			let key = second_part[0].trim();
			let third_part = second_part[1].split(/(rešenje:|rešenje :)/g);
			third_part = third_part.filter(item => item !== 'rešenje:' && item !=='rešenje :');
			let before_answer = third_part[0].trim().replace('nema početak, počinje sa rešenjem','').replace('’',"'");
			for(let i = 1; i<third_part.length-1;i++){
				wordObject.answers.push(third_part[i].trim().replace('’',"'"))
			}
			let fourth_part = third_part[third_part.length-1];
			let fifth_part = fourth_part.split(/(kraj:|kraj :)/g)
			fifth_part = fifth_part.filter(item => item!=='kraj:' && item!=='kraj :')
			let after_answer = fifth_part[1].trim().replace('’',"'");
			let answer = fifth_part[0].trim().replace('’',"'");
			wordObject.before_answer = before_answer;
			wordObject.question = question;
			wordObject.word = key;
			wordObject.after_answer = after_answer;
			wordObject.answers.push(answer)
			sorted_array.push(wordObject)
		}
		else if (str.includes('key word')) {
            let a = str.split('key word:');
            let question = a[0].replace(')','').replace(/[0-9]/g,'').trim().replace('’',"'");
            let second_part = a[1].split('rešenje:');
            let key = second_part[0].trim().replace('’',"'");
            wordObject.question = question;
            wordObject.word = key;
			wordObject.after_answer = '.';
			wordObject.before_answer = '';
            for(let i=1;i<second_part.length;i++){
                wordObject.answers.push(second_part[i].trim().replace('.','').replace('’',"'"))
            }
            sorted_array.push(wordObject);
        }
        else if(str.includes('početak:') && str.includes('kraj')){
            let a = str.split('početak:')[1].trim();
            // let b = a.split('rešenje:');
            let b = a.split(/(rešenje:|rešenje :)/g)
            b = b.filter(item => item !== 'rešenje:' && item !=='rešenje :')
            let before_answer = b[0].replace('nema početak, počinje sa rešenjem','').trim().replace('’',"'");
            if(b.length>2){
                for(let i=1;i<b.length-1;i++){
                    wordObject.answers.push(b[i].trim().replace('’',"'"))
                }
            }
            let second_part = b[b.length-1];
            // let third_part = second_part.split('kraj:');
            let third_part = second_part.split(/(kraj:|kraj :)/g)
            third_part = third_part.filter(item => item!=='kraj:' && item!=='kraj :')
            let answer = third_part[0].trim().replace('’',"'");
            let after_answer = third_part[1].trim().replace('’',"'");
            wordObject.before_answer = before_answer;
            wordObject.after_answer = after_answer;
            wordObject.answers.push(answer);
            wordObject.question = '';
            sorted_array.push(wordObject)
        }
        else if(str.includes('početak') && !str.includes('kra')){
            let a = str.split(/(početak:|početak :)/g);
            a = a.filter(item => item !== 'početak:' && item !=='početak :');
            let question = a[0].replace(')','').replace(/[0-9]/g,'').trim().replace('’',"'");
            let second_part = a[1].split(/(rešenje:|rešenje :)/g);
            second_part = second_part.filter(item => item!=='rešenje:' && item!=='rešenje :');
            let before_answer = second_part[0].trim().replace('’',"'");
            for(let i=1;i<second_part.length;i++){
                wordObject.answers.push(second_part[i].trim().replace('.','').replace('’',"'"))
            }
            wordObject.before_answer = before_answer;
            wordObject.after_answer = '.';
            wordObject.question = question;
        }
        else{
            console.log('Ovo nema: ',str)
        }
	}
	dalje();
    // console.log(sorted_array)
};

// reading();






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

// Populate this array with sentences3 objects to insert into DB
const sentences3ToInsert = [];

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

Sentences3.insertMany([ ...sentences3ToInsert ], () => {
	if (sentences3ToInsert.length !== 0) {
		console.log('Successfully inserted sentences3 to db');
	} else {
		console.log('No sentences3 to insert!');
	}
});

const dalje = () => {
	Sentences3.insertMany([ ...sorted_array ], () => {
		if (sorted_array.length !== 0) {
			console.log('Ubaceno!');
		} else {
			console.log('Nema!');
		}
	});
}