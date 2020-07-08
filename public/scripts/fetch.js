const fetchFromDb = (url) => {
	return fetch(url);
};

const checkStatusAndParse = (response) => {
	if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);
	return response.json();
};

const getSentencesData = (data) => {
    if(data.length===0) throw new Error('Database is empty!');
    state = [...data];
    after_initial_load(state,'trans1');
};

const getSentences2Data = (data) => {
    if(data.length===0) throw new Error('Database in empty');
    transformations_second = [...data];
    after_initial_load(transformations_second,'trans2');
}

const getSentences3Data = (data) => {
    if(data.length===0) throw new Error('Database in empty');
    transformations_third = [...data];
    after_initial_load(transformations_third,'trans3');
}

const getStoriesData = (data) => {
    if(data.length===0) throw new Error('Database is empty!');
    stories = [ ...data ];
	after_initial_load(stories,'stories');
}

fetchFromDb('/get-sentences')
    .then(checkStatusAndParse)
    .then(getSentencesData)
    .catch((err)=>{
        console.log(`Something went wrong with sentences fetch, ${err}`);
        console.log('Getting local data...')
        state = [...state_local];
        after_initial_load(state,'trans1');
    });
    
fetchFromDb('/get-stories')
    .then(checkStatusAndParse)
    .then(getStoriesData)
    .catch((err) => {
        console.log(`Something went wrong with stories fetch, ${err}`);
        console.log('Getting local data...');
        stories = [...stories_local];
        after_initial_load(stories,'stories');
    });

fetchFromDb('/get-sentences2')
    .then(checkStatusAndParse)
    .then(getSentences2Data)
    .catch((err) => {
        console.log(`Something wrong with sentences2 fetch, ${err}`);
        console.log('Getting local data...');
        transformations_second = [...transformations_second_local];
        after_initial_load(transformations_second,'trans2');
    })

fetchFromDb('/get-sentences3')
    .then(checkStatusAndParse)
    .then(getSentences3Data)
    .catch((err) => {
        console.log(`Something wrong with sentences3 fetch, ${err}`);
        console.log('Getting local data...');
        transformations_third = [...transformations_third_local];
        after_initial_load(transformations_third,'trans3');
    })
