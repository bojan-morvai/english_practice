// Set award section img src and h2 text
const set_award = (url, text) => {
	award_pic.setAttribute('src', url);
	award_text.textContent = text;
};

// Showing award image and text
const show_award = () => {
	create_backdrop();
	award_div.classList.add('show');
};

// Awarding by invoking function that shows image and text on given fixed number of correct answers
const award = (data) => {
	let k = 2;
	if(which_game==='transformations' && trans==='first' || trans==='second' || trans==='third') k=1;
	switch (corr_answer_counter) {
		case 49:
			set_award('/images/bunny50.jpg', 'Congratulations! You have 50 correct answers! Bunny is proud of you!');
			break;
		case 99:
			set_award(
				'/images/squ.jpg',
				'Wow, 100 correct answers! Such a smart cookie! Baby squirrel is cheering for you!'
			);
			break;
		case rand_100_award - 1:
			set_award('/images/kitten.jpg', 'Meow, meow, meow! This cute kitten is looking for his mom.');
			break;
		case 199:
			set_award(
				'/images/coon.jpg',
				'Wow, you are showing some real tenacity here! Like this little tenacious raccoon! You are at 200! '
			);
			break;
		case rand_200_award - 1:
			set_award(
				'/images/puppy-kitten.jpg',
				'Cherish your vast knowledge like puppy and kitten cherish their unlikely friendship!'
			);
			break;
		case 299:
			set_award(
				'/images/koala.jpg',
				"You are holding to this like a baby koala onto her mother's back! Keep up the good work!"
			);
			break;
		case 399:
			set_award(
				'./images/hedgehog.jpg',
				"Little more, and soon you'll be able to relax, just like this little fella."
			);
			break;
		case 499:
			set_award(
				'./images/lion.jpg',
				'Strong, proud, magnificent, gorgeous - just like a lion cub! 500 correct answers.'
			);
			break;
		case 599:
			set_award(
				'./images/puppy.jpg',
				'If you are having difficult time moving on, imagine this cute face cheering and waiting for you outside your room.'
			);
			break;
		case rand_300_award - 1:
			set_award('/images/goat.jpg', 'You are showing some real skill! Like a goat climbing a steep slope!');
			break;
		case rand_400_award - 1:
			set_award('/images/red.jpg', 'When all this is over, take a long nap or snuggle, you deserved it!');
			break;
		case rand_500_award - 1:
			set_award(
				'/images/duck.jpg',
				'This duckling is thinking of going to school, if you are to be his teacher...'
			);
			break;
		case data.length * k - 1:
			set_award(
				'/images/fox.jpg',
				'You did it! There is no more questions... Such an impressive achievement! This cute fox is so happy for you!'
			);
			break;
		case data.length * k:
		case 50:
		case 100:
		case 200:
		case 300:
		case 400:
		case 500:
		case 600:
		case rand_100_award:
		case rand_200_award:
		case rand_300_award:
		case rand_400_award:
		case rand_500_award:
			show_award();
			break;
	}
};
