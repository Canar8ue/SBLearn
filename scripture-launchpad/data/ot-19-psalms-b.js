/* Scripture Launchpad — Psalms, chapters 39-75 */
window.SLP = window.SLP || { books: [], gloss: [] }; var SLP = window.SLP;
var _ps2 = SLP.books.find(function(b){ return b.id === "ps"; });
if (!_ps2) throw new Error("data/canon.js must load before ot-19-psalms-b.js");
(_ps2.chapters = _ps2.chapters || []).push(
  { n:39, summary:"With a bridle on his mouth before the wicked, the psalmist holds his peace even from good until the fire inside forces speech. What bursts out is not complaint against enemies but a prayer about time: make me to know mine end. He measures a life as a handbreadth, calls every man's bustle a vain shew, and watches the rich heap up wealth without knowing who will gather it. Because his days are so brief, he strips his hope down to one point: my hope is in thee. He asks deliverance from his own transgressions, accepts the Lord's rebukes as the moth that consumes man's beauty, and closes as a stranger and sojourner begging to recover strength before he goes hence, and be no more.",
    context:"The psalmist wrestles with how brief and frail a human life is, praying as one whose days are a handbreadth before God.",
    keyVerses:[
      { ref:"Psalms 39:4", text:"LORD, make me to know mine end, and the measure of my days, what it is; that I may know how frail I am." },
      { ref:"Psalms 39:5", text:"Behold, thou hast made my days as an handbreadth; and mine age is as nothing before thee" },
      { ref:"Psalms 39:7", text:"And now, Lord, what wait I for? my hope is in thee." }
    ],
    takeaway:"Life is short, so anchor hope in the Lord instead of the riches and shadows that pass.",
    quiz:[
      { q:"What does the psalmist say the Lord has made his days like?", choices:["A handbreadth","A shadow that declineth","A vapour","A watch in the night"], a:0, why:"He prays, Behold, thou hast made my days as an handbreadth; and mine age is as nothing before thee." },
      { q:"Why did the psalmist keep his mouth bridled at the start of the psalm?", choices:["Because the king had forbidden speech","So he would not sin with his tongue while the wicked watched","Because he had no answer to God's questions","Because his sorrow made him unable to speak"], a:1, why:"He resolved to take heed to his ways and keep his mouth with a bridle, that he sin not with his tongue while the wicked was before him." },
      { q:"What lesson does the psalm teach about riches and life's brevity?", choices:["Riches gathered prove a man pleased God","Long life is promised to those who heap up wealth","Heaping riches is vain, since we do not know who will gather them","Wealth should be hidden before death"], a:2, why:"Every man walketh in a vain shew; he heapeth up riches, and knoweth not who shall gather them." }
    ] },
  { n:40, summary:"After a long wait the rescue comes in stages: the Lord inclined, heard, lifted the psalmist out of an horrible pit and miry clay, set his feet on a rock, and put a new song in his mouth. Blessed, he says, is the man who makes the Lord his trust rather than the proud, for God's wonderful works and thoughts toward us are more than can be numbered. Then the turn: sacrifice and offering were never what God desired; mine ears hast thou opened, and the psalmist answers, Lo, I come, delighting to do thy will with God's law within his heart. He has declared righteousness, faithfulness, and salvation in the great congregation, yet innumerable evils and his own iniquities compass him until his heart fails, so he begs swift help and ends poor and needy, certain that the Lord thinketh upon him.",
    context:"The psalmist recalls being lifted from a horrible pit and reasons from rescue to wholehearted devotion.",
    keyVerses:[
      { ref:"Psalms 40:1", text:"I waited patiently for the LORD; and he inclined unto me, and heard my cry." },
      { ref:"Psalms 40:2", text:"He brought me up also out of an horrible pit, out of the miry clay, and set my feet upon a rock, and established my goings." },
      { ref:"Psalms 40:8", text:"I delight to do thy will, O my God: yea, thy law is within my heart." }
    ],
    takeaway:"The Lord rewards patient waiting, and delighting to do His will is the worship He wants most.",
    quiz:[
      { q:"Where does the psalmist say the Lord lifted him from?", choices:["The pit of destruction","The horrible pit and miry clay","The deep waters and floods","The shadow of death"], a:1, why:"He was brought up out of an horrible pit, out of the miry clay, and set upon a rock." },
      { q:"What does the psalmist say God desired instead of sacrifice and offering?", choices:["Silver and gold for the sanctuary","A thousand burnt offerings","An opened ear that delights to do God's will","Vows paid at the temple"], a:2, why:"Sacrifice and offering thou didst not desire; mine ears hast thou opened, leading to Lo, I come, and I delight to do thy will." },
      { q:"What does this psalm teach about waiting on the Lord?", choices:["Waiting proves God has forgotten us","God acts only when we stop praying","The wait itself is the reward","Patient waiting ends with God lifting us to firm ground and a new song"], a:3, why:"I waited patiently for the LORD, he inclined and heard, and the result was solid footing and a new song of praise." }
    ] },
  { n:41, summary:"The psalm opens with a beatitude: blessed is he that considereth the poor, whom the Lord will deliver, keep alive, and strengthen even upon the bed of languishing. Then it turns personal, as a sick man prays, heal my soul, for I have sinned against thee. His enemies whisper at his bedside, asking when he will die and his name perish, and visitors gather iniquity to tell abroad. Worst of all, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me. Yet the psalmist reads his survival as proof of favor: thou upholdest me in mine integrity, and settest me before thy face for ever. A double Amen benediction closes the psalm, blessing the LORD God of Israel from everlasting to everlasting.",
    context:"A sick and betrayed psalmist contrasts his enemies' whispers with the blessedness of considering the poor.",
    keyVerses:[
      { ref:"Psalms 41:1", text:"Blessed is he that considereth the poor: the LORD will deliver him in time of trouble." },
      { ref:"Psalms 41:4", text:"I said, LORD, be merciful unto me: heal my soul; for I have sinned against thee." },
      { ref:"Psalms 41:9", text:"Yea, mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me." }
    ],
    takeaway:"The Lord blesses and strengthens those who consider the poor, even when friends turn against them.",
    quiz:[
      { q:"What does the psalm say about the trusted friend?", choices:["He fought the enemy outside the gate","He nursed the psalmist back to health","He lifted up his heel against the one who ate of his bread","He kept the psalmist's secret and told no one"], a:2, why:"Mine own familiar friend, in whom I trusted, which did eat of my bread, hath lifted up his heel against me." },
      { q:"How do the psalmist's enemies act while he lies sick?", choices:["They bring him medicine and comfort","They pray for his recovery","They avoid speaking his name","They whisper, wondering when he will die and his name perish"], a:3, why:"His enemies speak evil, asking when shall he die, and his name perish, and they whisper together to devise his hurt." },
      { q:"What principle does the opening beatitude teach?", choices:["The Lord delivers those who consider the poor","Poverty is proof of God's displeasure","Sickness comes from betrayal","Vows must be paid before worship"], a:0, why:"Blessed is he that considereth the poor, for the LORD will deliver, preserve, and strengthen him even on the bed of languishing." }
    ] },
  { n:42, summary:"It opens with the most famous thirst in scripture: as the hart panteth after the water brooks, so panteth my soul after thee, O God. The psalmist is far from the house of God; tears are his meat day and night while taunters ask, where is thy God? He remembers going with the multitude to the house of God with voice of joy and praise, keeping holyday, and the memory cuts deeper than the taunts. Twice he interrogates his own heart, why art thou cast down, O my soul, and commands it to hope in God. Between the refrains he recalls the land of Jordan, the Hermonites, and the hill Mizar, feels waves and billows go over him, yet insists the Lord will command his lovingkindness in the daytime and give him song in the night. He ends where he began, still preaching hope to his own soul.",
    context:"The psalmist, far from the house of God and taunted with the question where is thy God, argues himself into hope.",
    keyVerses:[
      { ref:"Psalms 42:1", text:"As the hart panteth after the water brooks, so panteth my soul after thee, O God." },
      { ref:"Psalms 42:5", text:"Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance." },
      { ref:"Psalms 42:8", text:"Yet the LORD will command his lovingkindness in the daytime, and in the night his song shall be with me, and my prayer unto the God of my life." }
    ],
    takeaway:"When your soul is cast down, preach hope to it: trust God now, and praise Him yet.",
    quiz:[
      { q:"What animal image opens the psalm?", choices:["A dove fleeing on wings","A sheep going astray","A serpent deaf to charmers","A hart panting after the water brooks"], a:3, why:"The psalm begins, As the hart panteth after the water brooks, so panteth my soul after thee, O God." },
      { q:"What question does the psalmist keep asking his own soul?", choices:["Why art thou cast down, O my soul? hope thou in God","Where shall I find bread and water?","Who among the gods is like unto thee?","How long wilt thou forget me, O Lord?"], a:0, why:"Twice he asks, Why art thou cast down, O my soul? and answers with the command to hope in God." },
      { q:"What does the psalm teach about deep depression and faith?", choices:["Joyless seasons mean God has withdrawn forever","The soul can thirst for God and still hope in Him through tears","Praise must wait until circumstances change","Remembering past worship makes grief worse"], a:1, why:"The psalmist thirsts and weeps yet commands his soul to hope, trusting that God's song will be with him in the night." }
    ] },
  { n:43, summary:"Only five verses, this psalm completes the pair that began with the panting hart. It is a courtroom plea: judge me, O God, and plead my cause against an ungodly nation, and deliver me from the deceitful and unjust man. The singer asks why God casts him off while the enemy oppresses, then makes the request that defines the psalm: O send out thy light and thy truth, let them lead me to thy holy hill and tabernacles. He vows that when he arrives he will go to the altar of God, unto God my exceeding joy, praising on the harp. The refrain returns a third and final time, why art thou cast down, O my soul, hope in God, now naming him the health of my countenance and my God.",
    context:"A short companion plea asking God's light and truth to lead the discouraged worshipper back to the altar.",
    keyVerses:[
      { ref:"Psalms 43:3", text:"O send out thy light and thy truth: let them lead me; let them bring me unto thy holy hill, and to thy tabernacles." },
      { ref:"Psalms 43:4", text:"Then will I go unto the altar of God, unto God my exceeding joy: yea, upon the harp will I praise thee, O God my God." },
      { ref:"Psalms 43:5", text:"Why art thou cast down, O my soul? and why art thou disquieted within me? hope in God: for I shall yet praise him, who is the health of my countenance, and my God." }
    ],
    takeaway:"Ask God's light and truth to lead you back to Him, for He is the health of your countenance.",
    quiz:[
      { q:"What does the psalmist ask God to send out to lead him?", choices:["Light and truth","A pillar of cloud","Wise counselors","An east wind"], a:0, why:"He prays, O send out thy light and thy truth: let them lead me." },
      { q:"Where does the psalmist expect light and truth to bring him?", choices:["Back to his father's house","To God's holy hill and the altar, God his exceeding joy","Into the enemy's camp","To the land of Jordan and Hermon"], a:1, why:"Light and truth are to bring him to the holy hill and tabernacles, where he will go to the altar of God, unto God my exceeding joy." },
      { q:"What is the role of the repeated refrain in this psalm's teaching?", choices:["It blames the soul for every trouble","It shows that worship ends all sorrow","Discouragement is answered by preaching hope in God to your own soul","It teaches that feelings never matter"], a:2, why:"For the third time the singer questions his cast-down soul and commands it to hope in God, whom he will yet praise." }
    ] },
  { n:44, summary:"A national lament in two clashing halves. First the community retells what the fathers told them: God himself drove out the nations and planted Israel, and the land came not by their own sword but by God's right hand and the light of his countenance. Then the scene reverses: God has cast them off and gone not forth with their armies; they turn back from the enemy, are scattered like sheep, sold for nought, made a byword and a shaking of the head among the heathen. The protest at the center is startling: all this is come upon us, yet have we not forgotten thee, neither have we dealt falsely in thy covenant. Their hearts have not turned back, even where dragons and the shadow of death broke them. Because God knows the secrets of the heart, they can plead innocence and cry, awake, and redeem us for thy mercies' sake.",
    context:"A community laments military defeat while protesting that it has not forgotten God's covenant.",
    keyVerses:[
      { ref:"Psalms 44:3", text:"For they got not the land in possession by their own sword, neither did their own arm save them" },
      { ref:"Psalms 44:17", text:"All this is come upon us; yet have we not forgotten thee, neither have we dealt falsely in thy covenant." },
      { ref:"Psalms 44:22", text:"Yea, for thy sake are we killed all the day long; we are counted as sheep for the slaughter." }
    ],
    takeaway:"When defeat comes though you have kept faith, keep believing: God knows the secrets of the heart and will redeem.",
    quiz:[
      { q:"What animal image describes how God gave His people up?", choices:["As goats sent to the wilderness","Like sheep appointed for meat","As doves fleeing to the mountains","As oxen treading the grain"], a:1, why:"Thou hast given us like sheep appointed for meat, and later, we are counted as sheep for the slaughter." },
      { q:"What surprising protest stands at the center of the lament?", choices:["We kept the covenant, yet all this came upon us","Our fathers sinned, so punish us","We never wanted the land in the first place","God has forgotten to be gracious"], a:2, why:"They testify, All this is come upon us; yet have we not forgotten thee, neither have we dealt falsely in thy covenant." },
      { q:"What does the psalm assume about suffering that is not caused by sin?", choices:["It proves God has cast us off for ever","It means the covenant is broken","It should be answered with silence","The faithful may suffer for God's sake while remaining innocent, and may still plead with Him"], a:3, why:"They insist their heart has not turned back, and for thy sake are we killed all the day long, yet they still cry to God to arise and redeem." }
    ] },
  { n:45, summary:"A wedding song whose singer calls his own tongue the pen of a ready writer. The king is praised as fairer than the children of men, with grace poured into his lips, girded with a sword, riding prosperously in majesty because of truth and meekness and righteousness, his arrows sharp in the hearts of enemies. Then the psalm rises above any earthly court: thy throne, O God, is for ever and ever, a right sceptre loving righteousness and hating wickedness, anointed with the oil of gladness, garments scented with myrrh, aloes, and cassia out of ivory palaces. The second half turns to the bride: forget thine own people and thy father's house; the king shall greatly desire thy beauty, the daughter of Tyre bring a gift, and the virgins her companions enter the palace with gladness. It closes promising the king's name remembered in all generations.",
    context:"A royal wedding song praising the king's majesty and throne, then blessing the bride who enters his palace.",
    keyVerses:[
      { ref:"Psalms 45:1", text:"My heart is inditing a good matter: I speak of the things which I have made touching the king: my tongue is the pen of a ready writer." },
      { ref:"Psalms 45:6", text:"Thy throne, O God, is for ever and ever: the sceptre of thy kingdom is a right sceptre." },
      { ref:"Psalms 45:7", text:"Thou lovest righteousness, and hatest wickedness: therefore God, thy God, hath anointed thee with the oil of gladness above thy fellows." }
    ],
    takeaway:"A throne that loves righteousness and hates wickedness stands for ever, and joy follows anointed, just rule.",
    quiz:[
      { q:"What image does the psalm use for the writer's tongue?", choices:["A sharp two-edged sword","A sounding trumpet","The pen of a ready writer","A honeycomb dropping sweetness"], a:2, why:"My heart is inditing a good matter, he says, and my tongue is the pen of a ready writer." },
      { q:"What qualities mark the king's reign in this psalm?", choices:["Wealth, armies, tribute and fear","Truth, meekness, righteousness, and love of righteousness","Silence, fasting, and seclusion","Wisdom, riddles, parables and songs"], a:3, why:"He rides prosperously because of truth and meekness and righteousness, and thou lovest righteousness, and hatest wickedness." },
      { q:"How does the psalm describe the king's throne?", choices:["Temporary, like ships of Tarshish","Shaken by enemy kings","An ivory palace throne only","For ever and ever, a right sceptre anointed with the oil of gladness"], a:0, why:"Thy throne, O God, is for ever and ever, and God has anointed him with the oil of gladness above his fellows." }
    ] },
  { n:46, summary:"Psalm 46 imagines the worst the world can do and refuses fear. Mountains carried into the sea, waters roaring, the earth removed and shaking, none of it moves those whose refuge and strength is a very present help in trouble. Against the chaos stands a calm picture: a river whose streams make glad the city of God, with the most High in her midst so she cannot be moved. Nations rage and kingdoms are moved, but God utters his voice and the earth melts. The refrain, the LORD of hosts is with us, the God of Jacob is our refuge, frames the center: come behold the desolations, wars ceasing to the end of the earth, bows broken, spears cut in sunder, chariots burned in fire, and God's own command, be still, and know that I am God.",
    context:"The psalmist declares God a refuge amid cosmic upheaval, ending with God's own command to be still.",
    keyVerses:[
      { ref:"Psalms 46:1", text:"God is our refuge and strength, a very present help in trouble." },
      { ref:"Psalms 46:4", text:"There is a river, the streams whereof shall make glad the city of God, the holy place of the tabernacles of the most High." },
      { ref:"Psalms 46:10", text:"Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth." }
    ],
    takeaway:"Because the Lord of hosts is with us, we can be still and trust Him when the whole earth shakes.",
    quiz:[
      { q:"What gladdens the city of God in this psalm?", choices:["Walls of wrought gold","Kings bringing presents","A standing army of chariots","A river with its streams"], a:3, why:"There is a river, the streams whereof shall make glad the city of God." },
      { q:"What happens when God utters his voice in this psalm?", choices:["The earth melts","The seas freeze","The mountains flee to the north","The nations laugh"], a:0, why:"The heathen raged and kingdoms were moved, but he uttered his voice, the earth melted." },
      { q:"What is the meaning of Be still, and know that I am God in its context?", choices:["Silence is required before prayer","God ends wars and will be exalted, so His people need not fear upheaval","God teaches through quiet meditation alone","Stillness is a substitute for obedience"], a:1, why:"The command stands beside wars ceasing, bows broken, and chariots burned, with the pledge that He will be exalted in the earth." }
    ] },
  { n:47, summary:"A coronation of praise in nine verses. It opens with clapping hands and a shout of triumph, because the LORD most high is a great King over all the earth, who subdues peoples and chooses Israel's inheritance, the excellency of Jacob whom he loved. God is gone up with a shout, the LORD with the sound of a trumpet, as if ascending His throne amid royal music. The psalm repeats the command to sing praises, then gives the reason to sing with understanding: God is the King of all the earth, he reigneth over the heathen, and he sitteth upon the throne of his holiness. It ends with the princes of the people gathered together, even the people of the God of Abraham, for the shields of the earth belong unto God, who is greatly exalted.",
    context:"A psalm of enthronement praise calling all peoples to clap and shout because God is King over all the earth.",
    keyVerses:[
      { ref:"Psalms 47:1", text:"O clap your hands, all ye people; shout unto God with the voice of triumph." },
      { ref:"Psalms 47:5", text:"God is gone up with a shout, the LORD with the sound of a trumpet." },
      { ref:"Psalms 47:7", text:"For God is the King of all the earth: sing ye praises with understanding." }
    ],
    takeaway:"God is King over all the earth, so praise is the right response to His reign.",
    quiz:[
      { q:"With what actions does the psalm open its praise?", choices:["Clapping hands and a shout of triumph","Burning incense and bowing","Fasting and sackcloth","Lighting lamps and singing at midnight"], a:0, why:"O clap your hands, all ye people; shout unto God with the voice of triumph." },
      { q:"Why does the psalm command singing praises with understanding?", choices:["Because music theory honors God","Because God is the King of all the earth who reigns over the heathen","Because songs must be memorized","Because the congregation cannot read"], a:1, why:"God is the King of all the earth; God reigneth over the heathen and sitteth upon the throne of his holiness." },
      { q:"What does the psalm teach about the scope of God's rule?", choices:["His rule covers Jacob only","His rule is limited to the holy hill","God is a great King over all the earth, and the shields of the earth belong to Him","Nations share their rule with God"], a:2, why:"The LORD most high is a great King over all the earth, and the princes of the people gather because the shields of the earth belong unto God." }
    ] },
  { n:48, summary:"Zion gets a guided tour as a victory psalm. Great is the LORD, and greatly to be praised in the city of our God; mount Zion, beautiful for situation, is the joy of the whole earth. Kings assembled against her, saw her, marvelled, were troubled, and hasted away, seized with pain as of a woman in travail, as east winds break the ships of Tarshish. What the fathers heard, this generation has seen: God will establish his city for ever. So the congregation thinks on his lovingkindness in the midst of thy temple, tells his praise to the ends of the earth, and is invited to walk about Zion, count her towers, mark her bulwarks, and consider her palaces, that they may tell it to the generation following, for this God is our God for ever and ever; he will be our guide even unto death.",
    context:"The congregation celebrates mount Zion, where attacking kings marvelled and fled, and tours her towers and bulwarks.",
    keyVerses:[
      { ref:"Psalms 48:1", text:"Great is the LORD, and greatly to be praised in the city of our God, in the mountain of his holiness." },
      { ref:"Psalms 48:8", text:"As we have heard, so have we seen in the city of the LORD of hosts, in the city of our God" },
      { ref:"Psalms 48:14", text:"For this God is our God for ever and ever: he will be our guide even unto death." }
    ],
    takeaway:"Remember what God has done in His city; tell the generation following that this God is our God for ever.",
    quiz:[
      { q:"What destroyed the ships of Tarshish in the psalm?", choices:["A fire from heaven","An east wind","A leviathan of the sea","A whirlwind and tempest"], a:1, why:"Thou breakest the ships of Tarshish with an east wind." },
      { q:"How did the assembled kings react when they saw Zion?", choices:["They besieged her for seven days","They set fire to her palaces","They marvelled, were troubled, and hasted away","They brought gifts and submitted"], a:2, why:"They saw it, and so they marvelled; they were troubled, and hasted away, taken by fear and pain as of a woman in travail." },
      { q:"What does the psalm invite the congregation to do with Zion?", choices:["Rebuild her walls in secret","Hide her towers from enemies","Leave her for a new city","Walk about her, mark her bulwarks, and tell the generation following"], a:3, why:"Walk about Zion, and go round about her: tell the towers thereof, and mark her bulwarks so the next generation can be told." }
    ] },
  { n:49, summary:"A riddle on the harp for every inhabitant of the world, low and high, rich and poor together: why should anyone fear in days of evil when the wealthy boast in their riches? No man can by any means redeem his brother or give to God a ransom, for the redemption of the soul is precious; wise men die, fools and brutish persons perish, and leave their wealth to others. The rich call lands after their own names and expect their houses to continue for ever, yet man being in honour abideth not: he is like the beasts that perish. Like sheep they are laid in the grave, death feeding on them, while the upright have dominion in the morning. Against all of it stands the psalmist's confidence: God will redeem my soul from the power of the grave. So do not fear the rich man; when he dieth he shall carry nothing away.",
    context:"A wisdom psalm for low and high alike answers why the rich should not be feared in light of death and redemption.",
    keyVerses:[
      { ref:"Psalms 49:10", text:"For he seeth that wise men die, likewise the fool and the brutish person perish, and leave their wealth to others." },
      { ref:"Psalms 49:15", text:"But God will redeem my soul from the power of the grave: for he shall receive me" },
      { ref:"Psalms 49:17", text:"For when he dieth he shall carry nothing away: his glory shall not descend after him." }
    ],
    takeaway:"No one can redeem his brother for a price, but God can redeem the soul from the power of the grave.",
    quiz:[
      { q:"Whom can no man redeem, according to the psalm?", choices:["His father","His servant","His brother","His teacher"], a:2, why:"None of them can by any means redeem his brother, nor give to God a ransom for him." },
      { q:"What does the psalm say happens to the rich who trust their wealth?", choices:["They buy long life with their riches","Their houses last to all generations","They carry their glory down with them","Like sheep they are laid in the grave and carry nothing away"], a:3, why:"Like sheep they are laid in the grave, and when he dieth he shall carry nothing away." },
      { q:"What confidence does the psalmist hold against death?", choices:["His name is written on the land","His children will inherit his wealth","The upright will rule over him in the grave","God will redeem my soul from the power of the grave"], a:0, why:"But God will redeem my soul from the power of the grave: for he shall receive me." }
    ] },
  { n:50, summary:"God takes the stand and calls heaven and earth to judge his people. The mighty God shines out of Zion with fire devouring before him and gathers his saints, those that have made a covenant with me by sacrifice. Then comes the surprise verdict: I will not reprove thee for thy sacrifices; the problem was never ritual. Every beast of the forest is his, and the cattle upon a thousand hills; if he were hungry he would not tell us. What he asks instead is thanksgiving, paid vows, and calling on him in the day of trouble. To the wicked who recite his statutes while hating instruction, consenting with thieves, and slandering their own mother's son, God warns that his silence was mistaken for approval, and he will reprove and set their deeds in order before their eyes. Whoso offereth praise glorifieth me; to him that ordereth his conversation aright will I shew the salvation of God.",
    context:"God judges his people from Zion, correcting both the ritualist who forgets thanksgiving and the wicked who recite his covenant.",
    keyVerses:[
      { ref:"Psalms 50:10", text:"For every beast of the forest is mine, and the cattle upon a thousand hills" },
      { ref:"Psalms 50:15", text:"And call upon me in the day of trouble: I will deliver thee, and thou shalt glorify me." },
      { ref:"Psalms 50:23", text:"Whoso offereth praise glorifieth me: and to him that ordereth his conversation aright will I shew the salvation of God." }
    ],
    takeaway:"God wants thanksgiving and honest obedience, not offerings given as if He needed anything from us.",
    quiz:[
      { q:"What does God say belongs to Him, in a famous line of this psalm?", choices:["The gold of Ophir and the ships of Tarshish","The kingdoms of men and their glory","The harvest of the valleys and hills","Every beast of the forest and the cattle upon a thousand hills"], a:3, why:"For every beast of the forest is mine, and the cattle upon a thousand hills." },
      { q:"What does God say He will not reprove His people for?", choices:["Their sacrifices and burnt offerings","Their prayers at midnight","Their silence in the streets","Their tears in the temple"], a:0, why:"I will not reprove thee for thy sacrifices or thy burnt offerings, to have been continually before me." },
      { q:"What does God ask for instead of ritual, in this psalm?", choices:["Greater offerings of bullocks and goats","Thanksgiving, paid vows, and calling on Him in the day of trouble","Strict keeping of feast days","Silence before His majesty"], a:1, why:"Offer unto God thanksgiving; and pay thy vows unto the most High, and call upon me in the day of trouble." }
    ] },
  { n:51, summary:"The great penitential psalm walks a straight line from confession to restoration. It opens with a threefold plea, have mercy, blot out my transgressions, wash me throughly, grounded not in excuses but in acknowledged guilt: I acknowledge my transgressions, and my sin is ever before me; against thee, thee only, have I sinned. Then it asks for what only God can give: purging with hyssop, washing whiter than snow, joy for bones that have been broken, a clean heart and a renewed right spirit, the holy spirit not taken away, and the joy of salvation restored. The turning insight: thou desirest not sacrifice; the sacrifices of God are a broken spirit, and a broken and a contrite heart he will not despise. The restored sinner promises fruit, teaching transgressors God's ways and singing aloud of righteousness, and the psalm ends praying for Zion and the walls of Jerusalem.",
    context:"The psalmist pleads for mercy after grievous sin, moving through confession to a plea for a clean heart and restored joy.",
    keyVerses:[
      { ref:"Psalms 51:1", text:"Have mercy upon me, O God, according to thy lovingkindness: according unto the multitude of thy tender mercies blot out my transgressions." },
      { ref:"Psalms 51:10", text:"Create in me a clean heart, O God; and renew a right spirit within me." },
      { ref:"Psalms 51:17", text:"The sacrifices of God are a broken spirit: a broken and a contrite heart, O God, thou wilt not despise." }
    ],
    takeaway:"God does not despise a broken and contrite heart; He creates clean hearts and restores the joy of salvation.",
    quiz:[
      { q:"What does the psalmist ask God to create?", choices:["A clean heart and a right spirit","A new Jerusalem","A willing offering on the altar","A watch over his lips"], a:0, why:"Create in me a clean heart, O God; and renew a right spirit within me." },
      { q:"What does the psalm name as the sacrifices God will not despise?", choices:["Bullocks upon thine altar","A broken spirit and a broken and contrite heart","Rams with incense","Firstfruits of the harvest"], a:1, why:"Thou delightest not in burnt offering; the sacrifices of God are a broken spirit, a broken and a contrite heart." },
      { q:"What does the psalm teach about how confession should be made?", choices:["Sin is admitted only to priests","Excuses soften the confession","Plain acknowledgment before God, with sin ever before me, opens the way to cleansing","Confession is complete once punishment is paid"], a:2, why:"I acknowledge my transgressions, and my sin is ever before me; against thee, thee only, have I sinned." }
    ] },
  { n:52, summary:"A pointed question to a mighty man who boasts in mischief: why boastest thou thyself, when the goodness of God endureth continually? The contrast of loves follows: you love evil more than good, lying rather than righteousness, with a tongue that deviseth mischiefs like a sharp razor and loves devouring words. God's sentence is gardening, not politics: he will take the boaster out of his dwelling place and root him out of the land of the living. The righteous will see, fear, and laugh, saying, lo, this is the man that made not God his strength, but trusted in the abundance of his riches. The psalmist claims the opposite root: I am like a green olive tree in the house of God, trusting in God's mercy for ever, praising because thou hast done it, and waiting on a name that is good before his saints.",
    context:"The psalmist contrasts a boasting, deceitful mighty man with his own place as a green olive tree in the house of God.",
    keyVerses:[
      { ref:"Psalms 52:1", text:"Why boastest thou thyself in mischief, O mighty man? the goodness of God endureth continually." },
      { ref:"Psalms 52:2", text:"Thy tongue deviseth mischiefs; like a sharp razor, working deceitfully." },
      { ref:"Psalms 52:8", text:"But I am like a green olive tree in the house of God: I trust in the mercy of God for ever and ever." }
    ],
    takeaway:"Trust God's enduring goodness rather than riches or deceit, and you will stand like a green olive tree.",
    quiz:[
      { q:"What is the tongue of the boastful man compared to?", choices:["A drawn bow","A sharp razor working deceitfully","A two-edged sword","A venomous serpent"], a:1, why:"Thy tongue deviseth mischiefs; like a sharp razor, working deceitfully." },
      { q:"What will the righteous say when the mighty man is rooted out?", choices:["The Lord gave, and the Lord hath taken away","Surely there is a reward for the righteous","Lo, this is the man that made not God his strength","His glory shall descend after him"], a:2, why:"The righteous shall see, and fear, and shall laugh at him, saying, Lo, this is the man that made not God his strength." },
      { q:"What does the olive tree image teach?", choices:["Olives must be pressed before they are useful","Trees planted in courts need water","Prosperity follows sacrifice","Trusting God's mercy roots a person in the house of God for ever"], a:3, why:"But I am like a green olive tree in the house of God: I trust in the mercy of God for ever and ever." }
    ] },
  { n:53, summary:"Six blunt verses on the folly of unbelief. The fool hath said in his heart, there is no God, and the verdict follows at once: corrupt, abominable iniquity, none that doeth good. God looked down from heaven upon the children of men to see if any understood, if any sought him, and found every one gone back, altogether filthy, no, not one. Workers of iniquity eat up God's people as they eat bread and have not called upon God. Yet the raiders end in great fear where no fear was, their bones scattered, themselves put to shame because God hath despised them. The psalm closes longing for the day when the salvation of Israel comes out of Zion, when God bringeth back the captivity of his people, and Jacob shall rejoice, and Israel shall be glad.",
    context:"A short psalm declares the fool who denies God and searches out whether anyone living seeks him.",
    keyVerses:[
      { ref:"Psalms 53:1", text:"The fool hath said in his heart, There is no God. Corrupt are they, and have done abominable iniquity: there is none that doeth good." },
      { ref:"Psalms 53:2", text:"God looked down from heaven upon the children of men, to see if there were any that did understand, that did seek God." },
      { ref:"Psalms 53:6", text:"Oh that the salvation of Israel were come out of Zion! When God bringeth back the captivity of his people, Jacob shall rejoice, and Israel shall be glad." }
    ],
    takeaway:"Denying God is the beginning of folly; salvation comes only when God works deliverance for His people.",
    quiz:[
      { q:"What has the fool said in his heart?", choices:["There is no God","God hath forgotten","I am, and there is none beside me","The Lord will not do good"], a:0, why:"The fool hath said in his heart, There is no God." },
      { q:"What did God find when He looked down from heaven on the children of men?", choices:["Many that did understand and seek God","A remnant praying in Zion","All the people worshipping in truth","Every one gone back and become filthy; none that doeth good"], a:3, why:"Every one of them is gone back: they are altogether become filthy; there is none that doeth good, no, not one." },
      { q:"How does the psalm describe the origin of Israel's hope?", choices:["Armies must gather from the tribes","Wise judges must reform the courts","Salvation must come out of Zion, from God's deliverance","The righteous must flee the land"], a:2, why:"Oh that the salvation of Israel were come out of Zion! When God bringeth back the captivity of his people, Jacob shall rejoice." }
    ] },
  { n:54, summary:"A short, sharp cry from a man surrounded: strangers are risen up against me, and oppressors seek after my soul, and they have not set God before them. Over against that threat stand three claims of confidence: God is mine helper, the Lord is with them that uphold my soul, and he shall reward evil unto mine enemies and cut them off in his truth. Because of that confidence the little psalm does something striking: it vows worship in advance. I will freely sacrifice unto thee, the psalmist says, I will praise thy name, O LORD, for it is good. The final verse speaks as though the deliverance were already done: he hath delivered me out of all trouble, and mine eye hath seen his desire upon mine enemies. Trust answers threat before the rescue arrives.",
    context:"The psalmist, hunted by strangers and oppressors, asks for rescue by God's name and vows praise in return.",
    keyVerses:[
      { ref:"Psalms 54:1", text:"Save me, O God, by thy name, and judge me by thy strength." },
      { ref:"Psalms 54:3", text:"For strangers are risen up against me, and oppressors seek after my soul" },
      { ref:"Psalms 54:4", text:"Behold, God is mine helper: the Lord is with them that uphold my soul." }
    ],
    takeaway:"God is my helper; trusting His name in danger turns fear into free, ahead-of-time praise.",
    quiz:[
      { q:"By what does the psalmist ask God to save him?", choices:["By an army of the faithful","By fire from heaven","By sending an angel","By thy name and by thy strength"], a:3, why:"Save me, O God, by thy name, and judge me by thy strength." },
      { q:"What contrast holds the short psalm together?", choices:["Strangers and oppressors against God my helper","Wealth against poverty","Silence against shouting","Morning against evening"], a:0, why:"Strangers and oppressors seek his soul, but Behold, God is mine helper: the Lord is with them that uphold my soul." },
      { q:"What does the psalmist vow in response to expected deliverance?", choices:["To build an altar in the wilderness","To freely sacrifice and praise God's name, for it is good","To repay his enemies double","To keep silence before God"], a:1, why:"I will freely sacrifice unto thee: I will praise thy name, O LORD; for it is good." }
    ] },
  { n:55, summary:"Betrayal gives this lament its ache. The psalmist mourns and makes a noise because of the oppression of the wicked; his heart is sore pained, the terrors of death are fallen upon him, and horror hath overwhelmed him, so that he wishes for wings like a dove to fly away and be at rest in the wilderness, hastening escape from the windy storm and tempest. Violence, strife, deceit, and guile fill the city's walls and streets, but the wound beneath the wound is personal: it was not an enemy, but thou, a man mine equal, my guide, and mine acquaintance, who took sweet counsel together with me and walked unto the house of God in company. His words were smoother than butter, but war was in his heart. Against such treachery the psalmist prays evening, and morning, and at noon, casts his burden upon the LORD, and trusts in him.",
    context:"A psalmist overwhelmed by terror pleads for escape from a city of strife and from the treachery of a familiar friend.",
    keyVerses:[
      { ref:"Psalms 55:6", text:"And I said, Oh that I had wings like a dove! for then would I fly away, and be at rest." },
      { ref:"Psalms 55:13", text:"But it was thou, a man mine equal, my guide, and mine acquaintance." },
      { ref:"Psalms 55:22", text:"Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved." }
    ],
    takeaway:"Cast your burden on the Lord, even when the wound comes from a friend; He will sustain you.",
    quiz:[
      { q:"What did the psalmist wish for so he could fly away and be at rest?", choices:["Wings like a dove","The pinions of an eagle","The wind of a storm","The chariots of God"], a:0, why:"Oh that I had wings like a dove! for then would I fly away, and be at rest." },
      { q:"What made the psalmist's grief worse than enemy attack?", choices:["The city walls had fallen","The betrayal came from a guide and acquaintance who walked with him to God's house","His prayers had stopped","The storms would not end"], a:1, why:"It was not an enemy, but thou, a man mine equal, my guide, and mine acquaintance, with whom he took sweet counsel and walked to the house of God." },
      { q:"What does the psalm teach about handling burdens?", choices:["Revenge belongs to the wronged","Escape into the wilderness solves sorrow","Cast thy burden upon the LORD, and he shall sustain thee","Bury the hurt and say nothing"], a:2, why:"Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved." }
    ] },
  { n:56, summary:"Fear is named plainly here, and answered by trust. Men would swallow the psalmist up, fighting daily, wrestling his words, marking his steps as they wait for his soul. Twice over he answers with one of scripture's most quoted resolves: what time I am afraid, I will trust in thee, and again, I will not be afraid what man can do unto me. In the middle sits one of the tenderest images in the Psalter: thou tellest my wanderings; put thou my tears into thy bottle; are they not in thy book? Because God keeps record of even his sorrow, the psalmist knows his enemies will turn back when he cries. The psalm ends in vows and praise: thou hast delivered my soul from death; now deliver my feet from falling, that I may walk before God in the light of the living.",
    context:"A hunted psalmist answers daily fear with repeated trust, asking God to keep his tears in a bottle.",
    keyVerses:[
      { ref:"Psalms 56:3", text:"What time I am afraid, I will trust in thee." },
      { ref:"Psalms 56:8", text:"Thou tellest my wanderings: put thou my tears into thy bottle: are they not in thy book?" },
      { ref:"Psalms 56:11", text:"In God have I put my trust: I will not be afraid what man can do unto me." }
    ],
    takeaway:"When I am afraid, I can trust in God's recorded care and refuse to fear what man can do.",
    quiz:[
      { q:"Where does the psalmist ask God to put his tears?", choices:["Into the river of God","Into his bottle and book","Into the depths of the earth","Into the clouds of heaven"], a:1, why:"Put thou my tears into thy bottle: are they not in thy book?" },
      { q:"How does the psalmist respond to daily fear?", choices:["He flees to the wilderness","He makes vows of silence","He chooses trust: what time I am afraid, I will trust in thee","He pleads for the enemy's immediate destruction"], a:2, why:"What time I am afraid, I will trust in thee, and in God he will praise his word without fearing what flesh can do." },
      { q:"What does the psalm teach about the fear of man?", choices:["Man's power is unlimited","Fear is always sinful","Fearing man is wise when many pursue you","Because God is for you and delivers your soul from death, you need not fear what man can do"], a:3, why:"This I know; for God is for me, and thou hast delivered my soul from death, so I will not be afraid what man can do unto me." }
    ] },
  { n:57, summary:"A prayer from the shadow of wings and the den of lions. The psalmist asks mercy, trusts in the shadow of thy wings until these calamities be overpast, and cries unto God most high, unto God that performeth all things for me. His situation is vivid: my soul is among lions, among the sons of men whose teeth are spears and arrows and whose tongue is a sharp sword; they have prepared a net for my steps and digged a pit that becomes their own downfall. Twice the psalm lifts a refrain above the danger: be thou exalted, O God, above the heavens, and let thy glory be above all the earth. Out of that lift comes a settled will, my heart is fixed, O God, my heart is fixed; I will sing and give praise, awake psaltery and harp, until praise reaches the peoples and nations, for his mercy is great unto the heavens and his truth unto the clouds.",
    context:"A psalmist hiding among lions takes refuge in the shadow of God's wings until calamities pass.",
    keyVerses:[
      { ref:"Psalms 57:1", text:"Be merciful unto me, O God, be merciful unto me: for my soul trusteth in thee: yea, in the shadow of thy wings will I make my refuge, until these calamities be overpast." },
      { ref:"Psalms 57:4", text:"My soul is among lions: and I lie even among them that are set on fire, even the sons of men, whose teeth are spears and arrows, and their tongue a sharp sword." },
      { ref:"Psalms 57:7", text:"My heart is fixed, O God, my heart is fixed: I will sing and give praise." }
    ],
    takeaway:"A heart fixed on God can sing mercy even among lions, until calamities are overpast.",
    quiz:[
      { q:"Among what creatures does the psalmist say his soul is?", choices:["Lions whose teeth are spears and arrows","Serpents and adders","Scorpions of the wilderness","Wolves of the evening"], a:0, why:"My soul is among lions, whose teeth are spears and arrows and their tongue a sharp sword." },
      { q:"What happened to the pit the enemies dug?", choices:["The psalmist fell into it","It became a well of water","It was hidden till the day of wrath","The enemies fell into it themselves"], a:3, why:"They have digged a pit before me, into the midst whereof they are fallen themselves." },
      { q:"What does my heart is fixed teach about praise in danger?", choices:["Praise must wait for safety","Music has no place in calamity","A steadfast heart can sing and give praise before deliverance comes","Fixing the heart means ignoring danger"], a:2, why:"Even among lions the psalmist says, My heart is fixed, O God, my heart is fixed: I will sing and give praise." }
    ] },
  { n:58, summary:"A psalm that puts corrupt judges in the dock. Do ye indeed speak righteousness, O congregation? In heart they work wickedness and weigh out violence; estranged from the womb, they go astray speaking lies, their poison like a serpent's poison, deaf as the adder that stoppeth her ear, which will not hearken to the voice of charmers. The imprecatory turn is startlingly physical: break their teeth, O God, in their mouth, and the great teeth of the young lions. Then a series of dissolving pictures: waters that run away, arrows cut in pieces, a snail that melteth, an untimely birth that never sees the sun, and a whirlwind that sweeps away both living and in his wrath before the pots can feel the thorns. The last verse gives the reason for it all: the righteous shall see the vengeance and say, verily there is a reward for the righteous, verily he is a God that judgeth in the earth.",
    context:"The psalmist calls corrupt judges to account and asks God to break their power so all will know he judges in the earth.",
    keyVerses:[
      { ref:"Psalms 58:4", text:"Their poison is like the poison of a serpent: they are like the deaf adder that stoppeth her ear" },
      { ref:"Psalms 58:6", text:"Break their teeth, O God, in their mouth: break out the great teeth of the young lions, O LORD." },
      { ref:"Psalms 58:11", text:"So that a man shall say, Verily there is a reward for the righteous: verily he is a God that judgeth in the earth." }
    ],
    takeaway:"God judges in the earth; wicked power will melt away, and the righteous will see there is a reward.",
    quiz:[
      { q:"What creature picture describes the wicked judges who will not hear?", choices:["A lion in the gate","A vulture over the field","A spider in the corner","A deaf adder that stoppeth her ear"], a:3, why:"They are like the deaf adder that stoppeth her ear, which will not hearken to the voice of charmers." },
      { q:"What does the psalm ask God to break?", choices:["Their teeth in their mouth, like young lions' great teeth","Their bows and arrows","Their altars and images","Their city gates"], a:0, why:"Break their teeth, O God, in their mouth: break out the great teeth of the young lions, O LORD." },
      { q:"What conclusion should onlookers reach when vengeance comes?", choices:["Might makes right","Verily there is a reward for the righteous: verily he is a God that judgeth in the earth","Justice is an accident","The law has failed"], a:1, why:"The righteous shall rejoice when he seeth the vengeance, and a man shall say, verily he is a God that judgeth in the earth." }
    ] },
  { n:59, summary:"Enemies lie in wait like a pack of city dogs at night. They return at evening, make a noise like a dog, and go round about the city, and they belch out swords with their lips, sure that nobody hears. The psalmist insists the ambush is unearned: not for my transgression, nor for my sin do they run and prepare themselves. God's answer is laughter: thou, O LORD, shalt laugh at them, and have all the heathen in derision, for God is my defence. One plea is unusual, slay them not, lest my people forget; scatter them by thy power, so that their overthrow will teach Israel that God ruleth in Jacob unto the ends of the earth. Morning finds the psalmist singing aloud of mercy and power: thou hast been my defence and refuge in the day of my trouble.",
    context:"Enemies howl around the city at evening, and the psalmist waits on God as his defence and sings of mercy in the morning.",
    keyVerses:[
      { ref:"Psalms 59:6", text:"They return at evening: they make a noise like a dog, and go round about the city." },
      { ref:"Psalms 59:9", text:"Because of his strength will I wait upon thee: for God is my defence." },
      { ref:"Psalms 59:16", text:"But I will sing of thy power; yea, I will sing aloud of thy mercy in the morning: for thou hast been my defence and refuge in the day of my trouble." }
    ],
    takeaway:"God laughs at unearned malice; wait on Him as your defence and sing aloud of His mercy in the morning.",
    quiz:[
      { q:"How do the psalmist's enemies move around the city at evening?", choices:["Making a noise like a dog","Roaring like young lions","Hissing like serpents","Beating like drums"], a:0, why:"They return at evening: they make a noise like a dog, and go round about the city." },
      { q:"What unusual plea does the psalmist make about his enemies?", choices:["Turn them into friends at once","Take him instead and spare them","Slay them not, lest my people forget; scatter them by thy power","Send them into exile with gifts"], a:2, why:"He asks, Slay them not, lest my people forget: scatter them by thy power, and bring them down, O Lord our shield." },
      { q:"How does the psalm answer the doctrine that might makes right?", choices:["By denying that God sees the wicked","By showing God laughs at those who trust their swords, since He is the true defence","By urging the righteous to match force with force","By teaching that defense is unnecessary"], a:1, why:"Swords are in their lips, asking who doth hear, but thou, O LORD, shalt laugh at them, for God is my defence." }
    ] },
  { n:60, summary:"A lament that begins in wreckage: O God, thou hast cast us off, thou hast scattered us; thou hast made the earth to tremble and break, shewed thy people hard things, and made us drink the wine of astonishment. Into that shaking God gives a banner to them that fear thee, displayed because of the truth, that thy beloved may be delivered; save with thy right hand. The middle recalls God's holy oracle of ownership: Shechem and the valley of Succoth, Gilead and Manasseh, Ephraim the strength of mine head, Judah my lawgiver, with Moab a washpot, Edom under the cast-out shoe, and Philistia triumphing because of me. Yet reality still asks two blunt questions: who will bring me into the strong city, and wilt not thou, O God, which hadst cast us off? The psalm answers with its hardest sentence and its boldest faith: vain is the help of man; through God we shall do valiantly.",
    context:"A people reeling from defeat and earthquake ask God, who once cast them off, to save with his right hand.",
    keyVerses:[
      { ref:"Psalms 60:3", text:"Thou hast shewed thy people hard things: thou hast made us to drink the wine of astonishment." },
      { ref:"Psalms 60:4", text:"Thou hast given a banner to them that fear thee, that it may be displayed because of the truth" },
      { ref:"Psalms 60:12", text:"Through God we shall do valiantly: for he it is that shall tread down our enemies." }
    ],
    takeaway:"Victory through God is real when human help is vain; He treads down our enemies as we do valiantly.",
    quiz:[
      { q:"What strange drink has God given His people in this psalm?", choices:["The vinegar of gall","The wine of astonishment","The waters of Marah","The cup of the wicked"], a:1, why:"Thou hast shewed thy people hard things: thou hast made us to drink the wine of astonishment." },
      { q:"How does the psalm answer the question, who will bring me into the strong city?", choices:["Through treaties with Philistia","By mustering the tribes again","Through God: vain is the help of man; through God we shall do valiantly","By waiting for Edom to surrender"], a:2, why:"Give us help from trouble; for vain is the help of man, and through God we shall do valiantly." },
      { q:"What does the banner image teach?", choices:["Victory belongs to the tribe with the finest flag","Banners are for festivals only","God's people flee under the banner","God gives a banner to those who fear Him, that truth may be displayed and His beloved delivered"], a:3, why:"Thou hast given a banner to them that fear thee, that it may be displayed because of the truth, that thy beloved may be delivered." }
    ] },
  { n:61, summary:"A cry from the end of the earth. When my heart is overwhelmed, the psalmist prays, lead me to the rock that is higher than I. God has proved himself a shelter and a strong tower from the enemy, so the prayer resolves into permanence: I will abide in thy tabernacle for ever; I will trust in the covert of thy wings. Vows God has already heard have given the heritage of those that fear his name. The psalm then widens to the king: thou wilt prolong the king's life, and his years as many generations, that he may abide before God for ever, preserved by prepared mercy and truth. The last verse ties worship and obedience together in song: so will I sing praise unto thy name for ever, that I may daily perform my vows.",
    context:"A psalmist crying from the end of the earth asks to be led to the rock that is higher than he.",
    keyVerses:[
      { ref:"Psalms 61:2", text:"From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I." },
      { ref:"Psalms 61:3", text:"For thou hast been a shelter for me, and a strong tower from the enemy." },
      { ref:"Psalms 61:4", text:"I will abide in thy tabernacle for ever: I will trust in the covert of thy wings" }
    ],
    takeaway:"When your heart is overwhelmed, pray to be led to the rock that is higher than you and abide there.",
    quiz:[
      { q:"To where does the overwhelmed heart ask to be led?", choices:["To the rock that is higher than I","To the covert of the cedar","To the tower of the flock","To the gates of righteousness"], a:0, why:"Lead me to the rock that is higher than I, he prays when his heart is overwhelmed." },
      { q:"What has God been for the psalmist against the enemy?", choices:["A sword and a shield","A river in the desert","A lamp to the feet","A shelter and a strong tower"], a:3, why:"For thou hast been a shelter for me, and a strong tower from the enemy." },
      { q:"What does abiding in God's tabernacle teach about worship?", choices:["Worship is for emergencies alone","The tabernacle belonged to the king","Worship seeks a permanent dwelling with God, not only rescue from trouble","Worship ends when vows are paid"], a:2, why:"He resolves to abide in the tabernacle for ever and trust in the covert of God's wings, singing praise for ever." }
    ] },
  { n:62, summary:"A psalm built on one word, only. Truly my soul waiteth upon God, it begins; he only is my rock and my salvation and my defence, so I shall not be greatly moved. Against that stillness stand attackers who imagine mischief against a man, delight in lies, and bless with the mouth while cursing inwardly, compared to a bowing wall and a tottering fence. The center turns to address the listener: my soul, wait thou only upon God; trust in him at all times, ye people, and pour out your heart before him. Human rank dissolves in the balances, for men of low degree are vanity, men of high degree are a lie, altogether lighter than vanity. Riches gained by oppression or robbery deserve no heart. The twice-heard word settles it: power belongeth unto God, and mercy also, for thou renderest to every man according to his work.",
    context:"The psalmist waits on God alone while attackers delight in lies and men prove lighter than vanity.",
    keyVerses:[
      { ref:"Psalms 62:1", text:"Truly my soul waiteth upon God: from him cometh my salvation." },
      { ref:"Psalms 62:8", text:"Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us" },
      { ref:"Psalms 62:11", text:"God hath spoken once; twice have I heard this; that power belongeth unto God." }
    ],
    takeaway:"Pour out your heart to God at all times; power and mercy belong to Him alone.",
    quiz:[
      { q:"What two unstable structures picture the psalmist's attackers?", choices:["A leaning tower and a cracked cistern","A sinking ship and a torn sail","A broken chariot and a shattered bow","A bowing wall and a tottering fence"], a:3, why:"Ye shall be slain all of you: as a bowing wall shall ye be, and as a tottering fence." },
      { q:"What does the psalm say when men are weighed in the balance?", choices:["The righteous outweigh them all","They are altogether lighter than vanity","The balances are broken","Wealth tips the scales in their favor"], a:1, why:"Men of low degree are vanity, and men of high degree are a lie: to be laid in the balance, they are altogether lighter than vanity." },
      { q:"What does the psalm say to do with the heart at all times?", choices:["Guard it from every man","Empty it through fasting","Bind its thoughts to the law","Pour it out before God, who is a refuge"], a:3, why:"Trust in him at all times; ye people, pour out your heart before him: God is a refuge for us." }
    ] },
  { n:63, summary:"The psalm of a soul thirsty in a dry and thirsty land, where no water is. O God, thou art my God; early will I seek thee; my soul thirsteth for thee, my flesh longeth for thee. The goal is sight: to see thy power and thy glory, so as I have seen thee in the sanctuary. The claim that anchors everything follows: because thy lovingkindness is better than life, my lips shall praise thee. Satisfaction is imagined as a feast, my soul shall be satisfied as with marrow and fatness, remembering God upon the bed and meditating in the night watches, rejoicing in the shadow of thy wings, the soul following hard after thee while thy right hand upholdeth it. Then the sober edge: those who seek my soul to destroy it fall by the sword and become a portion for foxes, while the king rejoices in God and lying mouths are stopped.",
    context:"A psalmist in a dry and thirsty land thirsts for God, holding his lovingkindness better than life.",
    keyVerses:[
      { ref:"Psalms 63:1", text:"O God, thou art my God; early will I seek thee: my soul thirsteth for thee, my flesh longeth for thee in a dry and thirsty land, where no water is" },
      { ref:"Psalms 63:3", text:"Because thy lovingkindness is better than life, my lips shall praise thee." },
      { ref:"Psalms 63:7", text:"Because thou hast been my help, therefore in the shadow of thy wings will I rejoice." }
    ],
    takeaway:"God's lovingkindness is better than life; seek Him early and follow hard after Him.",
    quiz:[
      { q:"In what kind of land does the psalm seek God?", choices:["A dry and thirsty land where no water is","A land flowing with milk and honey","A land of darkness and deep snow","A wilderness of rocks and salt pits"], a:0, why:"My flesh longeth for thee in a dry and thirsty land, where no water is." },
      { q:"What does the psalmist value above life itself?", choices:["His sanctuary privileges","God's lovingkindness","The loyalty of his friends","His throne in the kingdom"], a:1, why:"Because thy lovingkindness is better than life, my lips shall praise thee." },
      { q:"What habits of devotion appear in the psalm?", choices:["Public procession and sacrifice","Early seeking, remembering God on the bed, meditating in the night watches","Fasting and sackcloth","Reading the law at the gates"], a:2, why:"Early will I seek thee; when I remember thee upon my bed, and meditate on thee in the night watches." }
    ] },
  { n:64, summary:"A psalm about whispered plots and the arrow that answers them. The wicked whet their tongue like a sword and bend their bows to shoot their arrows, even bitter words, shooting in secret at the perfect without fear; they commune of laying snares privily, saying, who shall see them? Their inward thought and heart, the psalm says, is deep. The counterstrike comes from God: he shall shoot at them with an arrow, suddenly shall they be wounded, and they shall make their own tongue to fall upon themselves. All who see it flee away, then all men fear, declare the work of God, and wisely consider his doing. The righteous end glad in the LORD, trusting in him, and all the upright in heart glory. Words aimed in secret, the psalm insists, come back on the archers.",
    context:"The psalmist asks to be hidden from secret plots of bitter words, trusting God to turn the archers' arrows on themselves.",
    keyVerses:[
      { ref:"Psalms 64:3", text:"Who whet their tongue like a sword, and bend their bows to shoot their arrows, even bitter words" },
      { ref:"Psalms 64:7", text:"But God shall shoot at them with an arrow; suddenly shall they be wounded." },
      { ref:"Psalms 64:10", text:"The righteous shall be glad in the LORD, and shall trust in him; and all the upright in heart shall glory." }
    ],
    takeaway:"Secret wickedness cannot outrun God: He turns the snare and the arrow back on those who set them.",
    quiz:[
      { q:"What weapons do the wicked bend in this psalm?", choices:["Slings aimed at the gates","Spears of iron","Their bows to shoot bitter words","Whips of cord"], a:2, why:"They bend their bows to shoot their arrows, even bitter words." },
      { q:"How do the secret plotters come to ruin?", choices:["The king arrests them at dawn","God shoots at them with an arrow, and their own tongue falls upon themselves","A flood sweeps the city","Their friends betray them"], a:1, why:"God shall shoot at them with an arrow; suddenly shall they be wounded, and their own tongue shall fall upon themselves." },
      { q:"What does the psalm teach about hidden iniquity?", choices:["Secret sin is without consequence","Only open crimes matter to God","Snares laid in the dark stay hidden","God sees secret counsels and turns the plots of the wicked to open fear and His own glory"], a:3, why:"They say, Who shall see them? but God's sudden arrow makes all men fear and declare the work of God." }
    ] },
  { n:65, summary:"Praise waiteth for God in Sion, where vows are performed, because he hears prayer and unto thee shall all flesh come. The psalmist admits iniquities prevail against me, then trusts the promise of forgiveness: as for our transgressions, thou shalt purge them away. Blessed is the man God chooses and causes to approach, to dwell in thy courts and be satisfied with the goodness of thy house. This God is the confidence of all the ends of the earth: by his strength he sets fast the mountains, stilleth the noise of the seas and the tumult of the people, and makes the outgoings of the morning and evening to rejoice. Then the psalm turns farmland: thou visitest the earth and waterest it, enriching it with the river of God, settling the furrows, softening it with showers, crowning the year with thy goodness, until the pastures are clothed with flocks, the valleys covered over with corn, and the little hills rejoice on every side.",
    context:"Zion praises the God who hears prayer, purges transgression, and waters the earth till the valleys shout for joy.",
    keyVerses:[
      { ref:"Psalms 65:2", text:"O thou that hearest prayer, unto thee shall all flesh come." },
      { ref:"Psalms 65:9", text:"Thou visitest the earth, and waterest it: thou greatly enrichest it with the river of God, which is full of water" },
      { ref:"Psalms 65:11", text:"Thou crownest the year with thy goodness; and thy paths drop fatness." }
    ],
    takeaway:"The God who hears prayer also waters the earth; His goodness crowns the year and makes creation sing.",
    quiz:[
      { q:"What picture describes God's care of the land?", choices:["The river of God, full of water, watering the earth","Dew gathered in the wilderness","Snow on Lebanon feeding the streams","Rain stored in the heavens for Zion"], a:0, why:"Thou visitest the earth, and waterest it: thou greatly enrichest it with the river of God, which is full of water." },
      { q:"What does the psalm say God does to the noise of the seas?", choices:["Commands it to praise Him","Stilleth it, along with the tumult of the people","Splits it with an east wind","Rides upon it in the storm"], a:1, why:"Which stilleth the noise of the seas, the noise of their waves, and the tumult of the people." },
      { q:"How does the psalm describe who may approach God?", choices:["Only the perfect may come","Worship is reserved for the tribes","Those God chooses and causes to approach are blessed to dwell in His courts","All flesh must stay far off"], a:2, why:"Blessed is the man whom thou choosest, and causest to approach unto thee, that he may dwell in thy courts." }
    ] },
  { n:66, summary:"Come and see, then come and hear. All lands are told to make a joyful noise unto God and sing forth the honour of his name, because his works are terrible, his enemies submit, and the sea was turned to dry land so the people went through the flood on foot. He ruleth by his power for ever; his eyes behold the nations; let not the rebellious exalt themselves. The psalm then blesses God for testing: thou hast proved us, tried us as silver is tried, brought us into the net, laid affliction upon our loins, caused men to ride over our heads, pushed us through fire and through water, but broughtest us out into a wealthy place. Vows made in trouble will be paid with burnt sacrifices of fatlings, rams, bullocks, and goats. Then the witness turns personal: I cried unto him with my mouth; if I regard iniquity in my heart, the Lord will not hear me, but verily God hath heard me.",
    context:"A communal call to praise recalls trial through fire and water and a personal testimony that God has heard prayer.",
    keyVerses:[
      { ref:"Psalms 66:10", text:"For thou, O God, hast proved us: thou hast tried us, as silver is tried." },
      { ref:"Psalms 66:12", text:"Thou hast caused men to ride over our heads; we went through fire and through water: but thou broughtest us out into a wealthy place." },
      { ref:"Psalms 66:18", text:"If I regard iniquity in my heart, the Lord will not hear me" }
    ],
    takeaway:"God proves His people as silver is tried, then brings them out into a wealthy place of praise.",
    quiz:[
      { q:"How does the psalm say God tested His people?", choices:["As gold is tried in the fire","As wheat is winnowed on the floor","As iron is sharpened by iron","As silver is tried"], a:3, why:"Thou hast proved us: thou hast tried us, as silver is tried." },
      { q:"Where did God bring His people after fire and water?", choices:["Out into a wealthy place","Back into Egypt","Into the city of refuge","Across the river into Bashan"], a:0, why:"We went through fire and through water: but thou broughtest us out into a wealthy place." },
      { q:"What does the psalm teach about sin and prayer?", choices:["Prayer is heard because of many offerings","If I regard iniquity in my heart, the Lord will not hear me","Only priests may pray for the people","God hears the wicked when they suffer"], a:1, why:"If I regard iniquity in my heart, the Lord will not hear me, yet verily God hath heard the voice of my prayer." }
    ] },
  { n:67, summary:"A seven-verse blessing that starts small and grows to the ends of the earth. It opens with a plea for blessing: God be merciful unto us, and bless us, and cause his face to shine upon us. But its purpose clause points outward: that thy way may be known upon earth, thy saving health among all nations. Twice the refrain rings out, let the people praise thee, O God, let all the people praise thee, and between the two stands the reason: thou shalt judge the people righteously and govern the nations upon earth, so let the nations be glad and sing for joy. Harvest follows the blessing: then shall the earth yield her increase, and God, even our own God, shall bless us, until all the ends of the earth shall fear him.",
    context:"A blessing psalm asks God's face to shine so that his way and saving health may be known among all nations.",
    keyVerses:[
      { ref:"Psalms 67:1", text:"God be merciful unto us, and bless us; and cause his face to shine upon us" },
      { ref:"Psalms 67:2", text:"That thy way may be known upon earth, thy saving health among all nations." },
      { ref:"Psalms 67:6", text:"Then shall the earth yield her increase; and God, even our own God, shall bless us." }
    ],
    takeaway:"Blessed people are blessed for a purpose: that God's way and saving health may be known among all nations.",
    quiz:[
      { q:"What is asked to shine upon God's people?", choices:["His face","The morning star","The sun of righteousness","The lamp of the sanctuary"], a:0, why:"God be merciful unto us, and bless us; and cause his face to shine upon us." },
      { q:"Why should Israel ask for blessing, in this psalm?", choices:["That the nations may envy them","That God's way and saving health may be known upon earth among all nations","That their harvests may be stored up","That their enemies may be silenced"], a:1, why:"The blessing is asked that thy way may be known upon earth, thy saving health among all nations." },
      { q:"What happens when God governs the nations righteously, in the psalm's vision?", choices:["The earth hides her increase","The people keep silence before Him","The nations are glad and the earth yields her increase","The mountains melt at His presence"], a:2, why:"O let the nations be glad and sing for joy, for thou shalt judge the people righteously; then shall the earth yield her increase." }
    ] },
  { n:68, summary:"A marching psalm: let God arise, let his enemies be scattered; the wicked melt like wax before the fire while the righteous exceedingly rejoice. God in his holy habitation is a father of the fatherless and a judge of widows, who setteth the solitary in families and brings prisoners out with chains. Behind the march stands Sinai: the earth shook, the heavens dropped, the mountain moved at the presence of the God of Israel, and plentiful rain confirmed the weary inheritance. Kings of armies flee apace; God's chariots are twenty thousand; he has ascended on high, led captivity captive, and received gifts for men, even for the rebellious, that the Lord might dwell among them. Singers and players process before him, distant nations stretch out their hands, and the God of Israel gives strength and power to his people.",
    context:"A march of praise follows God from Sinai through the wilderness, defending the fatherless and loading his people daily with benefits.",
    keyVerses:[
      { ref:"Psalms 68:5", text:"A father of the fatherless, and a judge of the widows, is God in his holy habitation." },
      { ref:"Psalms 68:6", text:"God setteth the solitary in families: he bringeth out those which are bound with chains: but the rebellious dwell in a dry land." },
      { ref:"Psalms 68:19", text:"Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation" }
    ],
    takeaway:"God defends the fatherless and the solitary, ascends in triumph, and daily loads His people with benefits.",
    quiz:[
      { q:"Whom does the psalm call God in His holy habitation?", choices:["A father of the fatherless and a judge of the widows","A king who rules by fear","A warrior jealous of his name","A shepherd of the flocks"], a:0, why:"A father of the fatherless, and a judge of the widows, is God in his holy habitation." },
      { q:"What does God setteth the solitary in families picture?", choices:["Marriage among the tribes","The census of Israel","God placing lonely people in homes and bringing out prisoners","The building of the temple courts"], a:2, why:"God setteth the solitary in families: he bringeth out those which are bound with chains." },
      { q:"What does the psalm teach about God's care in daily life?", choices:["Benefits come only after battle","God gives sparingly to test patience","Care is reserved for kings and priests","He daily loadeth us with benefits, so His care is constant and generous"], a:3, why:"Blessed be the Lord, who daily loadeth us with benefits, even the God of our salvation." }
    ] },
  { n:69, summary:"The deep mire lament. Save me, O God, for the waters are come in unto my soul: I sink in deep mire where there is no standing, floods overflow, my throat is dried, and my eyes fail while I wait for my God. Hated without a cause and wrongfully, he restores what he took not away; reproach covers his face; he becomes a stranger to his brethren, a proverb, and the song of drunkards, because the zeal of thine house hath eaten me up. Yet prayer rises in an acceptable time, pleading mercy and salvation from the mire and deep waters. Then the sharpest loneliness: reproach hath broken my heart, and no comforters were found; they gave him gall for meat and vinegar for thirst. Imprecations on tables, eyes, and tents give way to praise better than ox or bullock, for the LORD hears the poor, and God will save Zion and build the cities of Judah.",
    context:"The psalmist, sunk in deep mire and hated without a cause, cries for deliverance and vows praise that pleases better than sacrifice.",
    keyVerses:[
      { ref:"Psalms 69:2", text:"I sink in deep mire, where there is no standing: I am come into deep waters, where the floods overflow me." },
      { ref:"Psalms 69:9", text:"For the zeal of thine house hath eaten me up; and the reproaches of them that reproached thee are fallen upon me." },
      { ref:"Psalms 69:29", text:"But I am poor and sorrowful: let thy salvation, O God, set me up on high." }
    ],
    takeaway:"The Lord hears the poor and despises not His prisoners; humble hearts that seek God shall live.",
    quiz:[
      { q:"What did the psalmist's enemies give him to drink?", choices:["Water from the rock","Sweet wine of the feast","Vinegar in his thirst","Milk and honey"], a:2, why:"They gave me also gall for my meat; and in my thirst they gave me vinegar to drink." },
      { q:"Why does the psalmist say reproach has fallen on him?", choices:["Because of hidden crimes","Because his friends betrayed him","Because he refused to pay vows","Because the zeal of God's house hath eaten him up"], a:3, why:"For the zeal of thine house hath eaten me up; and the reproaches of them that reproached thee are fallen upon me." },
      { q:"How does the psalm end its movement from mire to praise?", choices:["Praise with a song and thanksgiving pleases the LORD better than an ox or bullock","Silence is the highest worship","The temple must be rebuilt first","Only the king may give thanks"], a:0, why:"I will praise the name of God with a song; this shall please the LORD better than an ox or bullock that hath horns and hoofs." }
    ] },
  { n:70, summary:"Five verses of urgency. Make haste, O God, to deliver me; make haste to help me, the plea opens and closes the psalm as if the writer cannot afford one wasted syllable. Between the two cries stands a prayer about other people: shame and confusion for those who seek after my soul and mock, aha, aha, but rejoicing for all those that seek thee, who love thy salvation and say continually, let God be magnified. The last verse gathers everything into one self-portrait and one hope: but I am poor and needy; make haste unto me, O God; thou art my help and my deliverer; O LORD, make no tarrying.",
    context:"A brief urgent plea repeats the cry make haste to God for help and deliverance.",
    keyVerses:[
      { ref:"Psalms 70:1", text:"Make haste, O God, to deliver me; make haste to help me, O LORD." },
      { ref:"Psalms 70:4", text:"Let all those that seek thee rejoice and be glad in thee: and let such as love thy salvation say continually, Let God be magnified." },
      { ref:"Psalms 70:5", text:"But I am poor and needy: make haste unto me, O God: thou art my help and my deliverer; O LORD, make no tarrying." }
    ],
    takeaway:"The poor and needy can always pray, make haste unto me, O God, my help and my deliverer.",
    quiz:[
      { q:"What word does the psalm repeat twice in its first verse?", choices:["Hearken","Deliver","Remember","Make haste"], a:3, why:"Make haste, O God, to deliver me; make haste to help me, O LORD." },
      { q:"What do the psalmist's mockers say?", choices:["Aha, aha","Where is thy God?","Who is like unto thee?","How doth God know?"], a:0, why:"Let them be turned back for a reward of their shame that say, Aha, aha." },
      { q:"What stance toward God does the psalm model for the desperate?", choices:["Withdraw until the danger passes","Being poor and needy, still call on God as help and deliverer and ask Him not to tarry","Accept defeat quietly","Trust friends for rescue"], a:1, why:"But I am poor and needy: make haste unto me, O God: thou art my help and my deliverer; O LORD, make no tarrying." }
    ] },
  { n:71, summary:"An old man's psalm of lifelong trust. His confidence began before memory: thou art my trust from my youth; by thee have I been holden up from the womb; O God, thou hast taught me from my youth. Now enemies who lay wait for his soul whisper that God hath forsaken him, and the aged psalmist makes his distinctive petition: cast me not off in the time of old age; forsake me not when my strength faileth. What he asks is not ease but a commission: until I have shewed thy strength unto this generation, and thy power to every one that is to come. The thread running through is praise, I will hope continually, and will yet praise thee more and more, with psaltery and harp and lips greatly rejoicing. He counts on the God who hast shewed me great and sore troubles to quicken him again and bring him up from the depths of the earth.",
    context:"An aged psalmist asks God not to forsake him in old age, hoping continually and promising praise to the coming generation.",
    keyVerses:[
      { ref:"Psalms 71:5", text:"For thou art my hope, O Lord GOD: thou art my trust from my youth." },
      { ref:"Psalms 71:14", text:"But I will hope continually, and will yet praise thee more and more." },
      { ref:"Psalms 71:18", text:"Now also when I am old and grayheaded, O God, forsake me not; until I have shewed thy strength unto this generation, and thy power to every one that is to come." }
    ],
    takeaway:"Trust from youth becomes hope in old age; God keeps His people so they can tell the next generation.",
    quiz:[
      { q:"What physical mark of aging does the psalmist mention?", choices:["Grayheaded","Bowed back","Blinded eyes","Failing knees"], a:0, why:"Now also when I am old and grayheaded, O God, forsake me not." },
      { q:"What does the psalmist ask to keep doing in old age?", choices:["Ruling over the elders","Showing God's strength to this generation and His power to those to come","Receiving honor at the gates","Gathering the people to the feasts"], a:1, why:"He asks to keep going until I have shewed thy strength unto this generation, and thy power to every one that is to come." },
      { q:"What does the psalm teach about lifelong faith?", choices:["Faith in youth guarantees an easy old age","Old age is a time to stop serving","A lifetime of trust becomes hope continually and praise more and more","God forsakes His servants when strength fails"], a:2, why:"Thou art my trust from my youth, and still he vows, I will hope continually, and will yet praise thee more and more." }
    ] },
  { n:72, summary:"A royal prayer for the king's son: give the king thy judgments, O God, and thy righteousness. The reign it pictures is justice measured at the bottom of society: judging the people with righteousness and the poor with judgment, saving the children of the needy, breaking the oppressor in pieces. Peace comes like rain upon the mown grass; the righteous flourish; abundance of peace lasts as long as the moon. Dominion stretches from sea to sea, to the ends of the earth, where wilderness dwellers bow and enemies lick the dust, and kings of Tarshish and the isles bring presents while Sheba and Seba offer gifts. The ground of it all: he shall deliver the needy when he crieth, and precious shall their blood be in his sight. His name endures as long as the sun, and the psalm closes the second book of Psalms with a doxology and the note that the prayers of David the son of Jesse are ended.",
    context:"A royal psalm asks God to endow the king's son with justice for the poor and pictures a reign of peace to the ends of the earth.",
    keyVerses:[
      { ref:"Psalms 72:1", text:"Give the king thy judgments, O God, and thy righteousness unto the king's son." },
      { ref:"Psalms 72:4", text:"He shall judge the poor of the people, he shall save the children of the needy, and shall break in pieces the oppressor." },
      { ref:"Psalms 72:17", text:"His name shall endure for ever: his name shall be continued as long as the sun: and men shall be blessed in him: all nations shall call him blessed." }
    ],
    takeaway:"A righteous king's greatness is measured by how he judges the poor, the needy, and the oppressed.",
    quiz:[
      { q:"Which kings bring presents to the king in this psalm?", choices:["Pharaoh and the princes of Egypt","The kings of Tarshish and of the isles; Sheba and Seba offer gifts","The kings of Assyria and Babylon","The princes of Gilead and Bashan"], a:1, why:"The kings of Tarshish and of the isles shall bring presents: the kings of Sheba and Seba shall offer gifts." },
      { q:"What picture describes the king's coming reign?", choices:["Storm and whirlwind over the nations","Fire falling on the mountains","Rain upon the mown grass and showers watering the earth","Frost and harvest failing"], a:2, why:"He shall come down like rain upon the mown grass: as showers that water the earth." },
      { q:"What does the psalm present as the test of a righteous king?", choices:["The size of his armies","The tribute of distant isles","The splendor of his palace","How he judges the poor, the needy, and those who have no helper"], a:3, why:"He shall deliver the needy when he crieth, the poor also, and him that hath no helper, and precious shall their blood be in his sight." }
    ] },
  { n:73, summary:"The prosperity puzzle, and the hinge of the third book of the Psalter. Truly God is good to Israel, the psalm begins, but as for me, my feet were almost gone, for I was envious at the foolish when I saw the prosperity of the wicked. They are not in trouble as other men; pride compasseth them about as a chain, violence covereth them as a garment, their eyes stand out with fatness, they set their mouth against the heavens and ask, how doth God know? The puzzle bites inward: verily I have cleansed my heart in vain, plagued all the day long and chastened every morning. The turn is a change of place: until I went into the sanctuary of God, then understood I their end, set in slippery places, consumed with terrors in a moment. Then the great confession: my flesh and my heart faileth, but God is the strength of my heart, and my portion for ever; it is good for me to draw near to God.",
    context:"The psalmist confesses envy of the prosperous wicked until he enters God's sanctuary and learns their end.",
    keyVerses:[
      { ref:"Psalms 73:3", text:"For I was envious at the foolish, when I saw the prosperity of the wicked." },
      { ref:"Psalms 73:17", text:"Until I went into the sanctuary of God; then understood I their end." },
      { ref:"Psalms 73:26", text:"My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever." }
    ],
    takeaway:"Drawing near to God settles the prosperity puzzle: He is the strength of my heart and my portion for ever.",
    quiz:[
      { q:"What almost made the psalmist's steps slip?", choices:["Envy at the prosperity of the wicked","Fear of night enemies","Sorrow over sickness","Doubt about the law"], a:2, why:"My feet were almost gone; my steps had well nigh slipped, for I was envious at the foolish when I saw the prosperity of the wicked." },
      { q:"What changed the psalmist's understanding of the wicked?", choices:["Their sudden collapse in public","A dream that warned him","The counsel of his friends","Going into the sanctuary of God and learning their end"], a:3, why:"Until I went into the sanctuary of God; then understood I their end, set in slippery places." },
      { q:"What is the psalm's answer to the prosperity puzzle?", choices:["God is the strength of my heart and my portion for ever; draw near to Him","Righteousness always brings wealth in this life","The wicked prosper because God is unjust","Wealth is the true measure of God's favor"], a:0, why:"My flesh and my heart faileth: but God is the strength of my heart, and my portion for ever; it is good for me to draw near to God." }
    ] },
  { n:74, summary:"A walk through ruins. O God, why hast thou cast us off for ever? why doth thine anger smoke against the sheep of thy pasture? The psalmist asks God to remember the congregation purchased of old, this mount Zion wherein thou hast dwelt, then itemizes the enemy's vandalism: roaring in the midst of the congregations, ensigns set up for signs, carved work broken down at once with axes and hammers, fire cast into the sanctuary, the dwelling place of thy name cast down to the ground, synagogues of God burned up in the land. Then the loneliest verse: we see not our signs, there is no more any prophet, neither is there among us any that knoweth how long. Against that silence the psalmist preaches God's credentials: my King of old, who divided the sea, brakest the heads of leviathan, owns the day and the night, prepared the light and the sun, and made summer and winter. So arise, O God, plead thine own cause.",
    context:"A congregation surveys an enemy's destruction of the sanctuary and pleads with God to remember his covenant and arise.",
    keyVerses:[
      { ref:"Psalms 74:7", text:"They have cast fire into thy sanctuary, they have defiled by casting down the dwelling place of thy name to the ground." },
      { ref:"Psalms 74:12", text:"For God is my King of old, working salvation in the midst of the earth." },
      { ref:"Psalms 74:17", text:"Thou hast set all the borders of the earth: thou hast made summer and winter." }
    ],
    takeaway:"When the sanctuary lies in ruins, remember God's ancient works and plead with Him to arise for His own cause.",
    quiz:[
      { q:"What tools does the psalm describe breaking the sanctuary's carved work?", choices:["Swords and spears","Fire and stones","Chisels and ropes","Axes and hammers"], a:3, why:"But now they break down the carved work thereof at once with axes and hammers." },
      { q:"What does the psalmist recall to argue God should act?", choices:["God's ancient works: dividing the sea, breaking leviathan, making summer and winter","Israel's many sacrifices","The promises of former prophets","The strength of Judah's armies"], a:0, why:"God is my King of old, who didst divide the sea, brakest the heads of leviathan, and hast made summer and winter." },
      { q:"What does the psalm teach when worship is destroyed and prophets silent?", choices:["God's covenant people may still plead: arise, O God, plead thine own cause","It proves God has lost the battle","The people should adopt the enemy's gods","Signs are no longer needed"], a:1, why:"Even with no prophet and no signs, the psalm cries, Arise, O God, plead thine own cause: remember how the foolish man reproacheth thee daily." }
    ] },
  { n:75, summary:"A thanksgiving psalm about who holds the levers of history. Unto thee, O God, do we give thanks, unto thee do we give thanks, for that thy name is near thy wondrous works declare. God speaks: when I shall receive the congregation I will judge uprightly, and though the earth and all the inhabitants thereof are dissolved, I bear up the pillars of it. To the fools and the wicked the command is, lift not up the horn, speak not with a stiff neck. The reason is one of scripture's cleanest statements of providence: promotion cometh neither from the east, nor from the west, nor from the south, for God is the judge, he putteth down one, and setteth up another. In the LORD's hand is a cup whose red wine the wicked of the earth shall wring out and drink to the dregs. The psalm ends singing that all the horns of the wicked will be cut off, but the horns of the righteous shall be exalted.",
    context:"The psalm gives thanks that God, not east or west or south, controls promotion, putting down one and setting up another.",
    keyVerses:[
      { ref:"Psalms 75:6", text:"For promotion cometh neither from the east, nor from the west, nor from the south." },
      { ref:"Psalms 75:7", text:"But God is the judge: he putteth down one, and setteth up another." },
      { ref:"Psalms 75:10", text:"All the horns of the wicked also will I cut off; but the horns of the righteous shall be exalted." }
    ],
    takeaway:"Promotion comes from God alone: He puts down one and sets up another, so lift no horn on high.",
    quiz:[
      { q:"What is in the hand of the LORD in this psalm?", choices:["A cup, the wine red, full of mixture","The book of life","A two-edged sword","The horn of salvation"], a:0, why:"For in the hand of the LORD there is a cup, and the wine is red; it is full of mixture." },
      { q:"What does the horn image mean here, as used by the psalm?", choices:["A musical instrument for worship","Strength and lifted-up pride, which God cuts off for the wicked and exalts for the righteous","The horn of the altar for sacrifice","A trumpet sounding battle"], a:1, why:"The wicked are told, lift not up your horn on high, and the end is that the horns of the righteous shall be exalted." },
      { q:"What does the psalm teach about promotion and position?", choices:["Promotion follows the wise strategy of the east","Regions differ in the favor they receive","God is the judge: he putteth down one, and setteth up another","Promotion is random and must not be discussed"], a:2, why:"Promotion cometh neither from the east, nor from the west, nor from the south; but God is the judge." }
    ] }
);
