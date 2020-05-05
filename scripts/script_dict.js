place_for_words = document.querySelector('.dict-words');

const dictionary = [
	{ serbian: ['cips','cupi'], english: 'chips' },
	{ serbian: ['krompir'], english: 'potato' },
    { serbian: ['knjiga'], english: 'book' },
];

const created_p = document.createElement('p');


dictionary.map( entry => {
    place_for_words.appendChild(document.createElement('p')).textContent = `${entry.english} - ${entry.serbian}`
})



