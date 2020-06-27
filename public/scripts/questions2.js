const transformations_second = [
    {
        question:"I hope the committee will consider this new information when they meet next week.",
        word:'account',
        before_answer:"I hope this new information",
        after_answer:"when the committee meet next week.",
        answers: ["will be taken into account"]
    },
    {
        question:"James did not find it difficult to answer the interviewer’s questions.",
        word:'coming',
        before_answer:"James had no",
        after_answer:"the interviewer’s questions.",
        answers: ["difficulties in coming up with answers to"]
    },
    {
        question:"The more experienced members of the expedition were made responsible for finding food.",
        word:'change',
        before_answer:"The more experienced members of the expedition",
        after_answer:"finding food.",
        answers: ["were put in charge of"]
    },
    {
        question:"The agent said he no longer thought that Sam Bower would ever appear in a Hollywood film.",
        word:'hope',
        before_answer:"The agent said he",
        after_answer:"appearing in a Hollywood film.",
        answers: ["had given up hope of Sam Bower"]
    },
    {
        question:"My father said that the portrait did not look like him.",
        word:'resemblance',
        before_answer:"My father said that the portrait",
        after_answer:"him.",
        answers: ["bore no resemblance to"]
    },
    {
        question:"Leo doesn't understand why his sister is opposing his plan.",
        word:'what',
        before_answer:"Leo doesn't understand",
        after_answer:"his plan is.",
        answers: ["his sister's opposition to"]
    },
    {
        question:"Sam moved house only because he disliked commuting.",
        word:'dislike',
        before_answer:"But for his",
        after_answer:"moved house.",
        answers: ["dislike of commuting Sam would never have"]
    },
    {
        question:"Katy didn't seem nervous, even though she was making her speech without notes.",
        word:'sign',
        before_answer:"Katy",
        after_answer:", even though she was making her speech without notes.",
        answers: ["showed no sign of nervousness"]
    },
    {
        question:"The manager said he was extremely confident that his team could cope with the challenges ahead.",
        word:'every',
        before_answer:"The manager said he",
        after_answer:"to cope with the challenges ahead.",
        answers: ["had every confidence his team was able"]
    },
    {
        question:"More and more tourists are visiting the ancient towns in the mountains.",
        word:'growth',
        before_answer:"There",
        after_answer:"tourists visiting the ancient towns in the mountains.",
        answers: ["has been growth in the number of"]
    },
    {
        question:"I don't think Harret has any idea how difficult it is to use this apparatus.",
        word:'involved',
        before_answer:"I don't think Harret has any idea",
        after_answer:"this apparatus.",
        answers: ["of the difficulties involved in using"]
    },
    {
        question:"Because the room is not available today, they have rearranged the meeting for the next week.",
        word:'put',
        before_answer:"Because the room is not available today the meeting",
        after_answer:"next week.",
        answers: ["has been put off until"]
    },
    {
        question:"I don’t think you'll find that many road atlases have such detailed maps.",
        word:'few',
        before_answer:"I",
        after_answer:"have such detailed maps.",
        answers: ["think you will find few road atlases"]
    },
    {
        question:"The owner of the shop said that we didn't have to buy anything; we could just look around.",
        word:'obligation',
        before_answer:"The owner of the shop said that we",
        after_answer:"a purchase; we could just look around.",
        answers: ["were under no obligation to make"]
    },
    {
        question:"Martin was too lazy to present any of his ideas at the meeting yesterday.",
        word:'bothered',
        before_answer:"Martin",
        after_answer:"forward any of his ideas at the meeting yesterday.",
        answers: ["couldn't be bothered to put"]
    },
    {
        question:"Once he'd handed in his entry, the only thing Tom could do was wait for the judge's decision.",
        word:'nothing',
        before_answer:"Once he'd handed in his entry, there",
        after_answer:"wait for the judge's decision.",
        answers: ["was nothing Tom could do except"]
    },
    {
        question:"Philip said that his friends were surprised when he suddenly decided to retire.",
        word:'came',
        before_answer:"Philip said that his",
        after_answer:"to his friends.",
        answers: ["sudden decision to retire came as a surprise"]
    },
    {
        question:"Susan doesn't intend to climb that mountain again.",
        word:'has',
        before_answer:"Susan",
        after_answer:"that mountain again.",
        answers: ["has no intention of climbing"]
    },
    {
        question:"How likely is it that Tom will get a place in the team?",
        word:'chances',
        before_answer:"What",
        after_answer:"getting a place in the team?",
        answers: ["are Tom's chances of"]
    },
    {
        question:"It has never been explained why he decided to relinquish his position as director.",
        word:'decision',
        before_answer:"No",
        after_answer:"to relinquish his position as director.",
        answers: ["explination has been given for his decision"]
    },
    {
        question:"Sam doesn’t think he'll be able to come with us at the weekend.",
        word:'prospect',
        before_answer:"Sam sees",
        after_answer:"to come with us at the weekend.",
        answers: ["no prospect of him being able"]
    },
    {
        question:"Harry has worked hard but it remains to be seen whether he’ll win the prize.",
        word:'time',
        before_answer:"Harry has worked hard but",
        after_answer:"whether he'll win the prize.",
        answers: ["only time will tell"]
    },
    {
        question:"Luigi decided not to bring up the subject of his salary at the first meeting.",
        word:'no',
        before_answer:"Luigi decided to",
        after_answer:"the subject of his salary at the first meeting.",
        answers: ["make no mention of"]
    },
    {
        question:"The professor said that, as far as he knows, the results of the research are accurate.",
        word:'best',
        before_answer:"The professor said that",
        after_answer:"the results of the research are accurate.",
        answers: ["to the best of his knowledge"]
    },
    {
        question:"The thing I'd like most would be to visit the art gallery again.",
        word:'more',
        before_answer:"There's",
        after_answer:"the art gallery again.",
        answers: ["nothing I'd like more than to visit","nothing I would like more than to visit"]
    },
    {
        question:"When I shouted at the boys to stop throwing stones they completely ignored me.",
        word:'took',
        before_answer:"The boys",
        after_answer:"when I shouted at them to stop throwing stones.",
        answers: ["took no notice of me"]
    },
    {
        question:"What the lecturer said was not very clear at times.",
        word:'lack',
        before_answer:"There",
        after_answer:"in what the lecturer said at times.",
        answers: ["was a lack of clarity"]
    },
    {
        question:"It was only when it got dark that Paulo decided to make his way back home.",
        word:'fell',
        before_answer:"It was not",
        after_answer:"that Paulo decided to make his way back home.",
        answers: ["until darkness fell"]
    },
    {
        question:"The company avoids employing unqualified staff unless there is no alternative.",
        word:'resort',
        before_answer:"Only",
        after_answer:"employ unqualified staff.",
        answers: ["as a last resort does the company"]
    },
    {
        question:"The careful preparation for the event ensured it was a memorable day for everyone who attended.",
        word:'which',
        before_answer:"The care",
        after_answer:"event ensured it was a memorable day for everyone.",
        answers: ["which went into the preparation for the"]
    },
]