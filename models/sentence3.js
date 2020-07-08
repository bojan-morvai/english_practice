const mongoose = require("mongoose");

const SentenceSchema3 = new mongoose.Schema({
    question: String,
    word: String,
	before_answer: String,
    after_answer: String,
    answers: Array
});

module.exports = mongoose.model("Sentence3", SentenceSchema3);