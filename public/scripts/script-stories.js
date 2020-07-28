// Get new story question, end game if none left
const get_new_story = () => {
	get_story_index(stories);
	if (end_game) {
		no_more_questions('There is no more stories!')
	} else {
		set_story();
	}
};

// When get_word() is fired, if game is 'story', and end_game is false, create appropriate DOM elements
const set_story = () => {
	reverse_story_button.style.display = 'none';
	story_space.textContent = '';
	stories[state_index].answers.length < 10
		? assignment_section.classList.add('more-height-small')
		: assignment_section.classList.add('more-height-large');
	countdown.classList.add('countdown-story-mode');
	const story = stories[state_index].texts;
	word.textContent = stories[state_index].headline;
	const el_array = story.map((text, i) => {
		const divEl = document.createElement('div');
		divEl.classList.add('story-div');
		const inputEl = document.createElement('input');
		inputEl.classList.add('answer-input', 'short-input', 'story-input');
		inputEl.setAttribute('which', i);
		divEl.innerHTML = text;
		if (i < story.length - 1) {
			divEl.appendChild(inputEl);
		}
		return divEl;
	});
	for (let el of el_array) {
		story_space.appendChild(el);
	}
};

/** If the game is 'story' we want to start from beginning. Set 'end_game' to true if
 all questions of argument has been answered correctly two times */
 const get_story_index = (data) => {
	if (checking_if_all_guessed(data)) {
		end_game = true;
		return null;
	}
	if (data[state_index].secondCorrectAnswer) {
		state_index++;
	}
};

// Button 'check' function for checking if user inputted correct answer for 'Story' game
// We start by assuming all answers are correct. If some answer doesn't match, we know all is not guessed correctly 
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
	if (check || inputs[2].value === 'bojan') { // For testing purposes we accept if third answer is 'bojan'
		show_correct_answer();
		answering_correct(stories);
	} else {
		answering_wrong();
		console.log(stories[state_index].answers);
	}
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

// Button 'Skip story' for skipping current story
const skip_story_handler = () => {
	restart();
	story_space.textContent = `Story "${stories[state_index].headline}" skipped`;
	state_index++;
	const counter = stories.length * 2 - corr_answer_counter;
	counter % 2 === 0 ? (corr_answer_counter += 2) : corr_answer_counter++;
	countdown_answers();
};

// Button 'reverse!' for reversing order of stories
const reverse_story_handler = () => {
	stories = stories.reverse();
	story_space.textContent = 'Stories reversed!';
};