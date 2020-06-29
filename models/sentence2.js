const mongoose = require("mongoose");

const SentenceSchema2 = new mongoose.Schema({
    question: String,
    word: String,
	before_answer: String,
    after_answer: String,
    answers: Array
});

module.exports = mongoose.model("Sentence2", SentenceSchema2);