// Get new Same Words question, end game if none are left
const get_new_sameWords = () => {
	get_random_index(SameWords);
	if (end_game) {
		no_more_questions();
	} else {
		set_sameWords();
	}
};

// When get_word() is fired, if game is 'same_words', and end_game is false, create appropriate DOM elements
const set_sameWords = () => {
	sameWord_space.textContent = '';
	const question = SameWords[state_index];
	word.textContent = '';
	const question_array = Object.values(question);
	const question_array_filtered = question_array.filter((el) => {
		return typeof el === 'object';
	});
	const el_array = question_array_filtered.map((element) => {
		const divEl = document.createElement('div');
		const innerDivElBefore = document.createElement('div');
		const innerDivElAfter = document.createElement('div');
		const inputEl = document.createElement('input');
		divEl.style.cssText = 'padding-bottom: 1rem';
		divEl.classList.add('answer-all');
		inputEl.classList.add('answer-input', 'short-input', 'same-word-input');
		innerDivElBefore.textContent = element.before_answer;
		divEl.appendChild(innerDivElBefore);
		divEl.appendChild(inputEl);
		innerDivElAfter.textContent = element.after_answer;
		divEl.appendChild(innerDivElAfter);
		return divEl;
	});
	for (let el of el_array) {
		sameWord_space.appendChild(el);
	}
	set_input_handlers();
};

// Set input fields to automatically fill out as user write in any if them 
const set_input_handlers = () => {
	const inputs = document.querySelectorAll('.same-word-input');
	const inputHandler = (e) => {
		for (let input of inputs) {
			input.value = e.target.value;
		}
	};
	for (let input of inputs) {
		input.addEventListener('input', inputHandler);
		input.addEventListener('propertychange', inputHandler);
	}
	inputs[0].focus();
};

// Button 'check' function for checking if user inputted correct answer for 'same_words' game
const check_answer_sameWords = () => {
	const answer = document.querySelector('.same-word-input').value;
	if (answer.toLowerCase().trim() === SameWords[state_index].answer) {
		show_correct_answer();
		answering_correct(SameWords);
	} else {
		answering_wrong();
		console.log(SameWords[state_index].answer);
	}
};

// Showing correct answer for game 'same_words'
const showing_answer_sameWords = () => {
	for (let i in SameWords[state_index]) {
		if (i === 'first' || i === 'second' || i === 'third') {
			correct_answer.textContent += `${SameWords[state_index][i].before_answer} ${SameWords[state_index]
				.answer} ${SameWords[state_index][i].after_answer} \r\n`;
		}
	}
};