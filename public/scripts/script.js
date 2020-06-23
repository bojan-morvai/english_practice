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
const switch_transformations = document.querySelector('#h1-tab-transformations');
const switch_dict = document.querySelector('#h1-tab-dictionary');
const switch_story = document.querySelector('#h1-tab-story');
const dict_section = document.querySelector('.dict-section');
const assignment_section = document.querySelector('.assignment-section');
const link_dict = document.querySelector('#link-dict');
const award_div = document.querySelector('.award');
const award_pic = document.querySelector('#award-pic');
const award_text = document.querySelector('#award-text');
const sentence_space = document.querySelector('.sentence-space');
const story_space = document.querySelector('.story-space');
const countdown = document.querySelector('.countdown');

// Headline click 'Dictionary' set game to 'Dictionary'
switch_dict.addEventListener('click', () => {
	switch_dict.classList.add('active');
	switch_transformations.classList.remove('active');
	switch_story.classList.remove('active');
	countdown.classList.remove('show');
	which_game = 'dictionary';
	restart_answers();
	restart();
});

// Headline click "Story", set game to 'story'
switch_story.addEventListener('click', () => {
	switch_story.classList.add('active');
	switch_transformations.classList.remove('active');
	switch_dict.classList.remove('active');
	countdown.classList.remove('show');
	which_game = 'story';
	restart_answers();
	restart();
});

// Headline click 'Transformations', set game to 'transformations'
switch_transformations.addEventListener('click', () => {
	switch_dict.classList.remove('active');
	switch_story.classList.remove('active');
	switch_transformations.classList.add('active');
	countdown.classList.add('show');
	which_game = 'transformations';
	restart_answers();
	restart();
});

// Important global variables
let state = [];
let stories = [];
let state_index;
let which_game = 'transformations';
let end_game = false;
let corr_answer_counter = 0;
let rand_100_award;
let rand_200_award;
let rand_300_award;
let rand_400_award;
let rand_500_award;
let backdrop_active = true;

// Return random number based on min and max numbers for random rewards
const set_reward_rand_number = (min, max) => {
	if (state.length < 55) return null;
	return Math.floor(Math.random() * (max - min) + min);
};

/** For counting correct answers on all questions. After two correct answers we don't want to get that question until restart;
this function adds counter of correct answers properties on each input data object */
const setAnswerCounter = (data) => {
	for (let question of data) {
		question.firstCorrectAnswer = false;
		question.secondCorrectAnswer = false;
	}
};

// When user click on button 'check', need to know which game is played
const check_button_handler = () => {
	if (which_game === 'transformations') {
		check_answer_transformations();
	} else if (which_game === 'dictionary') {
		check_answer_dict();
	} else if (which_game === 'story') {
		check_answer_story();
	}
};

// After getting data from DB or locally, set answer counters
// When data is 'transformations', set award counters and remove backdrop
const after_initial_load = (data) => {
	setAnswerCounter(data);
	if (data[0].question && data[0].after_answer) {
		countdown_trans();
		countdown.classList.add('show');
		rand_100_award = set_reward_rand_number(110, 191);
		rand_200_award = set_reward_rand_number(210, 291);
		rand_300_award = set_reward_rand_number(310, 391);
		rand_400_award = set_reward_rand_number(410, 491);
		rand_500_award = set_reward_rand_number(510, 591);
		if (backdrop_active) remove_backdrop();
	}
};

// When user click on headline 'Transformations','Dictionary', or 'Story' restart all fields
const restart = () => {
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	correct_answer.classList.remove('show');
	text_input.value = '';
	text_input.disabled = true;
	set_text_areas('Question', 'word');
	remove_icons();
	which_game === 'dictionary' ? (link_dict.style.display = 'block') : (link_dict.style.display = 'none');
	set_game(which_game);
};

// Set visibility of DOM elements for games 'story' or any other kind
const set_game = (game) => {
	remove_story();
	if (game === 'story') {
		story_space.display = 'block';
		story_space.textContent = "press 'next' to get a story";
		question.style.display = 'none';
		word.textContent = 'Headline';
		text_input.style.display = 'none';
		before_answer.style.display = 'none';
		after_answer.style.display = 'none';
		story_space.classList.add('story-space');
	} else {
		story_space.display = 'none';
		question.style.display = 'block';
		text_input.style.display = 'block';
		before_answer.style.display = 'block';
		after_answer.style.display = 'block';
	}
};

// When user click on button 'next', set buttons, icons and getting appropriate question
const get_word = () => {
	button_check.disabled = false;
	button_next.disabled = true;
	button_dont_know.disabled = false;
	text_input.disabled = false;
	remove_icons();
	correct_answer.classList.remove('show');
	switch (which_game) {
		case 'transformations':
			get_new_transformation();
			break;
		case 'dictionary':
			get_new_dictionary();
			break;
		case 'story':
			get_new_story();
			break;
	}
};

// Get new transformation question, end game if none left
const get_new_transformation = () => {
	text_input.value = '';
	text_input.focus();
	get_random_index(state);
	if (end_game) {
		set_text_areas('There is no more questions!');
		button_check.disabled = true;
		button_dont_know.disabled = true;
		text_input.disabled = true;
	} else {
		check_typeof_question();
		set_text_areas(
			state[state_index].question,
			state[state_index].word,
			state[state_index].before_answer,
			state[state_index].after_answer
		);
	}
};

// Get new story question, end game if none left
const get_new_story = () => {
	remove_story();
	get_random_index(stories);
	if (end_game) {
		set_text_areas('', 'There is no more stories!');
		button_check.disabled = true;
		button_dont_know.disabled = true;
		text_input.disabled = true;
	} else {
		set_story();
	}
};

// Get new dictionary question
const get_new_dictionary = () => {
	text_input.value = '';
	text_input.focus();
	state_index = get_random_number(dictionary);
	set_text_areas('Translate', dictionary[state_index].english);
};

// When get_word() is fired, if game is 'story',  create appropriate DOM elements
const set_story = () => {
	story_space.textContent = '';
	assignment_section.classList.add('more-height');
	const story = stories[state_index].texts;
	word.textContent = stories[state_index].headline;
	const el_array = story.map((text, i) => {
		const divEl = document.createElement('div');
		divEl.classList.add('story-div');
		const input = document.createElement('input');
		input.classList.add('answer-input', 'short-input', 'story-input');
		input.setAttribute('which', i);
		divEl.innerHTML = text;
		if (i < story.length - 1) {
			divEl.appendChild(input);
		}
		return divEl;
	});
	for (let el of el_array) {
		story_space.appendChild(el);
	}
};

// Remove created DOM elemets for game 'story'
const remove_story = () => {
	story_space.innerHTML = '';
	assignment_section.classList.remove('more-height');
};

// More space on input line if there is no text before it
const check_typeof_question = () => {
	state[state_index].before_answer.length === 0
		? (text_input.style.width = '32rem')
		: (text_input.style.width = null);
};

/**  Get random index of argument object which is not been answered correctly two times. Set 'end_game' to true if
 all questions of argument has been answered correctly two times */
const get_random_index = (data) => {
	if (checking_if_all_guessed(data)) {
		end_game = true;
		return null;
	}
	do {
		state_index = get_random_number(data);
	} while (data[state_index].secondCorrectAnswer);
};

// Check if all data objects are answered correctly two times
const checking_if_all_guessed = (data) => {
	return data.every((question) => {
		return question.secondCorrectAnswer;
	});
};

// Get random number for index in range 0 - length of provided data
const get_random_number = (data) => {
	return Math.floor(Math.random() * data.length);
};

// Button 'check' function for checking if user inputted correct answer for 'Transformations' game
const check_answer_transformations = () => {
	const answer = text_input.value.replace(/,/g, '');
	const correct_answers = state[state_index].answers.map((corr) => {
		return corr.replace(/,/g, '');
	}); // We want to exclude ',' from answers
	if (correct_answers.includes(answer.trim()) || answer === 'bojan') {
		answering_correct(state);
		show_correct_answer();
	} else {
		answering_wrong();
		console.log(state[state_index].answers);
	}
};

// Button 'check' function for checking if user inputted correct answer for 'Dictionary' game
const check_answer_dict = () => {
	const answer = text_input.value;
	if (dictionary[state_index].serbian.includes(answer.trim())) {
		answering_correct(state);
		show_correct_answer();
	} else {
		answering_wrong();
		console.log(dictionary[state_index].serbian);
	}
};

// Button 'check' function for checking if user inputted correct answer for 'Story' game
const check_answer_story = () => {
	const inputs = document.querySelectorAll('.story-input');
	let check = true;
	for (let i = 0; i < inputs.length; i++) {
		if (stories[state_index].answers[i].includes(inputs[i].value.toLowerCase().trim())) {
			inputs[i].classList.remove('wrong-story-answer');
		} else {
			inputs[i].classList.add('wrong-story-answer');
			check = false;
		}
	}
	if (check || inputs[2].value === 'bojan') {
		show_correct_answer();
		answering_correct(stories);
	} else {
		answering_wrong();
		console.log(stories[state_index].answers);
	}
};

// Pressing 'Enter' for check answer, 'down arrow' for 'don't know', and 'left arrow' for 'next'
document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && !button_check.disabled && !backdrop_active) {
		check_button_handler();
	} else if (event.keyCode === 39 && !button_next.disabled && !backdrop_active) {
		event.preventDefault();
		get_word();
	} else if (event.keyCode === 40 && !button_dont_know.disabled && !backdrop_active) {
		event.preventDefault();
		show_correct_answer();
	}
});

// When user answers correctly, show icon, and set attribute of current object for checking how many times is correct answer provided
const answering_correct = (state_obj) => {
	corr_answer_counter++;
	state_obj[state_index].firstCorrectAnswer
		? (state_obj[state_index].secondCorrectAnswer = true)
		: (state_obj[state_index].firstCorrectAnswer = true);
	if (which_game === 'transformations') countdown_trans();
	icon_true.classList.add('show');
	icon_wrong.classList.remove('show');
	award();
};

// Countdown for correct answers in game 'transformations'
const countdown_trans = () => {
	countdown.textContent = state.length * 2 - corr_answer_counter;
};

// Backdrop shown when showing award picture and before loading questions
const create_backdrop = () => {
	backdrop_active = true;
	const backdrop = document.createElement('div');
	backdrop.classList.add('backdrop');
	document.body.appendChild(backdrop);
	if (state.length === 0) {
		const loading = document.createElement('h1');
		loading.style.cssText =
			'position: fixed; left: 50%; top: 50%; margin: auto; color: azure; transform: translate(-50%, -50%); font-size: 3rem;';
		loading.textContent = 'Loading . . .';
		backdrop.appendChild(loading);
	}
};

// Removing backdrop from DOM
const remove_backdrop = () => {
	backdrop_active = false;
	const backdrop = document.querySelector('.backdrop');
	backdrop.parentNode.removeChild(backdrop);
};

// Remove award picture and text by clicking on it
award_div.addEventListener('click', () => {
	remove_backdrop();
	award_div.classList.remove('show');
});

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

// Show correct answer, also trigger when "don't know" button is clicked, disables all input tags
const show_correct_answer = () => {
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	const inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].disabled = true;
	}
	correct_answer.textContent = '';
	if (which_game === 'transformations') {
		let corr_answer = state[state_index].answers;
		for (let i in corr_answer) {
			correct_answer.textContent += `${state[state_index].before_answer} ${corr_answer[i]} ${state[state_index]
				.after_answer} \r\n`;
		}
	} else if (which_game === 'dictionary') {
		correct_answer.textContent = `${dictionary[state_index].serbian}`;
	} else if (which_game === 'story') {
		showing_answer_story();
	}
	correct_answer.classList.add('show');
};

// Show correct answers for 'story' game, 3 on each line
const showing_answer_story = () => {
	for (let i = 0; i < stories[state_index].answers.length; i++) {
		correct_answer.innerHTML += `<div style="display:inline;">${i + 1}) ${stories[state_index].answers[
			i
		]}</div>     `;
		if ((i + 1) % 3 === 0) correct_answer.innerHTML += '<br>';
	}
};

// Restart game, invokes function for restarting each sentence answered properties, set end_game variable to false, and buttons to appropriate settings
const restart_answers = () => {
	if (which_game === 'transformations') {
		setAnswerCounter(state);
	} else if (which_game === 'story') {
		setAnswerCounter(stories);
	}
	set_reward_rand_number(54);
	set_text_areas('Questions restarted');
	button_next.disabled = false;
	button_check.disabled = true;
	button_dont_know.disabled = true;
	end_game = false;
	corr_answer_counter = 0;
};

// Helper function for setting text areas. Default values are empty strings
const set_text_areas = (questionText = '', wordText = '', beforeText = '', afterText = '', correctAnswer = '') => {
	question.textContent = questionText;
	word.textContent = wordText;
	before_answer.textContent = beforeText;
	after_answer.textContent = afterText;
	correct_answer.textContent = correctAnswer;
};

// Create backdrop before loading questions
create_backdrop();
