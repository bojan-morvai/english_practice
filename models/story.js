const mongoose = require("mongoose");

const StorySchema = new mongoose.Schema({
    headline: String,
    texts: Array,
	answers: Array,
});

module.exports = mongoose.model("Story", StorySchema);