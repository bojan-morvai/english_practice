// Separate third transformations array into two arrays on a given index
const separate_third = (index) => {
	transformations_third_a = transformations_third.slice(0, index);
	transformations_third_b = transformations_third.slice(index);
};

// Check which 'transformations' are selected and return correct one
const type_of_transformations = () => {
	switch (trans) {
		case 'second':
			return transformations_second;
		case 'third':
			return transformations_third_a;
		case 'fourth':
			return transformations_third_b;
		default:
			return state;
	}
};

// Get new transformation question based on which h1 tag is active, end game if none left
const get_new_transformation = () => {
	const data = type_of_transformations();
	text_input.value = '';
	text_input.focus();
	get_random_index(data);
	if (end_game) {
		no_more_questions();
	} else {
		check_typeof_question(data);
		set_text_areas(
			data[state_index].question,
			data[state_index].word,
			data[state_index].before_answer,
			data[state_index].after_answer
		);
	}
};

// Button 'check' function for checking if user inputted correct answer for 'Transformations' and 'Transformations 2' game
const check_answer_transformations = () => {
	const data = type_of_transformations();
	const answer = text_input.value.replace(/,/g, '');
	const correct_answers = data[state_index].answers.map((corr) => {
		return corr.replace(/,/g, '');
	}); // We want to exclude ',' from answers
	if (correct_answers.includes(answer.trim()) || answer === 'bojan') {
		answering_correct(data);
		show_correct_answer();
	} else {
		answering_wrong();
		console.log(data[state_index].answers);
	}
};

// Showing correct answers for game 'transformations'
const showing_answer_trans = () => {
	const data = type_of_transformations();
	let corr_answer = data[state_index].answers;
	for (let i in corr_answer) {
		correct_answer.textContent += `${data[state_index].before_answer} ${corr_answer[i]} ${data[state_index]
			.after_answer} \r\n`;
	}
};