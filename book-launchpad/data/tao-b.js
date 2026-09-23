/* Book Launchpad — The Tao Teh King, study guides (units 42-81). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "tao"; });
if (!_bk) throw new Error("data/canon.js must load before tao-b.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:42,
    summary:"Chapter 42 opens the Tao Teh King's second half with the genealogy of everything: the Tao produced One, One produced Two, Two produced Three, and Three produced all things. Things leave the Obscurity they came from and embrace the Brightness they have emerged into, harmonised by the Breath of Vacancy. Because increase and diminishment trade places, kings and princes adopt the very names men hate — orphan, little virtue, carriage without a nave. The chapter closes on its founding warning: the violent and strong do not die their natural death.",
    context:"Opens the second half of the book with the Tao's cosmology, then roots humility and gentleness in it.",
    keyVerses:[
      { ref:"Ch. 42", text:"The Tao produced One; One produced Two; Two produced Three; Three produced All things." },
      { ref:"Ch. 42", text:"The violent and strong do not die their natural death." }
    ],
    takeaway:"Humble names preserve the great, and violence cuts its own life short — prefer the diminished place.",
    quiz:[
      { q:"According to the chapter's cosmology, what did the Tao produce first?", choices:["Heaven and the earth","The mother of all things","One, which then produced Two","All things in a single act"], a:2, why:"The chapter counts upward: the Tao produced One, One produced Two, Two produced Three, and Three produced all things." },
      { q:"Why do kings and princes call themselves orphans and men of little virtue?", choices:["Because despised names guard them, since things are increased by being diminished","Because the law of their land requires it","Because they have renounced their thrones","Because it flatters the common people"], a:0, why:"Men dislike these designations, yet rulers take them; the chapter explains that some things are increased by being diminished and others diminished by being increased." },
      { q:"What does the chapter offer as 'the basis of my teaching'?", choices:["Embracing Brightness and leaving Obscurity","That the violent and strong do not die their natural death","That kings should double their treasuries","That the Breath of Vacancy can be summoned"], a:1, why:"Laozi says that what other men teach he also teaches — that the violent and strong come to unnatural ends — and will make this the basis of his teaching." }
    ] },
  { n:43,
    summary:"The softest thing in the world, the chapter says, dashes against and overcomes the hardest; and what has no substantial existence enters where there is no crevice. From this Laozi draws the advantage of doing nothing with a purpose: force meets resistance, but the formless passes through every gap, so softness succeeds where hardness fails. The paradox is that the strongest working is the least forced. Yet he admits how rare the insight is — there are few in the world who attain to the teaching without words, and the advantage arising from non-action.",
    context:"Early in Part 2, it states the core physics of wu-wei: formless softness beats rigid force.",
    keyVerses:[
      { ref:"Ch. 43", text:"The softest thing in the world dashes against and overcomes the hardest; that which has no (substantial) existence enters where there is no crevice." },
      { ref:"Ch. 43", text:"There are few in the world who attain to the teaching without words, and the advantage arising from non-action." }
    ],
    takeaway:"Work through gaps, not against walls: what has no substance enters where there is no crevice.",
    quiz:[
      { q:"What enters where there is no crevice, according to the chapter?", choices:["The sharpest blade","That which has no (substantial) existence","A thousand-li journey","The Tao's outflowing operation"], a:1, why:"Only the formless can enter a space with no opening; the chapter sets this beside softness overcoming hardness." },
      { q:"What is the paradox in 'the teaching without words'?", choices:["Words are forbidden to students of the Tao","Only written teaching counts as real","The most effective instruction makes no instruction at all","Silence proves that nothing can be known"], a:2, why:"Few attain it; the teaching works by demonstration rather than speech, just as its advantage comes from non-action." },
      { q:"How should a person act on the lesson that soft overcomes hard?", choices:["Give up planning and pushing, and let the formless way do its work","Choose softer tools for every task","Speak louder so the message sinks in","Harden yourself against every setback"], a:0, why:"Knowing the advantage of the softest thing, one practises non-action — doing nothing with a purpose — instead of forcing." }
    ] },
  { n:44,
    summary:"In verse, chapter 44 asks which you would keep: fame or life, life or wealth. To hold fame and stores while losing life only brings sorrow and pain more near. Who cleaves to fame rejects what is more great; who loves large stores gives up the richer state. The reversal is that clutching is losing — the treasure you grip costs the life that would enjoy it. Contentment ends the argument: who is content needs fear no shame, who knows to stop incurs no blame, and such a person lives long, free from danger.",
    context:"A quiet meditation between chapters on softness and fulness: fame and wealth weighed against life itself.",
    keyVerses:[
      { ref:"Ch. 44", text:"Thus we may see, Who cleaves to fame Rejects what is more great; Who loves large stores Gives up the richer state." },
      { ref:"Ch. 44", text:"Who is content Needs fear no shame. Who knows to stop Incurs no blame. From danger free Long live shall he." }
    ],
    takeaway:"Know when to stop: contentment keeps your life; chasing fame and stores trades the greater for the less.",
    quiz:[
      { q:"Which pairs does the chapter set against each other at the start?", choices:["Fame and life; life and wealth","War and peace","Cold and heat","Light and obscurity"], a:0, why:"The opening asks whether fame or life is dearer, and whether life or wealth would claim adherence." },
      { q:"What reversal does 'Who cleaves to fame / Rejects what is more great' describe?", choices:["Fame grows greater the more it is renounced","Greatness is impossible without fame","The great man must first become famous","Clinging to the lesser good costs you the greater one — life itself"], a:3, why:"Keeping fame and stores means losing life, which brings sorrow and pain more near; the lesser prize destroys the greater." },
      { q:"Which habit follows from the chapter's closing lines?", choices:["Storing up more wealth for old age","Stopping in time and staying content","Seeking renown so as not to be shamed","Guarding possessions more carefully"], a:1, why:"Contentment frees from shame, knowing to stop frees from blame, and the one who keeps life over the rest lives long from danger free." }
    ] },
  { n:45,
    summary:"Chapter 45 teaches by contradiction: who thinks his great achievements poor shall find his vigour long endure; greatest fulness, deemed a void, is never exhausted; what is straight should still seem crooked, greatest art look stupid, and eloquence a stammering scream. The paradox is a rule of preservation — nothing drains a person faster than displaying full power, while apparent reserve keeps the tide flowing. The closing prose grounds it in nature: constant action overcomes cold, being still overcomes heat, and purity and stillness give the correct law to all under heaven.",
    context:"Follows the contentment chapter by describing the sage whose strengths stay hidden in apparent weakness.",
    keyVerses:[
      { ref:"Ch. 45", text:"Who thinks his great achievements poor Shall find his vigour long endure." },
      { ref:"Ch. 45", text:"Constant action overcomes cold; being still overcomes heat. Purity and stillness give the correct law to all under heaven." }
    ],
    takeaway:"Understate your strength: fulness kept seeming empty never runs dry, and stillness sets things right.",
    quiz:[
      { q:"What does the chapter say overcomes heat?", choices:["Constant action","Cold water","Being still","Dazzling brightness"], a:2, why:"The closing lines pair them: constant action overcomes cold, while being still overcomes heat." },
      { q:"Why should the greatest art 'still stupid seem'?", choices:["Because cleverness is genuinely worthless","Because displayed brilliance exhausts itself, while reserve keeps vigour alive","Because people obey the foolish more readily","Because art is inferior to weapons"], a:1, why:"The chapter's contradictions preserve the holder: fulness deemed a void is never exhausted, and seeming poor keeps vigour long enduring." },
      { q:"A student finishes a project brilliantly. Living this chapter, what does she do?", choices:["Let the work speak quietly and avoid showing off her skill","Redo it until everyone praises her","Announce her eloquence at every chance","Push twice as hard to prove her vigour"], a:0, why:"Eloquence kept a stammering scream and art kept seeming stupid preserve the vigour that display would spend." }
    ] },
  { n:46,
    summary:"Two images of the world: when the Tao prevails, swift horses are sent back to draw the dung-carts; when it is disregarded, war-horses breed in the border lands. Peace turns the finest animals to manure carts; ambition turns even breeding stock to war. The chapter names the root: no guilt is greater than to sanction ambition, no calamity greater than to be discontented with one's lot, no fault greater than the wish to be getting. Against all this stands the sufficiency of contentment, an enduring and unchanging sufficiency.",
    context:"Its war-horse image contrasts the Tao-governed world with the ambitious one, launching the contentment chapters.",
    keyVerses:[
      { ref:"Ch. 46", text:"When the Tao prevails in the world, they send back their swift horses to (draw) the dung-carts. When the Tao is disregarded in the world, the war-horses breed in the border lands." },
      { ref:"Ch. 46", text:"There is no guilt greater than to sanction ambition; no calamity greater than to be discontented with one's lot; no fault greater than the wish to be getting." }
    ],
    takeaway:"Discontent breeds war and want; the sufficiency of contentment is the only sufficiency that lasts.",
    quiz:[
      { q:"When the Tao is disregarded in the world, what do the war-horses do?", choices:["Breed in the border lands","Draw the dung-carts","Graze in the palace fields","Carry grain to the granaries"], a:0, why:"The two images reverse each other: Tao prevailing sends swift horses to dung-carts, Tao disregarded breeds war-horses in the border lands." },
      { q:"The chapter calls one thing 'an enduring and unchanging sufficiency.' What?", choices:["A full granary","The sufficiency of contentment","A strong army of war-horses","The balance of taxes"], a:1, why:"Because ambition, discontent, and the wish to be getting are the great guilt, calamity, and fault, only contentment's sufficiency endures unchanged." },
      { q:"A manager keeps wanting one more expansion. What does this chapter warn him of?", choices:["That growth always improves a state","That horses are the key resource","That the wish to be getting is the greatest fault, and discontent the greatest calamity","That he should tax his people more"], a:2, why:"Sanctioned ambition and the wish to be getting breed the border-land world of war-horses; contentment is the enduring sufficiency." }
    ] },
  { n:47,
    summary:"Knowledge here runs inward. Without going outside his door one understands all that takes place under the sky; without looking out from his window one sees the Tao of Heaven. The rule is stark: the farther one goes out from himself, the less he knows. The paradox — travel broadens, yet here it empties — resolves because the Tao is one pattern present everywhere; chasing distant surfaces multiplies opinions, not understanding. Therefore the sages got their knowledge without travelling, gave their right names to things without seeing them, and accomplished their ends without any purpose of doing so.",
    context:"A mystic theory of knowledge near the book's middle: the door and window stand against the traveller's road.",
    keyVerses:[
      { ref:"Ch. 47", text:"Without going outside his door, one understands (all that takes place) under the sky; without looking out from his window, one sees the Tao of Heaven." },
      { ref:"Ch. 47", text:"The farther that one goes out (from himself), the less he knows." }
    ],
    takeaway:"Understanding begins at home: the farther you go out from yourself, the less you truly know.",
    quiz:[
      { q:"How did the sages get their knowledge, in this chapter?", choices:["By questioning every traveller","By long study of records","By sending others to observe for them","Without travelling"], a:3, why:"The sages got knowledge without travelling, named things without seeing them, and accomplished their ends without any purpose of doing so." },
      { q:"What is the reversal in 'The farther that one goes out (from himself), the less he knows'?", choices:["Distance from the self adds ignorance, not knowledge","Walking is faster than riding","The sky cannot be seen from a window","Names change as you travel"], a:0, why:"Ordinary seeking supposes distance brings understanding; the chapter says going out from himself decreases what one knows, since the Tao of Heaven is seen from within." },
      { q:"A reporter wants to understand her whole city. What does this chapter counsel first?", choices:["Visit every street without exception","Begin with quiet insight into the pattern at work under the sky","Interview only officials","Read every newspaper printed"], a:1, why:"Understanding under the sky comes from the inner window, not from multiplying external sightings." }
    ] },
  { n:48,
    summary:"Two curricula are set side by side. He who devotes himself to learning seeks from day to day to increase his knowledge; he who devotes himself to the Tao seeks from day to day to diminish his doing. The student of the Tao diminishes and diminishes again, till he arrives at doing nothing on purpose — and there, at the point of non-action, there is nothing which he does not do. The paradox resolves as clearing: removing forced interference lets the Tao work, so the empire is won by giving oneself no trouble about it.",
    context:"Defines the Tao's way of study as daily subtraction, opposite to ordinary accumulating learning.",
    keyVerses:[
      { ref:"Ch. 48", text:"He who devotes himself to learning (seeks) from day to day to increase (his knowledge); he who devotes himself to the Tao (seeks) from day to day to diminish (his doing)." },
      { ref:"Ch. 48", text:"He diminishes it and again diminishes it, till he arrives at doing nothing (on purpose). Having arrived at this point of non-action, there is nothing which he does not do." }
    ],
    takeaway:"Subtract until nothing is forced: at the point of non-action there is nothing you do not do.",
    quiz:[
      { q:"What does the student of the Tao seek to do from day to day?", choices:["Increase his knowledge","Diminish his doing","Collect rare implements","Name unseen things"], a:1, why:"Learning increases daily, but the Tao's devotee diminishes his doing, and again diminishes it, to the point of non-action." },
      { q:"How does 'doing nothing (on purpose)' become 'nothing which he does not do'?", choices:["Idleness makes others work for you","Purpose was an illusion anyway","Once interference stops, the Tao carries every task to completion","Non-action means never finishing anything"], a:2, why:"What is removed is forcing and purpose; with that cleared away, all things get done without his meddling." },
      { q:"A leader is buried in micromanagement. What does this chapter tell him?", choices:["Write stricter rules for each task","Double his hours of supervision","Delegate only to relatives","Give up taking trouble over the end, and what he would possess can be got"], a:3, why:"He who gets all under heaven does so by giving himself no trouble with that end; taking that trouble disqualifies him." }
    ] },
  { n:49,
    summary:"The sage has no invariable mind of his own; he makes the mind of the people his mind. To those who are good to him he is good, and to those who are not good he is also good — and thus all get to be good. The same holds for sincerity: he answers the insincere with sincerity, and all get to be sincere. What looks like indecision is openness without a fixed programme; the sage keeps his mind indifferent to all, the people keep their eyes and ears on him, and he deals with them all as his children.",
    context:"Portrays the ruler of the second half: a mind empty of its own fixedness, filled with the people's.",
    keyVerses:[
      { ref:"Ch. 49", text:"The sage has no invariable mind of his own; he makes the mind of the people his mind." },
      { ref:"Ch. 49", text:"To those who are good (to me), I am good; and to those who are not good (to me), I am also good;--and thus (all) get to be good." }
    ],
    takeaway:"Return goodness and sincerity even for their absence, until all get to be good and sincere.",
    quiz:[
      { q:"Whose mind does the sage make his own?", choices:["The mind of the people","The mind of Heaven's mandarins","The mind of his enemies","The mind of the ancient kings"], a:0, why:"Having no invariable mind of his own, the sage takes the mind of the people as his mind." },
      { q:"What is the point of being good 'to those who are not good (to me)'?", choices:["To shame them into obedience","To record their debts for later","That all may come to be good, not only the already good","To prove the sage's superiority"], a:2, why:"The repeated formula ends the same way each time: thus all get to be good, and thus all get to be sincere." },
      { q:"A classmate treats you unfairly. Practising this chapter means:", choices:["Cutting him off completely","Meeting him with goodness and sincerity all the same","Reporting him at once","Matching his behaviour toward you"], a:1, why:"The sage is good and sincere even to the not-good and the insincere, dealing with all as his children." }
    ] },
  { n:50,
    summary:"Of every ten, three are ministers of life and three are ministers of death. Worse, three more aim at life yet move toward the land of death — because of their excessive endeavours to perpetuate life. The paradox is that clinging to living invites what it fears. But the one skilful in managing the life entrusted to him travels the land without shunning rhinoceros or tiger and enters a host without avoiding buff coat or sharp weapon. The horn, the claws, and the point find no opening, because in him there is no place of death.",
    context:"A meditation on life and death in Part 2: over-clutching life opens the door to its opposite.",
    keyVerses:[
      { ref:"Ch. 50", text:"There are also three in every ten whose aim is to live, but whose movements tend to the land (or place) of death. And for what reason? Because of their excessive endeavours to perpetuate life." },
      { ref:"Ch. 50", text:"The rhinoceros finds no place in him into which to thrust its horn, nor the tiger a place in which to fix its claws, nor the weapon a place to admit its point." }
    ],
    takeaway:"Hold life loosely and skilfully: leave no place of death in you for horn, claw, or point to enter.",
    quiz:[
      { q:"Why do the third group, whose aim is to live, move toward the land of death?", choices:["They refuse all food and drink","They are born unlucky","Because of their excessive endeavours to perpetuate life","Because they travel in war-horses"], a:2, why:"The chapter gives the reason directly: their movements tend to death precisely because they strive too hard to preserve life." },
      { q:"What reversal explains why weapons cannot pierce the skilful liver?", choices:["Having no place of death in him, he offers no opening to horn, claw, or point","He wears armour too thick to pierce","He fights the rhinoceros and wins","He avoids every battlefield forever"], a:0, why:"Because there is in him no place of death, the rhinoceros, tiger, and weapon find nowhere to enter; he need not even shun them." },
      { q:"How can someone 'manage the life entrusted to him' today?", choices:["Guard health with constant anxiety","Buy every protection available","Never leave the house","Live without desperate grasping, so danger finds no grip"], a:3, why:"The peril comes from excessive endeavours to perpetuate life; the skilful manager walks unharmed because he leaves no place of death in himself." }
    ] },
  { n:51,
    summary:"All things are produced by the Tao and nourished by its outflowing operation; each takes its form according to its nature and is completed according to its condition. That is why all things without exception honour the Tao — not by ordination, but as a spontaneous tribute. The chapter traces the whole nurture: producing, nourishing, growth, completion, maturity, maintenance, overspreading. Its close gives wu-wei its purest form: the Tao produces without claiming possession, carries things through without vaunting its ability, brings to maturity without exercising control — this is called its mysterious operation.",
    context:"A hymn near Part 2's centre: the Tao as maker and nourisher of all, honoured without decree.",
    keyVerses:[
      { ref:"Ch. 51", text:"This honouring of the Tao and exalting of its operation is not the result of any ordination, but always a spontaneous tribute." },
      { ref:"Ch. 51", text:"It produces them and makes no claim to the possession of them; it carries them through their processes and does not vaunt its ability in doing so; it brings them to maturity and exercises no control over them;--this is called its mysterious operation." }
    ],
    takeaway:"Produce without possessing, act without vaunting, complete without controlling — that is mysterious operation.",
    quiz:[
      { q:"Why do all things honour the Tao, in this chapter?", choices:["Because a decree commands it","As a spontaneous tribute, not by ordination","Because it punishes neglect","Because they fear its sharpness"], a:1, why:"The honouring and exalting arise of themselves; the chapter says plainly it is not the result of any ordination." },
      { q:"What makes the Tao's operation 'mysterious' at the chapter's end?", choices:["It brings things to maturity while exercising no control over them","It works only at night","It hides its results from everyone","It conceals the Tao from the good"], a:0, why:"Producing without possessing, carrying through without vaunting, maturing without controlling — that combination is named the mysterious operation." },
      { q:"A gardener's seedlings thrive. Living this chapter, how does she regard them?", choices:["She claims full credit for each plant","She uproots and rearranges them daily","She nourishes them and makes no claim to possess what she raised","She stops watering to test the Tao"], a:2, why:"The Tao's pattern is to nourish and complete without claiming possession, vaunting, or control." }
    ] },
  { n:52,
    summary:"The Tao which originated all under the sky is the mother of them all; finding the mother, we know what her children should be, and guarding the qualities of the mother keeps a person free from peril to the end of life. Then two disciplines: keep the mouth closed and the portals shut, and life is exempt from laborious exertion; keep them open while promoting your affairs, and there is no safety. Smallness and softness carry the secret — perceiving what is small is clear-sightedness; guarding what is soft and tender is strength.",
    context:"Returns to the mother image to teach guarding the source, the mouth, and the small soft things.",
    keyVerses:[
      { ref:"Ch. 52", text:"(The Tao) which originated all under the sky is to be considered as the mother of them all." },
      { ref:"Ch. 52", text:"The perception of what is small is (the secret of) clear-sightedness; the guarding of what is soft and tender is (the secret of) strength." }
    ],
    takeaway:"Guard the mother in you: shut the mouth's waste, watch the small, and hold the soft as strength.",
    quiz:[
      { q:"What is the Tao considered to be, at the chapter's start?", choices:["The eldest of the ancestors","The net of Heaven","The war-horse of the border lands","The mother of all under the sky"], a:3, why:"The chapter opens by calling the Tao the mother of all under the sky; knowing her, we know her children." },
      { q:"Why is 'the guarding of what is soft and tender' called a secret of strength?", choices:["Soft things are easiest to train","What is kept soft and small stays unbroken, while display and forcing spend and endanger life","Softness hides weakness from enemies","Tender plants grow fastest"], a:1, why:"The chapter pairs smallness with clear-sightedness and softness with strength, against the open mouth that spends breath promoting affairs and finds no safety." },
      { q:"Applying the chapter, what habit guards a person 'to the end of his life'?", choices:["Staying close to the mother's qualities instead of chasing affairs with open mouth and breath","Publicising every plan he makes","Seeking the large and neglecting the small","Spending his breath promoting his affairs"], a:0, why:"Knowing himself the mother's child and guarding her qualities, he is free from peril; the open-mouthed promoter has no safety all his life." }
    ] },
  { n:53,
    summary:"Given power to conduct a government by the Great Tao, what would Laozi most fear? A boastful display. The great way itself is very level and easy, but people love the by-ways. Then the satire: courts well kept while fields go ill-cultivated and granaries stand very empty; princes in elegant ornamented robes, a sharp sword at the girdle, pampered in eating and drinking, superabundant in property and wealth. The verdict is instant — such princes may be called robbers and boasters, and their conduct is contrary to the Tao, surely.",
    context:"A plain-spoken social attack in Part 2: display in the palace measured against empty granaries.",
    keyVerses:[
      { ref:"Ch. 53", text:"The great Tao (or way) is very level and easy; but people love the by-ways." },
      { ref:"Ch. 53", text:"They shall wear elegant and ornamented robes, carry a sharp sword at their girdle, pamper themselves in eating and drinking, and have a superabundance of property and wealth;--such (princes) may be called robbers and boasters." }
    ],
    takeaway:"The great way is level and easy; refuse the by-ways of display that rob the fields they starve.",
    quiz:[
      { q:"What does Laozi say he would most fear if he conducted a government by the Great Tao?", choices:["A boastful display","Foreign armies","Flood and famine","His own inexperience"], a:0, why:"Sudden renown and power would tempt him to what he most fears — boastful display." },
      { q:"How does 'The great Tao is very level and easy; but people love the by-ways' work as a paradox?", choices:["The Tao is secretly very hard","By-ways are actually shorter","The easiest road is abandoned for harder ones people wrongly prefer","Level roads are forbidden by law"], a:2, why:"The way needs no struggle, yet people stray into by-ways — the difficulty is preference, not the road." },
      { q:"A council upgrades its offices while the food banks stand empty. This chapter calls that:", choices:["Sound stewardship","Robbery and boasting, contrary to the Tao","An unavoidable expense","A sign the Tao prevails"], a:1, why:"Well-kept courts beside ill-cultivated fields and empty granaries earn the name of robbers and boasters." }
    ] },
  { n:54,
    summary:"What Tao's skilful planter plants can never be uptorn; what his skilful arms enfold can never be borne away; sons will bring sacrifice to his shrine through a lengthening line. The chapter then widens the circle: Tao nursed in one's self makes vigour true; ruling a family by it, what riches accrue; in the neighbourhood, thriving; through the state, good fortune; over the kingdom, men thrive all around. The test is observation: the effect shows in person, family, neighbourhood, state, and kingdom — and Laozi knows it holds all under the sky by this method of observation.",
    context:"Expands cultivation outward from the self to family, neighbourhood, state, and kingdom.",
    keyVerses:[
      { ref:"Ch. 54", text:"What (Tao's) skilful planter plants Can never be uptorn; What his skilful arms enfold, From him can ne'er be borne." },
      { ref:"Ch. 54", text:"How do I know that this effect is sure to hold thus all under the sky? By this (method of observation)." }
    ],
    takeaway:"Plant with the Tao and nothing uproots it: cultivate yourself first, and let the effect widen circle by circle.",
    quiz:[
      { q:"What can never be uptorn, in the opening lines?", choices:["The tallest tower of nine storeys","The sage's written records","What (Tao's) skilful planter plants","The ancient shrine of the kings"], a:2, why:"The verse says what the skilful planter plants can never be uptorn, and what his arms enfold can never be borne from him." },
      { q:"What is the widening scale the chapter traces?", choices:["Village, town, county, empire","Self, neighbour, army, heaven","Sky, earth, water, breath","Person, family, neighbourhood, state, kingdom"], a:3, why:"The effect is seen in the person, in the family, in the neighbourhood, in the state, and in the kingdom." },
      { q:"How does Laozi know the effect 'is sure to hold thus all under the sky'?", choices:["By this method of observation, case by case","Because the ancients decreed it","By testing it in battle","Because the stars foretold it"], a:0, why:"The closing line grounds the claim in observation of the different cases at every scale." }
    ] },
  { n:55,
    summary:"He who has abundantly the attributes of the Tao is like an infant: poisonous insects will not sting him, fierce beasts will not seize him, birds of prey will not strike him. The infant's bones are weak, its sinews soft, yet its grasp is firm; all day it cries without growing hoarse — the perfection of its physical essence and the harmony of its constitution. Knowing this harmony shows the unchanging Tao. The warning follows: all life-increasing arts turn to evil, and when things grow strong they age — contrary to the Tao, and soon ended.",
    context:"Puts the infant at Part 2's heart as the emblem of harmony, against all life-forcing arts.",
    keyVerses:[
      { ref:"Ch. 55", text:"He who has in himself abundantly the attributes (of the Tao) is like an infant." },
      { ref:"Ch. 55", text:"When things have become strong, they (then) become old, which may be said to be contrary to the Tao. Whatever is contrary to the Tao soon ends." }
    ],
    takeaway:"Keep the infant's harmony: don't force strength, for what peaks into strength soon ages and ends.",
    quiz:[
      { q:"Whom does the chapter liken to an infant?", choices:["The newly crowned king","He who has in himself abundantly the attributes of the Tao","The master of war","The ancient planter"], a:1, why:"Abundant attributes of the Tao make a man like the infant whom stings, beasts, and birds of prey cannot harm." },
      { q:"Why is strength treated as a warning sign — 'when things have become strong, they become old'?", choices:["Peaking into strength departs from the Tao's harmony, and what is contrary to the Tao soon ends","Strong things are always unlucky","Age always brings honour","Strength cannot be observed"], a:0, why:"The infant's harmony is the unchanging Tao; the forced strength of life-increasing arts turns to evil and hastens the end." },
      { q:"An athlete trains obsessively to force peak performance. This chapter counsels:", choices:["Redoubling the forcing arts","Ignoring the body entirely","Guarding harmony rather than burning the vital breath with life-increasing arts","Competing until old age"], a:2, why:"Where the mind makes the vital breath to burn, the strength is false and we should mourn over it." }
    ] },
  { n:56,
    summary:"The most quoted line of the book: he who knows the Tao does not care to speak about it; he who is ever ready to speak about it does not know it. The knower keeps his mouth shut and the portals closed, blunts his sharp points, unravels complications, attempers his brightness, and brings himself into agreement with the obscurity of others — the Mysterious Agreement. The paradox is that self-erasure crowns a man: one who cannot be treated as familiar or distant, beyond profit or injury, nobility or meanness, is the noblest man under heaven.",
    context:"The silence chapter between the infant and the politics of prohibition: knowing shown by not speaking.",
    keyVerses:[
      { ref:"Ch. 56", text:"He who knows (the Tao) does not (care to) speak (about it); he who is (ever ready to) speak about it does not know it." },
      { ref:"Ch. 56", text:"(Such an one) cannot be treated familiarly or distantly; he is beyond all consideration of profit or injury; of nobility or meanness:--he is the noblest man under heaven." }
    ],
    takeaway:"Blunt your points and dim your dazzle: agreement with others' obscurity is the noblest state under heaven.",
    quiz:[
      { q:"What does the chapter say about those who are ever ready to speak about the Tao?", choices:["They do not know it","They know it best","They teach it perfectly","They will rule the kingdom"], a:0, why:"The opening antithesis is exact: the knower does not care to speak, and the ready speaker does not know it." },
      { q:"What is 'the Mysterious Agreement'?", choices:["A treaty between rival states","Blunting sharpness and attempering brightness to meet others' obscurity in agreement","A secret tax record","A pact with the manes of the departed"], a:1, why:"The knower shuts mouth and portals, blunts sharp points, unravels complications, and attempers brightness into agreement with obscurity." },
      { q:"You have just grasped something difficult. Practising this chapter, you:", choices:["Announce it loudly at once","Mock those slower to see","Write it on the door for display","Let it settle quietly, attempering your brightness"], a:3, why:"Knowing does not care to speak; the agreement is made by softening one's own sharpness and shine." }
    ] },
  { n:57,
    summary:"A state may be ruled by measures of correction and weapons used with crafty dexterity, but the kingdom is made one's own only by freedom from action and purpose. The evidence follows: multiplying prohibitive enactments increases the poverty of the people; more profit-making implements bring greater disorder; more acts of crafty dexterity, more strange contrivances; more display of legislation, more thieves and robbers. Hence the sage's creed: I will do nothing of purpose and the people will be transformed of themselves; manifest no ambition, and they attain to the primitive simplicity.",
    context:"The governing-by-prohibition argument of Part 2, answered by the sage's fourfold 'I will do nothing.'",
    keyVerses:[
      { ref:"Ch. 57", text:"A state may be ruled by (measures of) correction; weapons of war may be used with crafty dexterity; (but) the kingdom is made one's own (only) by freedom from action and purpose." },
      { ref:"Ch. 57", text:"I will do nothing (of purpose), and the people will be transformed of themselves; I will be fond of keeping still, and the people will of themselves become correct." }
    ],
    takeaway:"More prohibitions, more poverty; do nothing of purpose and the people transform of themselves.",
    quiz:[
      { q:"According to the chapter, what does 'the multiplication of prohibitive enactments' increase?", choices:["The wealth of the state","The number of magistrates","The poverty of the people","The people's reverence"], a:2, why:"Each listed remedy backfires, starting with prohibitive enactments that increase the people's poverty." },
      { q:"What reversal stands behind 'the more display there is of legislation, the more thieves and robbers'?", choices:["Tighter control breeds the very disorder it targets","Thieves write the laws","Legislation is never read","Robbers respect strict statutes"], a:0, why:"The chapter's facts all show multiplied controls producing multiplied disorder, so freedom from action and purpose is what wins the kingdom." },
      { q:"A mayor faces rising crime. Living this chapter, what does she examine first?", choices:["How to add another hundred statutes","Whether her own ambitious displays are breeding the disorder she fights","How to lengthen the prison terms","Which neighbours to blame publicly"], a:1, why:"Since more legislation yields more thieves, she looks to doing nothing of purpose, keeping still, and manifesting no ambition." }
    ] },
  { n:58,
    summary:"The government that seems the most unwise often supplies the people the most goodness; the meddling one that touches everything works ill and brings disappointment. Then the famous weave: misery! — happiness is to be found by its side; happiness! — misery lurks beneath it; and who knows what either will come to in the end? Even correction shall by a turn become distortion, and the good in it turn to evil, a delusion the people have long endured. The sage therefore is a square that cuts no one with its angles, straightforward but without license, bright but not dazzling.",
    context:"Sets fortune's reversals beside the light-touch government theme, drawing the sage who dazzles no one.",
    keyVerses:[
      { ref:"Ch. 58", text:"Misery!--happiness is to be found by its side! Happiness!--misery lurks beneath it! Who knows what either will come to in the end?" },
      { ref:"Ch. 58", text:"He is straightforward, but allows himself no license; he is bright, but does not dazzle." }
    ],
    takeaway:"Leave room: happiness lurks inside misery and misery in happiness, so be bright without dazzling.",
    quiz:[
      { q:"Where does the chapter locate happiness in relation to misery?", choices:["Far beyond it","Found by its side — while misery lurks beneath happiness","Only after death","In the granaries of princes"], a:1, why:"The two are woven together: happiness is found by misery's side, and misery lurks beneath happiness, with no knowing the end." },
      { q:"Why is the meddling government the disappointing one, in this teaching?", choices:["It taxes too little","It cannot afford a court","Its laws are too short","Touching everything works ill, and even correction turns by a turn into distortion"], a:3, why:"Seeming unwise government best supplies goodness, while the meddling kind works ill because its corrections twist into distortion and evil." },
      { q:"A friend is brilliant and blunt about it. This chapter's advice for her:", choices:["Be straightforward but allow no license, bright but not dazzling","Hide her gifts in a locked room","Sharpen her angles to cut faster","Correct everyone around her"], a:0, why:"The sage is a square that cuts no one; brightness stays, but the dazzling that wounds is set aside." }
    ] },
  { n:59,
    summary:"For regulating the human in our constitution and rendering proper service to the heavenly, there is nothing like moderation. Moderation alone effects an early return to man's normal state, and that early return is the repeated accumulation of the attributes of the Tao. With that accumulation comes subjugation of every obstacle; its limit unknown, a man may even be the ruler of a state. He who possesses the mother of the state continues long — like the plant whose roots are deep and its flower stalks firm, the way to secure that its enduring life shall long be seen.",
    context:"Follows the dazzling sage with the governing virtue that makes endurance possible: moderation.",
    keyVerses:[
      { ref:"Ch. 59", text:"For regulating the human (in our constitution) and rendering the (proper) service to the heavenly, there is nothing like moderation." },
      { ref:"Ch. 59", text:"His case is like that (of the plant) of which we say that its roots are deep and its flower stalks firm:--this is the way to secure that its enduring life shall long be seen." }
    ],
    takeaway:"Practise moderation to return early to your root: deep roots and firm stalks mean long-enduring life.",
    quiz:[
      { q:"What single means does the chapter give for regulating the human and serving the heavenly?", choices:["Moderation","Strict law","Daily sacrifice","Public display"], a:0, why:"The opening names moderation as the one thing like enough for that twofold task." },
      { q:"What image carries the promise of long endurance at the chapter's end?", choices:["The bending bow","Cooking small fish","A plant with deep roots and firm flower stalks","A tower of nine storeys"], a:2, why:"The possessor of the mother of the state continues long like the deep-rooted plant with firm stalks." },
      { q:"A new official wants lasting influence. This chapter's first step is:", choices:["Accumulating honours quickly","Early return to the normal state through moderation","Ruling with dazzling brightness","Expanding the state's borders"], a:1, why:"Only moderation effects the early return that repeatedly accumulates the Tao's attributes, the basis of endurance." }
    ] },
  { n:60,
    summary:"The most famous recipe in the book: governing a great state is like cooking small fish. Overhandled, they fall apart; the parallel is that poking at a kingdom spoils it. Govern according to the Tao and the manes of the departed will not manifest their spiritual energy — not because they lack it, but because it will not be employed to hurt men. And it is not that the spirits could not hurt, but neither does the ruling sage hurt them. When these two do not injuriously affect each other, their good influences converge in the virtue of the Tao.",
    context:"The small-fish simile crowns the light-rule chapters: harm none, stir nothing, let virtue converge.",
    keyVerses:[
      { ref:"Ch. 60", text:"Governing a great state is like cooking small fish." },
      { ref:"Ch. 60", text:"Let the kingdom be governed according to the Tao, and the manes of the departed will not manifest their spiritual energy." }
    ],
    takeaway:"Govern like cooking small fish: handle little, harm nothing, and good influences converge in virtue.",
    quiz:[
      { q:"Governing a great state is compared to what?", choices:["Bending a bow","Planting what cannot be uptorn","Cooking small fish","Deepening a plant's roots"], a:2, why:"The chapter's opening simile is exact: a great state is cooked like small fish, which ruin with over-handling." },
      { q:"Why do the manes not hurt men under Tao-government, according to the chapter?", choices:["They have lost their spiritual energy","Not for lack of power, but because that energy is not employed to hurt — just as the sage hurts no one","They are bound by new laws","They fear the army"], a:1, why:"The chapter repeats the point twice: the energy exists and could hurt, but under the Tao it is not used so, and the sage hurts no one." },
      { q:"A leader inherits a fragile institution. This chapter's counsel is:", choices:["Minimal, gentle handling that avoids injuring any part","A sweeping reorganisation at once","Public punishment of dissenters","Frequent shake-ups to show energy"], a:0, why:"Small fish are spoiled by fussing; when neither side injuriously affects the other, good influences converge in virtue." }
    ] },
  { n:61,
    summary:"A great state is what it is by being like a low-lying, down-flowing stream — the centre to which all the small states under heaven tend. The pattern is the female, who always overcomes the male by stillness, and stillness may be considered a sort of abasement. So the great state, by condescending to small states, gains them for itself; the small state, by abasing itself to the great, wins it over; each gets what it desires. The closing check is for the strong: the great state must learn to abase itself.",
    context:"Applies water-and-female imagery to diplomacy: the great wins by lying low, the small by yielding.",
    keyVerses:[
      { ref:"Ch. 61", text:"What makes a great state is its being (like) a low-lying, down-flowing (stream);--it becomes the centre to which tend (all the small states) under heaven." },
      { ref:"Ch. 61", text:"Each gets what it desires, but the great state must learn to abase itself." }
    ],
    takeaway:"The low-lying stream gathers all: abasement, not force, is how great states and people win others.",
    quiz:[
      { q:"By what does the female overcome the male, in the chapter's illustration?", choices:["Swiftness","Stillness","Numbers","Crafty dexterity"], a:1, why:"The case of the females shows the rule: the female always overcomes the male by her stillness." },
      { q:"What reversal lets a great state become 'the centre to which tend all the small states'?", choices:["It is like a low-lying, down-flowing stream — winning by being lower","It raises the highest walls","It outlaws all small states","It multiplies prohibitive enactments"], a:0, why:"Its very greatness is the low-lying position; condescension gains adherents where force would not." },
      { q:"Two departments merge; yours is the larger. Living this chapter, you:", choices:["Dictate every term at once","Dissolve the smaller team","Condescend — come down willingly — so both get what they desire","Refuse all contact until they submit"], a:2, why:"The great state gains the small by abasing itself, and each gets what it desires; the greater must learn the lower place." }
    ] },
  { n:62,
    summary:"Tao has of all things the most honoured place: no treasures give good men so rich a grace, and bad men it guards, doing their ill away. Its admirable words purchase honour and its admirable deeds raise their performer above others — even men who are not good are not abandoned by it. Hence the scale of gifts: a prince's round symbol of rank filling both hands, precursor of the team of horses, is not equal to a lesson of this Tao presented on one's knees. The ancients prized it because it could be got by seeking, and the guilty could escape its stain by it.",
    context:"A crown for Part 2's teaching: the Tao as the most honoured gift, high enough to reach the guilty.",
    keyVerses:[
      { ref:"Ch. 62", text:"Tao has of all things the most honoured place. No treasures give good men so rich a grace; Bad men it guards, and doth their ill efface." },
      { ref:"Ch. 62", text:"Why was it that the ancients prized this Tao so much? Was it not because it could be got by seeking for it, and the guilty could escape (from the stain of their guilt) by it?" }
    ],
    takeaway:"Seek the Tao and you find it; even the guilty are not abandoned, for it washes their ill away.",
    quiz:[
      { q:"What offering does the chapter rank below 'a lesson of this Tao'?", choices:["A thousand chariots of grain","A team of white horses alone","A new granary for the state","A round symbol-of-rank large enough to fill both the hands"], a:3, why:"Even that great symbol of rank, precursor of the team of horses, is not equal to the Tao presented on one's knees." },
      { q:"Why did the ancients prize the Tao so much, at the chapter's close?", choices:["Because it could be got by seeking, and the guilty could escape the stain of their guilt by it","Because it guaranteed victory in war","Because it multiplied their treasures","Because it was easily obeyed by law"], a:0, why:"The final question answers itself: the Tao is found by those who seek it, and it cleanses even the guilty — hence its supreme value." },
      { q:"A friend has done wrong and feels shut out. This chapter invites you to:", choices:["Keep the lesson for the good alone","Bring him the Tao's words, for bad men it guards and their ill it effaces","Report him to the three ducal ministers","Wait until he restores what he took"], a:1, why:"Even men who are not good are not abandoned by it; its admirable words can raise their performer above others." }
    ] },
  { n:63,
    summary:"The way of the Tao is to act without thinking of acting, conduct affairs without feeling their trouble, taste without discerning flavour, count the small as great and the few as many — and to recompense injury with kindness. Difficulty is mastered at its easy root: all difficult things arise from a previous state in which they were easy, all great things from one in which they were small; so the sage, never doing what is great, accomplishes the greatest things. Light promisers keep little faith; the sage sees difficulty even in what seems easy, and so never has any.",
    context:"Joins non-action to the famous reply to injury with the discipline of handling things while small.",
    keyVerses:[
      { ref:"Ch. 63", text:"(It is the way of the Tao) to act without (thinking of) acting; to conduct affairs without (feeling the) trouble of them; to taste without discerning any flavour; to consider what is small as great, and a few as many; and to recompense injury with kindness." },
      { ref:"Ch. 63", text:"He who lightly promises is sure to keep but little faith; he who is continually thinking things easy is sure to find them difficult." }
    ],
    takeaway:"Meet injury with kindness and difficulty at its easy root; see trouble early and it never ripens.",
    quiz:[
      { q:"How does the chapter say to recompense injury?", choices:["With kindness","With equal injury","With public judgment","With careful avoidance"], a:0, why:"Recompensing injury with kindness stands in the list of the Tao's ways, beside acting without acting." },
      { q:"How does the sage 'never doing what is great' accomplish the greatest things?", choices:["By luck while others toil","By borrowing others' greatness","Because all great things arise from small, easy beginnings he handles in time","Because greatness is an illusion"], a:2, why:"Difficult things were once easy and great things once small; anticipating them in that state accomplishes the greatest without ever attempting the great." },
      { q:"You keep postponing a hard assignment because it feels manageable. This chapter warns:", choices:["Wait until pressure improves your focus","Continually thinking things easy is sure to make you find them difficult","Only big efforts ever count","Promise results quickly to force yourself"], a:1, why:"Light promisers keep little faith, and easy-thinkers find things difficult; the sage sees difficulty in the easy and so has none." }
    ] },
  { n:64,
    summary:"Act before things appear: what is at rest is easily held, the unmanifest easily met, the brittle easily broken, the small easily dispersed — so take action before a thing makes its appearance and secure order before disorder begins. Three images fix the law: the tree that fills the arms grew from the tiniest sprout; the nine-storey tower rose from a heap of earth; the journey of a thousand li commenced with a single step. Acting with an ulterior purpose harms and loses its hold, and affairs are ruined on the eve of success — be careful at the end as at the beginning.",
    context:"The beginnings chapter: from sprout to tower to thousand-li step, care extended to the very end.",
    keyVerses:[
      { ref:"Ch. 64", text:"The tree which fills the arms grew from the tiniest sprout; the tower of nine storeys rose from a (small) heap of earth; the journey of a thousand li commenced with a single step." },
      { ref:"Ch. 64", text:"(But) people in their conduct of affairs are constantly ruining them when they are on the eve of success. If they were careful at the end, as (they should be) at the beginning, they would not so ruin them." }
    ],
    takeaway:"Act before things appear and stay careful at the finish: the thousand li began with one step.",
    quiz:[
      { q:"What commenced with a single step?", choices:["The nine-storey tower","The journey of a thousand li","The planting of the great tree","The rule of the sage"], a:1, why:"The chapter's three images pair the sprout, the heap of earth, and the single step with the tree, the tower, and the thousand-li journey." },
      { q:"Why, in this teaching, do people 'constantly ruin' affairs on the eve of success?", choices:["Success is always luck","They lack the final resources","Heaven blocks near-completions","They relax at the end instead of being as careful at the end as at the beginning"], a:3, why:"The ruin comes from uneven care; the remedy is to keep the end as careful as the beginning, and the sage desires what others do not and forces nothing." },
      { q:"A team conflict is just flickering. Applying the chapter, you:", choices:["Take measures now, while it is small and easily dispersed","Wait for it to show its full size","Break the team apart","Overrule everyone with a decree"], a:0, why:"Action should be taken before a thing appears and order secured before disorder begins — what is small is easily dispersed." }
    ] },
  { n:65,
    summary:"The ancients skilled in practising the Tao did not use it to enlighten the people but rather to make them simple and ignorant. The difficulty of governing arises from the people having much knowledge: he who tries to govern a state by his wisdom is a scourge to it, while he who does not is a blessing. Knowing these two things gives a model and rule — the mysterious excellence of a governor. Deep and far-reaching, that excellence makes its possessor seem opposite to others, yet leads them to a great conformity with him.",
    context:"The counter-intuitive politics of Part 2: simplicity prized over clever, wisdom-flaunting rule.",
    keyVerses:[
      { ref:"Ch. 65", text:"The ancients who showed their skill in practising the Tao did so, not to enlighten the people, but rather to make them simple and ignorant." },
      { ref:"Ch. 65", text:"He who (tries to) govern a state by his wisdom is a scourge to it; while he who does not (try to) do so is a blessing." }
    ],
    takeaway:"Govern without parading wisdom: a scourge rules by cleverness, a blessing leads people to simplicity.",
    quiz:[
      { q:"What did the ancient practitioners of the Tao seek for the people?", choices:["To enlighten them fully","To train them in war","To make them simple and ignorant","To make them rich"], a:2, why:"Their skill aimed the opposite of enlightenment: keeping the people simple, since much knowledge makes governing difficult." },
      { q:"What reversal makes governing-by-wisdom 'a scourge' while its opposite is 'a blessing'?", choices:["Multiplied cleverness breeds the very difficulty it tries to cure","Wise rulers are always overthrown","Blessings come only from ignorance of all kinds","Scourges are needed for discipline"], a:0, why:"The difficulty of governing arises from much knowledge; governing by wisdom deepens it, while not doing so is a blessing." },
      { q:"A teacher floods her class with tricks and shortcuts. This chapter suggests:", choices:["Adding twice as many techniques","Modelling simple, unforced mastery that students grow to conform to","Banning all questions","Testing more frequently"], a:1, why:"The mysterious excellence seems opposite to others yet leads them to great conformity — leadership by simplicity, not display of wisdom." }
    ] },
  { n:66,
    summary:"Rivers and seas receive the homage and tribute of all the valley streams by their skill in being lower than they — thus they are the kings of them all. The sage-ruler copies this: wishing to be above men, he puts himself by his words below them; wishing to be before them, he places his person behind them. Then the paradox resolves into ease: though he is above, men do not feel his weight; though before, they feel no injury. All the world delights to exalt him and never wearies, because he does not strive — and no one can strive with one who does not strive.",
    context:"The valley-stream kingship of Part 2: above by being below, first by being last, unstriving and unbeaten.",
    keyVerses:[
      { ref:"Ch. 66", text:"That whereby the rivers and seas are able to receive the homage and tribute of all the valley streams, is their skill in being lower than they;--it is thus that they are the kings of them all." },
      { ref:"Ch. 66", text:"Because he does not strive, no one finds it possible to strive with him." }
    ],
    takeaway:"Lead by being lower: put yourself below and behind, and no one can strive with you.",
    quiz:[
      { q:"What skill makes rivers and seas 'the kings' of the valley streams?", choices:["Their skill in being lower than they","Their swiftness in flood","Their breadth and depth","Their power to flood fields"], a:0, why:"Homage flows downhill: the rivers and seas reign precisely by taking the lower place than the streams." },
      { q:"How does 'he does not strive' complete the chapter's paradox?", choices:["Striving is unlawful for rulers","Because he does not strive, no one finds it possible to strive with him","He strives only in emergencies","Unstriving men are ignored by all"], a:1, why:"All the world exalts him without wearying, and the closing line explains it: his non-striving removes every handle for strife." },
      { q:"You want your ideas to carry weight in a group. This chapter counsels:", choices:["Speak first and longest","Claim the chair at every meeting","Take the place below and behind, serving, until all delight to exalt you","Demand a formal title"], a:2, why:"The sage wishing to be above puts himself below by his words, and wishing to be before places his person behind." }
    ] },
  { n:67,
    summary:"All the world says my Tao is great yet seems inferior to other teachings; just its greatness makes it seem inferior — were it like any other, its smallness would long have been known. Then the confession at the heart of the book: I have three precious things which I prize and hold fast — gentleness, economy, and shrinking from taking precedence of others. With gentleness I can be bold; with economy, liberal; with the hindmost place, a vessel of the highest honour. Those who reverse them rush on death; gentleness is victorious even in battle, and Heaven saves its possessor by it.",
    context:"The three-treasures chapter, Part 2's clearest self-portrait: the great Tao that looks inferior.",
    keyVerses:[
      { ref:"Ch. 67", text:"But I have three precious things which I prize and hold fast. The first is gentleness; the second is economy; and the third is shrinking from taking precedence of others." },
      { ref:"Ch. 67", text:"Gentleness is sure to be victorious even in battle, and firmly to maintain its ground." }
    ],
    takeaway:"Hold fast to gentleness, economy, and the hindmost place; from them come boldness, liberality, honour.",
    quiz:[
      { q:"Which are the three precious things Laozi prizes and holds fast?", choices:["Boldness, liberality, and precedence","Gentleness, economy, and shrinking from taking precedence","Silence, poverty, and exile","Wisdom, wealth, and weapons"], a:1, why:"The chapter names them in order: gentleness first, economy second, and shrinking from taking precedence of others third." },
      { q:"How does gentleness produce boldness, in the chapter's reversal?", choices:["It never needs to act","It manufactures anger","Gentleness, not aggression, is sure to be victorious even in battle and firm to hold its ground","Boldness is unnecessary in peace"], a:2, why:"With gentleness I can be bold; Heaven saves its possessor by the very gentleness that protects him." },
      { q:"Your team is tempted to seize credit before others. Living this chapter, you:", choices:["Shrink from taking precedence and so become a vessel of the highest honour","Grab the credit before rivals do","Demand recognition in writing","Let the boldest member decide"], a:0, why:"Shrinking from precedence is the third treasure, and it is the way to become a vessel of the highest honour; the modern scramble ends, the chapter says, in death." }
    ] },
  { n:68,
    summary:"In verse, the good fighter in Tao's wars assumes no martial port; he who fights with most good will makes no resort to rage; he who vanquishes yet keeps from his foes apart; he whose orders men most fulfil yet humbly plies his art. The refrain draws the moral: he ne'er contends, and therein is his might; men's wills he bends, that they with him unite; like Heaven's his ends, no sage of old more bright. Victory without rage, command without contention — strength located precisely where combativeness is absent.",
    context:"A soldier's chapter in Part 2, applying the three treasures to war: skill shown by no martial show.",
    keyVerses:[
      { ref:"Ch. 68", text:"He who in (Tao's) wars has skill Assumes no martial port; He who fights with most good will To rage makes no resort." },
      { ref:"Ch. 68", text:"Thus we say, 'He ne'er contends, And therein is his might.'" }
    ],
    takeaway:"Win without rage and command without contending: not contending is the might that bends wills to unite.",
    quiz:[
      { q:"What does the skilled fighter assume, in the opening line?", choices:["A battle-axe and buff coat","The highest command of the host","No martial port","The front of the ranks"], a:2, why:"The first verse inverts expectation: skill in Tao's wars shows itself in assuming no martial appearance." },
      { q:"Where does the chapter locate the fighter's might?", choices:["In his never contending","In his famous rage","In his many weapons","In his large stores"], a:0, why:"The refrain repeats it three times: he ne'er contends, and therein — precisely there — is his might." },
      { q:"A dispute flares at work and you hold the stronger case. Practising this chapter:", choices:["Press the attack until they yield","Show open anger to signal resolve","Refuse to speak to your opponents","Stay apart from rage, bend wills so they unite with you"], a:3, why:"The good fighter resorts to no rage and vanquished keeps apart from his foes; his triumph is men's wills bending to unite with him." }
    ] },
  { n:69,
    summary:"A master of the art of war has said: I do not dare to be the host, to commence the war; I prefer to be the guest, to act on the defensive. I do not dare advance an inch; I prefer to retire a foot. This is marshalling ranks where there are no ranks, baring arms where there are no arms, grasping a weapon where there is no weapon, advancing where there is no enemy. No calamity is greater than lightly engaging in war — it comes near losing the precious gentleness. When opposing weapons cross, he who deplores the situation conquers.",
    context:"The defensive-war chapter: guest not host, a foot of retreat, and grief as the mark of the victor.",
    keyVerses:[
      { ref:"Ch. 69", text:"I do not dare to be the host (to commence the war); I prefer to be the guest (to act on the defensive). I do not dare to advance an inch; I prefer to retire a foot." },
      { ref:"Ch. 69", text:"There is no calamity greater than lightly engaging in war. To do that is near losing (the gentleness) which is so precious." }
    ],
    takeaway:"Never commence war nor advance an inch in pride; deplore the crossing of weapons and so conquer.",
    quiz:[
      { q:"In the master's saying, which role does he prefer?", choices:["The guest, acting on the defensive","The host, commencing the war","The skirmisher ahead of the ranks","The besieger of cities"], a:0, why:"He dares not be the host who commences the war; he prefers the guest's defensive place and a foot of retreat over an inch of advance." },
      { q:"Why is 'lightly engaging in war' the greatest calamity, by the chapter's logic?", choices:["Wars are always expensive","Armies move too slowly","Guests make poor fighters","It comes near losing the precious gentleness that Heaven uses to save"], a:3, why:"Light war-making forfeits the gentleness that, by the previous chapter, is victorious even in battle." },
      { q:"Someone provokes a fight with you. This chapter's practice is:", choices:["Strike first to control the ground","Retire a foot, take the defensive, and grieve that weapons cross at all","Match his insults exactly","Recruit allies for an attack"], a:1, why:"The master will not commence hostilities, and when weapons actually cross, he who deplores the situation conquers." }
    ] },
  { n:70,
    summary:"My words, says Laozi, are very easy to know and very easy to practise, yet there is no one in the world able to know and practise them. There is an originating, all-comprehending principle in the words and an authoritative law for what they enforce; because men do not know these, they do not know me. The paradox of the misunderstood teacher turns into a treasure: they who know me are few, and I am on that account the more to be prized. Thus the sage wears a poor garb of hair cloth while he carries his signet of jade in his bosom.",
    context:"Laozi's personal lament near Part 2's end: easy words, unknown, and jade carried in hair cloth.",
    keyVerses:[
      { ref:"Ch. 70", text:"My words are very easy to know, and very easy to practise; but there is no one in the world who is able to know and able to practise them." },
      { ref:"Ch. 70", text:"It is thus that the sage wears (a poor garb of) hair cloth, while he carries his (signet of) jade in his bosom." }
    ],
    takeaway:"Wear the hair cloth gladly: being little known for the truth's sake leaves you the more to be prized.",
    quiz:[
      { q:"What does the sage's clothing figure show?", choices:["He cannot afford better robes","He has renounced all society","He hides from his enemies","Hair cloth outside, jade carried in the bosom — plain outside, precious within"], a:3, why:"The closing image pairs the poor garb worn with the signet of jade kept in the bosom: outer plainness, inner treasure." },
      { q:"Why is Laozi 'on that account (the more) to be prized'?", choices:["He has defeated all rivals","Because those who know him are few — rarity marks the true treasure","He charges high fees","His words are written in jade"], a:1, why:"The world's failure to know him does not cheapen him; the fewness of those who know is the very reason he is the more prized." },
      { q:"Your best work goes unrecognised by the crowd. Living this chapter:", choices:["Rest in being prized the more for being known by few, keeping the jade within","Post about it until it trends","Abandon the work for fashion","Complain publicly of injustice"], a:0, why:"The words were easy to know yet nobody knew them; the sage answers neglect with hair cloth outside and jade within." }
    ] },
  { n:71,
    summary:"To know and yet think we do not know is the highest attainment; not to know, and yet think we do know, is a disease. The chapter's cure is inward: it is simply by being pained at the thought of having this disease that we are preserved from it. The sage has not the disease because he knows the pain that would be inseparable from it, and therefore does not have it. Knowledge here is not accumulation but honesty about the gap between what we hold and what is — a short chapter that is the book's sharpest mirror.",
    context:"A two-verse mirror in Part 2 on intellectual humility, answering the misunderstood sage of Chapter 70.",
    keyVerses:[
      { ref:"Ch. 71", text:"To know and yet (think) we do not know is the highest (attainment); not to know (and yet think) we do know is a disease." },
      { ref:"Ch. 71", text:"It is simply by being pained at (the thought of) having this disease that we are preserved from it." }
    ],
    takeaway:"Treat false certainty as a disease: pain at the thought of it is what preserves you from it.",
    quiz:[
      { q:"What does the chapter call 'the highest (attainment)'?", choices:["To know and yet think we do not know","To know and teach others","To master many arts","To have the last word"], a:0, why:"The two states are ranked directly: knowing yet thinking we do not know is highest, while thinking we know without knowing is the disease." },
      { q:"How is the 'disease' of thinking we know actually prevented?", choices:["By memorising more facts","By avoiding all questions","By being pained at the thought of having it, as the sage is","By never meeting anyone ignorant"], a:2, why:"The preservation from the disease is the pain felt at the mere thought of it; the sage knows its inseparable pain and so does not have it." },
      { q:"In a debate you realise you know less than you assumed. This chapter's move is:", choices:["Defend your position harder","Feel the pain of the disease honestly, and so be preserved from it","Change the subject","Laugh off the ignorance"], a:1, why:"Pain at the thought of having the disease is exactly the mechanism that keeps one from it." }
    ] },
  { n:72,
    summary:"When the people do not fear what they ought to fear, that which is their great dread will come on them. So let them not thoughtlessly indulge themselves in their ordinary life, nor act as if weary of what that life depends on; by avoiding such indulgence, such weariness never arises. The sage answers the same test personally: he knows these things of himself but does not parade his knowledge; he loves but does not appear to set a value on himself. The choice is put plainly — he puts the latter alternative away and chooses the former.",
    context:"Awe and restraint in Part 2: proper fear preserved at large, self-love unparaded in the sage.",
    keyVerses:[
      { ref:"Ch. 72", text:"When the people do not fear what they ought to fear, that which is their great dread will come on them." },
      { ref:"Ch. 72", text:"Therefore the sage knows (these things) of himself, but does not parade (his knowledge); loves, but does not (appear to set a) value on, himself." }
    ],
    takeaway:"Fear what deserves fear, indulge nothing thoughtlessly, and love yourself without setting a value on it.",
    quiz:[
      { q:"What happens when the people do not fear what they ought to fear?", choices:["They live in peace","That which is their great dread will come on them","The sage teaches them gently","The taxes are reduced"], a:1, why:"The opening states the consequence flatly: forfeited reverence for what should be feared lets the great dread arrive." },
      { q:"What pair does the sage choose between at the chapter's end?", choices:["Self-knowledge without parade, against self-love that sets its own value","War and peace","Taxation and famine","Speech and silence"], a:0, why:"He knows but does not parade, loves but does not set a value on himself, putting the latter away and choosing the former." },
      { q:"A student grows careless with the basics of his craft. This chapter warns:", choices:["Carelessness builds confidence","Basics matter only at exams","Indulgence and weariness with what life depends on invite the great dread","Talent excuses discipline"], a:2, why:"Thoughtless indulgence in the ordinary life, and weariness of what it depends on, are the very things the chapter forbids." }
    ] },
  { n:73,
    summary:"Boldness in daring to do wrong, defying the laws, brings death; boldness in not daring brings life. Which of the two is advantageous even Heaven's smiting makes hard to scan, and the sage feels a difficulty about it. The resolution lies in Heaven's way: not to strive, yet skilfully to overcome; not to speak, yet skilful in obtaining a reply; not to call, yet men come of themselves. Its demonstrations are quiet, its plans skilful and effective. So the meshes of the net of Heaven are large — far apart, but letting nothing escape.",
    context:"Part 2's net-of-Heaven chapter: daring measured against Heaven's quiet, unstriving, all-catching way.",
    keyVerses:[
      { ref:"Ch. 73", text:"It is the way of Heaven not to strive, and yet it skilfully overcomes; not to speak, and yet it is skilful in obtaining a reply; does not call, and yet men come to it of themselves." },
      { ref:"Ch. 73", text:"The meshes of the net of Heaven are large; far apart, but letting nothing escape." }
    ],
    takeaway:"Leave outcomes to the quiet way: the net of Heaven is wide-meshed, far apart, but lets nothing escape.",
    quiz:[
      { q:"What is said of the meshes of the net of Heaven?", choices:["They are woven too fine to see","They catch only the violent","Large and far apart, but letting nothing escape","Mended nightly by the manes"], a:2, why:"The closing image is of loose mesh and total capture: far apart, yet nothing slips through." },
      { q:"How does Heaven overcome 'without striving,' in the chapter's paradox?", choices:["By marshalling larger armies","By quiet, skilful effectiveness — not speaking yet obtaining a reply, not calling yet men come","By postponing everything forever","By abolishing all laws"], a:1, why:"Heaven's way works through quiet demonstrations and skilful, effective plans rather than effort and noise." },
      { q:"You are tempted to force a result others are resisting. Practising this chapter:", choices:["Act like Heaven — quiet, unstriving, confident that nothing escapes the net","Double your pressure at once","Threaten them publicly","Abandon the goal entirely"], a:0, why:"The sage feels a difficulty about forcing; Heaven overcomes by not striving and calls no one, yet all come of themselves." }
    ] },
  { n:74,
    summary:"The people do not fear death; to what purpose is it to try to frighten them with it? If they were always in awe of death, and the ruler could always seize those who do wrong and put them to death, who would dare do wrong? But there is always One who presides over the infliction of death, and he who would inflict death in that One's room is like a man hewing wood instead of the great carpenter. Seldom indeed does he who undertakes the hewing not cut his own hands.",
    context:"Against rule by terror in Part 2: execution belongs to the great Carpenter, not the usurping blade.",
    keyVerses:[
      { ref:"Ch. 74", text:"The people do not fear death; to what purpose is it to (try to) frighten them with death?" },
      { ref:"Ch. 74", text:"He who would inflict death in the room of him who so presides over it may be described as hewing wood instead of a great carpenter. Seldom is it that he who undertakes the hewing, instead of the great carpenter, does not cut his own hands!" }
    ],
    takeaway:"Do not grasp the axe that is not yours: usurping the presider over death, you cut your own hands.",
    quiz:[
      { q:"Why is threatening the people with death useless, to open the chapter?", choices:["The people do not fear death","The laws forbid it","The army protects them","Death is too swift"], a:0, why:"Since the people do not fear death, the whole apparatus of death-threats loses its purpose." },
      { q:"What does the carpenter figure teach about usurping the power over death?", choices:["Carpenters are slow but sure","Wood is scarcer than justice","The people should fear carpenters","The usurper who hews for the great carpenter seldom fails to cut his own hands"], a:3, why:"There is always One who presides over death; taking his office is hewing for a greater workman, and the axe rebounds." },
      { q:"A ruler escalates executions to stop crime. Judged by this chapter, the result:", choices:["Crime vanishes and awe returns","His own hands are cut — the wrong he seized rebounds on him","The great Carpenter appoints him","The people grow rich"], a:1, why:"Only if the people were always in awe of death would executions deter; the usurping hewer cuts his own hands." }
    ] },
  { n:75,
    summary:"Three diagnoses of a starving, unruly people, each traced upward: they suffer famine because of the multitude of taxes consumed by their superiors; they are difficult to govern because of the excessive agency of their superiors in governing them; they make light of dying because of the greatness of their labours in seeking the means of living. The fault of the governed is unmasked as the cost of misgovernment. The closing counsel inverts ordinary instinct: to leave the subject of living altogether out of view is better than to set a high value on it.",
    context:"Blame redirected in Part 2: famine, disorder, and desperation traced to the rulers, not the ruled.",
    keyVerses:[
      { ref:"Ch. 75", text:"The people suffer from famine because of the multitude of taxes consumed by their superiors. It is through this that they suffer famine." },
      { ref:"Ch. 75", text:"The people are difficult to govern because of the (excessive) agency of their superiors (in governing them). It is through this that they are difficult to govern." }
    ],
    takeaway:"Heavy taxes and busy governing starve the people; prize life less graspingly and it serves you better.",
    quiz:[
      { q:"What does the chapter name as the cause of the people's famine?", choices:["Their own laziness","The multitude of taxes consumed by their superiors","Failures of the harvest","Foreign invaders"], a:1, why:"The first diagnosis lays famine at the superiors' door: the taxes they consume leave the people nothing." },
      { q:"What reversal appears in 'the people make light of dying'?", choices:["Their desperate labours for the means of living, imposed from above, make death seem light","Soldiers glory in dying","The dying fear nothing by nature","Death is always welcome to the poor"], a:0, why:"It is the greatness of their labours in seeking the means of living that makes them think lightly of dying." },
      { q:"A government's programs keep multiplying while citizens struggle. This chapter advises the government to:", choices:["Add another agency to supervise","Raise taxes for enforcement","Withdraw its excessive agency and lighten what it takes from the people","Set a still higher value on managing life"], a:2, why:"Excessive governing agency and consumed taxes are the named causes of disorder and famine; and to leave the subject of living out of view is better than prizing it." }
    ] },
  { n:76,
    summary:"Man at his birth is supple and weak; at his death, firm and strong. So with all things: trees and plants in early growth are soft and brittle, while at their death they are dry and withered. Hence the lesson drawn: firmness and strength are the concomitants of death; softness and weakness, the concomitants of life. The soldier who relies on the strength of his forces does not conquer, and the tree grown strong enough to fill the out-stretched arms invites the feller. Firm and strong belong below; soft and weak, above.",
    context:"The life-and-death logic of softness, stated at its plainest as Part 2's argument nears its close.",
    keyVerses:[
      { ref:"Ch. 76", text:"Man at his birth is supple and weak; at his death, firm and strong." },
      { ref:"Ch. 76", text:"Thus it is that firmness and strength are the concomitants of death; softness and weakness, the concomitants of life." }
    ],
    takeaway:"Stay supple: firmness and strength keep company with death, softness and weakness with life.",
    quiz:[
      { q:"What condition marks man at his birth, in the chapter's opening?", choices:["Firm and strong","Dry and withered","Supple and weak","Full and complete"], a:2, why:"Birth brings suppleness and weakness; firmness and strength arrive only with death, as with trees soft in growth and withered when dead." },
      { q:"Why does the strong tree 'invite the feller'?", choices:["Its hardened strength is the companion of death and draws the axe","It grows too close to roads","Carpenters love tall wood only","Its shade angers the villagers"], a:0, why:"A tree strong enough to fill the out-stretched arms is ready for the axe, since firmness and strength attend death." },
      { q:"An organisation prides itself on rigid, unbreakable rules. This chapter sees:", choices:["Proof of enduring health","Death's concomitants at work; what is soft and living belongs above","A model for all states","The bow of Heaven"], a:1, why:"Firmness and strength are concomitants of death, while softness and weakness accompany life — and the soft and weak hold the higher place." }
    ] },
  { n:77,
    summary:"Is not the Way of Heaven like the bending of a bow? What was high is brought low, and what was low is raised up: Heaven diminishes where there is superabundance and supplements where there is deficiency. The way of man is the reverse — taking from those who have not enough to add to his own superabundance. Only he who possesses the Tao can take his own superabundance and serve all under heaven with it. Therefore the ruling sage acts without claiming the results as his, achieves his merit and does not rest arrogantly in it, wishing to display no superiority.",
    context:"The bow-of-Heaven chapter: redistribution by Heaven's pattern against man's hoarding way.",
    keyVerses:[
      { ref:"Ch. 77", text:"May not the Way (or Tao) of Heaven be compared to the (method of) bending a bow? The (part of the bow) which was high is brought low, and what was low is raised up." },
      { ref:"Ch. 77", text:"It is the Way of Heaven to diminish superabundance, and to supplement deficiency. It is not so with the way of man. He takes away from those who have not enough to add to his own superabundance." }
    ],
    takeaway:"Bend like the bow: take from your own superabundance to supply deficiency, and claim no merit.",
    quiz:[
      { q:"Heaven's way is compared to what craft?", choices:["Bending a bow","Hewing wood","Cooking small fish","Weaving a net"], a:0, why:"The bow bends the high part low and raises the low: the exact pattern of diminishing superabundance and supplementing deficiency." },
      { q:"What reversal marks 'the way of man' against 'the Way of Heaven'?", choices:["Man supplements deficiency first","Man takes from those who have not enough to add to his own superabundance","Man refuses all possession","Man bends the bow perfectly"], a:1, why:"Heaven evens things out; man robs the needy to swell his surplus — the exact inversion the chapter laments." },
      { q:"You have more than you need while a neighbour lacks. Practising this chapter:", choices:["Guard your surplus carefully","Wait for Heaven to act","Give publicly to display your superiority","Serve all under heaven from your superabundance without claiming the merit"], a:3, why:"Only the possessor of the Tao turns surplus to others' service, and the sage achieves merit without resting in it or displaying superiority." }
    ] },
  { n:78,
    summary:"Nothing in the world is more soft and weak than water, yet for attacking the firm and strong nothing takes precedence of it — there is nothing so effectual for which it could be exchanged. Every one in the world knows that the soft overcomes the hard and the weak the strong, but no one is able to carry it out in practice. Hence the sage's saying: he who accepts his state's reproach is hailed its altars' lord; to him who bears men's direful woes they all accord the name of King. And the book's own key: words that are strictly true seem to be paradoxical.",
    context:"Water's supremacy restated as Part 2 gathers to its close, with the reproach-bearing ruler crowned.",
    keyVerses:[
      { ref:"Ch. 78", text:"There is nothing in the world more soft and weak than water, and yet for attacking things that are firm and strong there is nothing that can take precedence of it;--for there is nothing (so effectual) for which it can be changed." },
      { ref:"Ch. 78", text:"Words that are strictly true seem to be paradoxical." }
    ],
    takeaway:"Bear the reproach and the woes of others: what is softest overcomes the hardest, if you can practise it.",
    quiz:[
      { q:"What does every one in the world know, yet no one carries out?", choices:["That water always flows downhill","That the soft overcomes the hard and the weak the strong","That kings must bear woes","That words are unreliable"], a:1, why:"The knowledge is universal, the practice absent — no one is able to carry the soft's victory over the hard into practice." },
      { q:"Why does accepting 'his state's reproach' make a man its altars' lord?", choices:["Reproach disqualifies rivals","The altars require payment","Bearing what others will not bear is exactly the soft, weak-seeming strength that overcomes and so kings him","Priests appoint the ruler"], a:2, why:"The saying applies water's rule to rule itself: to him who bears men's direful woes they all accord the name of King." },
      { q:"How should a reader take this book's strange sayings, by its own closing hint?", choices:["As strictly true words that merely seem paradoxical","As riddles with no meaning","As jokes for the court","As laws of the old kings"], a:0, why:"The last line hands the reader the hermeneutic: the appearance of paradox conceals strict truth." }
    ] },
  { n:79,
    summary:"When a reconciliation is effected after a great animosity, there is sure to be a grudge remaining in the mind of the one who was wrong — and how can that benefit the other? The sage's handling: he keeps the left-hand portion of the record of the engagement and does not insist on speedy fulfilment by the other party. He who has the attributes of the Tao regards only the conditions of the engagement; he who lacks them regards only the conditions favourable to himself. And the closing standard: Heaven's way has no partiality of love, yet is always on the side of the good man.",
    context:"After enmity and war chapters, Part 2 turns to settling scores softly and leaving grudges unpaid.",
    keyVerses:[
      { ref:"Ch. 79", text:"When a reconciliation is effected (between two parties) after a great animosity, there is sure to be a grudge remaining (in the mind of the one who was wrong)." },
      { ref:"Ch. 79", text:"In the Way of Heaven, there is no partiality of love; it is always on the side of the good man." }
    ],
    takeaway:"Settle without pressing your claim: hold the record but do not insist, and leave the grudge unpaid.",
    quiz:[
      { q:"What does the sage do with the record of the engagement?", choices:["Burns it entirely","Reads it aloud to the state","Adds his own claims to it","Keeps the left-hand portion without insisting on speedy fulfilment"], a:3, why:"He guards against the lingering grudge by holding the record while not pressing the other party for quick payment." },
      { q:"What distinguishes the man of Tao from the man without, in reading an engagement?", choices:["The former regards its conditions; the latter, only the conditions favourable to himself","The former writes harsher terms","The former refuses all records","The former demands interest"], a:0, why:"The contrast is drawn exactly: the man of the Tao's attributes looks to the engagement's conditions, the other only to his own advantage." },
      { q:"A former rival now owes you a favour. Living this chapter, you:", choices:["Call in the debt at once","Broadcast the reconciliation","Hold the record lightly and do not press him for repayment","Demand he serve you for a year"], a:2, why:"Insisting on speedy fulfilment leaves the grudge alive; the sage keeps the left-hand portion and lets Heaven side with the good." }
    ] },
  { n:80,
    summary:"The vision of the little state with a small population: though there be individuals with the abilities of ten or a hundred men, they are left unemployed; the people, though looking on death as grievous, do not remove elsewhere to escape it. Boats and carriages stand unused; buff coats and sharp weapons are never donned. The people return to knotted cords instead of written characters; they think their coarse food sweet, their plain clothes beautiful, their poor dwellings places of rest, their simple ways sources of enjoyment. The neighbouring state is within sight, its fowls and dogs audible — yet to old age and death no intercourse passes between them.",
    context:"Part 2's utopia: the small, self-content state heard but never visited, the book's quietest politics.",
    keyVerses:[
      { ref:"Ch. 80", text:"I would make the people return to the use of knotted cords (instead of the written characters)." },
      { ref:"Ch. 80", text:"They should think their (coarse) food sweet; their (plain) clothes beautiful; their (poor) dwellings places of rest; and their common (simple) ways sources of enjoyment." }
    ],
    takeaway:"Let what you have be sweet: plain food, clothes, dwellings, and ways are sources of enjoyment enough.",
    quiz:[
      { q:"To what do the people return, in place of written characters?", choices:["The use of knotted cords","Oral epics of the ancestors","Clay tablets","Bird signs"], a:0, why:"The chapter's third rule is the return to knotted cords, the simplest of records, in place of written characters." },
      { q:"What does the picture of the neighbouring state — in sight, its fowls and dogs audible — stress?", choices:["The need for border guards","The danger of invasion","Contentment so complete that no intercourse is wanted to old age and death","The failure of transport"], a:2, why:"Nearness is not lack: though the other state is seen and heard, the people live to old age and death without intercourse with it." },
      { q:"A family keeps upgrading everything and is still restless. This chapter counsels:", choices:["Move somewhere grander","Think their coarse food sweet and plain clothes beautiful, and find enjoyment in simple ways","Buy boats and carriages anyway","Compete with the neighbours"], a:1, why:"The chapter's contentment formula turns coarse food, plain clothes, poor dwellings, and simple ways into sweetness, beauty, rest, and enjoyment." }
    ] },
  { n:81,
    summary:"The book's last chapter sets three reversals straight: sincere words are not fine and fine words are not sincere; those skilled in the Tao do not dispute about it and the disputatious are not skilled; those who know it are not extensively learned and the extensively learned do not know it. Then the sage's economy: he does not accumulate for himself — the more he expends for others, the more he possesses of his own; the more he gives to others, the more he has himself. Heaven's way, with all its sharpness, injures not; the sage's way, with all his doing, does not strive.",
    context:"The closing chapter of the whole book: honest words, uncontentious knowledge, and giving as gain.",
    keyVerses:[
      { ref:"Ch. 81", text:"Sincere words are not fine; fine words are not sincere." },
      { ref:"Ch. 81", text:"The more that he expends for others, the more does he possess of his own; the more that he gives to others, the more does he have himself." }
    ],
    takeaway:"Give and you possess the more: sincere words need no polish, and the sage's doing never strives.",
    quiz:[
      { q:"What is said of fine words?", choices:["They are the mark of the sage","They are not sincere","They purchase honour forever","They are needed in government"], a:1, why:"The opening antithesis is symmetrical: sincere words are not fine, and fine words are not sincere." },
      { q:"How does the sage 'not accumulate (for himself)' yet come to possess more?", choices:["The more he expends and gives to others, the more he has of his own","By storing treasure in the shrine","By taxing the small states","By winning every dispute"], a:0, why:"His economy runs backward to the world's: expenditure and giving increase what he possesses and has." },
      { q:"You must deliver a hard truth to a friend. The closing chapter's way is:", choices:["Polish it until it flatters","Dispute until she concedes","Speak sincere words plainly, without contending, and keep giving even if it costs","Wait until she discovers it herself"], a:2, why:"Fine words are not sincere, the skilled do not dispute, and the sage's doing does not strive — plainness with continued giving." }
    ] }
);
