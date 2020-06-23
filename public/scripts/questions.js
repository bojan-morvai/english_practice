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
        answers: ["what prompted Fred to make so extraordinary"]
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
        word:"apart",
        before_answer:"Don't",
        after_answer:"you know what you are doing.",
        answers: ["take the clock apart unless"]
    },
    {
        question:"Will Tom be able to type as well now that he's broken his thumb?",
        word:'affect',
        before_answer:"Will Tom's",
        after_answer:"to type?",
        answers: ["broken thumb affect his ability"]
    },
    {
        question:"Jane will always regret not accepting the opportunity to go to drama school.",
        word:'turned',
        before_answer:"Jane will always wish that",
        after_answer:"the opportunity to go to drama school.",
        answers: ["she hadn't turned down"]
    },
    {
        question:"John has hinted that he doesn't wish to remain in the group any longer.",
        word:'hint',
        before_answer:"John has",
        after_answer:"wishes to remain in the group.",
        answers: ["given a hint that he no longer"]
    },
    {
        question:"Five actors were competing for the leading role in the play.",
        word:'contention',
        before_answer:"There",
        after_answer:"the leading role in the play.",
        answers: ["were five actors in contention for"]
    },
    {
        question:"She was concentrating so hard on her work that she didn't notice when I came in.",
        word:'wrapped',
        before_answer:"She was",
        after_answer:"that she didn't notice when I came in.",
        answers: ["so wrapped up in her work"]
    },
    {
        question:"They still haven't found out what caused the accident.",
        word:'cause',
        before_answer:"They have yet",
        after_answer:"the accident was.",
        answers: ["to find out what the cause of"]
    },
    {
        question:"I reluctantly signed the contract.",
        word:'signature',
        before_answer:"It was with",
        after_answer:"on the contract.",
        answers: ["reluctance that I put my signature"]
    },
    {
        question:"Suzanne is far superior to me in terms of technical knowledge.",
        word:'match',
        before_answer:"When it comes",
        after_answer:"for Suzanne.",
        answers: ["to technical knowledge I'm no match","to technical knowledge I am no match"]
    },
    {
        question:"Once I made sure there was no reason to be afraid, I went ahead.",
        word:'fear',
        before_answer:"Having satisfied",
        after_answer:", I went ahead.",
        answers: ["myself there was nothing to fear"]
    },
    {
        question:"The manager praised one particular player.",
        word:'singled',
        before_answer:"One particular player",
        after_answer:"praise by the manager.",
        answers: ["was singled out for"]
    },
    {
        question:"He denied the accusation unconvincingly, which made me think he was guilty.",
        word:'led',
        before_answer:"His",
        after_answer:"believe that he was guilty.",
        answers: ["unconvincing denial led me to"]
    },
    {
        question:"There came a time when I completely ran out of patience.",
        word:'stage',
        before_answer:"I",
        after_answer:"more patience left.",
        answers: ["reached the stage when I had no"]
    },
    {
        question:"It is likely that whe will get very angry when she finds out.",
        word:'liable',
        before_answer:"She",
        after_answer:"fit when she finds out.",
        answers: ["is liable to have a"]
    },
    {
        question:"Being inexperienced was a disadvantage to her when she applied for promotion.",
        word:'counted',
        before_answer:"Her",
        after_answer:"when she applied for promotion.",
        answers: ["inexperience counted against her"]
    },
    {
        question:"This is a very serious accusation and you shouldn't treat it so lightly.",
        word:'',
        before_answer:"This is too",
        after_answer:".",
        answers: ["serious an accusation to be treated so lightly"]
    },
    {
        question:"It wasn't hard to persuade the children to watch television.",
        word:'',
        before_answer:"The children needed",
        after_answer:".",
        answers: ["no persuasion to watch television"]
    },
    {
        question:"Wendy said she was against the proposal.",
        word:'',
        before_answer:"Wendy expressed",
        after_answer:".",
        answers: ["her disapproval of the proposal","her objection to the proposal"]
    },
    {
        question:"That woman looks rather like my mother.",
        word:'',
        before_answer:"That woman bears",
        after_answer:".",
        answers: ["a strong resemblance to my mother"]
    },
    {
        question:"You certainly couldn't accuse Steve of being mean.",
        word:'',
        before_answer:"Steve was nothing",
        after_answer:".",
        answers: ["but generous","short of being mean"]
    },
    {
        question:"The rescue attempt had to be called off because the storm was so severe.",
        word:'',
        before_answer:"Such",
        after_answer:".",
        answers: ["was the severity of the storm that the rescue attempt had to be called off"]
    },
    {
        question:"I'm not going any further till I've had a drink.",
        word:'',
        before_answer:"This",
        after_answer:".",
        answers: ["is as far as I am going to go until I have had a drink","is as far as I'm going to go until I have had a drink","is as far as I will go until I have had a drink"]
    },
    {
        question:"It's entirely your own fault that you've put on so much weight over the holiday.",
        word:'',
        before_answer:"You have no one",
        after_answer:".",
        answers: ["else to blame but yourself for putting so much weight over the holiday"]
    },
    {
        question:"The thief was seen by an observant motorist.",
        word:'caught',
        before_answer:"",
        after_answer:".",
        answers: ["An observant motorist caught an eye of the thief"]
    },
    {
        question:"I made an attempt to force the door open but I couldn't do it.",
        word:'go',
        before_answer:"",
        after_answer:".",
        answers: ["I had a go at forcing the door open but I couldn't do it"]
    },
    {
        question:"The Finance Committee will not meet again until mid-December.",
        word:'held',
        before_answer:"",
        after_answer:".",
        answers: ["The Finance Committee meeting will not be held again until mid-December"]
    },
    {
        question:"A new financial arrangement has been made between the management and the unions.",
        word:'struck',
        before_answer:"",
        after_answer:".",
        answers: ["The management and the unions have struck a new financial arrangement"]
    },
    {
        question:"Morris complains all the time about his new boss.",
        word:'stops',
        before_answer:"",
        after_answer:".",
        answers: ["Morris never stops complaining about his new boss"]
    },
    {
        question:"The company director decided that new offices would be too expensive.",
        word:'conclustion',
        before_answer:"",
        after_answer:".",
        answers: ["The company director came to the conclusion that the new offices would be too expensive"]
    },
    {
        question:"The government tried unsuccessfully to secure a large loan.",
        word:'avail',
        before_answer:"",
        after_answer:".",
        answers: ["The government tried to no avail to secure a large loan","The government tried to secure a large loan but to no avail"]
    },
    {
        question:"Please do not send any money with this order form.",
        word:'asked',
        before_answer:"",
        after_answer:".",
        answers: ["Customers are asked not to send any money with this order form","Clients are asked not to send any money with this order form"]
    },
    {
        question:"",
        word:'',
        before_answer:"I don't want",
        after_answer:"be any trouble over paying this bill.",
        answers: ["there to"]
    },
    {
        question:"",
        word:'',
        before_answer:"Because the play differs in style from his other works, it is thought by most experts",
        after_answer:"by Shakespeare.",
        answers: ["not to have been written"]
    },
    {
        question:"",
        word:'',
        before_answer:"That photograph doesn't",
        after_answer:"justice: she's much better-looking.",
        answers: ["do her"]
    },
    {
        question:"",
        word:'',
        before_answer:"John is unbelievably trusting. It's the third time he",
        after_answer:"for the same trick.",
        answers: ["has fallen"]
    },
    {
        question:"",
        word:'',
        before_answer:"Rebecca doesn't speak anything",
        after_answer:"languages as her younger brother.",
        answers: ["like as many"]
    },
    {
        question:"",
        word:'',
        before_answer:"Mrs Brooks told the doctor that she",
        after_answer:"from headaches for several days.",
        answers: ["had been suffering"]
    },
    {
        question:"Selena really has no idea of the difficulty of finding a parking place.",
        word:'how',
        before_answer:"Little does",
        after_answer:"find a parking place.",
        answers: ["Selena know how difficult is to","Selena know how difficult it was to"]
    },
    {
        question:"The first candidate impressed the interviewers immediately.",
        word:'made',
        before_answer:"The first candidate",
        after_answer:"the interviewers.",
        answers: ["made an immediate impression on"]
    },
    {
        question:"I felt relaxed at Gita's house because her parents greeted me so warmly.",
        word:'ease',
        before_answer:"Gita's parents",
        after_answer:"the warmth of their greeting.",
        answers: ["put me at ease with"]
    },
    {
        question:"The area was completely devoid of vegetation.",
        word:'whatsoever',
        before_answer:"There",
        after_answer:"the area.",
        answers: ["was no vegetation whatsoever in"]
    },
    {
        question:"No matter what happens, we will never do business with that firm again.",
        word:'ever',
        before_answer:"Under",
        after_answer:"with that firm again.",
        answers: ["no circumstances will we ever do business"]
    },
    {
        question:"John concluded that he should take the job.",
        word:'came',
        before_answer:"John",
        after_answer:"he should take the job.",
        answers: ["came to the conclusion that"]
    },
    {
        question:"Oskar didn't feel like going out last night.",
        word:'mood',
        before_answer:"Oskar",
        after_answer:"last night.",
        answers: ["was not in the mood to go out","was not in the mood for going out"]
    },
    {
        question:"The news that the Prime Minister had resigned came as a great shock to everyone.",
        word:'aback',
        before_answer:"Everyone",
        after_answer:"Prime Minister's resignation.",
        answers: ["was taken aback by the"]
    },
    {
        question:"So that we would be able to leave the room quickly, Matthew stood by the door.",
        word:'positioned',
        before_answer:"Matthew",
        after_answer:"as to be able to leave the room quickly.",
        answers: ["positioned himself by the door"]
    },
    {
        question:"In my opinion, it was an absolute miracle that they survived the accident.",
        word:'short',
        before_answer:"The fact that they survived the accident was",
        after_answer:", in my opinion.",
        answers: ["nothing short of a miracle"]
    },
    {
        question:"I tried as hard as I could to make sure that this problem would not arise.",
        word:'power',
        before_answer:"I",
        after_answer:"this problem from arising.",
        answers: ["did everything in my power to stop"]
    },
    {
        question:"I didn't think it was reasonable of you to complain so much about the service.",
        word:'justified',
        before_answer:"I don't think you",
        after_answer:"fuss about the service.",
        answers: ["were justified in making such a"]
    },
    {
        question:"Laura was faced with a lot of problems during her childhood.",
        word:'contend',
        before_answer:"Lora had a",
        after_answer:"during her childhood.",
        answers: ["lot of problems to contend with"]
    },
    {
        question:"The audience suddenly started to applaud loudly.",
        word:'sudden',
        before_answer:"All",
        after_answer:"from the audience.",
        answers: ["of a sudden, there was loud applause"]
    },
    {
        question:"Immediately after winning the race, Sandy began training for the next one.",
        word:'had',
        before_answer:"No",
        after_answer:"she began training for the next one.",
        answers: ["sooner had Sandy won the race than"]
    },
    {
        question:"When a novel is made into a film, the author may have to tolerate changes to his or her original work.",
        word:'put',
        before_answer:"When a novel is made into a film, the author may have no choice",
        after_answer:"being made to his or her original work.",
        answers: ["but to put up with changes"]
    },
    {
        question:"The newspaper article said that the runner wasn't old enough for international competitions.",
        word:'too',
        before_answer:"The newspaper article described",
        after_answer:"internationally.",
        answers: ["the runner as too young to compete"]
    },
    {
        question:"Owing to the companie's financial problems, several of their retail outlets were closed.",
        word:'resulted',
        before_answer:"Financial problems",
        after_answer:"several of the companies retail outlets.",
        answers: ["resulted in closure of"]
    },
    {
        question:"Rumour has it that the famous couple are about to announce their engagement.",
        word:'verge',
        before_answer:"The famous couple are said",
        after_answer:"their engagement",
        answers: ["to be on the verge of announcing"]
    },
    {
        question:"You can borrow Dad's car, but don't blame me when it breaks down.",
        word:'hold',
        before_answer:"You can borrow Dad's car but",
        after_answer:"breaking down.",
        answers: ["don't hold me responsible for its"]
    },
    {
        question:"It's unfortunate that I came to see him when he wasn't here.",
        word:'going',
        before_answer:"If I",
        after_answer:"here, I wouldn't have come.",
        answers: ["had known he wasn't going to be"]
    },
    {
        question:"In order to discover how the disagreement had started, Mary talked to each child separately.",
        word:'one',
        before_answer:"Mary talked to the children",
        after_answer:"attempt to discover how the disagreement had started.",
        answers: ["one by one in her"]
    },
    {
        question:"Kim hasn't had as much success with her project as she had hoped.",
        word:'liked',
        before_answer:"Kim",
        after_answer:"more successful.",
        answers: ["would had liked her project to be"]
    },
    {
        question:"It's unfortunate that I came to see him when he wasn't here.",
        word:'going',
        before_answer:"If I",
        after_answer:"here, I wouldn't have come.",
        answers: ["had known he wasn't going to be"]
    },
    {
        question:"David played the main role when the proposal was drafted.",
        word:'instrumental',
        before_answer:"David",
        after_answer:"of the proposal.",
        answers: ["was instrumental in the drafting"]
    },
    {
        question:"If you hadn't changed our original agreement, everything would have been fine.",
        word:'stuck',
        before_answer:"Had",
        after_answer:"agreed, everything would have been fine.",
        answers: ["you stuck to what we originally"]
    },
    {
        question:"I think you should have some consideration for those who don't have lives as privileged as yours.",
        word:'spare',
        before_answer:"I think you should",
        after_answer:"lives aren't as privileged as yours.",
        answers: ["spare a thought for those whose"]
    },
    {
        question:"I don't want to give up while some hope of success remained.",
        word:'defeat',
        before_answer:"I was loath",
        after_answer:"some hope of success.",
        answers: ["to admit defeat while there was still"]
    },
    {
        question:"Afted a long hard journey, I cheered up when I saw my home again.",
        word:'sight',
        before_answer:"After a long hard journey my spirits",
        after_answer:"of my home again.",
        answers: ["rose when I caught sight","were lifted when I caught sight"]
    },
    {
        question:"Your attitude to life would be greatly improved by regular exercise.",
        word:'wonders',
        before_answer:"Regular exercise would",
        after_answer:"at life.",
        answers: ["do wonders for the way you look"]
    },
    {
        question:"Robert was offended when he was left out of the team.",
        word:'exception',
        before_answer:"Robert",
        after_answer:"left out of the team.",
        answers: ["took exception to being"]
    },
    {
        question:"If Tony hadn't interfered, there would have been no problems yesterday, I'm sure.",
        word:'smoothly',
        before_answer:"Without Tony's",
        after_answer:"yesterday, I'm sure.",
        answers: ["interference everything would have run smoothly"]
    },
    {
        question:"He didn't want to get into a position where he might lose all his money.",
        word:'possibility',
        before_answer:"He didn't want to expose",
        after_answer:"all his money.",
        answers: ["himself to the possibility of losing"]
    },
    {
        question:"The company received an enormous number of calls responding to the advert.",
        word:'deluged',
        before_answer:"The company",
        after_answer:"response to the advert.",
        answers: ["was deluged with calls in"]
    },
    {
        question:"The manager said that he had paid attention to my complaints and would take the appropriate action.",
        word:'note',
        before_answer:"The manager said that he had",
        after_answer:"accordingly.",
        answers: ["taken note of my complaints and would take appropriate action"]
    },
    {
        question:"His behaviour at the conference gave him the bad reputation he now has.",
        word:'conducted',
        before_answer:"The way",
        after_answer:"in the bad reputation he now has.",
        answers: ["he conducted himself at the conference has resulted"]
    },
    {
        question:"Her work didn't meet the standards that were considered acceptable.",
        word:'conform',
        before_answer:"Her work",
        after_answer:"acceptable standards.",
        answers: ["didn't conform to what were considered"]
    },
    {
        question:"The film was so controversial that it was banned in several parts of the world.",
        word:'caused',
        before_answer:"Such was",
        after_answer:"the film that it was banned in several parts of the world.",
        answers: ["the controversy caused by"]
    },
    {
        question:"He had no idea what was going happen to him when he walked into that room.",
        word:'store',
        before_answer:"Little",
        after_answer:"him when he walked into that room.",
        answers: ["did he know what was in store for"]
    },
    {
        question:"You shouldn't let trivial matters worry you so much.",
        word:'prey',
        before_answer:"You shouldn't let trivial matters",
        after_answer:"extent.",
        answers: ["prey on you to such an"]
    },
    {
        question:"He became famous but it cost him his privacy.",
        word:'expense',
        before_answer:"His rise",
        after_answer:"of his privacy.",
        answers: ["to fame was at the expense","to fame came at the expense"]
    },
    {
        question:"I helped Ray, with the result that his business became successful.",
        word:'favour',
        before_answer:"I",
        after_answer:"which his business became successful.",
        answers: ["did Ray a favour as a result of","did Ray a favour because of","did Ray a favout due to"]
    },
    {
        question:"I had to wait for the manager for almost an hour before he would see me.",
        word:'best',
        before_answer:"The manager kept",
        after_answer:"an hour before he would see me.",
        answers: ["me waiting for the best part of"]
    },
    {
        question:"A spokesman said that the story was pure speculation.",
        word:'dismissed',
        before_answer:"The story",
        after_answer:"than speculation by a spokesman.",
        answers: ["was dismissed as nothing other","was dismissed as no more"]
    },
    {
        question:"Antony wasn't at all discouraged by this bad experience.",
        word:'put',
        before_answer:"This bad experience",
        after_answer:"least.",
        answers: ["didn't put Antony off in the"]
    },
    {
        question:"Do you mind if I watch you while you paint?",
        word:'objection',
        before_answer:"Do you",
        after_answer:"you while you paint.",
        answers: ["have any objection to my watching"]
    },
    {
        question:"Mick will give you lots of excuses for being late but don't believe any of them.",
        word:'many',
        before_answer:"No",
        after_answer:"Mick gives you for being late, don't believe any of them.",
        answers: ["matter how many excuses"]
    },
    {
        question:"Immediately after his arrival things went wrong.",
        word:'',
        before_answer:"No sooner",
        after_answer:".",
        answers: ["had he arrived than things went wrong"]
    },
    {
        question:"The company lent us an apartment as part of the deal.",
        word:'loan',
        before_answer:"As part of the deal, we were",
        after_answer:"by the company.",
        answers: ["given the loan of an apartment"]
    },
    {
        question:"Coming second didn't make her feel any better because she only wanted to win.",
        word:'consolation',
        before_answer:"Coming second",
        after_answer:"was all that mattered to her.",
        answers: ["was no consolation because winning","was of no consolation because winning","was of no consolation to her because winning","was no consolation to her because winning"]
    },
    {
        question:"Eventually, Jim admitted that he was responsible for the error.",
        word:'owned',
        before_answer:"Eventually, it",
        after_answer:"been responsible for the error.",
        answers: ["was Jim who owned up to having","was Jim that owned up to having","was Jim who owned up that he had","was Jim that owned up that he had"]
    },
    {
        question:"Without your assistance, I could never have done this job so well.",
        word:'assisted',
        before_answer:"Had",
        after_answer:", I could never have done this job so well.",
        answers: ["you not assisted me"]
    },
    {
        question:"It's impossible to predict how long it will take to do this job.",
        word:'telling',
        before_answer:"There is",
        after_answer:"will take.",
        answers: ["no way of telling how long this job"]
    },
    {
        question:"Not many people buy that particular product these days.",
        word:'demand',
        before_answer:"There",
        after_answer:"that particular product these days.",
        answers: ["is not much demand for","is little demand for"]
    },
    {
        question:"Nobody expected Natalia to resign.",
        word:'came',
        before_answer:"Natalia's",
        after_answer:"everyone.",
        answers: ["resignation came as a surprise to"]
    },
    {
        question:"Attendance at the additional evening lectures is not obligatory for students.",
        word:'under',
        before_answer:"Students",
        after_answer:"the additional evening lectures.",
        answers: ["are under no obligation to attend"]
    },
    {
        question:"You must keep this door closed at all times when the red light is illuminated.",
        word:'account',
        before_answer:"On",
        after_answer:"this door when the red light is illuminated.",
        answers: ["no account must you open"]
    },
    {
        question:"You can't find pottery like this in any other part of the country.",
        word:'type',
        before_answer:"This is the only part of the country",
        after_answer:"found.",
        answers: ["where this type of pottery can be"]
    },
    {
        question:"Natalie's friends talked her out of going to the concert alone.",
        word:'dissuaded',
        before_answer:"It was Natalie's friends",
        after_answer:"to the concert alone.",
        answers: ["who dissuaded her from going"]
    },
    {
        question:"As a result of the bad weather, there may be delays on some international flights.",
        word:'subject',
        before_answer:"Due to the bad weather",
        after_answer:"possible delays.",
        answers: ["international flights will be subject to","international flights are subject to"]
    },
    {
        question:"Lorraine was the only student to hand in her assignment on time.",
        word:'exception',
        before_answer:"With",
        after_answer:"of the students handed in their assignment on time.",
        answers: ["the exception of Lorraine none"]
    },
    {
        question:"It never crossed my mind that the studio door might have been locked.",
        word:'occurred',
        before_answer:"It",
        after_answer:"might have locked the studio door.",
        answers: ["never occurred to me that someone"]
    },
    {
        question:"Students at the school are not allowed to go into the Rainbow Disco.",
        word:'bounds',
        before_answer:"The Rainbow Disco",
        after_answer:"students at the school.",
        answers: ["is out of bounds to"]
    },
    {
        question:"'You should have waited for us' the team leader said to John.",
        word:'',
        before_answer:"The team leader criticised",
        after_answer:".",
        answers: ["John for not waiting for them"]
    },
    {
        question:"It's possible that he didn't get my letter.",
        word:'',
        before_answer:"He might",
        after_answer:".",
        answers: ["not have got my letter"]
    },
    {
        question:"The last time it snowed here was six years ago.",
        word:'',
        before_answer:"It",
        after_answer:".",
        answers: ["has been six years since it last snowed here"]
    },
    {
        question:"I only realised what I had I missed when they told me about it later.",
        word:'',
        before_answer:"Only when",
        after_answer:".",
        answers: ["they told me about it later did I realise what I had missed"]
    },
    {
        question:"There weren't nearly as many people there as I had expected.",
        word:'',
        before_answer:"There were far",
        after_answer:".",
        answers: ["fewer people there than I had expected"]
    },
    {
        question:"When the Minister was asked about the strike, he declined to comment.",
        word:'',
        before_answer:"On",
        after_answer:".",
        answers: ["being asked about the strike, the Minister declined to comment"]
    },
    {
        question:"There was no need for you to have gone to all that trouble.",
        word:'',
        before_answer:"You",
        after_answer:".",
        answers: ["shouldn't have gone to all that trouble"]
    },
    {
        question:"Please don't say things like that.",
        word:'',
        before_answer:"I wish",
        after_answer:".",
        answers: ["you didn't say things like that"]
    },
    {
        question:"",
        word:'',
        before_answer:"Her father",
        after_answer:"90 years old this week if he had lived.",
        answers: ["would have been"]
    },
    {
        question:"",
        word:'',
        before_answer:"I can't stand the way he's",
        after_answer:"us what to do.",
        answers: ["telling",'ordering']
    },
    {
        question:"",
        word:'',
        before_answer:"You",
        after_answer:"to the concert with us last night. You would have enjoyed it.",
        answers: ["should have come"]
    },
    {
        question:"",
        word:'',
        before_answer:"",
        after_answer:"so much to go sailing again for ages.'Well, why didn't you say so? We'll go tomorow'.",
        answers: ["I have been wanting","I've been wanting"]
    },
    {
        question:"",
        word:'',
        before_answer:"You are",
        after_answer:"on organising such a successful sales conference.",
        answers: ["to be congratulated"]
    },
    {
        question:"",
        word:'',
        before_answer:"He's thought",
        after_answer:"in 1900, but he's never told anyone exactly how old he is.",
        answers: ["to have been born"]
    },
    {
        question:"I'd like you to wait until they bring out a new model.",
        word:'rather',
        before_answer:"",
        after_answer:".",
        answers: ["I would rather you waited until they bring out a new model"]
    },
    {
        question:"We couldn't find the cat anywhere.",
        word:'nowhere',
        before_answer:"",
        after_answer:".",
        answers: ["The cat was nowhere to be found"]
    },
    {
        question:"What finally ended the dispute was the fact that the union agreed to go to arbitration.",
        word:'agreement',
        before_answer:"",
        after_answer:".",
        answers: ["What finally ended the dispute was the agreement of the union to go to arbitration"]
    },
    {
        question:"He won't let anyone else touch his records.",
        word:'objects',
        before_answer:"",
        after_answer:".",
        answers: ["He objects to his records being touched"]
    },
    {
        question:"The fact that nobody said anything at the time suprised me.",
        word:'what',
        before_answer:"",
        after_answer:".",
        answers: ["What surprised me was the fact that nobody said anything"]
    },
    {
        question:"The referee first blew the whistle 30 minutes into the game.",
        word:'playing',
        before_answer:"",
        after_answer:".",
        answers: ["After 30 minutes of playing the game, the referee blew the whistle"]
    },
    {
        question:"I admitted it was my fault for burning the toast.",
        word:'blame',
        before_answer:"",
        after_answer:".",
        answers: ["I admitted I was to blame for burning the toast"]
    },
    {
        question:"It's becoming extremely expensive to maintain the museum.",
        word:'upkeep',
        before_answer:"",
        after_answer:".",
        answers: ["The upkeep of the museum is becoming extremely expensive"]
    },
    {
        question:"I won't agree until Tom's apologised.",
        word:'',
        before_answer:"Only when",
        after_answer:".",
        answers: ["Tom apologises will I agree","Tom has apologised will I agree"]
    },
    {
        question:"Please don't use the shower after midnight.",
        word:'',
        before_answer:"Would you mind",
        after_answer:".",
        answers: ["not using the shower after midnight"]
    },
    {
        question:"I agree he's a good worker but I still don't think he should get the job.",
        word:'',
        before_answer:"Despite",
        after_answer:".",
        answers: ["the fact that he is a good worker I don't think he should get the job","the fact that he's a good worker I don't think he should get the job"]
    },
    {
        question:"The residents get very angry when bicycles are left in the hallway.",
        word:'',
        before_answer:"The residents all wish bicycles",
        after_answer:".",
        answers: ["were not left in the hallway"]
    },
    {
        question:"'John shouldn't have behaved so badly' said Janet.",
        word:'',
        before_answer:"Janet objected",
        after_answer:".",
        answers: ["to John's bad behaviour","to John behaving badly"]
    },
    {
        question:"Anna failed to understand how serious her illness was until she spoke to the doctor.",
        word:'',
        before_answer:"Not until",
        after_answer:".",
        answers: ["Anna spoke to the doctor did she understand how serious her illness was"]
    },
    {
        question:"They set off to climb the mountain in spite of the fog.",
        word:'',
        before_answer:"Although",
        after_answer:".",
        answers: ["it was foggy they set off to climb the mountain","there was fog they set off to climb the mountain"]
    },
    {
        question:"I do like carrots, but I don't want to eat them every day.",
        word:'',
        before_answer:"Much as",
        after_answer:".",
        answers: ["I like carrots I don't want to eat them every day"]
    },
    {
        question:"We expect he will arrive by nine o'clock.",
        word:'',
        before_answer:"He is",
        after_answer:".",
        answers: ["expected to arrive by nine o'clock"]
    },
    {
        question:"'Would you like some toast?'",
        word:'',
        before_answer:"'No, thank you. I've",
        after_answer:"already'.",
        answers: ["had some"]
    },
    {
        question:"",
        word:'',
        before_answer:"A research project has been set up to find out",
        after_answer:"that couses this strange phenomenon.",
        answers: ["what it is"]
    },
    {
        question:"",
        word:'',
        before_answer:"Inspector Morse questioned ten people,",
        after_answer:"could give him any useful information.",
        answers: ["none of who","none of whom"]
    },
    {
        question:"",
        word:'',
        before_answer:"It's been raining for hours. I wish",
        after_answer:"stop.",
        answers: ["it would"]
    },
    {
        question:"",
        word:'',
        before_answer:"Be careful how you start the motor. There's no",
        after_answer:"happen.",
        answers: ["way of telling what could","way of telling what can"]
    },
    {
        question:"",
        word:'',
        before_answer:"The police investigation",
        after_answer:"eight arrests.",
        answers: ["resulted in","led to"]
    },
    {
        question:"",
        word:'',
        before_answer:"It is quite an easy test, so most students will have",
        after_answer:"completing it in twenty minutes.",
        answers: ["no difficulty in"]
    },
    {
        question:"The managing director suggested not appointing any new staff.",
        word:'freeze',
        before_answer:"",
        after_answer:".",
        answers: ["The managing director suggested a freeze on the appointment of any new staff"]
    },
    {
        question:"They hate each other intensely.",
        word:'sworn',
        before_answer:"",
        after_answer:".",
        answers: ["They are sworn enemies"]
    },
    {
        question:"There's no need to be so upset about the result.",
        word:'shed',
        before_answer:"",
        after_answer:".",
        answers: ["There's no need to shed any tears over the result","There is no need to shed any tears over the result"]
    },
    {
        question:"I'd be grateful if you could have a look at these figures.",
        word:'cast',
        before_answer:"",
        after_answer:".",
        answers: ["I'd be greatful if you could cast an eye over these figures","I'd be greatful if you could cast an eye on these figures"]
    },
    {
        question:"I was pleasantly surprised at the result of the meeting.",
        word:'came',
        before_answer:"",
        after_answer:".",
        answers: ["The result of the meeting came as a pleasant surprise to me"]
    },
    {
        question:"Although he has been very determined, he has never managed to defeat his rival.",
        word:'determination',
        before_answer:"",
        after_answer:".",
        answers: ["Despite his great determination he has never managed to defeat his rival"]
    },
    {
        question:"The arrival time of the plane has been changed to 3.30.",
        word:'re-scheduled',
        before_answer:"",
        after_answer:".",
        answers: ["The plane has been re-scheduled to arrive at 3.30"]
    },
    {
        question:"Without his personal assistant John wouldn't know what to do next.",
        word:'relies',
        before_answer:"",
        after_answer:".",
        answers: ["John relies on his personal assistant to know what to do next"]
    },
    {
        question:"Jack plays football more skilfully than Paul.",
        word:'',
        before_answer:"Jack is",
        after_answer:".",
        answers: ["a more skilfull football player than Paul"]
    },
    {
        question:"'Hand over the bag or I'll shoot you!' Said the robber to the security guard.",
        word:'',
        before_answer:"The robber threatened",
        after_answer:".",
        answers: ["to shoot the security guard if he didn't hand over the bag"]
    },
    {
        question:"Although professor Sweet knew a lot about grammar, he couldn't answer the question.",
        word:'',
        before_answer:"Despite",
        after_answer:".",
        answers: ["knowing a lot about grammar, professor Sweet couldn't answer the question"]
    },
    {
        question:"Mrs Fielding is too old to make such a journey.",
        word:'',
        before_answer:"Mrs Fielding is so",
        after_answer:".",
        answers: ["old that she can't make such a journey"]
    },
    {
        question:"I am always short of time.",
        word:'',
        before_answer:"I never",
        after_answer:".",
        answers: ["have enough time"]
    },
    {
        question:"I had only just watered the garden when it began to rain.",
        word:'',
        before_answer:"Hardly",
        after_answer:".",
        answers: ["had I watered the garden, then it began to rain"]
    },
    {
        question:"I haven't visited any countries in South America except Venezuela.",
        word:'',
        before_answer:"Venezuela is",
        after_answer:".",
        answers: ["the only county in South America that I have visited"]
    },
    {
        question:"We cannot exchange tickets in any circumstances.",
        word:'',
        before_answer:"Under",
        after_answer:".",
        answers: ["no circumstances can we exchange the tickets"]
    },
    {
        question:"Whenever he passed the prison, Bernard remembered the years he has spent there.",
        word:'',
        before_answer:"Bernard couldn’t",
        after_answer:".",
        answers: ["pass the prison without remembering the years he has spent there"]
    },
    {
        question:"If you buy 15 tickets for the same performance, you can have a 25 percent discount.",
        word:'',
        before_answer:"Provided 15",
        after_answer:".",
        answers: ["tickets are bought for the same performance you can have a 25 percent discount"]
    },
    {
        question:"Our profits this year are higher then the have ever been.",
        word:'',
        before_answer:"Under",
        after_answer:".",
        answers: ["have our profits been as high as they are this year"]
    },
    {
        question:"It is my opinion that he is the greatest artist of the twentieth century.",
        word:'',
        before_answer:"I consider him",
        after_answer:".",
        answers: ["to be the greatest artist of the twentieth century"]
    },
    {
        question:"'I did not remove the money from the safe', said Peter.",
        word:'',
        before_answer:"Peter denied",
        after_answer:".",
        answers: ["removing the money from the safe"]
    },
    {
        question:"Macbeth is the play that I enjoy the most.",
        word:'',
        before_answer:"There",
        after_answer:".",
        answers: ["is no play that I enjoy more than Macbeth"]
    },
    {
        question:"Nobody remained on the ship after the captain had left it.",
        word:'',
        before_answer:"The captain",
        after_answer:".",
        answers: ["was the last person to leave this ship"]
    },
    {
        question:"The factory seemed to have been damaged by fire.",
        word:'',
        before_answer:"It looked",
        after_answer:".",
        answers: ["as if the factory has been damaged by the fire"]
    },
    {
        question:"",
        word:'',
        before_answer:"The judge refused to do what the gangsters asked,",
        after_answer:"much money they offered him.",
        answers: ["no matter how"]
    },
    {
        question:"",
        word:'',
        before_answer:"Robert had filled the freezer with food,",
        after_answer:"we were very grateful.",
        answers: ["for which"]
    },
    {
        question:"",
        word:'',
        before_answer:"Mr Archer complained that the hotel",
        after_answer:"the picture in the brochure.",
        answers: ["did not match"]
    },
    {
        question:"",
        word:'',
        before_answer:"All the robbers",
        after_answer:"to ten years in prison.",
        answers: ["were sentenced",'were convicted of a crime']
    },
    {
        question:"",
        word:'',
        before_answer:"Look at these footprints! He",
        after_answer:"come this way!",
        answers: ["must have"]
    },
    {
        question:"",
        word:'',
        before_answer:"Swimming is a good way of",
        after_answer:"yourself fit and healthy.",
        answers: ["keeping"]
    },
    {
        question:"The inspector showed us four potential health hazards.",
        word:'drew',
        before_answer:"",
        after_answer:".",
        answers: ["The inspector drew our attention to four potential health hazards"]
    },
    {
        question:"Margaret desperately wanted Nigel to return.",
        word:'longed',
        before_answer:"",
        after_answer:".",
        answers: ["Margaret longed for Nigel's return","Margaret longed for Nigel to return"]
    },
    {
        question:"Jack failed to keep his promise to help us.",
        word:'let',
        before_answer:"",
        after_answer:".",
        answers: ["Jack let us down by not keeping his promise to help us"]
    },
    {
        question:"Michael is a very poor tennis player.",
        word:'good',
        before_answer:"",
        after_answer:".",
        answers: ["Michael is no good at tennis at all"]
    },
    {
        question:"If we tried to force him to repay the debt, we would be wasting our time.",
        word:'point',
        before_answer:"",
        after_answer:".",
        answers: ["There is no point in trying to force him to repay the debt, we would be wasting our time"]
    },
    {
        question:"The house is dirty because no one bothers to keep it clean.",
        word:'trouble',
        before_answer:"",
        after_answer:".",
        answers: ["No one takes the trouble to keep the house clean"]
    },
    {
        question:"Sheila was dismissed after only three days.",
        word:'sack',
        before_answer:"Under",
        after_answer:".",
        answers: ["Sheila got the sack after only three days"]
    },
    {
        question:"The committee decided that the crash was not the pilot's fault.",
        word:'blame',
        before_answer:"Under",
        after_answer:".",
        answers: ["The committee decided that the pilot was not to blame for the crash"]
    },
    {
        question:"The controller never looked away from the screen.",
        word:'',
        before_answer:"At no time",
        after_answer:".",
        answers: ["did the controller look away from the screen"]
    },
    {
        question:"Miranda said she was sorry that she had not read my report yet.",
        word:'',
        before_answer:"Miranda apologised",
        after_answer:".",
        answers: ["for not reading my report yet","for not having yet read my report"]
    },
    {
        question:"Only the Chairman’s firmness and diplomacy prevented a serious argument between the committee members.",
        word:'',
        before_answer:"If",
        after_answer:".",
        answers: ["it hadn’t been for the Chairman’s firmness and diplomacy, there would have been a serious argument between the committee members.","the Chairman hadn’t been firm and diplomatic, there would have been a serious argument between the committee members."]
    },
    {
        question:"You can stay in the flat for free if you pay the bills.",
        word:'',
        before_answer:"So long as",
        after_answer:".",
        answers: ["you pay the bills you can stay in the flat for free"]
    },
    {
        question:"I didn’t mean to be impolite.",
        word:'',
        before_answer:"It",
        after_answer:".",
        answers: ["was not my intention to be impolite"]
    },
    {
        question:"Despite Jack’s strange clothes, everybody ignored him.",
        word:'',
        before_answer:"Nobody took",
        after_answer:".",
        answers: ["any notice of Jack despite his strange clothes","notice of Jack despite his strange clothes"]
    },
    {
        question:"It was more of a business arrangement than a marriage.",
        word:'',
        before_answer:"It was not",
        after_answer:".",
        answers: ["so much a marriage as a business arrangement"]
    },
    {
        question:"You must not communicate in any way with anyone involved in this case.",
        word:'',
        before_answer:"You must have",
        after_answer:".",
        answers: ["no connection at all with anyone involved in this case","no contact at all with anyone involved in this case"]
    },
    {
        question:"",
        word:'',
        before_answer:"He packed his suitcase the night before",
        after_answer:"to be able to leave early the next morning.",
        answers: ["in order to","so as"]
    },
    {
        question:"",
        word:'',
        before_answer:"Dorothy took a packed lunch",
        after_answer:"she couldn’t get any food on the train.",
        answers: ["in case"]
    },
    {
        question:"",
        word:'',
        before_answer:"Please make cheques",
        after_answer:"Thomas Nelson Ldt.",
        answers: ["out to","payable to"]
    },
    {
        question:"",
        word:'',
        before_answer:"The novel has",
        after_answer:"for television by Thomas Smith.",
        answers: ["been adapted"]
    },
    {
        question:"",
        word:'',
        before_answer:"When he regained consciousness, he",
        after_answer:"himself in hospital..",
        answers: ["found"]
    },
    {
        question:"",
        word:'',
        before_answer:"Captain Kidd found the treasure",
        after_answer:"many man before him searched in vain.",
        answers: ["for which"]
    },
    {
        question:"It is by no means certain that he was responsible for the crime.",
        word:'questionable',
        before_answer:"",
        after_answer:".",
        answers: ["It is questionable whether he was responsible for the crime"]
    },
    {
        question:"Everyone except John will remain on the coach.",
        word:'apart',
        before_answer:"",
        after_answer:".",
        answers: ["Apart from John, everyone will remain on the coach"]
    },
    {
        question:"Joan was not sure if it was a good idea to employ such young staff.",
        word:'misgivings',
        before_answer:"",
        after_answer:".",
        answers: ["Joan had misgivings about employment of such young staff"]
    },
    {
        question:"$500 is too much to pay for that painting.",
        word:'worth',
        before_answer:"",
        after_answer:".",
        answers: ["That painting was not worth paying $500 for"]
    },
    {
        question:"Andrew insisted that the shop gave him his money back.",
        word:'refund',
        before_answer:"",
        after_answer:".",
        answers: ["Andrew insisted on a refund from the shop"]
    },
    {
        question:"Be careful not to waste water",
        word:'economical',
        before_answer:"",
        after_answer:".",
        answers: ["Be economical with water"]
    },
    {
        question:"The performances take place every two hours.",
        word:'intervals',
        before_answer:"",
        after_answer:".",
        answers: ["The performances take place in two hourly intervals"]
    },
    {
        question:"Poverty is only part of the problem.",
        word:'whole',
        before_answer:"",
        after_answer:".",
        answers: ["Poverty is not the whole problem"]
    },
    {
        question:"James Hogg Ltd. is the only shop that supplies this product.",
        word:'exclusive',
        before_answer:"",
        after_answer:".",
        answers: ["James Hogg Ltd. is the exclusive supplier of this products"]
    },
    {
        question:"",
        word:'',
        before_answer:"'This is your emergency signal beacon,' said the instructor,",
        after_answer:"you should not travel in these remote regions'.",
        answers: ["without which"]
    },
    {
        question:"",
        word:'',
        before_answer:"Do you have",
        after_answer:"anyone involved in this case?",
        answers: ["any connection with"]
    },
    {
        question:"",
        word:'',
        before_answer:"",
        after_answer:"I had known that 5 years ago!",
        answers: ["I wish"]
    },
    {
        question:"",
        word:'',
        before_answer:"This machine is not",
        after_answer:"the purpose for which it was designed.",
        answers: ["being used for"]
    },
    {
        question:"",
        word:'',
        before_answer:"If so much money has been spent, why is there",
        after_answer:"for it?",
        answers: ["so little to show","nothing to show"]
    },
    {
        question:"",
        word:'',
        before_answer:"Although he has lived in Canada for ten years, Marino still",
        after_answer:"to the cold winters.",
        answers: ["hasn't got used"]
    },
    {
        question:"At 3 p.m. the visiting football team had still not arrived.",
        word:'sign',
        before_answer:"",
        after_answer:".",
        answers: ["At 3 p.m. there was still no sign of the football team"]
    },
    {
        question:"A summary cannot bring out the high quality of this book.",
        word:'justice',
        before_answer:"",
        after_answer:".",
        answers: ["A summary doesn’t do justice to the high quality of the book"]
    },
    {
        question:"He had no idea at all that the police were watching him.",
        word:'unaware',
        before_answer:"",
        after_answer:".",
        answers: ["He was completely unaware that the police were watching him"]
    },
    {
        question:"Joanne has a rather unsatisfactory relationship with her sisters.",
        word:'get',
        before_answer:"",
        after_answer:".",
        answers: ["Joanne doesn't get on really well with her sisters"]
    },
    {
        question:"Whatever colour you choose, we can supply it.",
        word:'matter',
        before_answer:"",
        after_answer:".",
        answers: ["No matter what colour you choose, we can supply it"]
    },
    {
        question:"Although he is young, there are several ministers even younger than him.",
        word:'means',
        before_answer:"",
        after_answer:".",
        answers: ["Although he is young, he is by no means he is not the youngest minister"]
    },
    {
        question:"As a champion swimmer, she will never be better that she is now.",
        word:'prime',
        before_answer:"",
        after_answer:".",
        answers: ["As a champion swimmer, she is in her prime."]
    },
    {
        question:"You must eat less sugar.",
        word:'intake',
        before_answer:"",
        after_answer:".",
        answers: ["You must reduce your intake of sugar"]
    },
    {
        question:"His father made him study Latin at the age of three.",
        word:'',
        before_answer:"At the age of three, he",
        after_answer:".",
        answers: ["was made to study Latin by his father"]
    },
    {
        question:"I would prefer you to pay in cash.",
        word:'',
        before_answer:"I’d rather",
        after_answer:".",
        answers: ["you paid in cash"]
    },
    {
        question:"Try as I might, I could not understand the code.",
        word:'',
        before_answer:"No matter",
        after_answer:".",
        answers: ["how hard I tried I couldn't understand the code"]
    },
    {
        question:"Professor Helsing knows everything about this manuscript.",
        word:'',
        before_answer:"There is",
        after_answer:".",
        answers: ["nothing professor Helsing doesn't know about this manuscript"]
    },
    {
        question:"If you trade in your existing answerphone, we will reduce the price of a new one by $100.",
        word:'',
        before_answer:"Trade",
        after_answer:".",
        answers: ["in your existing answerphone and we will reduce the price of a new one by $100"]
    },
    {
        question:"Norman was sorry he has lost his temper.",
        word:'',
        before_answer:"Norman regretted",
        after_answer:".",
        answers: ["losing his temper"]
    },
    {
        question:"Although I respect the law, I cannot accept the court's decision.",
        word:'',
        before_answer:"Much",
        after_answer:".",
        answers: ["as I respect the law I cannot accept the court's decision"]
    },
    {
        question:"Is he the only person who knows the secret?",
        word:'',
        before_answer:"Does",
        after_answer:"?",
        answers: ["anyone else know the secret"]
    },
    {
        question:"",
        word:'',
        before_answer:"The man",
        after_answer:"be the ringleader has so far evaded capture.",
        answers: ["believed to"]
    },
    {
        question:"",
        word:'',
        before_answer:"Sonia has only her own greed",
        after_answer:"for what happened.",
        answers: ["to blame"]
    },
    {
        question:"",
        word:'',
        before_answer:"It is an interesting concept but can it",
        after_answer:"practice?",
        answers: ["be put into"]
    },
    {
        question:"",
        word:'',
        before_answer:"If you hadn't seen the policeman, what",
        after_answer:"done?",
        answers: ["would you have"]
    },
    {
        question:"",
        word:'',
        before_answer:"George threatened his neighbour with an axe,",
        after_answer:"he received a six-month prison sentence.",
        answers: ["for which"]
    },
    {
        question:"",
        word:'',
        before_answer:"They hoped that the conference",
        after_answer:"better understanding between nations.",
        answers: ["would lead to"]
    },
    {
        question:"All the other students got their exam results before Maria did.",
        word:'last',
        before_answer:"",
        after_answer:".",
        answers: ["Maria was the last student to get her exam results"]
    },
    {
        question:"When the automatic ticket machines are in operation, there will be no more queues.",
        word:'put',
        before_answer:"",
        after_answer:".",
        answers: ["When the automatic ticket machines are put into operation there will be no more queues","When the automatic ticket machines are put into use there will be no more queues"]
    },
    {
        question:"I tried hard as I could to persuade John not to go.",
        word:'utmost',
        before_answer:"",
        after_answer:".",
        answers: ["I tried my utmost to persuade John not to go","I did my utmost to persuade John not to go"]
    },
    {
        question:"What would happen if we refused to pay?",
        word:'supposing',
        before_answer:"",
        after_answer:"?",
        answers: ["Supposing we refuse to pay, what would happen"]
    },
    {
        question:"Jane is very likely to be promoted.",
        word:'stands',
        before_answer:"",
        after_answer:".",
        answers: ["Jane stands a very good chance of being promoted"]
    },
    {
        question:"After the lecture, Professor Sweet was exhausted. ",
        word:'left',
        before_answer:"",
        after_answer:".",
        answers: ["The lecture left Professor Sweet exhausted"]
    },
    {
        question:"Mr Keating must report to the police daily until his trial begins.",
        word:'required',
        before_answer:"",
        after_answer:".",
        answers: ["Mr Keating is required to report to the police daily until his trial begins"]
    },
    {
        question:"Bernard never stops complaining.",
        word:'nothing',
        before_answer:"",
        after_answer:".",
        answers: ["Bernard does nothing but complain"]
    },
    {
        question:"These are problems which can only be solved politically.",
        word:'',
        before_answer:"These are problems to which",
        after_answer:".",
        answers: ["there is only a political solution"]
    },
    {
        question:"People say that the animals are mistreated in that circus, but I didn’t see it.",
        word:'',
        before_answer:"I didn't see",
        after_answer:".",
        answers: ["any animals being mistreated in that circus"]
    },
    {
        question:"If you practice regularly you will become more skilful.",
        word:'',
        before_answer:"Without",
        after_answer:".",
        answers: ["regular practice you will not become skilful enough"]
    },
    {
        question:"Peter's advice to me was to sell the shares immediately.",
        word:'',
        before_answer:"Peter suggested",
        after_answer:".",
        answers: ["that I should sell my shares immediately"]
    },
    {
        question:"I am sure the exchange rate will not change.",
        word:'',
        before_answer:"In my opinion there",
        after_answer:".",
        answers: ["will be no change in the exchange rate"]
    },
    {
        question:"We can attend the seminar provided we get the manager’s approval.",
        word:'',
        before_answer:"The manager's approval",
        after_answer:".",
        answers: ["is needed if we are to attend the seminar","is necessary if we are to attend the seminar"]
    },
    {
        question:"It sounds very much like a song I heard twenty years ago.",
        word:'',
        before_answer:"It reminds",
        after_answer:".",
        answers: ["me a lot of a song I heard twenty years ago","me a great deal of a song I heard twenty years ago"]
    },
    {
        question:"Sarah thought the traffic warden was a policeman.",
        word:'',
        before_answer:"Sarah mistook",
        after_answer:".",
        answers: ["the traffic warden for a policeman"]
    },
    {
        question:"",
        word:'',
        before_answer:"I",
        after_answer:"my visit to the dentist but it turned out to be even worse that I had expected.",
        answers: ["was dreading"]
    },
    {
        question:"",
        word:'',
        before_answer:"We",
        after_answer:"Tom since eight o’clock and he still hasn't arrived.",
        answers: ["have been waiting"]
    },
    {
        question:"",
        word:'',
        before_answer:"You look upset. What on earth",
        after_answer:"",
        answers: ["has happened?"]
    },
    {
        question:"",
        word:'',
        before_answer:"It",
        after_answer:"Sally that you saw; she's in London.",
        answers: ["can't have been","couldn't have been"]
    },
    {
        question:"",
        word:'',
        before_answer:"I'm tired - I",
        after_answer:"getting up so early.",
        answers: ["am not used to","'m not used to"]
    },
    {
        question:"",
        word:'',
        before_answer:"Sally",
        after_answer:"to come and spend Christmas with us, but she had to change her plans as a result of the bad weather. ",
        answers: ["was going"]
    },
    {
        question:"I couldn't draw because I didn't have the necessary equipment. ",
        word:'lack',
        before_answer:"",
        after_answer:".",
        answers: ["I couldn't draw for lack of the necessary equipment"]
    },
    {
        question:"No special payments have been received by my client.",
        word:'receipt',
        before_answer:"",
        after_answer:".",
        answers: ["My client has not been in receipt of any special payments"]
    },
    {
        question:"He didn’t concentrate on the lecture.",
        word:'attention',
        before_answer:"",
        after_answer:".",
        answers: ["He didn't pay attention to the lecture","He paid no attention to the lecture"]
    },
    {
        question:"The car cannot go faster than 60 m.p.h.",
        word:'speed',
        before_answer:"",
        after_answer:"",
        answers: ["The car has a maximum speed of 60.m.p.h."]
    },
    {
        question:"It was unfair that the ice-skater got such low marks. ",
        word:'deserve',
        before_answer:"",
        after_answer:".",
        answers: ["The ice-skater didn't deserve to get such low marks"]
    },
    {
        question:"There isn't much that Peter doesn't know about modern art.",
        word:'gaps',
        before_answer:"",
        after_answer:".",
        answers: ["There are few gaps in Peter's knowledge of modern art"]
    },
    {
        question:"That painting is nothing like the one I saw at the auction.",
        word:'similarity',
        before_answer:"",
        after_answer:".",
        answers: ["There is no similarity at all between this painting and the one I saw at the auction"]
    },
    {
        question:"William remained silent throughout the meeting.",
        word:'contribution',
        before_answer:"",
        after_answer:".",
        answers: ["William made no contribution to the meeting"]
    },
    {
        question:"He threatened the officers with violence.",
        word:'',
        before_answer:"He made",
        after_answer:".",
        answers: ["threat of violence to the officers"]
    },
    {
        question:"All the children will receive a prize, whatever their score in the competition.",
        word:'',
        before_answer:"No matter",
        after_answer:".",
        answers: ["their score in the competition all the children will receive a prize"]
    },
    {
        question:"Except for the inspector, everyone was in uniform.",
        word:'',
        before_answer:"The inspector was the",
        after_answer:".",
        answers: ["only person not in the uniform"]
    },
    {
        question:"Because of his conviction for fraud, the trainer lost his licence.",
        word:'',
        before_answer:"His conviction for fraud",
        after_answer:".",
        answers: ["cost the trainer his licence"]
    },
    {
        question:"There has never been a time when the English language was not in the state of change.",
        word:'',
        before_answer:"At no time",
        after_answer:".",
        answers: ["has the English language not been in the state of change"]
    },
    {
        question:"Bill found a new job very quickly.",
        word:'',
        before_answer:"It didn't",
        after_answer:".",
        answers: ["take Bill long to find a new job"]
    },
    {
        question:"You’ll have to spend at least $500 to get that sort of camera.",
        word:'',
        before_answer:"You won't",
        after_answer:".",
        answers: ["get that sort of camera for less than $500"]
    },
    {
        question:"Only the managing director and the chief chemist know the details.",
        word:'',
        before_answer:"Knowledge",
        after_answer:".",
        answers: ["of the details is restricted to the managing director and the chief chemist"]
    },
    {
        question:"",
        word:'',
        before_answer:"What a shame the trip",
        after_answer:". I was really looking forward to it.",
        answers: ["has been cancelled"]
    },
    {
        question:"",
        word:'',
        before_answer:"If only you would help, we",
        after_answer:"the work in an hour.",
        answers: ["would finish"]
    },
    {
        question:"",
        word:'',
        before_answer:"I can't offer you any coffee; we seem not to",
        after_answer:".",
        answers: ["have any left"]
    },
    {
        question:"",
        word:'',
        before_answer:"He was wearing dark glass to",
        after_answer:"recognised.",
        answers: ["avoid being"]
    },
    {
        question:"",
        word:'',
        before_answer:"Police",
        after_answer:"to take extra care because of the fog.",
        answers: ["is advising motorists"]
    },
    {
        question:"",
        word:'',
        before_answer:"You can come with me as",
        after_answer:"don't make any noise.",
        answers: ["long as you"]
    },
    {
        question:"He is certainly not a reliable witness.",
        word:'means',
        before_answer:"",
        after_answer:".",
        answers: ["By no means is he a reliable witness","He is by no means a reliable witness"]
    },
    {
        question:"The leader went so fast that no one could keep up with him.",
        word:'pace',
        before_answer:"",
        after_answer:".",
        answers: ["The leader set such a fast pace that no one could keep up with him"]
    },
    {
        question:"Weren't you once the secretary of the Gardering Club?",
        word:'use',
        before_answer:"",
        after_answer:"",
        answers: ["Didn't you use to be the secretary of the Gardering Club?"]
    },
    {
        question:"We have no use for this equipment.",
        word:'nothing',
        before_answer:"",
        after_answer:".",
        answers: ["There is nothing we can use this equipment for"]
    },
    {
        question:"They could not warn people by electronic mail because that might spread the computer virus.",
        word:'fear',
        before_answer:"",
        after_answer:".",
        answers: ["They could not warn people by electronic mail, for fear of spreading the computer virus"]
    },
    {
        question:"Martin's habit of taking risks doesn't fit in with his image as a family man.",
        word:'compatible',
        before_answer:"",
        after_answer:".",
        answers: ["Martin's habit of taking risks is not compatible with his image as a family man"]
    },
    {
        question:"His whole life was one of deceit and treachery.",
        word:'throughout',
        before_answer:"",
        after_answer:".",
        answers: ["Throughout his life he was deceitful and treacherous"]
    }
];