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

const dictionary = [
	{ serbian: ['cips','cupi'], english: 'chips' },
	{ serbian: ['krompir'], english: 'potato' },
	{ serbian: ['knjiga'], english: 'book' }
];

let state_index;
let which_game = 'sentences';

const check_button_handler = () => {
	which_game === 'sentences' ? check_answer_sentences() : check_answer_dict();
};

const restart = () => {
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	correct_answer.classList.remove('show');
	text_input.value = '';
	text_input.disabled = true;
	question.textContent = 'Question';
	word.textContent = 'word';
	before_answer.textContent = '';
	after_answer.textContent = '';
	remove_icons();
	which_game !== 'sentences' ? link_dict.style.display = 'block' : link_dict.style.display = 'none';
};

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
		state_index = get_random_number(state);
		question.textContent = state[state_index].question;
		word.textContent = state[state_index].word;
		before_answer.textContent = state[state_index].before_answer;
		after_answer.textContent = state[state_index].after_answer;
	} else {
		state_index = get_random_number(dictionary);
		question.textContent = 'Translate';
		word.textContent = dictionary[state_index].english;
		// before_answer.textContent = '';
		// after_answer.textContent = '';
	}
};

const get_random_number = (data) => {
	return Math.floor(Math.random() * data.length);
};

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

const check_answer_dict = () => {
    const answer = text_input.value;
    if(dictionary[state_index].serbian.includes(answer.trim())){
        answering_correct();
        show_correct_answer();
    }else{
        answering_wrong();
        console.log(dictionary[state_index].serbian)
    }
}

document.addEventListener('keydown', (event) => {
	if (event.key === 'Enter' && !button_check.disabled) {
		check_button_handler();
	} else if (event.keyCode === 39 && !button_next.disabled) {
		get_word();
	} else if (event.keyCode === 37 && !button_dont_know.disabled) {
		show_correct_answer();
	}
});

answering_correct = () => {
	icon_true.classList.add('show');
	icon_wrong.classList.remove('show');
};

answering_wrong = () => {
	icon_wrong.classList.add('show');
	icon_true.classList.remove('show');
	icon_wrong.style.opacity = 1;
	(function fade() {
		(icon_wrong.style.opacity -= 0.1) < 0 ? (icon_wrong.style.display = 'none') : setTimeout(fade, 150);
	})();
};

remove_icons = () => {
	icon_true.classList.remove('show');
	icon_wrong.classList.remove('show');
};

show_correct_answer = () => {
	button_check.disabled = true;
	button_next.disabled = false;
	button_dont_know.disabled = true;
	text_input.disabled = true;
	let corr_answer = state[state_index].answers;
	correct_answer.textContent = '';
	if (which_game === 'sentences') {
		for (let i in corr_answer) {
			correct_answer.textContent += `${state[state_index].before_answer} ${corr_answer[i]} ${state[state_index]
				.after_answer} \r\n`;
		}
	} else {
		correct_answer.textContent = `${dictionary[state_index].serbian}`;
	}
	correct_answer.classList.add('show');
};

const toogle_display = (show, hide) => {
	show.style.display = 'block';
	hide.style.display = 'none';
};

switch_dict.addEventListener('click', () => {
	switch_dict.classList.add('active');
	switch_sentences.classList.remove('active');
	which_game = 'dictionary';
	restart();
});

switch_sentences.addEventListener('click', () => {
	switch_dict.classList.remove('active');
	switch_sentences.classList.add('active');
	which_game = 'sentences';
	restart();
});


