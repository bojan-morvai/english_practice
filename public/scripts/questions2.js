const transformations_second_local = [
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
        answers: ["what the reason for his sister's opposition to"]
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
        question:"I don't think you'll find that many road atlases have such detailed maps.",
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
        answers: ["explanation has been given for his decision"]
    },
    {
        question:"Sam doesn't think he'll be able to come with us at the weekend.",
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
    {
        question:"Whatever the methods used to obtain the results, drugs were definitely not involved.",
        word:'',
        before_answer:"There was no question",
        after_answer:".",
        answers: ["of drugs being involved whatever the methods used"]
    },
    {
        question:"It was the ability to incorporate loan words that made English so rich in vocabulary.",
        word:'',
        before_answer:"English became rich in vocabulary",
        after_answer:".",
        answers: ["due to its ability to incorporate loan words"]
    },
    {
        question:"The Chairman insisted that the Sales Director resign.",
        word:'',
        before_answer:"The Sales Director",
        after_answer:".",
        answers: ["was made to resign on the insistence of the Chairman"]
    },
    {
        question:"The report has still not been written.",
        word:'',
        before_answer:"The report has yet",
        after_answer:".",
        answers: ["to be written"]
    },
    {
        question:"The latest estimate is that there are six million cats in the UK.",
        word:'',
        before_answer:"There are",
        after_answer:".",
        answers: ["estimated to be six million cats in the UK"]
    },
    {
        question:"Harry pays $50 a week for bed and breakfast.",
        word:'',
        before_answer:"Bed and breakfast",
        after_answer:".",
        answers: ["costs Harry $50 a week"]
    },
    {
        question:"The mistake arose because of inaccurate accounting.",
        word:'',
        before_answer:"It was from",
        after_answer:".",
        answers: ["inaccurate accounting that the mistake arose"]
    },
    {
        question:"The number of people killed in industrial accidents this year is now fifteen.",
        word:'',
        before_answer:"Already this year",
        after_answer:".",
        answers: ["fifteen people have been killed in industrial accidents"]
    },
    {
        question:"",
        word:'',
        before_answer:"Of course I didn't steal the camera - I",
        after_answer:"like that.",
        answers: ["am not","'m not"]
    },
    {
        question:"",
        word:'',
        before_answer:"The climbers were within an hour",
        after_answer:"the summit when they were forced to abandon the climb.",
        answers: ["of reaching"]
    },
    {
        question:"",
        word:'',
        before_answer:"There's no need",
        after_answer:"ironing the pillow cases.",
        answers: ["to bother yourself with"]
    },
    {
        question:"",
        word:'',
        before_answer:"He criticised his wife",
        after_answer:"she does.",
        answers: ["for everything"]
    },
    {
        question:"",
        word:'',
        before_answer:"If you don't like the job, you",
        after_answer:"off resigning.",
        answers: ["would be better","will be better"]
    },
    {
        question:"",
        word:'',
        before_answer:"Why did you get a taxi? I",
        after_answer:"a lift.",
        answers: ["could have given you"]
    },
    {
        question:"When under stress Michael often loses his temper.",
        word:'tendency',
        before_answer:"",
        after_answer:".",
        answers: ["Michael has a tendency to lose his temper when under stress"]
    },
    {
        question:"His ability to lead seems to come naturally.",
        word:'born',
        before_answer:"",
        after_answer:".",
        answers: ["He is a born leader"]
    },
    {
        question:"The west of the country suffered worst in the storm.",
        word:'bore',
        before_answer:"",
        after_answer:".",
        answers: ["The west of the country bore the worst of the storm"]
    },
    {
        question:"Sally Smith became known throughout the country as a result of her popular TV series.",
        word:'household',
        before_answer:"",
        after_answer:".",
        answers: ["Sally Smith became the household name as a result of her popular TV series"]
    },
    {
        question:"When estimating the cost of a holiday, it's important to remember all the extra things that add to the cost.",
        word:'account',
        before_answer:"",
        after_answer:".",
        answers: ["When estimating the cost of a holiday, it's important to take into account all the extra things that add to the cost"]
    },
    {
        question:"John made his teacher very angry.",
        word:'incurred',
        before_answer:"",
        after_answer:".",
        answers: ["John incurred his teacher's anger"]
    },
    {
        question:"The committee finally said what they thought of the plans.",
        word:'verdict',
        before_answer:"",
        after_answer:".",
        answers: ["The committee finally gave their verdict of the plans"]
    },
    {
        question:"He used to be a teacher, so he really knows what it's like in the classroom.",
        word:'firsthand',
        before_answer:"",
        after_answer:".",
        answers: ["He used to be a teacher, so he has firsthand experience of the classroom"]
    },
    {
        question:"Some businessmen spend too much time on their work and alienate themselves from their families.",
        word:'',
        before_answer:"Some businessmen alienate themselves from their families",
        after_answer:".",
        answers: ["by spending too much time on their work"]
    },
    {
        question:"No one could explain why the money had disappeared.",
        word:'',
        before_answer:"No one could account",
        after_answer:".",
        answers: ["for the disappearance of the money"]
    },
    {
        question:"’Press the alarm and I'll shoot!’ shouted the bank robber to the cashier.",
        word:'',
        before_answer:"The bank robber",
        after_answer:".",
        answers: ["threatened to shoot the cashier if he pressed the alarm"]
    },
    {
        question:"The course on marketing appeals to me more than the one on finance.",
        word:'',
        before_answer:"I'd much prefer",
        after_answer:".",
        answers: ["the course on marketing than the one on finance"]
    },
    {
        question:"Mary plans to finish her novel and then go abroad immediately.",
        word:'',
        before_answer:"The moment",
        after_answer:".",
        answers: ["Mary finishes her novel she plans to go abroad"]
    },
    {
        question:"This cough medicine doesn't affect your ability to drive.",
        word:'',
        before_answer:"This cough medicine has no",
        after_answer:".",
        answers: ["effect on your ability to drive"]
    },
    {
        question:"People became aware of the damage to the ozone layer when an enormous hole was discovered over the South Pole.",
        word:'',
        before_answer:"It was the",
        after_answer:".",
        answers: ["discovery of an enormous hole over the South Pole that made people aware of the damage to the ozone layer"]
    },
    {
        question:"Advanced technology cannot operate without special glass.",
        word:'',
        before_answer:"Were it not",
        after_answer:".",
        answers: ["for the special glass advanced technology wouldn't be able to operate"]
    },
    {
        question:"",
        word:'',
        before_answer:"I",
        after_answer:"to be at a meeting this afternoon, but the snow meant I couldn't get out of the house.",
        answers: ["was expected"]
    },
    {
        question:"",
        word:'',
        before_answer:"His piano playing has improved since he",
        after_answer:"two hours a day.",
        answers: ["started practicing"]
    },
    {
        question:"",
        word:'',
        before_answer:"The rock star didn't dare leave his hotel",
        after_answer:"of being mobbed.",
        answers: ["for fear"]
    },
    {
        question:"",
        word:'',
        before_answer:"The house was so badly damaged in the earthquake that it",
        after_answer:"down.",
        answers: ["had to be pulled"]
    },
    {
        question:"",
        word:'',
        before_answer:"They still",
        after_answer:"my letter, although I sent it express.",
        answers: ["haven't received"]
    },
    {
        question:"",
        word:'',
        before_answer:"The plane",
        after_answer:"to arrive at 12:45, so it's already two hours late.",
        answers: ["was scheduled"]
    },
    {
        question:"The committee members said they would remain loyal to the Chairman.",
        word:'pledged',
        before_answer:"",
        after_answer:".",
        answers: ["The committee members pledged their loyalty to the Chairman"]
    },
    {
        question:"The challenger just wasn't talented enough to provide a good contest with the reigning champion.",
        word:'match',
        before_answer:"",
        after_answer:".",
        answers: ["The challenger was no match for the reigning champion"]
    },
    {
        question:"The worst is over now.",
        word:'through',
        before_answer:"",
        after_answer:".",
        answers: ["We are through the worst"]
    },
    {
        question:"She told Arthur exactly what she thought of what he had done.",
        word:'ticking-off',
        before_answer:"",
        after_answer:".",
        answers: ["She gave Arthur a ticking-off of what he had done"]
    },
    {
        question:"The visitors were very impressed by the gardens.",
        word:'impact',
        before_answer:"",
        after_answer:".",
        answers: ["The gardens made a great impact on the visitors"]
    },
    {
        question:"He himself admits to a fear of spiders.",
        word:'admission',
        before_answer:"",
        after_answer:".",
        answers: ["By his admission he is afraid of spiders","On his admission he is afraid of spiders"]
    },
    {
        question:"The headmaster has a very good opinion of the physics teacher.",
        word:'esteem',
        before_answer:"",
        after_answer:".",
        answers: ["The headmaster holds the physics teacher in high esteem"]
    },
    {
        question:"The plumber advised me not to use the faulty appliance.",
        word:'advice',
        before_answer:"",
        after_answer:".",
        answers: ["The plumber's advice to me was not to use the faulty appliance","The plumber's advice to me was against using the faulty appliance"]
    },
    {
        question:"We had to postpone the meeting because of bad weather.",
        word:'',
        before_answer:"The bad weather led to the",
        after_answer:".",
        answers: ["postponement of the meeting"]
    },
    {
        question:"You cannot make use of this offer after 15 December.",
        word:'',
        before_answer:"This offer is only",
        after_answer:".",
        answers: ["valid until 15 December"]
    },
    {
        question:"Please don't smoke here.",
        word:'',
        before_answer:"I'd rather you",
        after_answer:".",
        answers: ["didn't smoke here"]
    },
    {
        question:"Peter remembered and so did Mary.",
        word:'',
        before_answer:"Peter didn't",
        after_answer:".",
        answers: ["forget neither did Mary"]
    },
    {
        question:"’You really must explain why the Finance Director acted as he did,’ said the Chairman.",
        word:'',
        before_answer:"The Chairman insisted on",
        after_answer:".",
        answers: ["an explanation of why the Finance Director acted as he did"]
    },
    {
        question:"I had better leave now.",
        word:'',
        before_answer:"It's time",
        after_answer:".",
        answers: ["I went"]
    },
    {
        question:"’I wasn't the one who falsified the figures,’ said the clerk.",
        word:'',
        before_answer:"The clerk denied",
        after_answer:".",
        answers: ["falsifying the figures"]
    },
    {
        question:"It is the only way we can solve this problem?",
        word:'',
        before_answer:"Isn't there",
        after_answer:"?",
        answers: ["any other way of solving this problem"]
    },
    {
        question:"",
        word:'',
        before_answer:"Mary contacted the police because she kept",
        after_answer:"by noisy neighbours.",
        answers: ["being disturbed"]
    },
    {
        question:"",
        word:'',
        before_answer:"No one was surprised",
        after_answer:". She never stayed in any job for more than a few weeks.",
        answers: ["when she got the sack"]
    },
    {
        question:"",
        word:'',
        before_answer:"It's really cold outside. Don't go out without",
        after_answer:"warm.",
        answers: ["putting on something","wearing something"]
    },
    {
        question:"",
        word:'',
        before_answer:"In the winter she always travels with a spade in the car",
        after_answer:"against getting struck in the snow.",
        answers: ["as a precaution"]
    },
    {
        question:"",
        word:'',
        before_answer:"After",
        after_answer:"her right knee, the player had to withdraw from the tournament.",
        answers: ["injuring"]
    },
    {
        question:"",
        word:'',
        before_answer:"The man was arrested as",
        after_answer:"tip-off.",
        answers: ["a result of a"]
    },
    {
        question:"The Member of Parliament did everything he could to exploit the situation.",
        word:'advantage',
        before_answer:"",
        after_answer:".",
        answers: ["The Member of Parliament did everything he could to take advantage of the situation"]
    },
    {
        question:"The villagers prepared themselves to withstand the coming storm.",
        word:'braced',
        before_answer:"",
        after_answer:".",
        answers: ["The villagers braced themselves for the coming storm"]
    },
    {
        question:"Are you implying that he is a thief?",
        word:'infer',
        before_answer:"",
        after_answer:"?",
        answers: ["Am I to infer he is a thief"]
    },
    {
        question:"The crops were badly affected by the storm",
        word:'effect',
        before_answer:"",
        after_answer:".",
        answers: ["The storm had a bad effect on the crops"]
    },
    {
        question:"All tenants must act in accordance with the regulations about guests.",
        word:'comply',
        before_answer:"",
        after_answer:".",
        answers: ["All tenants must comply to the regulations about guests"]
    },
    {
        question:"He became famous when his first book was published.",
        word:'publication',
        before_answer:"",
        after_answer:".",
        answers: ["He became famous upon the publication of his first book","On publication of his first book, he became famous"]
    },
    {
        question:"If you want to criticise, then the local authorities are the ones to blame.",
        word:'criticism',
        before_answer:"",
        after_answer:".",
        answers: ["If you want to express your criticism then the local authorities are the ones to blame","If you want to voice your criticism then the local authorities are the ones to blame"]
    },
    {
        question:"The authorities had decided they would get tough with dissidents.",
        word:'crackdown',
        before_answer:"",
        after_answer:".",
        answers: ["The authorities had decided on a crackdown on the dissidents"]
    },
]