/* Scripture Launchpad — Proverbs, complete */
window.SLP = window.SLP || { books: [], gloss: [] }; var SLP = window.SLP;
var _pv = SLP.books.find(function(b){ return b.id === "prov"; });
if (!_pv) throw new Error("data/canon.js must load before ot-22-proverbs.js");
(_pv.chapters = _pv.chapters || []).push(
  { n:1, summary:"Proverbs opens by stating its purpose: to help readers know wisdom and instruction, perceive understanding, and give discretion to the simple. The keynote declares that the fear of the LORD is the beginning of knowledge, while fools despise it. A father then urges his son to heed parental teaching and to refuse when sinners invite him to ambush the innocent and share their stolen loot; the greedy, the father warns, set a net that catches themselves instead. The chapter closes with wisdom personified as a woman crying out in the streets and at the city gates, pleading with the simple, scorners, and fools to turn at her reproof. Those who refuse will eat the fruit of their own way, but whoever listens to her will dwell safely and be quiet from fear of evil.",
  context:"The opening chapter of the book of Proverbs, an Old Testament wisdom collection whose first verse names Solomon son of David, king of Israel.",
  keyVerses:[
    { ref:"Proverbs 1:7", text:"The fear of the LORD is the beginning of knowledge: but fools despise wisdom and instruction." },
    { ref:"Proverbs 1:10", text:"My son, if sinners entice thee, consent thou not." },
    { ref:"Proverbs 1:33", text:"But whoso hearkeneth unto me shall dwell safely, and shall be quiet from fear of evil." }
  ],
  takeaway:"The fear of the LORD is where knowledge begins, and refusing wisdom's plea ends in eating the fruit of our own way.",
  quiz:[
    { q:"According to Proverbs 1:17, spreading a net in the sight of a bird is an example of what?", choices:["A trap set in vain","A hunter's skill","Wisdom's warning","A judge's sentence"], a:0, why:"Verse 17 says, Surely in vain the net is spread in the sight of any bird, picturing plotters who catch only themselves." },
    { q:"What does Wisdom say will happen to those who refuse her reproof?", choices:["They will be forgiven after a time","They will eat the fruit of their own way","They will become teachers of wisdom","They will rebuild the city gates"], a:1, why:"Verse 31 says they shall eat of the fruit of their own way and be filled with their own devices." },
    { q:"Which principle does Proverbs 1:7 establish for the whole book?", choices:["Prosperity follows sacrifice","Knowledge comes from experience alone","The fear of the LORD is the beginning of knowledge","Parents should educate their children"], a:2, why:"The text states that the fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction." }
  ] },
  { n:2, summary:"A father traces the path from hunger to understanding. If his son receives his words, inclines his ear to wisdom, cries after knowledge, and hunts for it like silver or hidden treasure, he will understand the fear of the LORD and find the knowledge of God, for the LORD himself gives wisdom out of his mouth. The LORD is a buckler to the upright, keeping the paths of judgment and preserving the way of his saints. Wisdom received into the heart then does protective work: discretion preserves, understanding keeps, and both deliver from the evil man who walks in darkness and from the strange woman who flatters with her words, having forsaken the guide of her youth. Her house inclines toward death, but the upright shall dwell in the land while the wicked are cut off from the earth.",
  context:"The second father-son instruction essay, promising that diligent seeking leads to the knowledge of God.",
  keyVerses:[
    { ref:"Proverbs 2:4", text:"If thou seekest her as silver, and searchest for her as for hid treasures;" },
    { ref:"Proverbs 2:6", text:"For the LORD giveth wisdom: out of his mouth cometh knowledge and understanding." },
    { ref:"Proverbs 2:10", text:"When wisdom entereth into thine heart, and knowledge is pleasant unto thy soul;" }
  ],
  takeaway:"Wisdom is found by those who seek it like treasure, and it shields them from every destructive path.",
  quiz:[
    { q:"To whom does Proverbs 2 credit the gift of wisdom?", choices:["To kings who decree justice","To the strange woman","Unto the LORD, out of his mouth","To a man's own diligent studies"], a:3, why:"Verse 6 says the LORD giveth wisdom; out of his mouth cometh knowledge and understanding." },
    { q:"In what manner does the essay tell the son to search for wisdom?", choices:["Patiently waiting for it to arrive","Purchasing it with silver and gold","Borrowing it from wise counselors","As one seeks silver and hid treasures"], a:3, why:"Verses 3-4 urge crying after knowledge and seeking her as silver, searching for her as for hid treasures." },
    { q:"From which two dangers does wisdom deliver the one who receives it?", choices:["Famine and pestilence","The way of the evil man and the strange woman","Debt and imprisonment","Pride and laziness"], a:1, why:"Verses 12-16 say discretion and understanding deliver from the way of the evil man and from the strange woman who flatters with her words." }
  ] },
  { n:3, summary:"The third instruction essay gathers some of the book's best-known counsel. A son is told to keep mercy and truth, writing them on the tablet of his heart; to trust in the LORD with all his heart rather than his own understanding; to acknowledge God in all his ways; and not to despise the chastening of the LORD, for whom the LORD loveth he correcteth, as a father the son in whom he delighteth. Finding wisdom and understanding brings happiness, for wisdom is more precious than rubies and a tree of life to those who lay hold upon her. The LORD used wisdom to found the earth and establish the heavens. The essay ends with neighborly duties: pay what you owe promptly, devise no evil against a neighbor, strive with no one without cause, and envy not the oppressor.",
  context:"The third instruction essay of chapters 1-9, gathering counsel on trust, chastening, wisdom's worth, and neighborly dealing.",
  keyVerses:[
    { ref:"Proverbs 3:5", text:"Trust in the LORD with all thine heart; and lean not unto thine own understanding." },
    { ref:"Proverbs 3:11", text:"My son, despise not the chastening of the LORD; neither be weary of his correction:" },
    { ref:"Proverbs 3:13", text:"Happy is the man that findeth wisdom, and the man that getteth understanding." }
  ],
  takeaway:"Trusting the LORD with all our hearts, not our own understanding alone, lets mercy, truth, and even correction work for us.",
  quiz:[
    { q:"What does Proverbs 3 say to write upon the table of thine heart?", choices:["The names of your enemies","A ledger of debts","Mercy and truth","The king's decrees"], a:2, why:"Verse 3 says let not mercy and truth forsake thee; bind them about thy neck; write them upon the table of thine heart." },
    { q:"According to Proverbs 3:11-12, why should a son not despise the LORD's chastening?", choices:["It is shorter than other trials","It proves he is stronger than others","It buys freedom from every rule","The LORD corrects those he loves, as a father the son he delights in"], a:3, why:"Verse 12 explains that whom the LORD loveth he correcteth, even as a father the son in whom he delighteth." },
    { q:"What way of life does 'Trust in the LORD with all thine heart' teach?", choices:["Rely on God rather than on your own understanding alone","Avoid all difficult decisions","Test everything by your own reason only","Follow the crowd when guidance is unclear"], a:0, why:"Verses 5-6 direct the believer to trust the LORD fully, acknowledge him in all ways, and let him direct the paths." }
  ] },
  { n:4, summary:"A father passes down what his own father taught him: get wisdom, for it is the principal thing, and with all thy getting get understanding. Wisdom promises preservation, honor, an ornament of grace, and a crown of glory to those who embrace her. The essay then sets two ways side by side. Wicked men cannot sleep until they have caused someone to fall, eating the bread of wickedness and drinking the wine of violence; but the path of the just is as the shining light, shining more and more unto the perfect day, while the way of the wicked is darkness where they stumble without knowing why. The famous charge follows: keep thy heart with all diligence, for out of it are the issues of life. Eyes look straight ahead; feet ponder the path; turn not to the right hand nor to the left.",
  context:"A father's essay passing on the teaching he received from his own father, centered on getting wisdom and guarding the heart.",
  keyVerses:[
    { ref:"Proverbs 4:7", text:"Wisdom is the principal thing; therefore get wisdom: and with all thy getting get understanding." },
    { ref:"Proverbs 4:18", text:"But the path of the just is as the shining light, that shineth more and more unto the perfect day." },
    { ref:"Proverbs 4:23", text:"Keep thy heart with all diligence; for out of it are the issues of life." }
  ],
  takeaway:"Guard the heart diligently, for the course of a life flows out of it.",
  quiz:[
    { q:"In Proverbs 4, what image describes the path of the just?", choices:["A garden walled about","A shining light growing brighter until the perfect day","A river flowing to the sea","A ladder reaching heaven"], a:1, why:"Verse 18 compares the path of the just to the shining light that shineth more and more unto the perfect day." },
    { q:"What does 'keep thy heart with all diligence' teach about the heart?", choices:["Hide your feelings from everyone","Guard it physically from illness","Out of it are the issues of life, so guard what fills it","Fill it with knowledge of many trades"], a:2, why:"Verse 23 grounds the command in the truth that out of the heart are the issues of life." },
    { q:"What doctrine supports the command to watch what enters and leaves the heart?", choices:["Thoughts are harmless","Character is fixed at birth","Only actions matter before God","Inner desires shape the course of a person's life"], a:3, why:"Because the issues of life flow out of the heart, what a person cherishes within eventually governs conduct." }
  ] },
  { n:5, summary:"The father turns to the strange woman whose lips drop as an honeycomb and whose mouth is smoother than oil. Her end, he warns, is bitter as wormwood and sharp as a twoedged sword; her feet go down to death and her steps take hold on hell. The son is told to remove his way far from her and not come near the door of her house, or he will give his honor to others and mourn at the last when his flesh and body are consumed, regretting that he hated instruction. In place of infidelity the father paints married faithfulness: drink waters out of thine own cistern, and rejoice with the wife of thy youth. The chapter closes on accountability and bondage — the ways of man are before the eyes of the LORD, and a man's own iniquities take him, holding him with the cords of his sins.",
  context:"An instruction essay warning against the strange woman and urging faithful joy with the wife of thy youth.",
  keyVerses:[
    { ref:"Proverbs 5:3", text:"For the lips of a strange woman drop as an honeycomb, and her mouth is smoother than oil:" },
    { ref:"Proverbs 5:15", text:"Drink waters out of thine own cistern, and running waters out of thine own well." },
    { ref:"Proverbs 5:21", text:"For the ways of man are before the eyes of the LORD, and he pondereth all his goings." }
  ],
  takeaway:"Flee seduction and cherish covenant love, remembering the LORD sees every path.",
  quiz:[
    { q:"What picture does Proverbs 5 use for faithful love within marriage?", choices:["Drinking water from your own cistern and well","Building a house on rock","A tree planted by rivers","A city set on a hill"], a:0, why:"Verse 15 counsels, Drink waters out of thine own cistern, and running waters out of thine own well." },
    { q:"Why does the chapter say the strange woman's steps take hold on hell?", choices:["She demands money from her followers","Her sweet-sounding seduction ends in bitterness, loss, and death","She lives far from the city gates","She cannot keep a secret"], a:1, why:"Verses 3-6 contrast her honeyed lips with an end bitter as wormwood, feet going down to death." },
    { q:"What truth underlies the warning that a man's ways are before the eyes of the LORD?", choices:["Sin matters only if people notice","Private choices escape God's notice","God observes and weighs every path we take","Marriage is a private contract only"], a:2, why:"Verse 21 declares that the ways of man are before the eyes of the LORD, who pondereth all his goings." }
  ] },
  { n:6, summary:"This essay gathers warnings on money, work, and character. It opens with suretiship: one who has struck hands for a stranger is snared by his own words and should escape like a roe from the hunter. Next comes the famous field lesson — go to the ant, thou sluggard — which has no guide, overseer, or ruler, yet provides her meat in the summer; the sleeper's poverty comes as one that travelleth, and his want as an armed man. A naughty person who winks, signals with feet and fingers, and sows discord will be broken suddenly. The LORD hates seven things: a proud look, a lying tongue, hands that shed innocent blood, a wicked imagining heart, feet swift to mischief, a false witness, and a sower of discord among brethren. The chapter ends with the commandment as a lamp, and adultery compared to carrying fire in one's bosom.",
  context:"An instruction essay ranging over suretiship, the ant's diligence, the seven things the LORD hates, and adultery's fire.",
  keyVerses:[
    { ref:"Proverbs 6:6", text:"Go to the ant, thou sluggard; consider her ways, and be wise:" },
    { ref:"Proverbs 6:16", text:"These six things doth the LORD hate: yea, seven are an abomination unto him:" },
    { ref:"Proverbs 6:23", text:"For the commandment is a lamp; and the law is light; and reproofs of instruction are the way of life:" }
  ],
  takeaway:"Diligence, honesty, and self-command keep us from the snares God's word plainly names.",
  quiz:[
    { q:"What does the sluggard in Proverbs 6 need to learn from the ant?", choices:["To sleep through the winter","To follow a strong ruler","To store food in a hill of clay","To provide her meat in the summer without any guide or overseer"], a:3, why:"Verses 6-8 praise the ant, which having no guide, overseer, or ruler, provideth her meat in the summer." },
    { q:"Why does the chapter compare adultery to taking fire in one's bosom?", choices:["The harm is certain and self-inflicted, like burned clothes","Fire was scarce and costly","It warms a cold heart","It spreads light to others"], a:0, why:"Verses 27-29 ask whether a man can carry fire in his bosom unburned, applying the image to him who goes in to his neighbour's wife." },
    { q:"What does the list of seven things the LORD hates teach about sin?", choices:["God only dislikes open crimes","Pride, lying, and sowing discord are genuine offenses before God","Some sins are merely small mistakes","God grades sins by their popularity"], a:1, why:"Verses 16-19 name a proud look, a lying tongue, and sowing discord among brethren as things the LORD hates." }
  ] },
  { n:7, summary:"Proverbs 7 is a sermon built on a watched scene. The father, looking from the window of his house, sees a young man void of understanding pass a harlot's corner in the twilight and the black and dark night. Dressed and subtle of heart, she catches and kisses him, claims she has paid her vows, describes a bed decked with tapestry and perfumed with myrrh, aloes, and cinnamon, and explains that her husband is gone a long journey with a bag of money. With much fair speech she forces him; he goes as an ox to the slaughter, until a dart strikes through his liver, like a bird hurrying to the snare and knowing not that it is for his life. Many strong men have been slain by her, the father concludes; her house is the way to hell, going down to the chambers of death.",
  context:"An instruction essay told as a scene the father watched from his window, showing a young man seduced at twilight.",
  keyVerses:[
    { ref:"Proverbs 7:2", text:"Keep my commandments, and live; and my law as the apple of thine eye." },
    { ref:"Proverbs 7:22", text:"He goeth after her straightway, as an ox goeth to the slaughter, or as a fool to the correction of the stocks;" },
    { ref:"Proverbs 7:27", text:"Her house is the way to hell, going down to the chambers of death." }
  ],
  takeaway:"Temptation promises delight but walks us, ox-like, toward slaughter; God's words kept beforehand are our guard.",
  quiz:[
    { q:"In the father's story, where is he standing when he watches the young man pass by?", choices:["At the gate of the city","On the temple steps","At the window of his house","In a vineyard tower"], a:2, why:"Verse 6 says, For at the window of my house I looked through my casement." },
    { q:"The young man goes 'as an ox goeth to the slaughter.' What lesson does the chapter draw?", choices:["Animals should be treated kindly","Evening walks are dangerous","Markets are unsafe after dark","Yielding to seduction walks him unknowingly toward his own death"], a:3, why:"Verse 23 adds that like a bird hastening to the snare, he knows not that it is for his life." },
    { q:"What does 'keep my commandments... as the apple of thine eye' teach about guarding against temptation?", choices:["Treasure and protect God's words before temptation arrives","Avoid all contact with people","Memorize laws to win debates","Rely on willpower at the moment of sin"], a:0, why:"The chapter's shield is laid down first: commandments kept as the apple of the eye preserve from the strange woman." }
  ] },
  { n:8, summary:"Wisdom personified speaks through most of this chapter, crying in the streets and at the gates. She offers excellent and right things, promising that her instruction is better than silver and choice gold, for wisdom is better than rubies. The fear of the LORD, she says, is to hate evil — pride, arrogancy, the evil way, and the froward mouth. Kings reign and princes decree justice by her, and she loves those who love her, so those who seek her early shall find her. The chapter then rises to creation: the LORD possessed wisdom in the beginning of his way, set up from everlasting before the earth existed; when he prepared the heavens and appointed the foundations of the earth, wisdom was beside him, daily his delight, rejoicing in the habitable part of his earth, her delights with the sons of men. Whoever finds wisdom finds life; whoever hates her loves death.",
  context:"The great personification chapter in which Wisdom herself cries out, describing her worth, her role with kings, and her presence at creation.",
  keyVerses:[
    { ref:"Proverbs 8:11", text:"For wisdom is better than rubies; and all the things that may be desired are not to be compared to it." },
    { ref:"Proverbs 8:22", text:"The LORD possessed me in the beginning of his way, before his works of old." },
    { ref:"Proverbs 8:35", text:"For whoso findeth me findeth life, and shall obtain favour of the LORD." }
  ],
  takeaway:"Wisdom is older than the earth and kinder than gold; finding her is finding life and the favour of the LORD.",
  quiz:[
    { q:"According to Proverbs 8, when did the LORD possess wisdom?", choices:["After Israel left Egypt","In the beginning, before his works of old","When Solomon became king","At the giving of the law"], a:1, why:"Verse 22 says the LORD possessed wisdom in the beginning of his way, before his works of old." },
    { q:"What does Wisdom mean by 'by me kings reign'?", choices:["Only monarchs can be wise","Wisdom applies mainly to palace politics","Just rule and government depend on wisdom","Kings acquire wisdom by wealth"], a:2, why:"Verses 15-16 say that by wisdom kings reign, princes decree justice, and nobles and judges of the earth rule." },
    { q:"What promise does Wisdom give to those who find her?", choices:["Freedom from all work","Guaranteed royal office","Immortality in this life","Life and favour with the LORD"], a:3, why:"Verse 35 promises that whoso findeth wisdom findeth life and shall obtain favour of the LORD." }
  ] },
  { n:9, summary:"Two women prepare two feasts in one short chapter. Wisdom has builded her house, hewn out her seven pillars, killed her beasts, mingled her wine, and furnished her table; her maidens call the simple to come, eat of her bread, and go in the way of understanding. Between the invitations stands counsel about correction: reproving a scorner brings shame, but rebuking a wise man wins love, for instruction makes the wise yet wiser. The fear of the LORD is the beginning of wisdom, and the knowledge of the holy is understanding. Then a foolish and clamorous woman sits at the door of her house on the high places of the city, calling the same simple passersby with the claim that stolen waters are sweet and bread eaten in secret is pleasant. What her guests do not know is that the dead are there, in the depths of hell.",
  context:"The closing essay of chapters 1-9, staging two rival banquets: Wisdom's house and the foolish woman's stolen waters.",
  keyVerses:[
    { ref:"Proverbs 9:1", text:"Wisdom hath builded her house, she hath hewn out her seven pillars:" },
    { ref:"Proverbs 9:10", text:"The fear of the LORD is the beginning of wisdom: and the knowledge of the holy is understanding." },
    { ref:"Proverbs 9:18", text:"But he knoweth not that the dead are there; and that her guests are in the depths of hell." }
  ],
  takeaway:"Choose Wisdom's open feast over stolen sweetness, for one ends in life and the other among the dead.",
  quiz:[
    { q:"How many pillars has Wisdom hewn for her house in Proverbs 9?", choices:["Three","Five","Twelve","Seven"], a:3, why:"Verse 1 says Wisdom hath builded her house, she hath hewn out her seven pillars." },
    { q:"In Proverbs 9, both Wisdom and the foolish woman invite the simple to a meal. How do the invitations differ?", choices:["Wisdom serves meat; the foolish woman serves vegetables","Wisdom's feast leads to life; the foolish woman's guests end up in the depths of hell","They are the same invitation in different words","The foolish woman asks guests to pay for dinner"], a:1, why:"Wisdom's table offers bread and the way of understanding, while the foolish woman's stolen waters end among the dead." },
    { q:"What does 'rebuke a wise man, and he will love thee' teach about correction?", choices:["Wise people welcome reproof and grow wiser","Correction should be avoided entirely","Only equals may correct one another","Scorners improve when mocked"], a:0, why:"Verses 8-9 contrast the scorner who hates reproof with the wise man who receives it and becomes yet wiser." }
  ] },
  { n:10, summary:"Here begins the great collection headed 'The proverbs of Solomon' — short antithetic couplets contrasting the righteous and the wicked. Family opens the set: a wise son makes a glad father, a foolish son the heaviness of his mother. Work and seasons follow: the slack hand becomes poor, the diligent hand makes rich, and the son who gathers in summer is wise while the sleeper in harvest causes shame. Speech is a constant thread: the mouth of a righteous man is a well of life, the tongue of the just is choice silver, a prating fool shall fall, and in the multitude of words there wanteth not sin, but he that refraineth his lips is wise. Love covers all sins while hatred stirs up strifes. Even idleness gets a portrait: the sluggard is to the one who sends him as vinegar to the teeth and smoke to the eyes.",
  context:"First chapter of the collection the text heads \"The proverbs of Solomon,\" made of short contrasting couplets.",
  keyVerses:[
    { ref:"Proverbs 10:1", text:"The proverbs of Solomon. A wise son maketh a glad father: but a foolish son is the heaviness of his mother." },
    { ref:"Proverbs 10:4", text:"He becometh poor that dealeth with a slack hand: but the hand of the diligent maketh rich." },
    { ref:"Proverbs 10:19", text:"In the multitude of words there wanteth not sin: but he that refraineth his lips is wise." }
  ],
  takeaway:"Righteous speech and honest work bring blessing, while foolish talk and laziness rot away a life.",
  quiz:[
    { q:"In Proverbs 10:26, what is a sluggard like to the person who sends him?", choices:["Cold water to a thirsty soul","A broken tooth","A burning fire","Vinegar to the teeth and smoke to the eyes"], a:3, why:"The verse says, As vinegar to the teeth, and as smoke to the eyes, so is the sluggard to them that send him." },
    { q:"What does 'love covereth all sins' mean as Proverbs 10 uses it?", choices:["Love overlooks offenses instead of stirring up strife","Love hides crimes from judges","Love makes sin acceptable","Love erases the need for repentance"], a:0, why:"The couplet sets hatred, which stirreth up strifes, against love, which covereth all sins." },
    { q:"What pattern do the couplets of Proverbs 10 teach about speech?", choices:["Loud speech proves wisdom","Restrained, honest words mark the righteous, while much talk leads to sin","Silence is always the safest virtue","Words have no lasting consequences"], a:1, why:"The chapter praises lips that refrain and the tongue of the just as choice silver, while the prating fool falls." }
  ] },
  { n:11, summary:"Honest dealing anchors this run of couplets: a false balance is abomination to the LORD, but a just weight is his delight, and riches profit nothing in the day of wrath. Pride brings shame, but with the lowly is wisdom, and integrity guides the upright through life. Speech matters in community: the talebearer reveals secrets while the faithful spirit conceals the matter, and where no counsel is the people fall, but in the multitude of counsellors there is safety. Generosity carries its own arithmetic — there is that scattereth, and yet increaseth, and he that watereth shall be watered also himself. A fair woman without discretion is called a jewel of gold in a swine's snout. The collection ends with fruitfulness: the fruit of the righteous is a tree of life, and he that winneth souls is wise.",
  context:"A continuation of Solomon's couplets, weighing honest commerce, community speech, generosity, and the fruit of the righteous.",
  keyVerses:[
    { ref:"Proverbs 11:1", text:"A false balance is abomination to the LORD: but a just weight is his delight." },
    { ref:"Proverbs 11:14", text:"Where no counsel is, the people fall: but in the multitude of counsellors there is safety." },
    { ref:"Proverbs 11:30", text:"The fruit of the righteous is a tree of life; and he that winneth souls is wise." }
  ],
  takeaway:"God delights in honest measures, wise counsel, and openhanded souls, who find they water themselves as they water others.",
  quiz:[
    { q:"In Proverbs 11:22, a beautiful woman without discretion is compared to what?", choices:["A garden without water","A lamp without oil","A jewel of gold in a swine's snout","A net full of holes"], a:2, why:"The verse reads, As a jewel of gold in a swine's snout, so is a fair woman which is without discretion." },
    { q:"What does 'there is that scattereth, and yet increaseth' teach about generosity?", choices:["Scattering seed wastes a harvest","Wealth grows by hoarding","Giving must be limited to family","The generous giver is enriched in return"], a:3, why:"Verse 25 continues the thought: the liberal soul shall be made fat, and he that watereth shall be watered also himself." },
    { q:"Why is 'a false balance' called an abomination to the LORD?", choices:["God delights in honest measures and fair dealings","Markets should be regulated by kings only","Weights change with the seasons","Merchants cannot understand arithmetic"], a:0, why:"The couplet pairs the false balance the LORD hates with the just weight that is his delight." }
  ] },
  { n:12, summary:"These couplets prize correction and useful work. Whoever loves instruction loves knowledge; he that hateth reproof is brutish. A virtuous woman is a crown to her husband, while the shaming wife is rottenness in his bones, and a righteous man even regardeth the life of his beast. The tongue receives close attention: some speak like the piercings of a sword, but the tongue of the wise is health; lying lips are abomination to the LORD, and heaviness of heart makes a man stoop, but a good word maketh it glad. Diligence frames the collection's close — the hand of the diligent shall bear rule while the slothful shall be under tribute, and the slothful man roasteth not that which he took in hunting. In the way of righteousness is life, and in the pathway thereof there is no death.",
  context:"A continuation of Solomon's couplets, prizing correction, kind words, honest work, and the virtuous woman who crowns her husband.",
  keyVerses:[
    { ref:"Proverbs 12:4", text:"A virtuous woman is a crown to her husband: but she that maketh ashamed is as rottenness in his bones." },
    { ref:"Proverbs 12:18", text:"There is that speaketh like the piercings of a sword: but the tongue of the wise is health." },
    { ref:"Proverbs 12:25", text:"Heaviness in the heart of man maketh it stoop: but a good word maketh it glad." }
  ],
  takeaway:"Receive correction gladly and speak words that heal; diligence rules while slothfulness serves.",
  quiz:[
    { q:"According to Proverbs 12:27, what does the slothful man fail to do with his game?", choices:["Share it with the poor","Roast what he took in hunting","Sell it at the gate","Offer it in sacrifice"], a:1, why:"The verse says the slothful man roasteth not that which he took in hunting, while the diligent man's substance is precious." },
    { q:"What contrast does Proverbs 12 draw between two kinds of speech?", choices:["Poetry versus prose","Public speeches versus private letters","Words like sword piercings versus the tongue of the wise that brings health","Shouted words versus whispered words"], a:2, why:"Verse 18 sets speech like the piercings of a sword against the tongue of the wise, which is health." },
    { q:"What principle underlies 'a good word maketh it glad' for a heavy heart?", choices:["Sadness should be concealed","Only professional counsel helps the downcast","Compliments must always be earned","Kind words lift those weighed down by sorrow"], a:3, why:"Verse 25 pairs the heaviness that makes the heart stoop with the good word that maketh it glad." }
  ] },
  { n:13, summary:"This set turns on listening and consequences. A wise son heareth his father's instruction, but a scorner hears no rebuke. The soul of the sluggard desireth and hath nothing, while the soul of the diligent shall be made fat; wealth gotten by vanity shall be diminished, but what is gathered by labour shall increase. Inner life gets memorable lines: hope deferred maketh the heart sick, but when the desire cometh it is a tree of life, and the way of transgressors is hard. Companionship decides destiny — he that walketh with wise men shall be wise, but a companion of fools shall be destroyed. A good man leaveth an inheritance to his children's children, and the chapter closes on family discipline: he that spareth his rod hateth his son, but he that loveth him chasteneth him betimes.",
  context:"A continuation of Solomon's couplets on listening, diligence, hope, companionship, inheritance, and family discipline.",
  keyVerses:[
    { ref:"Proverbs 13:4", text:"The soul of the sluggard desireth, and hath nothing: but the soul of the diligent shall be made fat." },
    { ref:"Proverbs 13:20", text:"He that walketh with wise men shall be wise: but a companion of fools shall be destroyed." },
    { ref:"Proverbs 13:24", text:"He that spareth his rod hateth his son: but he that loveth him chasteneth him betimes." }
  ],
  takeaway:"Choose wise companions and diligent habits, for hope fulfilled is a tree of life.",
  quiz:[
    { q:"In Proverbs 13, what becomes of the soul of the sluggard?", choices:["He desireth, and hath nothing","He inherits a full barn","He rules over cities","He gathers in harvest"], a:0, why:"Verse 4 says the soul of the sluggard desireth, and hath nothing; but the soul of the diligent shall be made fat." },
    { q:"Why does the chapter warn 'a companion of fools shall be destroyed'?", choices:["Fools refuse to share food","Friendship shapes character, and folly ruins those who share it","Traveling in groups is unsafe","Fools are always poorer"], a:1, why:"The couplet sets walking with wise men, which makes wise, against the companionship of fools, which ends in destruction." },
    { q:"What does 'hope deferred maketh the heart sick' acknowledge about faithful living?", choices:["Delayed desires prove God's anger","Wishes should be abandoned quickly","Longing can wound, but fulfilled desire is a tree of life","Patience has no cost"], a:2, why:"Verse 12 admits the sickness of long delay while promising that when the desire cometh, it is a tree of life." }
  ] },
  { n:14, summary:"House-building opens and nation-shaping closes this chapter. Every wise woman buildeth her house, but the foolish plucketh it down with her hands; the couplet about oxen teaches that where no oxen are, the crib is clean, but much increase comes by the ox's strength. Witnesses appear twice: a faithful witness will not lie, and a true witness delivereth souls. The sober center warns that there is a way which seemeth right unto a man, but the end thereof are the ways of death. Temperament matters: he that is slow to wrath is of great understanding, and a sound heart is the life of the flesh, while envy is the rottenness of the bones. Oppressing the poor reproaches his Maker. The collection's climax lifts to public life: righteousness exalteth a nation, but sin is a reproach to any people.",
  context:"A continuation of Solomon's couplets running from the wise woman who builds her house to righteousness that exalts a nation.",
  keyVerses:[
    { ref:"Proverbs 14:12", text:"There is a way which seemeth right unto a man, but the end thereof are the ways of death." },
    { ref:"Proverbs 14:29", text:"He that is slow to wrath is of great understanding: but he that is hasty of spirit exalteth folly." },
    { ref:"Proverbs 14:34", text:"Righteousness exalteth a nation: but sin is a reproach to any people." }
  ],
  takeaway:"What seems right must still be tested, for righteousness exalts a nation while sin reproaches any people.",
  quiz:[
    { q:"What does 'where no oxen are, the crib is clean' teach?", choices:["Clean barns bring blessing","Oxen are only a burden","Productive strength brings mess as well as increase","Poverty is always unclean"], a:2, why:"The couplet completes the thought: much increase is by the strength of the ox, so cleanliness without the ox yields nothing." },
    { q:"What does 'there is a way which seemeth right unto a man' warn against?", choices:["Paths that feel right can end in death","Rivers often change course","Travelers should never ask directions","Ancient roads were unreliable"], a:0, why:"The verse warns that the way seeming right ends in the ways of death." },
    { q:"What national principle does Proverbs 14:34 declare?", choices:["Armies decide a nation's fate","Righteousness exalteth a nation, but sin is a reproach to any people","Wealth secures a country's future","Kings determine national honor"], a:1, why:"Verse 34 states the principle directly: righteousness exalts a nation, while sin is a reproach to any people." }
  ] },
  { n:15, summary:"Few chapters speak more directly to daily relationships. A soft answer turneth away wrath, but grievous words stir up anger; a wholesome tongue is a tree of life, and the eyes of the LORD are in every place, beholding the evil and the good. The LORD delights in the prayer of the upright while the sacrifice of the wicked is abomination. Contentment gets two 'better than' sayings: better is little with the fear of the LORD than great treasure and trouble therewith, and better is a dinner of herbs where love is than a stalled ox and hatred therewith. The wrathful man stirreth up strife, but he that is slow to anger appeaseth it, while the way of the slothful man is as an hedge of thorns. A word spoken in due season, how good is it; and before honour is humility.",
  context:"A continuation of Solomon's couplets, rich in counsel on speech, contentment, anger, and humility before honor.",
  keyVerses:[
    { ref:"Proverbs 15:1", text:"A soft answer turneth away wrath: but grievous words stir up anger." },
    { ref:"Proverbs 15:3", text:"The eyes of the LORD are in every place, beholding the evil and the good." },
    { ref:"Proverbs 15:17", text:"Better is a dinner of herbs where love is, than a stalled ox and hatred therewith." }
  ],
  takeaway:"Gentle words turn away wrath, and love at the table is better than luxury with hatred.",
  quiz:[
    { q:"According to Proverbs 15:4, what is 'a wholesome tongue'?", choices:["A modest vocabulary","A loud voice in argument","A tree of life","A shield in battle"], a:2, why:"Verse 4 says a wholesome tongue is a tree of life, but perverseness therein is a breach in the spirit." },
    { q:"Why is 'a dinner of herbs where love is' better than 'a stalled ox and hatred'?", choices:["Herbs cost less at the market","Oxen were reserved for priests","Feasts dull the conscience","Loving fellowship outvalues luxury served with hatred"], a:3, why:"The couplet weighs a simple meal shared in love above rich food accompanied by hatred." },
    { q:"How does 'a soft answer turneth away wrath' guide conflict?", choices:["Gentle replies de-escalate anger","Silence proves innocence","Anger must be answered in kind","Wrath should be vented quickly"], a:0, why:"The couplet shows a soft answer turning wrath away while grievous words stir anger up." }
  ] },
  { n:16, summary:"Divine sovereignty runs beneath this chapter's counsel. The preparations of the heart and the answer of the tongue are from the LORD; a man's heart deviseth his way, but the LORD directeth his steps, and when a man's ways please the LORD he makes even his enemies to be at peace with him. Better is a little with righteousness than great revenues without right, and getting wisdom is better than getting gold. The collection's most quoted line warns that pride goeth before destruction and a haughty spirit before a fall. Speech and self-command recur: pleasant words are as an honeycomb, sweet to the soul and health to the bones, and he that is slow to anger is better than the mighty, ruling his spirit better than one who takes a city. Even the lot cast into the lap has its whole disposing of the LORD.",
  context:"A continuation of Solomon's couplets stressing the LORD's direction of human steps and the fall awaiting pride.",
  keyVerses:[
    { ref:"Proverbs 16:3", text:"Commit thy works unto the LORD, and thy thoughts shall be established." },
    { ref:"Proverbs 16:18", text:"Pride goeth before destruction, and an haughty spirit before a fall." },
    { ref:"Proverbs 16:32", text:"He that is slow to anger is better than the mighty; and he that ruleth his spirit than he that taketh a city." }
  ],
  takeaway:"Commit your works to the LORD and keep pride far away, for He directs the steps that humility secures.",
  quiz:[
    { q:"Proverbs 16:24 compares pleasant words to what?", choices:["A flowing brook","An honeycomb, sweet to the soul and health to the bones","A morning sunrise","A well-tended garden"], a:1, why:"The verse reads, Pleasant words are as an honeycomb, sweet to the soul, and health to the bones." },
    { q:"What does 'he that ruleth his spirit' accomplish, according to Proverbs 16:32?", choices:["He gains many friends","He escapes every trial","He is better than a mighty warrior who takes a city","He inherits the king's throne"], a:2, why:"The verse ranks the slow to anger above the mighty and the self-ruled above the taker of cities." },
    { q:"What sequence does 'pride goeth before destruction' warn every person about?", choices:["Pride improves one's standing","Destruction follows only the lazy","Falls come from outside enemies","Haughty self-exaltation precedes a fall"], a:3, why:"The couplet teaches that destruction follows pride and a fall follows a haughty spirit." }
  ] },
  { n:17, summary:"Quietness and fullness of heart are weighed against riches here. Better is a dry morsel with quietness than a house full of sacrifices with strife. The fining pot is for silver and the furnace for gold, but the LORD trieth the hearts. Mocking the poor reproaches his Maker. A reproof enters deeper into a wise man than a hundred stripes into a fool, and even a fool, holding his peace, is counted wise. Friendship receives one of the book's great lines: a friend loveth at all times, and a brother is born for adversity. Strife is pictured as water let out of a channel, best stopped at the beginning, and cheer is medicine — a merry heart doeth good like a remedy, while a broken spirit drieth the bones. Meeting a bear robbed of her whelps is safer than meeting a fool in his folly.",
  context:"A continuation of Solomon's couplets on quietness, tested hearts, friendship in adversity, and a merry heart's medicine.",
  keyVerses:[
    { ref:"Proverbs 17:1", text:"Better is a dry morsel, and quietness therewith, than an house full of sacrifices with strife." },
    { ref:"Proverbs 17:17", text:"A friend loveth at all times, and a brother is born for adversity." },
    { ref:"Proverbs 17:22", text:"A merry heart doeth good like a medicine: but a broken spirit drieth the bones." }
  ],
  takeaway:"A merry, quiet heart is medicine, and a friend who loves at all times is a gift of adversity.",
  quiz:[
    { q:"In Proverbs 17:12, meeting what is preferable to meeting a fool in his folly?", choices:["A bear robbed of her whelps","A lion in the streets","A serpent on a rock","A wild goat on the cliffs"], a:0, why:"The verse says, Let a bear robbed of her whelps meet a man, rather than a fool in his folly." },
    { q:"Why does the chapter say to 'leave off contention' before it breaks out?", choices:["Arguments bore the neighbors","Strife spreads like water let out of a channel once it starts","Courts punish all quarrels","Peace makes people wealthy"], a:1, why:"Verse 14 compares the beginning of strife to letting out water, advising escape before the quarrel is meddled with." },
    { q:"What does 'a friend loveth at all times' reveal about true friendship?", choices:["Friendship ends when prosperity does","Loyalty is proven especially in adversity","Friends must agree on everything","Friendship is a business arrangement"], a:1, why:"The couplet pairs constant friendship with the brother born for adversity." }
  ] },
  { n:18, summary:"The tongue and its consequences dominate. A fool's mouth is his destruction and the snare of his soul; the words of a talebearer go down like wounds into the innermost parts of the belly; and death and life are in the power of the tongue. Against careless speech stands the security of the righteous: the name of the LORD is a strong tower, which the righteous run into and are safe. Patience in judgment is counseled — answering a matter before hearing it is folly and shame, and the man first in his own cause seems just until his neighbour comes and searches him. An offended brother is harder to be won than a strong city. Marriage and friendship close the set: whoso findeth a wife findeth a good thing and obtaineth favour of the LORD, and there is a friend that sticketh closer than a brother.",
  context:"A continuation of Solomon's couplets centered on the power of words, the strong tower of the LORD's name, and true friends.",
  keyVerses:[
    { ref:"Proverbs 18:10", text:"The name of the LORD is a strong tower: the righteous runneth into it, and is safe." },
    { ref:"Proverbs 18:13", text:"He that answereth a matter before he heareth it, it is folly and shame unto him." },
    { ref:"Proverbs 18:21", text:"Death and life are in the power of the tongue: and they that love it shall eat the fruit thereof." }
  ],
  takeaway:"Use words that give life, hear a matter fully, and run to the strong tower of the LORD's name.",
  quiz:[
    { q:"In Proverbs 18, what is the name of the LORD compared to for the righteous?", choices:["A hiding shepherd","A fortified vineyard","A morning star","A strong tower the righteous run into and are safe"], a:3, why:"Verse 10 declares the name of the LORD a strong tower into which the righteous run and are safe." },
    { q:"What does 'death and life are in the power of the tongue' assert about speech?", choices:["Words carry power for destruction or blessing","Speech should be avoided in disputes","Only written words endure","Tongues decide legal verdicts"], a:0, why:"The verse adds that they that love the tongue's use shall eat the fruit thereof, for good or ill." },
    { q:"Why is answering a matter before hearing it called folly and shame?", choices:["Quick answers impress judges","Justice requires hearing a matter fully before judging","Hearing is less reliable than reading","Silence offends the speaker"], a:1, why:"Verse 17 reinforces this: the man first in his own cause seems just until his neighbour comes and searches him." }
  ] },
  { n:19, summary:"Integrity outvalues comfort in this chapter: better is the poor who walks in honesty than one perverse in lips and a fool. Anger and grace get paired counsel — the discretion of a man deferreth his anger, and it is his glory to pass over a transgression, while a man of great wrath must be punished again and again. Family sayings abound: a foolish son is the calamity of his father, the contentions of a wife are a continual dropping, house and riches are the inheritance of fathers, but a prudent wife is from the LORD. Charity is framed as lending: he that hath pity upon the poor lendeth unto the LORD, who will repay him. Above every human device stands God's counsel — there are many devices in a man's heart, nevertheless the counsel of the LORD, that shall stand. The slothful hides his hand even from feeding his own mouth.",
  context:"A continuation of Solomon's couplets on integrity, anger, family sayings, charity as lending to the LORD, and God's standing counsel.",
  keyVerses:[
    { ref:"Proverbs 19:14", text:"House and riches are the inheritance of fathers: and a prudent wife is from the LORD." },
    { ref:"Proverbs 19:17", text:"He that hath pity upon the poor lendeth unto the LORD; and that which he hath given will he pay him again." },
    { ref:"Proverbs 19:21", text:"There are many devices in a man's heart; nevertheless the counsel of the LORD, that shall stand." }
  ],
  takeaway:"Pass over transgressions, pity the poor as lending to the LORD, and rest in the counsel of the LORD that shall stand.",
  quiz:[
    { q:"In Proverbs 19:24, what will the slothful man not do?", choices:["Leave his house","Wake before noon","Bring his hidden hand to his own mouth","Share his bread with others"], a:2, why:"The verse says he hideth his hand in his bosom, and will not so much as bring it to his mouth again." },
    { q:"What does it mean that he who has pity on the poor 'lendeth unto the LORD'?", choices:["The poor must repay with interest","Lending replaces tithing","Charity is a tax on the wealthy","Compassion shown to the poor God counts as a loan He will repay"], a:3, why:"Verse 17 promises that what is given to the poor, the LORD will pay again." },
    { q:"What does 'the counsel of the LORD, that shall stand' teach about human plans?", choices:["God's purposes outlast and override human devices","Planning is sinful","Human schemes always succeed","Counsel is useful only for kings"], a:0, why:"Many devices fill a man's heart, says the verse, but the LORD's counsel is what stands." }
  ] },
  { n:20, summary:"Appetite and honesty are tested here. Wine is a mocker and strong drink is raging, and whoever is deceived by them is not wise. The sluggard will not plow by reason of the cold, so he begs in harvest and has nothing. Commerce is scrutinized: divers weights and divers measures are alike abomination to the LORD, and bread of deceit is sweet for the moment but afterwards fills the mouth with gravel. Even a child is known by his doings. Injuries are to be left with God — say not, I will recompense evil, but wait on the LORD, and he shall save thee. The spirit of man is called the candle of the LORD, searching all the inward parts. Planning belongs with counsel: every purpose is established by counsel, and with good advice make war.",
  context:"A continuation of Solomon's couplets weighing drink, work, honest measures, a child's conduct, and waiting on the LORD.",
  keyVerses:[
    { ref:"Proverbs 20:1", text:"Wine is a mocker, strong drink is raging: and whosoever is deceived thereby is not wise." },
    { ref:"Proverbs 20:11", text:"Even a child is known by his doings, whether his work be pure, and whether it be right." },
    { ref:"Proverbs 20:22", text:"Say not thou, I will recompense evil; but wait on the LORD, and he shall save thee." }
  ],
  takeaway:"Leave recompense to God, keep your measures honest, and do not let appetite mock you.",
  quiz:[
    { q:"What does Proverbs 20:17 say becomes of a man after eating 'bread of deceit'?", choices:["He grows strong","His mouth is filled with gravel","He is crowned at the gate","He sleeps without dreams"], a:1, why:"The verse admits deceit is sweet for the moment, but afterwards his mouth shall be filled with gravel." },
    { q:"Why are 'divers weights and divers measures' an abomination to the LORD?", choices:["Trade should use gold only","Merchants must travel light","Cheating customers with false measures betrays honest dealing","Small weights are hard to carry"], a:2, why:"Both verse 10 and verse 23 condemn varying weights and false balances in commerce." },
    { q:"What does 'wait on the LORD' teach about personal wrongs?", choices:["Revenge should be delayed a year","Injuries must be reported publicly","Vengeance belongs to the injured party","Leave recompense to God instead of repaying evil"], a:3, why:"Verse 22 forbids saying I will recompense evil and points instead to the LORD's salvation." }
  ] },
  { n:21, summary:"God's government of human affairs frames these couplets. The king's heart is in the hand of the LORD, as rivers of water he turneth whithersoever he will, and to do justice and judgment is more acceptable to the LORD than sacrifice. Diligence and haste are contrasted — the thoughts of the diligent tend only to plenteousness, but of every one that is hasty only to want. Domestic misery gets vivid hyperbole: better to dwell in a corner of the housetop than with a brawling woman in a wide house, and better in the wilderness than with a contentious and angry woman. Mercy has consequences: whoso stoppeth his ears at the cry of the poor shall cry himself and not be heard, while he that followeth after righteousness and mercy findeth life, righteousness, and honour. The horse is prepared against the day of battle, but safety is of the LORD.",
  context:"A continuation of Solomon's couplets, opening with the king's heart in the LORD's hand and closing with safety that is of the LORD.",
  keyVerses:[
    { ref:"Proverbs 21:1", text:"The king's heart is in the hand of the LORD, as the rivers of water: he turneth it whithersoever he will." },
    { ref:"Proverbs 21:3", text:"To do justice and judgment is more acceptable to the LORD than sacrifice." },
    { ref:"Proverbs 21:31", text:"The horse is prepared against the day of battle: but safety is of the LORD." }
  ],
  takeaway:"Do justice rather than ritual, act on the poor's cry, and prepare faithfully while trusting safety to the LORD.",
  quiz:[
    { q:"In Proverbs 21, where is it better to live than with a brawling woman in a wide house?", choices:["In a corner of the housetop","In a king's palace","In a merchant's ship","In a walled city"], a:0, why:"Verse 9 prefers the housetop corner to the wide house with a brawling woman." },
    { q:"Why is doing 'justice and judgment' more acceptable to the LORD than sacrifice?", choices:["Sacrifices were too expensive","Ritual worship cannot replace righteous dealing with others","Animals were scarce in Israel","Judges should officiate at altars"], a:1, why:"Verse 3 ranks just dealing above ritual, teaching that right conduct is the worship God weighs most." },
    { q:"What does 'safety is of the LORD' add to the picture of a prepared horse?", choices:["Horses win battles alone","Preparation is useless","Human preparation cannot replace God's protection","Cavalry decides wars"], a:2, why:"Verse 31 keeps preparation in view while declaring that final safety belongs to the LORD." }
  ] },
  { n:22, summary:"The Solomonic couplets conclude with character sayings, then a new section of 'the words of the wise' begins. A good name is rather to be chosen than great riches; the rich and poor meet together, and the LORD is the maker of them all. Training counsel appears — train up a child in the way he should go, and when he is old he will not depart from it — alongside economics: the borrower is servant to the lender. The slothful man invents dangers, claiming there is a lion without and he shall be slain in the streets, while foolishness bound in a child's heart is driven far from him by the rod of correction. The wise words call for humility before truth, defend the poor whom the LORD will plead for, warn against friendship with the furious, forbid moving the ancient landmark, and promise that the diligent in business shall stand before kings.",
  context:"The final chapter of Solomon's couplets, where a new section of \"the words of the wise\" begins at verse 17.",
  keyVerses:[
    { ref:"Proverbs 22:1", text:"A good name is rather to be chosen than great riches, and loving favour rather than silver and gold." },
    { ref:"Proverbs 22:6", text:"Train up a child in the way he should go: and when he is old, he will not depart from it." },
    { ref:"Proverbs 22:29", text:"Seest thou a man diligent in his business? he shall stand before kings; he shall not stand before mean men." }
  ],
  takeaway:"A good name outvalues riches, and a child trained in the right way keeps it when he is old.",
  quiz:[
    { q:"What excuse does the slothful man give in Proverbs 22:13?", choices:["The harvest is too heavy","His roof is leaking","The road is closed","There is a lion without; he says he shall be slain in the streets"], a:3, why:"The slothful man claims, There is a lion without, I shall be slain in the streets." },
    { q:"What does 'train up a child in the way he should go' promise?", choices:["When he is old, he will not depart from it","Children will never question parents","Teaching ends at adulthood","Obedience can be forced by threats"], a:0, why:"The verse directly promises lasting effect: when he is old, he will not depart from it." },
    { q:"Why is 'a good name' chosen rather than great riches?", choices:["Wealth is forbidden in scripture","Integrity and reputation outlast and outweigh money","Names are easier to keep than coins","Riches attract enemies"], a:1, why:"Verse 1 values a good name and loving favour above great riches, silver, and gold." }
  ] },
  { n:23, summary:"Table manners become moral instruction. When eating with a ruler, consider diligently what is before thee and put a knife to thy throat if given to appetite, for his dainties are deceitful meat. Riches make themselves wings and fly away as an eagle toward heaven, so labour not to be rich. The hypocritical host who says eat and drink while his heart is not with you teaches the book's great inward line: as he thinketh in his heart, so is he. The father asks for the heart itself — my son, give me thine heart — and commands, buy the truth, and sell it not. Drunkenness is dissected at the end: wine that gives its colour in the cup at last biteth like a serpent and stingeth like an adder, and the beaten drunkard, with wounds without cause, cries in delusion, when shall I awake? I will seek it yet again.",
  context:"A chapter of \"the words of the wise\" teaching restraint at a ruler's table, honesty of heart, and the anatomy of drunkenness.",
  keyVerses:[
    { ref:"Proverbs 23:7", text:"For as he thinketh in his heart, so is he: Eat and drink, saith he to thee; but his heart is not with thee." },
    { ref:"Proverbs 23:23", text:"Buy the truth, and sell it not; also wisdom, and instruction, and understanding." },
    { ref:"Proverbs 23:31", text:"Look not thou upon the wine when it is red, when it giveth his colour in the cup, when it moveth itself aright." }
  ],
  takeaway:"Buy the truth and never sell it, and refuse the cup that bites like a serpent at the last.",
  quiz:[
    { q:"In the drunkard's portrait, what does he say after being beaten?", choices:["I will never drink again","Wine is a mocker","They have stricken me, and I was not sick; when shall I awake? I will seek it yet again","Take my garment for a pledge"], a:2, why:"Verse 35 gives the drunkard's deluded words: beaten and feeling it not, he still vows to seek it yet again." },
    { q:"What does the chapter teach about wine that 'giveth his colour in the cup'?", choices:["It strengthens the heart","It is reserved for festivals","It heals the sick","At the last it biteth like a serpent and stingeth like an adder"], a:3, why:"Verse 32 warns that the alluring wine in the cup bites like a serpent and stings like an adder at the last." },
    { q:"What does 'buy the truth, and sell it not' teach about conviction?", choices:["Truth is worth any cost and must never be traded away","Truth changes with the market","Wisdom belongs to the wealthy","Instruction can be postponed"], a:0, why:"The command prices truth as something to acquire at cost and never part with, together with wisdom and understanding." }
  ] },
  { n:24, summary:"Building and courage carry this chapter. Through wisdom is an house builded, by understanding it is established, and by knowledge its chambers are filled with precious riches; by wise counsel thou shalt make thy war. Courage is demanded twice: if thou faint in the day of adversity, thy strength is small, and to forbear delivering those drawn unto death is seen by him that pondereth the heart, who renders to every man according to his works. A just man falleth seven times and riseth up again, but the wicked fall into mischief; and it displeases the LORD when we rejoice at an enemy's fall. The famous tour of the slothful's field shows thorns, nettles, and a broken stone wall, teaching that a little sleep, a little slumber lets poverty come as one that travelleth and want as an armed man. Revenge is forbidden: say not, I will do so to him as he hath done to me.",
  context:"A chapter of \"the words of the wise\" on building by wisdom, courage in adversity, rising after falls, and the slothful's ruined field.",
  keyVerses:[
    { ref:"Proverbs 24:3", text:"Through wisdom is an house builded; and by understanding it is established:" },
    { ref:"Proverbs 24:10", text:"If thou faint in the day of adversity, thy strength is small." },
    { ref:"Proverbs 24:16", text:"For a just man falleth seven times, and riseth up again: but the wicked shall fall into mischief." }
  ],
  takeaway:"Rise after every fall, rescue those in danger, and build your house through wisdom.",
  quiz:[
    { q:"What did the passerby observe about the field of the slothful?", choices:["It yielded a double harvest","It was grown over with thorns and nettles, its stone wall broken down","It was offered for sale at the gate","It had been planted with vines"], a:1, why:"Verses 30-31 describe the field all grown over with thorns and nettles, with the stone wall broken down." },
    { q:"What comfort does 'a just man falleth seven times, and riseth up again' give?", choices:["Falls are imaginary","Righteous people never struggle","The righteous persist and rise after setbacks while the wicked fall into mischief","Seven is the limit of forgiveness"], a:2, why:"The couplet contrasts the just man's resilience with the wicked, who shall fall into mischief." },
    { q:"What duty does 'if thou forbear to deliver them that are drawn unto death' establish?", choices:["Rescue only family members","Wait for officials to act","Avoid dangerous situations","We must act to save those in mortal danger, for God sees our excuses"], a:3, why:"Verses 11-12 warn that claiming we knew it not will not avail before him that pondereth the heart." }
  ] },
  { n:25, summary:"A new collection opens: these are also proverbs of Solomon, which the men of Hezekiah king of Judah copied out. Courtly wisdom leads — it is the glory of God to conceal a thing, but the honour of kings to search out a matter; removing dross from silver pictures removing wicked men from before the king, whose throne is then established in righteousness. The book's most famous image of timely speech appears: a word fitly spoken is like apples of gold in pictures of silver. Reliability, tact, and moderation follow — confidence in an unfaithful man is a broken tooth and a foot out of joint; a soft tongue breaketh the bone; honey eaten in excess must be vomited; singing songs to a heavy heart is like vinegar upon nitre. Kindness to a hungry enemy heaps coals of fire upon his head, and he that hath no rule over his own spirit is like a city broken down and without walls.",
  context:"First chapter of the collection the text says the men of Hezekiah king of Judah copied out, much of it courtly counsel.",
  keyVerses:[
    { ref:"Proverbs 25:2", text:"It is the glory of God to conceal a thing: but the honour of kings is to search out a matter." },
    { ref:"Proverbs 25:11", text:"A word fitly spoken is like apples of gold in pictures of silver." },
    { ref:"Proverbs 25:28", text:"He that hath no rule over his own spirit is like a city that is broken down, and without walls." }
  ],
  takeaway:"A word fitly spoken and a spirit ruled by self-control are worth more than boasts or honey without measure.",
  quiz:[
    { q:"In Proverbs 25:11, what is 'a word fitly spoken' like?", choices:["Apples of gold in pictures of silver","Snow in summer","Cold water to a thirsty soul","A shield of brass"], a:0, why:"The verse compares a word fitly spoken to apples of gold in pictures of silver." },
    { q:"What does giving a hungry enemy bread and drink do, according to the chapter?", choices:["It humiliates him before judges","It heaps coals of fire upon his head, and the LORD rewards it","It signals the end of friendship","It invites retaliation"], a:1, why:"Verses 21-22 promise that feeding the enemy heaps coals of fire upon his head and the LORD shall reward thee." },
    { q:"What does 'he that hath no rule over his own spirit is like a city broken down' teach?", choices:["Cities without walls are safer","Strong feeling should be expressed freely","Self-control is the defense of the inner life","Rulers need no restraint"], a:2, why:"The comparison shows that without self-rule, a person stands open to every assault, like a wallless city." }
  ] },
  { n:26, summary:"Fools and sluggards dominate this chapter, often with cutting comparisons. Honour for a fool is as snow in summer and rain in harvest; a stone bound in a sling is as out of place. Two consecutive verses seem to contradict — answer not a fool according to his folly, and answer a fool according to his folly — teaching discernment about when silence and when a fitting reply is needed. The dog that returns to his vomit pictures the fool returning to his folly, and there is more hope of a fool than of a man wise in his own conceit. The slothful man fears a lion in the way, turns on his bed like a door on hinges, hides his hand from feeding himself, and thinks himself wiser than seven men that can render a reason. Meddling in others' strife is like taking a dog by the ears; where no talebearer is, the strife ceaseth; and whoever digs a pit falls into it.",
  context:"A chapter of Hezekiah's collection devoted to portraits of the fool and the slothful, with counsel against meddling and talebearing.",
  keyVerses:[
    { ref:"Proverbs 26:4", text:"Answer not a fool according to his folly, lest thou also be like unto him." },
    { ref:"Proverbs 26:11", text:"As a dog returneth to his vomit, so a fool returneth to his folly." },
    { ref:"Proverbs 26:20", text:"Where no wood is, there the fire goeth out: so where there is no talebearer, the strife ceaseth." }
  ],
  takeaway:"Discern when to answer and when to be silent, and stop strife by starving it of talebearing fuel.",
  quiz:[
    { q:"In Proverbs 26, what does the slothful do upon his bed?", choices:["Weeps over his poverty","Plans his harvest","Prays for strength","Turns like a door upon his hinges"], a:3, why:"Verse 14 says, As the door turneth upon his hinges, so doth the slothful upon his bed." },
    { q:"How can both verses 4 and 5 be true — do not answer a fool, and answer a fool?", choices:["Discernment decides when silence and when a fitting reply prevents his conceit","One verse cancels the other","Fools should always be answered first","Both verses describe kings"], a:0, why:"Verse 4 warns against descending to his level; verse 5 warns that silence may leave him wise in his own conceit." },
    { q:"What does 'where there is no talebearer, the strife ceaseth' teach about gossip?", choices:["Gossip is harmless fun","Withholding the fuel of talebearing lets quarrels die out","Strife ends only by law","Secrets should be shared widely"], a:1, why:"The comparison to fire without wood shows that strife dies when the talebearer's fuel is removed." }
  ] },
  { n:27, summary:"Humility, friendship, and stewardship share this chapter. Boast not thyself of to morrow, for thou knowest not what a day may bring forth; let another man praise thee, and not thine own mouth. A fool's wrath is heavier than stone and sand. Friendship receives the book's finest treatment: open rebuke is better than secret love, faithful are the wounds of a friend, ointment and perfume rejoice the heart so does hearty counsel, and iron sharpeneth iron; so a man sharpeneth the countenance of his friend. A neighbour that is near is better than a brother far off, while the contentious woman is a continual dropping on a rainy day. The prudent man foreseeth evil and hides himself. Self-satisfaction is examined — hell and destruction are never full, so the eyes of man are never satisfied — and the chapter ends with farm diligence: know the state of thy flocks, for riches are not for ever.",
  context:"A chapter of Hezekiah's collection on humility about tomorrow, sharpening friendship, and diligence with one's flocks.",
  keyVerses:[
    { ref:"Proverbs 27:1", text:"Boast not thyself of to morrow; for thou knowest not what a day may bring forth." },
    { ref:"Proverbs 27:6", text:"Faithful are the wounds of a friend; but the kisses of an enemy are deceitful." },
    { ref:"Proverbs 27:17", text:"Iron sharpeneth iron; so a man sharpeneth the countenance of his friend." }
  ],
  takeaway:"Faithful friends sharpen one another, but no one can boast of a day that is not yet given.",
  quiz:[
    { q:"What does Proverbs 27:17 say about friendship?", choices:["A friend is born for adversity","Iron sharpeneth iron; so a man sharpeneth the countenance of his friend","Faithful are the wounds of a friend","A friend sticketh closer than a brother"], a:1, why:"Verse 17 compares friends to iron sharpening iron, each honing the other." },
    { q:"Why are 'faithful are the wounds of a friend' better than an enemy's kisses?", choices:["Friends apologize afterwards","Enemies rarely speak at all","Honest correction from love helps, while flattery conceals harm","Wounds heal faster than insults"], a:2, why:"The couplet values a friend's honest, painful correction over the deceitful kisses of an enemy." },
    { q:"What does 'boast not thyself of to morrow' teach about planning?", choices:["The future is uncertain; humility governs our plans","Planning is forbidden","Tomorrow always arrives on schedule","Confidence guarantees success"], a:0, why:"No one knows what a day may bring forth, the verse says, so presumption about tomorrow is folly." }
  ] },
  { n:28, summary:"Guilt and courage open this set: the wicked flee when no man pursueth, but the righteous are bold as a lion. A wicked ruler over poor people is as a roaring lion and a ranging bear, and a poor man who oppresses the poor is a sweeping rain that leaves no food. Confession is held out plainly — he that covereth his sins shall not prosper, but whoso confesseth and forsaketh them shall have mercy. Money is tested repeatedly: he that maketh haste to be rich shall not be innocent, what is gained by usury and unjust gain ends up gathered for him that pities the poor, and he that giveth unto the poor shall not lack. Foolish trust is exposed — he that trusteth in his own heart is a fool, but whoso walketh wisely shall be delivered — while he that putteth his trust in the LORD shall be made fat.",
  context:"A chapter of Hezekiah's collection contrasting the fleeing wicked with the bold righteous and calling sinners to confess and forsake.",
  keyVerses:[
    { ref:"Proverbs 28:1", text:"The wicked flee when no man pursueth: but the righteous are bold as a lion." },
    { ref:"Proverbs 28:13", text:"He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy." },
    { ref:"Proverbs 28:26", text:"He that trusteth in his own heart is a fool: but whoso walketh wisely, he shall be delivered." }
  ],
  takeaway:"Confess and forsake sin to find mercy, give to the poor, and trust God rather than your own heart.",
  quiz:[
    { q:"How are the righteous described in Proverbs 28:1?", choices:["Still waters","Bold as a lion","Trees planted by water","Mighty oaks"], a:1, why:"The couplet contrasts the fleeing wicked with the righteous, who are bold as a lion." },
    { q:"What two actions bring mercy, according to Proverbs 28:13?", choices:["Fasting and almsgiving","Sacrifices and vows","Confessing and forsaking sin","Silence and patience"], a:2, why:"The verse promises mercy to whoso confesseth and forsaketh his sins, not to those who cover them." },
    { q:"Why is 'he that trusteth in his own heart' called a fool?", choices:["Feelings are always deceptive","The heart is evil by nature","Trust belongs to friends","Self-reliance without wise walking leads astray, while wise walkers are delivered"], a:3, why:"The couplet opposes trust in one's own heart to walking wisely, which ends in deliverance." }
  ] },
  { n:29, summary:"Rulers, reproof, and revelation shape this chapter. He that, often reproved, hardeneth his neck shall suddenly be destroyed without remedy; when the righteous are in authority the people rejoice, but when the wicked bear rule the people mourn. A king establishes the land by judgment and overthrows it by receiving gifts, and the king who faithfully judgeth the poor has a throne established for ever. Child training returns — the rod and reproof give wisdom, and correction gives a father rest and delight. The most quoted verse proclaims that where there is no vision, the people perish, but he that keepeth the law, happy is he. Speech and temperament get caution: a fool uttereth all his mind, an angry man stirreth up strife, a man's pride bringeth him low but honour upholdeth the humble. The fear of man bringeth a snare, but whoso putteth his trust in the LORD shall be safe.",
  context:"A chapter of Hezekiah's collection on rulers and the ruled, the rod and reproof, vision for a people, and trust over fear of man.",
  keyVerses:[
    { ref:"Proverbs 29:1", text:"He, that being often reproved hardeneth his neck, shall suddenly be destroyed, and that without remedy." },
    { ref:"Proverbs 29:18", text:"Where there is no vision, the people perish: but he that keepeth the law, happy is he." },
    { ref:"Proverbs 29:25", text:"The fear of man bringeth a snare: but whoso putteth his trust in the LORD shall be safe." }
  ],
  takeaway:"Stay soft to reproof, keep vision before the people, and trust the LORD rather than fearing man.",
  quiz:[
    { q:"According to Proverbs 29:18, what happens 'where there is no vision'?", choices:["The people perish","Kings are crowned","Harvests fail","Walls fall down"], a:0, why:"The verse states that where there is no vision, the people perish, but keeping the law brings happiness." },
    { q:"What does 'the fear of man bringeth a snare' expose about people-pleasing?", choices:["Crowds protect the timid","Dreading others' opinions traps us, while trusting the LORD keeps us safe","Fear is a sign of wisdom","Leaders cannot be feared"], a:1, why:"The couplet sets the snare of fearing man against the safety of trusting in the LORD." },
    { q:"What does verse 1 warn happens to the man who hardens his neck under frequent reproof?", choices:["He grows in patience","He is promoted suddenly","He shall suddenly be destroyed, and that without remedy","He becomes a teacher of wisdom"], a:2, why:"The opening verse gives the grim end of repeated but refused correction: sudden destruction without remedy." }
  ] },
  { n:30, summary:"The words of Agur the son of Jakeh open with humility — surely I am more brutish than any man — and wonder at the Creator, who gathered the wind in his fists, bound the waters in a garment, and established the ends of the earth. Every word of God is pure, a shield to all who trust him, and nothing may be added to it. Agur's famous prayer asks neither poverty nor riches, only food convenient for him, lest fullness make him deny the LORD or poverty drive him to steal. Numbered lists follow: generations that curse parents and devour the poor; things never satisfied, from the grave to the fire; things too wonderful to know; things the earth cannot bear; four small but exceeding wise creatures — ants preparing their meat in summer, conies in the rocks, locusts marching in bands, spiders in kings' palaces; and stately walkers led by the lion. Forcing wrath, like churning milk, brings forth strife.",
  context:"The text introduces this chapter as the words of Agur the son of Jakeh, spoken unto Ithiel and Ucal.",
  keyVerses:[
    { ref:"Proverbs 30:5", text:"Every word of God is pure: he is a shield unto them that put their trust in him." },
    { ref:"Proverbs 30:8", text:"Remove far from me vanity and lies: give me neither poverty nor riches; feed me with food convenient for me:" },
    { ref:"Proverbs 30:24", text:"There be four things which are little upon the earth, but they are exceeding wise:" }
  ],
  takeaway:"Reverence every pure word of God and ask for enough, not abundance, knowing He governs what we cannot.",
  quiz:[
    { q:"In Agur's list of four things 'exceeding wise,' what do the ants do?", choices:["Build houses in the rocks","Go forth in bands without a king","Take hold with her hands in kings' palaces","Prepare their meat in the summer"], a:3, why:"Verse 25 says the ants are a people not strong, yet they prepare their meat in the summer." },
    { q:"Why does Agur ask for 'neither poverty nor riches'?", choices:["Fullness could make him deny the LORD, and poverty could drive him to steal","Wealth is forbidden by law","Poverty is always a blessing","He already owned two fields"], a:0, why:"Verse 9 explains both dangers: being full, he might deny God; being poor, he might steal." },
    { q:"What does 'every word of God is pure' affirm about scripture?", choices:["Only proverbs are reliable","God's word is flawless and shields those who trust in him","Interpretation is unnecessary","Prophecy is private opinion"], a:1, why:"The verse calls every word of God pure and calls him a shield unto them that put their trust in him." }
  ] },
  { n:31, summary:"The book closes with a mother's teaching for a king, then a portrait poem. King Lemuel's mother warns her son against giving his strength to women and against wine for kings, lest they drink, forget the law, and pervert the judgment of any of the afflicted; instead he must open his mouth for the dumb and plead the cause of the poor and needy. Then comes the portrait of the virtuous woman, whose price is far above rubies — an alphabetical acrostic in the Hebrew text. She works willingly with her hands, brings food from afar like merchants' ships, rises while it is yet night, buys a field and plants a vineyard, keeps her candle burning by night, reaches out to the poor, and sells fine linen to the merchant. Her mouth opens with wisdom, and in her tongue is the law of kindness. Her children and husband call her blessed, for favour is deceitful and beauty is vain, but a woman that feareth the LORD, she shall be praised.",
  context:"The text introduces this chapter as the words of king Lemuel, the prophecy that his mother taught him.",
  keyVerses:[
    { ref:"Proverbs 31:8", text:"Open thy mouth for the dumb in the cause of all such as are appointed to destruction." },
    { ref:"Proverbs 31:10", text:"Who can find a virtuous woman? for her price is far above rubies." },
    { ref:"Proverbs 31:30", text:"Favour is deceitful, and beauty is vain: but a woman that feareth the LORD, she shall be praised." }
  ],
  takeaway:"The fear of the LORD, not favor or beauty, earns lasting praise; use strength to speak for those who cannot.",
  quiz:[
    { q:"In the portrait of the virtuous woman, when does she rise to feed her household?", choices:["After sunrise","At the third hour","While it is yet night","At evening"], a:2, why:"Verse 15 says she riseth also while it is yet night, and giveth meat to her household." },
    { q:"Why does the chapter say it is not for kings to drink wine?", choices:["Wine was reserved for priests","Kings must appear solemn at feasts","Grapes were too scarce for rulers","Lest they drink, forget the law, and pervert the judgment of the afflicted"], a:3, why:"Verse 5 warns that drink would make rulers forget the law and pervert the judgment of any of the afflicted." },
    { q:"According to Proverbs 31:30, what makes a woman truly praiseworthy?", choices:["A woman that feareth the LORD","Favor and beauty","Wealthy merchandise","Fine linen and purple"], a:0, why:"The verse calls favour deceitful and beauty vain, but praises the woman that feareth the LORD." }
  ] }
);
