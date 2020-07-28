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
const switch_sameWord = document.querySelector('#h1-tab-same-word');
const switch_story = document.querySelector('#h1-tab-story');
const switch_transformations_2 = document.querySelector('#h1-tab-transformations-2');
const switch_transformations_3 = document.querySelector('#h1-tab-transformations-3');
const switch_transformations_4 = document.querySelector('#h1-tab-transformations-4');
const dict_section = document.querySelector('.dict-section');
const assignment_section = document.querySelector('.assignment-section');
const link_dict = document.querySelector('#link-dict');
const award_div = document.querySelector('.award');
const award_pic = document.querySelector('#award-pic');
const award_text = document.querySelector('#award-text');
const sentence_space = document.querySelector('.sentence-space');
const story_space = document.querySelector('.story-space');
const sameWord_space = document.querySelector('.same-word-space');
const countdown = document.querySelector('.countdown');
const skip_story_button = document.querySelector('.skip-story-button');
const reverse_story_button = document.querySelector('.reverse-story-button');

// Headline click 'Same Words' set game to 'same_words'
switch_sameWord.addEventListener('click', () => {
	switch_sameWord.classList.add('active');
	switch_transformations.classList.remove('active');
	switch_story.classList.remove('active');
	switch_transformations_2.classList.remove('active');
	switch_transformations_3.classList.remove('active');
	switch_transformations_4.classList.remove('active');
	which_game = 'same_words';
	trans = false;
	restart_answers();
	restart();
});

// Headline click "Story", set game to 'story'
switch_story.addEventListener('click', () => {
	switch_story.classList.add('active');
	switch_transformations.classList.remove('active');
	switch_sameWord.classList.remove('active');
	switch_transformations_2.classList.remove('active');
	switch_transformations_3.classList.remove('active');
	switch_transformations_4.classList.remove('active');
	which_game = 'story';
	trans = false;
	restart_answers();
	restart();
	reverse_story_button.style.display = 'block';
});

// Headline click 'Transformations', set game to 'transformations'
switch_transformations.addEventListener('click', () => {
	switch_sameWord.classList.remove('active');
	switch_story.classList.remove('active');
	switch_transformations_2.classList.remove('active');
	switch_transformations.classList.add('active');
	switch_transformations_3.classList.remove('active');
	switch_transformations_4.classList.remove('active');
	which_game = 'transformations';
	trans = 'first';
	restart_answers();
	restart();
});

// Headline click 'Transformations 2', set game to 'transformations', and second_trans to true
switch_transformations_2.addEventListener('click', () => {
	switch_sameWord.classList.remove('active');
	switch_story.classList.remove('active');
	switch_transformations.classList.remove('active');
	switch_transformations_2.classList.add('active');
	switch_transformations_3.classList.remove('active');
	switch_transformations_4.classList.remove('active');
	which_game = 'transformations';
	trans = 'second';
	restart_answers();
	restart();
});

switch_transformations_3.addEventListener('click', () => {
	switch_sameWord.classList.remove('active');
	switch_story.classList.remove('active');
	switch_transformations.classList.remove('active');
	switch_transformations_2.classList.remove('active');
	switch_transformations_4.classList.remove('active');
	switch_transformations_3.classList.add('active');
	which_game = 'transformations';
	trans = 'third';
	restart_answers();
	restart();
});

switch_transformations_4.addEventListener('click', () => {
	switch_sameWord.classList.remove('active');
	switch_story.classList.remove('active');
	switch_transformations.classList.remove('active');
	switch_transformations_2.classList.remove('active');
	switch_transformations_3.classList.remove('active');
	switch_transformations_4.classList.add('active');
	which_game = 'transformations';
	trans = 'fourth';
	restart_answers();
	restart();
});

// Important global variables
let state = [];
let stories = [];
let transformations_second = [];
let transformations_third = [];
let transformations_third_a = [];
let transformations_third_b = [];
let state_index = 0;
let which_game = 'transformations';
let end_game = false;
let corr_answer_counter = 0;
let rand_100_award;
let rand_200_award;
let rand_300_award;
let rand_400_award;
let rand_500_award;
let backdrop_active = true;
let trans = 'first';
let trans1_ok,
	trans2_ok,
	trans3_ok,
	story_ok = false;

// transformations_third = transformations_third_local;
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
	} else if (which_game === 'same_words') {
		check_answer_sameWords();
	} else if (which_game === 'story') {
		check_answer_story();
	}
};

// After getting all the data from DB or locally, set counters, rewards and remove backdrop and separate third and fourth transformations
const after_initial_load = (data, which) => {
	set_after_load(which);
	setAnswerCounter(data);
	if (trans1_ok && story_ok && trans2_ok && trans3_ok) {
		countdown_answers();
		countdown.classList.add('show');
		rand_100_award = set_reward_rand_number(110, 191);
		rand_200_award = set_reward_rand_number(210, 291);
		rand_300_award = set_reward_rand_number(310, 391);
		rand_400_award = set_reward_rand_number(410, 491);
		rand_500_award = set_reward_rand_number(510, 591);
		if (backdrop_active) remove_backdrop();
	}
	if (which === 'trans3') {
		separate_third(121);
	}
};

// When data is loaded, set appropriate variables to true
const set_after_load = (which) => {
	switch (which) {
		case 'trans1':
			trans1_ok = true;
			break;
		case 'trans2':
			trans2_ok = true;
			break;
		case 'trans3':
			trans3_ok = true;
			break;
		case 'stories':
			story_ok = true;
			break;
	}
};

// When user click on headline 'Transformations','Dictionary', or 'Story' restart all fields
const restart = () => {
	skip_story_button.disabled = true;
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	correct_answer.classList.remove('show');
	text_input.value = '';
	text_input.disabled = true;
	set_text_areas('Question', 'word');
	remove_icons();
	which_game === 'story'
		? (skip_story_button.style.display = 'block')
		: ((skip_story_button.style.display = 'none'), (reverse_story_button.style.display = 'none'));
	set_game(which_game);
};

// Set visibility of DOM elements for games 'story' or any other kind
const set_game = (game) => {
	remove_story_and_sameWords();
	if (game === 'story') {
		story_space.textContent = "press 'next' to get a story";
		question.style.display = 'none';
		word.textContent = 'Headline';
		text_input.style.display = 'none';
		before_answer.style.display = 'none';
		after_answer.style.display = 'none';
	} else if (game === 'same_words') {
		sameWord_space.textContent = "press 'next' to get an assignment";
		question.style.display = 'none';
		word.textContent = 'Input the same word in all empty spaces';
		text_input.style.display = 'none';
		before_answer.style.display = 'none';
		after_answer.style.display = 'none';
	} else {
		question.textContent = "press 'next' to get a question"
		question.style.display = 'block';
		text_input.style.display = 'block';
		before_answer.style.display = 'block';
		after_answer.style.display = 'block';
	}
};

// When user click on button 'next', set buttons, icons and getting appropriate question
const get_word = () => {
	button_check.disabled = false;
	skip_story_button.disabled = false;
	button_next.disabled = true;
	button_dont_know.disabled = false;
	text_input.disabled = false;
	remove_icons();
	correct_answer.classList.remove('show');
	switch (which_game) {
		case 'transformations':
			get_new_transformation();
			break;
		case 'same_words':
			get_new_sameWords();
			break;
		case 'story':
			get_new_story();
			break;
	}
};

const no_more_questions = (message='There is no more questions!') => {
	remove_story_and_sameWords();
	set_text_areas('', message);
	button_check.disabled = true;
	button_dont_know.disabled = true;
	text_input.disabled = true;
	if (which_game === 'story') skip_story_button.disabled = true;
};

// Remove created DOM elemets for game 'story' and 'same_words'
const remove_story_and_sameWords = () => {
	story_space.innerHTML = '';
	sameWord_space.innerHTML = '';
	assignment_section.classList.remove('more-height-large');
	assignment_section.classList.remove('more-height-small');
	countdown.classList.remove('countdown-story-mode');
};

// More space on input line if there is no text before it
const check_typeof_question = (data) => {
	data[state_index].before_answer.length === 0 ? (text_input.style.width = '32rem') : (text_input.style.width = null);
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
	if (which_game === 'transformations') {
		state_obj[state_index].firstCorrectAnswer = true;
		state_obj[state_index].secondCorrectAnswer = true;
	} else {
		state_obj[state_index].firstCorrectAnswer
			? (state_obj[state_index].secondCorrectAnswer = true)
			: (state_obj[state_index].firstCorrectAnswer = true);
	}
	countdown_answers();
	icon_true.classList.add('show');
	icon_wrong.classList.remove('show');
	award(state_obj);
};

// Countdown for correct answers in games 'transformations' and 'stories'
const countdown_answers = () => {
	let k = 2;
	let data;
	if (which_game === 'transformations') k = 1;
	if (which_game === 'story') {
		data = stories;
	} else if (which_game === 'transformations') {
		data = type_of_transformations();
	} else if (which_game === 'same_words') {
		data = SameWords;
	}
	countdown.textContent = data.length * k - corr_answer_counter;
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
	skip_story_button.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	const inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].disabled = true;
	}
	correct_answer.textContent = '';
	if (which_game === 'transformations') {
		showing_answer_trans();
	} else if (which_game === 'same_words') {
		showing_answer_sameWords();
	} else if (which_game === 'story') {
		showing_answer_story();
	}
	correct_answer.classList.add('show');
};

// Restart game, invokes function for restarting each sentence answered properties, set end_game variable to false, and buttons to appropriate settings
const restart_answers = () => {
	corr_answer_counter = 0;
	if (which_game === 'transformations') {
		const data = type_of_transformations();
		setAnswerCounter(data);
	} else if (which_game === 'story') {
		setAnswerCounter(stories);
		story_space.innerHTML = 'Questions restarted...';
		state_index = 0;
	} else if (which_game === 'same_words') {
		setAnswerCounter(SameWords);
		sameWord_space.innerHTML = 'Questions restarted...';
	}
	countdown_answers();
	set_text_areas('Questions restarted...');
	button_next.disabled = false;
	button_check.disabled = true;
	skip_story_button.disabled = true;
	button_dont_know.disabled = true;
	end_game = false;
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
