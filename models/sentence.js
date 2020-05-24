const mongoose = require("mongoose");

const SentenceSchema = new mongoose.Schema({
    question: String,
    word: String,
	before_answer: String,
    after_answer: String,
    answers: Array
});

module.exports = mongoose.model("Sentence", SentenceSchema);