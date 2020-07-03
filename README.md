JS app for practicing sentences and words for C2 level of English

# Features:
* Uses Vanilla JS, HTML, SCSS
* Switch from practicing sentence transformations, dictionary and completing stories
* Without any 3rd party library (jQuery, React, etc)
* Click on buttons or use keyboard (enter for 'check' button, down arrow for 'I dont know' button, right arrow for 'Next' button)
* Second page that is dictionary, but for now it doesn't have much words in it (customer first asked for this feature, but later changed his mind, so it remains almost empty)
* Uses MongoDB
* Separate js file for entering data into MongoDB
* Separate js files for various scripting tasks - main scipt, accessing DB, awards mechanics, fail-safes if cannot get data from DB
* Uses Node.js with Express and Ejs
* When answered correctly on given transformation question two times, removes that question from game instance
* Removes story question from the game if whole question is answered correctly twice
* Responsible for mobile sizes
