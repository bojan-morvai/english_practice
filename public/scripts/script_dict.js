place_for_words = document.querySelector('.dict-words');

dictionary.map( entry => {
    place_for_words.appendChild(document.createElement('p')).textContent = `${entry.english} - ${entry.serbian}`
})



