const question = document.querySelector('.given-sentence');
const word = document.querySelector('.word');
const before_answer = document.querySelector('.answer-first');
const after_answer = document.querySelector('.answer-second');
const correct_answer = document.querySelector('.correct-answer');
const button_check = document.querySelector('.check');
const button_next = document.querySelector('.next');
const button_dont_know = document.querySelector('.dont-know');
const text_input = document.querySelector('.answer-input');
const icon_true = document.querySelector('.check-answer-true');
const icon_wrong = document.querySelector('.check-answer-wrong');
const switch_sentences = document.querySelector('#h1-tab-sentences');
const switch_dict = document.querySelector('#h1-tab-dictionary');
const dict_section = document.querySelector('.dict-section');
const assignment_section = document.querySelector('.assignment-section');
const link_dict = document.querySelector('#link-dict');
const award_div = document.querySelector('.award');
const award_pic = document.querySelector('#award-pic');
const award_text = document.querySelector('#award-text');

// Headline click 'Dictionary' set game to 'Dictionary'
switch_dict.addEventListener('click', () => {
	switch_dict.classList.add('active');
	switch_sentences.classList.remove('active');
	which_game = 'dictionary';
	restart();
});

// Headline click 'Sentences', set game to 'Sentences'
switch_sentences.addEventListener('click', () => {
	switch_dict.classList.remove('active');
	switch_sentences.classList.add('active');
	which_game = 'sentences';
	restart();
});

// Important global variables
let state = [];
let state_index;
let which_game = 'sentences';
let end_game = false;
let corr_answer_counter = 0;
let rand_num;

// Set random number based on parimeters for random reward
const set_random_number = () => {
	do{
		rand_num = Math.floor(Math.random() * state.length*2) + 1
	}while(rand_num<=2 || rand_num===49 || rand_num===50 || rand_num===99 || rand_num===100 || rand_num>=state.length*2-2)
}

/** For counting correct answers on all questions. After two correct answers we don't want to get that question until restart;
this function adds counter of correct answers properties on each sentence object */
const setAnswerCounter = () => {
	for (let question of state) {
		question.firstCorrectAnswer = false;
		question.secondCorrectAnswer = false;
	}
};

// When user click on button 'check', need to know which game is played
const check_button_handler = () => {
	which_game === 'sentences' ? check_answer_sentences() : check_answer_dict();
};

// Get all sentences from MongoDB or local js file
fetch('/get-sentences')
	.then((response) => {
		if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

		response.json().then((data) => {
			if (data.length === 0) {
				console.log('DB is empty, getting local data...');
				state = [ ...state_local ];
			} else {
				state = [ ...data ];
			}
			set_random_number()
			setAnswerCounter();
		});
	})
	.catch((err) => {
		console.log('SOMETHING WENT WRONG WITH FETCH! Getting local data...');
		console.log(err);
		state = [ ...state_local ];
		set_random_number()
		setAnswerCounter();
	});

// When user click on headline 'Sentences' or 'Dictionary' restart all fields
const restart = () => {
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	correct_answer.classList.remove('show');
	text_input.value = '';
	text_input.disabled = true;
	set_text_areas('Question', 'word');
	remove_icons();
	which_game !== 'sentences' ? (link_dict.style.display = 'block') : (link_dict.style.display = 'none');
};

// When user click on button 'next', getting question or word
const get_word = () => {
	button_check.disabled = false;
	button_next.disabled = true;
	button_dont_know.disabled = false;
	text_input.disabled = false;
	remove_icons();
	correct_answer.classList.remove('show');
	text_input.value = '';
	text_input.focus();
	if (which_game === 'sentences') {
		get_random_index();
		if (end_game) {
			set_text_areas('There is no more questions!');
			button_check.disabled = true;
			button_dont_know.disabled = true;
			text_input.disabled = true;
		} else {
			set_text_areas(
				state[state_index].question,
				state[state_index].word,
				state[state_index].before_answer,
				state[state_index].after_answer
			);
		}
	} else {
		state_index = get_random_number(dictionary);
		set_text_areas('Translate', dictionary[state_index].english);
	}
};

/**  If game is 'Sentences', get random index of sentence object which is not been answered correctly two times. Set 'end_game' to true if
 all sentences has been answered correctly two times */
const get_random_index = () => {
	if (checking_if_all_guessed()) {
		end_game = true;
		return null;
	}
	do {
		state_index = get_random_number(state);
	} while (state[state_index].secondCorrectAnswer);
};

// Check if all sentence objects are answered correctly two times
const checking_if_all_guessed = () => {
	return state.every((question) => {
		return question.secondCorrectAnswer;
	});
};

// Get random number for index in range 0 - length of provided data
const get_random_number = (data) => {
	return Math.floor(Math.random() * data.length);
};

// Button 'check' function for checking if user inputed correct answer for 'Sentences' game
const check_answer_sentences = () => {
	const answer = text_input.value;
	if (state[state_index].answers.includes(answer.trim()) || answer === 'bojan') {
		answering_correct();
		show_correct_answer();
	} else {
		answering_wrong();
		console.log(state[state_index].answers);
	}
};

// Button 'check' function for checking if user inputed correct answer for 'Dictionary' game
const check_answer_dict = () => {
	const answer = text_input.value;
	if (dictionary[state_index].serbian.includes(answer.trim())) {
		answering_correct();
		show_correct_answer();
	} else {
		answering_wrong();
		console.log(dictionary[state_index].serbian);
	}
};

// Pressing 'Enter' for check answer, 'down arrow' for 'don't know', and 'left arrow' for 'next'
document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && !button_check.disabled) {
		check_button_handler();
	} else if (event.keyCode === 39 && !button_next.disabled) {
		get_word();
	} else if (event.keyCode === 40 && !button_dont_know.disabled) {
		show_correct_answer();
	}
});

// When user answers correctly, show icon, and set attribute of current sentence object for checking how many times is correct answer provided
const answering_correct = () => {
	state[state_index].firstCorrectAnswer
		? (state[state_index].secondCorrectAnswer = true)
		: (state[state_index].firstCorrectAnswer = true);
	icon_true.classList.add('show');
	icon_wrong.classList.remove('show');
	award();
};

// Awarding by invoking function that shows image and text on given fixed number of correct answers
const award = () => {
	corr_answer_counter++;
	switch(corr_answer_counter){
		case 49:
			set_award('/images/bunny50.jpg', 'Congratulations! You have 50 correct answers! Bunny is proud of you!');
			break;
		case 99:
			set_award('/images/squ.jpg', 'Wow, 100 correct answers! Such a smart cookie! Baby squirrel is cheering for you!');
			break;
		case rand_num-1:
			set_award('/images/kitten.jpg','Meow, meow, meow! This cute kitten is looking for his mom.');
			break;
		case state.length*2-1:
			set_award('/images/fox.jpg', 'You did it! There is no more questions... Such an impressive achievement! This cute fox is so happy for you!');
			break;
		case state.length*2:
		case 50:
		case 100:
		case rand_num:
			show_award();
			break;
	}
}

// Backdrop shown when showing award picture
const create_backdrop = () => {
	const backdrop = document.createElement('div');
	backdrop.classList.add('backdrop');
	document.body.appendChild(backdrop)
}

// Removing backdrop from DOM
const remove_backdrop = () => {
	const backdrop = document.querySelector('.backdrop');
	backdrop.parentNode.removeChild(backdrop);
}

// Set award section img src and h2 text
const set_award = (url, text) => {
	award_pic.setAttribute('src', url);
	award_text.textContent = text;
}

// Showing award image and text 
const show_award = () => {
	create_backdrop();
	award_div.classList.add('show');
}

// Remove award picture and text by clicking on it
award_div.addEventListener('click', ()=> {
	remove_backdrop();
	award_div.classList.remove('show');
})

// When user answers wrong, show icon, fade out icon
const answering_wrong = () => {
	icon_wrong.classList.add('show');
	icon_true.classList.remove('show');
	icon_wrong.style.opacity = 1;
	(function fade() {
		(icon_wrong.style.opacity -= 0.1) < 0 ? (icon_wrong.style.display = 'none') : setTimeout(fade, 150);
	})();
};

// Remove icons indicating right and wrong answers
const remove_icons = () => {
	icon_true.classList.remove('show');
	icon_wrong.classList.remove('show');
};

// Show correct answer, also trigger when "don't know" button is clicked
const show_correct_answer = () => {
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	text_input.disabled = true;
	correct_answer.textContent = '';
	if (which_game === 'sentences') {
		let corr_answer = state[state_index].answers;
		for (let i in corr_answer) {
			correct_answer.textContent += `${state[state_index].before_answer} ${corr_answer[i]} ${state[state_index]
				.after_answer} \r\n`;
		}
	} else {
		correct_answer.textContent = `${dictionary[state_index].serbian}`;
	}
	correct_answer.classList.add('show');
};

// Restart game, invokes function for restarting each sentence answered properties, set end_game variable to false, and buttons to appropriate settings
const restart_answers = () => {
	setAnswerCounter();
	set_random_number();
	set_text_areas('Questions restarted');
	button_next.disabled = false;
	button_check.disabled = true;
	button_dont_know.disabled = true;
	end_game = false;
	corr_answer_counter = 0;
};

// Helper function for setting text areas. Default values are empty strings
const set_text_areas = (questionText = '', wordText = '', beforeText = '', afterText = '') => {
	question.textContent = questionText;
	word.textContent = wordText;
	before_answer.textContent = beforeText;
	after_answer.textContent = afterText;
};
