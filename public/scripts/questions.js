const state_local = [
    {
        question: "Dan definitely won't be able to afford a holiday this year.",
        word: 'possibility',
        before_answer: 'There',
        after_answer: 'to afford a holiday this year.',
        answers: ['is no possibility of Dan being able']
    },
    {
        question: "I'm doubtfull that this plan is very realistic.",
        word: 'reservations',
        before_answer:'I',
        after_answer:'realistic this plan is.',
        answers: ['have reservations about how','have some reservations about how','have some reservations as to how','have reservations as to how','have reservations concerning how','have some reservations concerning how']
    },
    {
        question:"Diane finds that creating things stops her from thinking about her work.",
        word:'mind',
        before_answer:'Diane finds that being',
        after_answer:'her work.',
        answers: ['creative takes her mind off']
    },
    {
        question:"I tried not to get involved in that situation.",
        word:'mixed',
        before_answer:'I tried to avoid',
        after_answer:'that situation.',
        answers: ['getting mixed up in']
    },
    {
        question:"After announcing his resignation, he said that he had done nothing improper.",
        word:'deny',
        before_answer:'After annoucing his resignation, he went',
        after_answer:'improper.',
        answers: ['on to deny doing anything', 'on to deny having done anything']
    },
    {
        question:"i had to go to an expert and ask her to advise me.",
        word:'seek',
        before_answer:'I was forced',
        after_answer:'expert.',
        answers: ['to seek advice from an']
    },
    {
        question:"I realised that I was in a terrible position and I wasn't to blame for it.",
        word:'fault',
        before_answer:'Through',
        after_answer:'myself in a terrible position.',
        answers: ['no fault of my own I found']
    },
    {
        question:"Francis chose computing rather than marketing for his next course.",
        word:'preference',
        before_answer:'Francis opted',
        after_answer:'marketing for his next course.',
        answers: ['for computing in preference to']
    },
    {
        question:"Presumably you're still interested in travelling this summer.",
        word:'lost',
        before_answer:'I take',
        after_answer:'travelling this summer.',
        answers: ["it you haven't lost interest in", "it that you haven't lost interest in"]
    },
    {
        question:"The mistake in the accounts was not noticed until the figures were re-checked.",
        word:'light',
        before_answer:'The mistake in the accounts only ',
        after_answer:'the figures were re-checked.',
        answers: ["came to light after"]
    },
    {
        question:"I had no problems at all during my trip to France.",
        word:'plan',
        before_answer:'Everything',
        after_answer:'during my trip to France.',
        answers: ["was according to plan"]
    },
    {
        question:"The heavy downpour brought their picnic to an abrupt end.",
        word:'cut',
        before_answer:'They had to',
        after_answer:'because of the heavy downpour.',
        answers: ["cut their picnic short"]
    },
    {
        question:"The reforms will not succeed unless they are carefully planned.",
        word:'crucial',
        before_answer:'Careful',
        after_answer:'of the reforms.',
        answers: ["planning is crucial to the success"]
    },
    {
        question:"They think that Hellen's brother stole the money.",
        word:'suspected',
        before_answer:"Hellen's brother",
        after_answer:'the money.',
        answers: ["is suspected of stealing"]
    },
    {
        question:"I feel completely exhausted when I've listened to Marion for half-an-hour.",
        word:'leaves',
        before_answer:'Half-an-hour',
        after_answer:'completely exhausted.',
        answers: ["of listening to Marion leaves me feeling"]
    },
    {
        question:"Caren's schoolwork definitely seems to be improving this term.",
        word:'signs',
        before_answer:"Caren's schoolwork",
        after_answer:'this term.',
        answers: ["shows definite signs of improvement"]
    },
    {
        question:"The old railway station is now a museum.",
        word:'turned',
        before_answer:'The old railway station',
        after_answer:'a museum.',
        answers: ["has been turned into"]
    },
    {
        question:"For me, his skill as a negotiator was most impressive.",
        word:'how',
        before_answer:'I was most',
        after_answer:'negotiator he was.',
        answers: ["impressed by how skilful a"]
    },
    {
        question:"Alan felt that it was unforgivable that Jane hadn't replied to his invitation.",
        word:'failure',
        before_answer:'Alan felt that',
        after_answer:'was unforgivable.',
        answers: ["Jane's failure to reply to his invitation"]
    },
    {
        question:"Shula is one of the few students to use the library extensively.",
        word:'majority',
        before_answer:'Unlike',
        after_answer:'extensive use of the library.',
        answers: ["the majority of students, Shula makes"]
    },
    {
        question:"When he was at his most successful, the president had enormous influence.",
        word:'height',
        before_answer:'At',
        after_answer:', the president had enormous influence.',
        answers: ["the height of his success"]
    },
    {
        question:"Jeremy usually plays football on saturdays.",
        word:'habit',
        before_answer:'Jeremy is',
        after_answer:'football on saturdays.',
        answers: ["in the habit of playing"]
    },
    {
        question:"Marisa thought it would be possible for someone to turn the old vase into a plant pot.",
        word:'made',
        before_answer:'Marisa thought that',
        after_answer:'a plant pot.',
        answers: ["the old vase could be made into"]
    },
    {
        question:"I asked Sally to write us a short letter to let us know that she's arrived safely.",
        word:'drop',
        before_answer:'I asked Sally',
        after_answer:"to let us know that she's arrived safely.",
        answers: ["to drop us a line"]
    },
    {
        question:"There are fewer geese on the nature reserve that there were ten years ago.",
        word:'declined',
        before_answer:'The number of geese on the nature reserve',
        after_answer:'ten years.',
        answers: ["has declined in the past"]
    },
    {
        question:"The author descibes his childhood vividly in the book.",
        word:'account',
        before_answer:"The author's book",
        after_answer:'his childhood.',
        answers: ["contains a vivid account of"]
    },
    {
        question:"This plant often gets attacked by insects.",
        word:'prone',
        before_answer:'This plant',
        after_answer:'by insects.',
        answers: ["is prone to getting attacked","is prone to being attacked"]
    },
    {
        question:"Do you have any idea about how Jack made enough money to buy that new sport's car?",
        word:'light',
        before_answer:'Can you',
        after_answer:"Jack made enough money to buy that new sport's car?",
        answers: ["shed some light on how"]
    },
    {
        question:"Kate has finally accepted that their friendship is over.",
        word:'terms',
        before_answer:'Kate has finally',
        after_answer:'their friendship is over.',
        answers: ["come to the terms with the fact that"]
    },
    {
        question:"I wasn't expecting you to begin singing when they asked you to speak.",
        word:'took',
        before_answer:'It',
        after_answer:'singing when they asked you to speak.',
        answers: ["took me by surprise when you began"]
    },
    {
        question:"Janice soon recovered from her cold.",
        word:'get',
        before_answer:'It did',
        after_answer:'her cold.',
        answers: ["not take Janice long to get over"]
    },
    {
        question:"Only when the storm subsided was it clear just how much damage has been done.",
        word:'extent',
        before_answer:'It was not',
        after_answer:'of the damage was clear.',
        answers: ["until the storm subsided that the extent"]
    },
    {
        question:"When he won the scholarship, Alan began to realise just how lucky he was.",
        word:'dawn',
        before_answer:'When he won the scholarship, it began',
        after_answer:'just how lucky he was.',
        answers: ["to dawn on Alan"]
    },
    {
        question:"Only passengers with Gold Star tickets may use the executive lounge.",
        word:'restricted',
        before_answer:'Use of the executive lounge',
        after_answer:'possession of Gold Star tickets.',
        answers: ["is restricted to those passengers in"]
    },
    {
        question:"You should not lock this door for any reason when the building is open to the public.",
        word:'circumstances',
        before_answer:'Under',
        after_answer:'locked when the building is open to the public.',
        answers: ["no circumstances should you leave this door"]
    },
    {
        question:"Helen was always embarrassed by her father's jokes.",
        word:'source',
        before_answer:"Helen's father's jokes",
        after_answer:'her.',
        answers: ["were always a source of embarrassment to"]
    },
    {
        question:"How likely is the new venture to get off the ground.",
        word:'prospects',
        before_answer:'What',
        after_answer:'off the ground.',
        answers: ["are the prospects of the new venture getting"]
    },
    {
        question:"Damien paid little attention to his brother's warnings.",
        word:'notice',
        before_answer:"Damien didn't",
        after_answer:"his brother's warnings.",
        answers: ["take a lot of notice to","take much notice of"]
    },
    {
        question:"In Colin's opinion, he hasn't done anything he should apologise for.",
        word:'concerned',
        before_answer:'As',
        after_answer:", he hasn't done anything he should apologise for.",
        answers: ["far as Colin is concerned"]
    },
    {
        question:"Doctor Potter was offended by some of the remarks that were made about her work.",
        word:'exception',
        before_answer:'Doctor Potter',
        after_answer:'some of the remarks that were made about her work.',
        answers: ["took exception to"]
    },
    {
        question:"She had her own reasons for not telling us anything about her past.",
        word:'dark',
        before_answer:'As to her past, she kept us',
        after_answer:'reasons.',
        answers: ["in dark for her own"]
    },
    {
        question:"I always enjoy this film, no matter how often I see it.",
        word:'tire',
        before_answer:'However',
        after_answer:"this film.",
        answers: ["often I see it, I never tire of"]
    },
    {
        question:"I don't know why Fred made such an extraordinary decision.",
        word:'prompted',
        before_answer:"I don't know",
        after_answer:"a decision.",
        answers: ["what prompted him to make so extraordinary"]
    },
    {
        question:"Inefficient treatment of customers creates a bad impression of the company.",
        word:'reflects',
        before_answer:'Treating customers with a lack',
        after_answer:"the company.",
        answers: ["of efficiency reflects badly on"]
    },
    {
        question:"The organisers planned everything as carefully as they could possibly have done.",
        word:'utmost',
        before_answer:'Everything was planned',
        after_answer:"by the organisers.",
        answers: ["with the utmost care"]
    },
    {
        question:"I promised him that the situation would not be repeated in the future.",
        word:'word',
        before_answer:'I',
        after_answer:"no repetition of the situation in the future.",
        answers: ["gave my word that there would be"]
    },
    {
        question:"Tim tried to be like one of his heroes when he was a young musician.",
        word:'modelled',
        before_answer:'As',
        after_answer:"one of his heroes.",
        answers: ["a young musician Tim modelled himself on"]
    },
    {
        question:"Many people believe that all cats have tails, but they're wrong.",
        word:'popular',
        before_answer:'Contrary',
        after_answer:"cats have tails.",
        answers: ["to the popular belief, not all"]
    },
    {
        question:"Alan was not a confident person, and that was why he was so shy.",
        word:'due',
        before_answer:"Alan's",
        after_answer:"of confidence.",
        answers: ["shyness was due to his lack"]
    },
    {
        question:"'I can't believe it - I've just come into $10000!' James shouted.",
        word:'luck',
        before_answer:"James couldn't",
        after_answer:"came into $10000.",
        answers: ["believe his luck when he"]
    },
    {
        question:"They weren't getting anywhere until John had a bright idea.",
        word:'came',
        before_answer:'They were getting',
        after_answer:"a bright idea.",
        answers: ["nowhere until John came up with"]
    },
    {
        question:"Peter is not very aware of other peoples feelings.",
        word:'lacks',
        before_answer:'Peter',
        after_answer:"comes to other peoples feelings.",
        answers: ["lacks awareness when it"]
    },
    {
        question:"If you don't know what you're doing, you shouldn't dismantle the clock.",
        word:"appart",
        before_answer:"Don't",
        after_answer:"you know what you are doing.",
        answers: ["take the clock apart unless"]
    },
    {
        question:"Will Tom be able to type as well now that he's broken his thumb.",
        word:'affect',
        before_answer:"Will Tom's",
        after_answer:"to type.",
        answers: ["broken thumb affect his ability"]
    },
    {
        question:"Jane will always regret not accepting the opportunity to go to drama school.",
        word:'turned',
        before_answer:"Jane will always wish that",
        after_answer:"the opportunity to go to drama school.",
        answers: ["she hadn't turned down"]
    },
];