/* Scripture Launchpad — Psalms, chapters 1-38 */
window.SLP = window.SLP || { books: [], gloss: [] }; var SLP = window.SLP;
var _ps1 = SLP.books.find(function(b){ return b.id === "ps"; });
if (!_ps1) throw new Error("data/canon.js must load before ot-18-psalms-a.js");
(_ps1.chapters = _ps1.chapters || []).push(
  { n:1, summary:"A tree planted by the rivers of water stands at the heart of the Psalter's opening wisdom psalm, which sets two ways side by side. The blessed man refuses the counsel of the ungodly, the way of sinners, and the seat of the scornful; his delight is the law of the LORD, and he meditates in it day and night. Like that tree he brings forth fruit in his season, and his leaf does not wither. The ungodly are the opposite: chaff that the wind drives away, unable to stand in the judgment or in the congregation of the righteous, for the LORD knows the way of the righteous, but the way of the ungodly shall perish.",
    context:"The opening poem of Israel's songbook of prayers sets the two ways before all who take up the Psalter to pray and sing.",
    keyVerses:[
      { ref:"Psalms 1:2", text:"But his delight is in the law of the LORD; and in his law doth he meditate day and night." },
      { ref:"Psalms 1:3", text:"And he shall be like a tree planted by the rivers of water, that bringeth forth his fruit in his season; his leaf also shall not wither; and whatsoever he doeth shall prosper." },
      { ref:"Psalms 1:6", text:"For the LORD knoweth the way of the righteous: but the way of the ungodly shall perish." }
    ],
    takeaway:"Rooting yourself daily in God's word keeps you fruitful when everything rootless blows away.",
    quiz:[
      { q:"In Psalm 1, the righteous person is compared to what?", choices:["A tree planted by the rivers of water","Chaff which the wind driveth away","A rose growing in the desert","A candle shining in a dark room"], a:0, why:"Psalm 1:3 pictures the righteous as a tree planted by the rivers of water, fruitful and unwithering; chaff is the image for the ungodly." },
      { q:"What deepening progression does Psalm 1 warn the blessed man against?", choices:["Hearing, doubting, then denying the word","Walking in the counsel of the ungodly, standing in the way of sinners, sitting in the seat of the scornful","Sinning openly, secretly, and then in the heart","Sowing, watering, and harvesting unrighteousness"], a:1, why:"Verse 1 moves from walking to standing to sitting, a deepening entrenchment among sinners." },
      { q:"What does Psalm 1 teach about where lasting happiness is found?", choices:["In avoiding all contact with difficult people","In prospering materially in whatever we attempt","In delighting in and meditating on the law of the LORD day and night","In standing in judgment over the wicked"], a:2, why:"The blessed man's delight is in the law of the LORD, and the tree image shows the lasting fruit that grows from that rootedness." }
    ] },
  { n:2, summary:"The nations rage and the kings of the earth plot together to throw off the bands of the LORD and his anointed. Heaven answers with laughter: the LORD has installed his king upon Zion's holy hill and declared to him, Thou art my Son. The king is invited to ask, and the nations become his inheritance, to be ruled with a rod of iron and dashed in pieces like a potter's vessel. The psalm closes by turning to the rebels with a warning: be wise, serve the LORD with fear, rejoice with trembling, and kiss the Son, lest he be angry — for blessed are all they that put their trust in him.",
    context:"A royal psalm answering rebellious rulers with the decree that the LORD has set his king upon the holy hill of Zion.",
    keyVerses:[
      { ref:"Psalms 2:4", text:"He that sitteth in the heavens shall laugh: the Lord shall have them in derision." },
      { ref:"Psalms 2:7", text:"I will declare the decree: the LORD hath said unto me, Thou art my Son; this day have I begotten thee." },
      { ref:"Psalms 2:12", text:"Kiss the Son, lest he be angry, and ye perish from the way, when his wrath is kindled but a little. Blessed are all they that put their trust in him." }
    ],
    takeaway:"Nations rage, but the LORD's anointed King stands; blessed are all who put their trust in Him.",
    quiz:[
      { q:"How does heaven respond to the plotting of the kings in Psalm 2?", choices:["It negotiates a treaty with them","It waits silently for their repentance","It sends storm winds against their fleets","He that sitteth in the heavens shall laugh, holding them in derision"], a:3, why:"Psalm 2:4 says the one seated in the heavens laughs and has the rebels in derision." },
      { q:"What decree does the king declare in Psalm 2:7?", choices:["The LORD hath said unto me, Thou art my Son","The nations will serve him without a battle","Zion will be exalted above every mountain","Angels will guard the borders day and night"], a:0, why:"The king declares the decree: the LORD has said unto him, Thou art my Son; this day have I begotten thee." },
      { q:"According to Psalm 2, what is the safe response to the reign of the LORD's anointed?", choices:["Arming the nations for one last battle","Serving the LORD with fear, rejoicing with trembling, and kissing the Son","Retreating into silence until his anger cools","Seeking alliances with neighboring judges"], a:1, why:"Verses 10-12 call the kings to serve the LORD, rejoice with trembling, and kiss the Son, promising blessing to all who trust in him." }
    ] },
  { n:3, summary:"Trouble-makers multiply around the psalmist, and many say of his soul that there is no help for him in God. Against that taunt he sets three anchors: the LORD is his shield, his glory, and the lifter up of his head. He cried aloud and was heard out of the LORD's holy hill; then he laid down and slept, awoke again because the LORD sustained him, and will not fear ten thousands of people set against him round about. His plea turns to battle: Arise, O LORD, save me, for thou hast smitten all mine enemies upon the cheek bone and broken the teeth of the ungodly. The closing line grounds everything: salvation belongeth unto the LORD, and thy blessing is upon thy people.",
    context:"The psalmist prays on waking, surrounded by many enemies who claim that God will not rescue him.",
    keyVerses:[
      { ref:"Psalms 3:3", text:"But thou, O LORD, art a shield for me; my glory, and the lifter up of mine head." },
      { ref:"Psalms 3:5", text:"I laid me down and slept; I awaked; for the LORD sustained me." },
      { ref:"Psalms 3:8", text:"Salvation belongeth unto the LORD: thy blessing is upon thy people. Selah." }
    ],
    takeaway:"Because the LORD is our shield, we can sleep in peace even when enemies multiply.",
    quiz:[
      { q:"In Psalm 3, what does the psalmist say he did and then did again, sustained by the LORD?", choices:["Fasted and then feasted","Fought and then fled","Laid me down and slept; I awaked","Wept and then rejoiced"], a:2, why:"Psalm 3:5 says, I laid me down and slept; I awaked; for the LORD sustained me." },
      { q:"How does the psalmist answer those who say there is no help for him in God?", choices:["By mustering a larger army than theirs","By listing his own victories in battle","By denying that he has any enemies","By calling the LORD his shield, his glory, and the lifter up of his head"], a:3, why:"Verse 3 answers the taunt of verse 2 with the threefold confidence that the LORD is shield, glory, and the one who lifts his head." },
      { q:"What principle does Psalm 3 teach about where deliverance comes from?", choices:["Salvation belongeth unto the LORD","Deliverance comes to those who never sleep","God helps those who help themselves first","Safety depends on the absence of enemies"], a:0, why:"The psalm ends, Salvation belongeth unto the LORD: thy blessing is upon thy people." }
    ] },
  { n:4, summary:"An evening prayer answers the noise of a restless crowd. The psalmist asks the God of his righteousness to hear him, recalls how God enlarged him in distress, and confronts the sons of men who turn his glory into shame while loving vanity and seeking after leasing. They should know the LORD hath set apart him that is godly for himself and will hear when he calls. His counsel to them is quiet: stand in awe, and sin not; commune with your own heart upon your bed, and be still; offer the sacrifices of righteousness, and put your trust in the LORD. When many ask who will shew us any good, he prays for the light of God's countenance and testifies that God has put gladness in his heart beyond the time their corn and wine increased — so he can lay down in peace and sleep, for the LORD only makes him dwell in safety.",
    context:"An evening prayer asking God to hear, then teaching restless men where true gladness and safe sleep are found.",
    keyVerses:[
      { ref:"Psalms 4:4", text:"Stand in awe, and sin not: commune with your own heart upon your bed, and be still. Selah." },
      { ref:"Psalms 4:7", text:"Thou hast put gladness in my heart, more than in the time that their corn and their wine increased." },
      { ref:"Psalms 4:8", text:"I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety." }
    ],
    takeaway:"God-given gladness outlasts full barns and lets us lie down in peace.",
    quiz:[
      { q:"What does the psalmist say God put in his heart in Psalm 4?", choices:["Sorrow for the nations","Gladness, more than in the time their corn and wine increased","Fear of the night","A new song for the temple"], a:1, why:"Verse 7 says Thou hast put gladness in my heart, more than in the time that their corn and their wine increased." },
      { q:"What counsel does Psalm 4 give to people tempted toward sin in their anger?", choices:["Strike back before nightfall","Denounce the wicked in the gates","Stand in awe, commune with your own heart upon your bed, and be still","Offer double sacrifices the next morning"], a:2, why:"Verse 4: Stand in awe, and sin not: commune with your own heart upon your bed, and be still." },
      { q:"Why can the psalmist lie down in peace and sleep, according to Psalm 4?", choices:["His enemies have all been destroyed","He has laid up corn and wine in season","He keeps watch at the gates himself","Thou, LORD, only makest me dwell in safety"], a:3, why:"Verse 8 grounds peaceful sleep in the LORD alone, who makes him dwell in safety." }
    ] },
  { n:5, summary:"Morning is both the setting and the argument of this prayer: my voice shalt thou hear in the morning; in the morning will I direct my prayer unto thee, and will look up. The God addressed has no pleasure in wickedness, and evil shall not dwell with him — fools cannot stand in his sight, and the speaker of leasing he will destroy. The worshipper comes instead in the multitude of mercy, worshipping toward the holy temple, and asks to be led in the LORD's righteousness with the way made straight before his face, since his enemies' throat is an open sepulchre and they flatter with their tongue. He leaves their fate to God — let them fall by their own counsels — and asks that all who put their trust in the LORD rejoice and shout for joy because thou defendest them, closing with favour that compasses the righteous as with a shield.",
    context:"A morning prayer asking the LORD to hear, to lead in righteousness past lying enemies, and to shield all who trust him.",
    keyVerses:[
      { ref:"Psalms 5:3", text:"My voice shalt thou hear in the morning, O LORD; in the morning will I direct my prayer unto thee, and will look up." },
      { ref:"Psalms 5:7", text:"But as for me, I will come into thy house in the multitude of thy mercy: and in thy fear will I worship toward thy holy temple." },
      { ref:"Psalms 5:12", text:"For thou, LORD, wilt bless the righteous; with favour wilt thou compass him as with a shield." }
    ],
    takeaway:"Direct your prayer to God each morning; His favor surrounds the righteous like a shield.",
    quiz:[
      { q:"When does the psalmist say he will direct his prayer to the LORD in Psalm 5?", choices:["In the morning","At midnight","Only at the evening sacrifice","Once each Sabbath"], a:0, why:"Verse 3: My voice shalt thou hear in the morning; in the morning will I direct my prayer unto thee." },
      { q:"How does Psalm 5 describe the mouths of the psalmist's enemies?", choices:["Full of blessing and praise","Their throat is an open sepulchre; they flatter with their tongue","Sealed in careful silence","Sweeter than honey and the honeycomb"], a:1, why:"Verse 9 paints lying enemies as having an open-sepulchre throat and flattering tongues; the honey image belongs to Psalm 19's praise of God's judgments." },
      { q:"Why does the psalmist dare to come into God's house in prayer, in Psalm 5?", choices:["Because he has no enemies","Because he has never sinned","In the multitude of God's mercy","Because the king grants him access"], a:2, why:"Verse 7: I will come into thy house in the multitude of thy mercy." }
    ] },
  { n:6, summary:"Weakness, sickness, and sorrow fill this penitential plea. The psalmist begs not to be rebuked in the LORD's anger or chastened in hot displeasure; his bones are vexed, his soul is sore vexed, and he cries, how long? He asks for deliverance for thy mercies' sake, arguing from the grave's silence: in death there is no remembrance of thee, and who shall give thee thanks there? His grief is graphic — weary with groaning, he makes his bed to swim and waters his couch with tears every night, his eye consumed because of grief and grown old because of enemies. Then, abruptly, the weeping ends: he orders the workers of iniquity to depart, because the LORD hath heard the voice of my weeping, hath heard my supplication, and will receive my prayer, leaving his enemies to be ashamed and sore vexed suddenly.",
    context:"A penitential plea from a weeping, ailing sufferer who begs healing for mercy's sake and ends assured that God hears.",
    keyVerses:[
      { ref:"Psalms 6:2", text:"Have mercy upon me, O LORD; for I am weak: O LORD, heal me; for my bones are vexed." },
      { ref:"Psalms 6:6", text:"I am weary with my groaning; all the night make I my bed to swim; I water my couch with my tears." },
      { ref:"Psalms 6:9", text:"The LORD hath heard my supplication; the LORD will receive my prayer." }
    ],
    takeaway:"Tears poured out to God are not wasted; He hears the weeping and receives the prayer.",
    quiz:[
      { q:"What nighttime image does Psalm 6 use to describe the psalmist's grief?", choices:["Tears freeze like winter ice","His pillow turns to stone","He wanders the streets until dawn","All the night make I my bed to swim; I water my couch with my tears"], a:3, why:"Verse 6 pictures grief as tears enough each night to make the bed swim and water the couch." },
      { q:"What argument does the psalmist make against dying in Psalm 6?", choices:["In death there is no remembrance of God; in the grave who shall give thee thanks?","His family still needs his protection","His work in the temple is unfinished","The wicked would celebrate in the streets"], a:0, why:"Verse 5 reasons that the grave cannot remember or thank God, and pleads for rescue on that ground." },
      { q:"How does Psalm 6 end after the psalmist's prolonged lament?", choices:["He decides his prayers were never heard","The LORD hath heard the voice of my weeping and will receive my prayer","He vows never to pray again","He blames his enemies for his sickness"], a:1, why:"The turn comes at verse 8: Depart from me, all ye workers of iniquity; for the LORD hath heard the voice of my weeping." }
    ] },
  { n:7, summary:"Persecution drives this prayer, which opens in trust and pictures the pursuer as a lion tearing its prey with none to deliver. The psalmist stakes everything on innocence: if I have done this, if there be iniquity in my hands, if I have rewarded evil unto him that was at peace with me, then let the enemy tread down my life and lay mine honour in the dust. Boldly he asks the Judge of all to judge him according to his righteousness and integrity, for the righteous God trieth the hearts and reins. God prepares sword and arrows against persecutors, while the wicked man conceives mischief, brings forth falsehood — and digs a pit, falling into the ditch which he made, his mischief returning upon his own head. The psalm ends in song: I will praise the LORD according to his righteousness, and sing praise to the name of the LORD most high.",
    context:"A persecuted psalmist appeals to the righteous Judge, willing to fall under judgment if his own hands hold iniquity.",
    keyVerses:[
      { ref:"Psalms 7:8", text:"The LORD shall judge the people: judge me, O LORD, according to my righteousness, and according to mine integrity that is in me." },
      { ref:"Psalms 7:15", text:"He made a pit, and digged it, and is fallen into the ditch which he made." },
      { ref:"Psalms 7:17", text:"I will praise the LORD according to his righteousness: and will sing praise to the name of the LORD most high." }
    ],
    takeaway:"God tries hearts and judges fairly; those who dig pits for the innocent fall into their own.",
    quiz:[
      { q:"In Psalm 7, what happens to the man who digs a pit?", choices:["He fills it with water","He hides his treasure in it","He is fallen into the ditch which he made","He sells it to a farmer"], a:2, why:"Verse 15: He made a pit, and digged it, and is fallen into the ditch which he made." },
      { q:"On what basis does the psalmist ask God to judge him in Psalm 7?", choices:["His royal ancestry","The number of his offerings","The weakness of his enemies","According to my righteousness, and according to mine integrity that is in me"], a:3, why:"Verse 8 asks God to judge him by his righteousness and the integrity within him, since God tries hearts and reins." },
      { q:"What does Psalm 7 say God has prepared against the wicked who do not turn?", choices:["He will whet his sword and bend his bow","He will send famine on their land","He will remove their names from memory","He will wait for the final judgment only"], a:0, why:"Verses 12-13 warn that if he turn not, God will whet his sword, bend his bow, and ordain his arrows against the persecutors." }
    ] },
  { n:8, summary:"The same exclamation opens and closes this creation psalm: O LORD our Lord, how excellent is thy name in all the earth! Between the two refrains the psalm ponders glory and smallness. God ordains strength out of the mouth of babes and sucklings to still the enemy and the avenger; when the singer considers the heavens, the moon and the stars, the work of thy fingers, he asks what is man, that thou art mindful of him? The answer is astonishing: man is made a little lower than the angels and crowned with glory and honour, given dominion over the works of God's hands — all sheep and oxen, the beasts of the field, the fowl of the air, the fish of the sea, and whatsoever passeth through the paths of the seas. The wonder ends where it began, with the excellence of the name.",
    context:"A creation psalm marvelling that the God whose glory is above the heavens is mindful of man and crowns him with honour.",
    keyVerses:[
      { ref:"Psalms 8:3", text:"When I consider thy heavens, the work of thy fingers, the moon and the stars, which thou hast ordained;" },
      { ref:"Psalms 8:4", text:"What is man, that thou art mindful of him? and the son of man, that thou visitest him?" },
      { ref:"Psalms 8:9", text:"O LORD our Lord, how excellent is thy name in all the earth!" }
    ],
    takeaway:"The God whose glory fills the heavens is mindful of man and crowns him with glory and honour.",
    quiz:[
      { q:"According to Psalm 8, out of whose mouth has God ordained strength?", choices:["Priests and Levites","Babes and sucklings","Kings and judges","Prophets and scribes"], a:1, why:"Verse 2: Out of the mouth of babes and sucklings hast thou ordained strength because of thine enemies." },
      { q:"What question does considering the moon and stars lead the psalmist to ask in Psalm 8?", choices:["When will the heavens wear out?","Why do the stars keep silent?","What is man, that thou art mindful of him?","Who can number the stars?"], a:2, why:"Verses 3-4 move from considering the heavens to asking what is man, that thou art mindful of him." },
      { q:"What rank does Psalm 8 give to mankind in creation?", choices:["Equal with the beasts of the field","A little lower than the angels, crowned with glory and honour","Lower than the fish of the sea","Above the moon and stars in glory"], a:3, why:"Verse 5: Thou hast made him a little lower than the angels, and hast crowned him with glory and honour." }
    ] },
  { n:9, summary:"Thanksgiving opens the psalm: the singer praises with his whole heart, glad and rejoicing, because his enemies are turned back and the LORD, enthroned as righteous Judge, has maintained his right and his cause. Then the lens widens: the LORD shall endure for ever, has prepared his throne for judgment, and will judge the world in righteousness; he is a refuge for the oppressed, a refuge in times of trouble, and has not forsaken them that seek him. A fresh plea rises — have mercy upon me, consider my trouble, thou that liftest me up from the gates of death — matched by confidence that the heathen are sunk down in the pit that they made, their own foot taken in the net they hid. The psalm closes asking God to arise, put the nations in fear, and teach them that they are but men.",
    context:"A thanksgiving and petition psalm moving from the LORD's righteous judgment over nations to a plea for rescue from death.",
    keyVerses:[
      { ref:"Psalms 9:9", text:"The LORD also will be a refuge for the oppressed, a refuge in times of trouble." },
      { ref:"Psalms 9:10", text:"And they that know thy name will put their trust in thee: for thou, LORD, hast not forsaken them that seek thee." },
      { ref:"Psalms 9:18", text:"For the needy shall not alway be forgotten: the expectation of the poor shall not perish for ever." }
    ],
    takeaway:"The LORD is a refuge in times of trouble; He never forsakes those who seek Him.",
    quiz:[
      { q:"From where does Psalm 9 say God lifts the psalmist up?", choices:["From the gates of death","From the miry clay","From a dry wilderness","From the bottom of the sea"], a:0, why:"Verse 13 addresses the LORD as thou that liftest me up from the gates of death." },
      { q:"In Psalm 9, where are the heathen caught, according to the psalm?", choices:["In a storm at sea","In the pit that they made, their own foot taken in the net they hid","In the gates of a fallen city","In the snares of the hunter"], a:1, why:"Verse 15: The heathen are sunk down in the pit that they made: in the net which they hid is their own foot taken." },
      { q:"What does Psalm 9 say the LORD will be for the oppressed?", choices:["A judge who delays justice for generations","A distant king in heaven","A refuge in times of trouble","A silent watcher of injustice"], a:2, why:"Verse 9: The LORD also will be a refuge for the oppressed, a refuge in times of trouble." }
    ] },
  { n:10, summary:"Why standest thou afar off? The question opens a lament that dissects arrogant wickedness. The wicked man boasts of his heart's desire, will not seek after God, and puffs at his enemies, saying in his heart that he shall never be in adversity; his mouth is full of cursing and deceit and fraud as he lieth in wait secretly like a lion in his den to catch the poor, telling himself that God hath forgotten and will never see it. Against that creed the psalmist prays: Arise, lift up thine hand, forget not the humble; thou hast seen it, for thou art the helper of the fatherless. He asks God to break the arm of the wicked until his wickedness can be found no more, anchoring the plea in kingship: the LORD is King for ever and ever, hearing the desire of the humble and judging the fatherless and the oppressed, that the man of the earth may no more oppress.",
    context:"A lament over arrogant oppressors who act as if God has forgotten, ending in confidence that the King eternal hears the humble.",
    keyVerses:[
      { ref:"Psalms 10:1", text:"Why standest thou afar off, O LORD? why hidest thou thyself in times of trouble?" },
      { ref:"Psalms 10:14", text:"Thou hast seen it; for thou beholdest mischief and spite, to requite it with thy hand: the poor committeth himself unto thee; thou art the helper of the fatherless." },
      { ref:"Psalms 10:16", text:"The LORD is King for ever and ever: the heathen are perished out of his land." }
    ],
    takeaway:"The wicked act as if God forgets, but the King eternal sees and defends the humble.",
    quiz:[
      { q:"What animal image does Psalm 10 use for the wicked who preys on the poor?", choices:["A wolf among the sheep","A serpent in the grass","A vulture over its prey","He lieth in wait secretly as a lion in his den"], a:3, why:"Verse 9 compares the wicked to a lion lying in wait in his den to catch the poor." },
      { q:"What does the wicked man say in his heart about God, according to Psalm 10?", choices:["God hath forgotten; he hideth his face; he will never see it","God is merciful and will forgive","God is watching from his holy temple","God rewards those who help themselves"], a:0, why:"Verse 11 records the wicked man's creed that God has forgotten and will never see." },
      { q:"What does the psalmist ask God to do to the wicked in Psalm 10?", choices:["Wait patiently for him to change","Break thou the arm of the wicked","Buy back the property he stole","Send him a wise counselor"], a:1, why:"Verse 15: Break thou the arm of the wicked and the evil man: seek out his wickedness till thou find none." }
    ] },
  { n:11, summary:"Well-meaning voices tell the psalmist to run: Flee as a bird to your mountain, for the wicked bend their bow to shoot privily at the upright in heart. He refuses. If the foundations be destroyed, what can the righteous do? — his answer is not flight but vision: the LORD is in his holy temple, the LORD's throne is in heaven, his eyes behold and his eyelids try the children of men. The watching God trieth the righteous and hates the wicked and him that loveth violence; upon the wicked he shall rain snares, fire and brimstone, and an horrible tempest, the portion of their cup. The psalm ends with the beauty of standing fast: the righteous LORD loveth righteousness, and his countenance doth behold the upright.",
    context:"A trust psalm refusing the advice to flee, because the LORD reigns from his heavenly temple and tests every person.",
    keyVerses:[
      { ref:"Psalms 11:1", text:"In the LORD put I my trust: how say ye to my soul, Flee as a bird to your mountain?" },
      { ref:"Psalms 11:4", text:"The LORD is in his holy temple, the LORD's throne is in heaven: his eyes behold, his eyelids try, the children of men." },
      { ref:"Psalms 11:7", text:"For the righteous LORD loveth righteousness; his countenance doth behold the upright." }
    ],
    takeaway:"When foundations shake, stand fast: the LORD reigns from heaven and His eyes behold the upright.",
    quiz:[
      { q:"What advice does Psalm 11 record being given to the psalmist?", choices:["Compromise quietly with the wicked","Hide yourself in the temple courts","Flee as a bird to your mountain","Take up the bow against the wicked"], a:2, why:"Verse 1 quotes the advice, Flee as a bird to your mountain, which the psalmist rejects because he trusts in the LORD." },
      { q:"How does the psalmist answer the question, If the foundations be destroyed, what can the righteous do?", choices:["Retreat to the mountains until order returns","Imitate the wicked in order to survive","Rebuild the walls of the city","Remember that the LORD is in his holy temple, his throne in heaven"], a:3, why:"Verse 4 answers the crisis of verse 3 by pointing to the LORD enthroned in heaven, whose eyes observe everyone." },
      { q:"What does Psalm 11 say the LORD does to the righteous?", choices:["He trieth them","He removes every trial from them","He makes them rulers over cities","He hides them from all danger"], a:0, why:"Verse 5: The LORD trieth the righteous: but the wicked and him that loveth violence his soul hateth." }
    ] },
  { n:12, summary:"Words have failed the community: the godly man ceaseth, the faithful fail, and every neighbour speaks vanity with flattering lips and with a double heart. The flatterers even boast, Our lips are our own: who is lord over us? The LORD answers their pride with a promise to arise: for the oppression of the poor, for the sighing of the needy, now will I arise, and set him in safety from him that puffeth at him. Set against lying human speech are the words of the LORD, pure words, as silver tried in a furnace of earth, purified seven times; He will keep and preserve His own from this generation for ever. The psalm ends with a sober glance around: the wicked walk on every side, when the vilest men are exalted.",
    context:"A lament over a culture of flattery and lies, answered by God's promise to arise and by the purity of His words.",
    keyVerses:[
      { ref:"Psalms 12:5", text:"For the oppression of the poor, for the sighing of the needy, now will I arise, saith the LORD; I will set him in safety from him that puffeth at him." },
      { ref:"Psalms 12:6", text:"The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times." },
      { ref:"Psalms 12:8", text:"The wicked walk on every side, when the vilest men are exalted." }
    ],
    takeaway:"Human words flatter and deceive; the LORD's words are pure, and He arises for the needy.",
    quiz:[
      { q:"What metalwork image does Psalm 12 use for the words of the LORD?", choices:["Gold beaten into thin sheets","Silver tried in a furnace of earth, purified seven times","Iron sharpened by iron","Bronze poured into clay molds"], a:1, why:"Verse 6: The words of the LORD are pure words: as silver tried in a furnace of earth, purified seven times." },
      { q:"According to Psalm 12, what moves the LORD to declare, Now will I arise?", choices:["A king's coronation in the temple","A victory won over the heathen","The oppression of the poor and the sighing of the needy","A nation's solemn fast day"], a:2, why:"Verse 5 grounds God's arising in the oppression of the poor and the sighing of the needy." },
      { q:"What do the flatterers of Psalm 12 boast about their speech?", choices:["That it comforts the brokenhearted","That it agrees with the law","That it wins the ear of kings","Our lips are our own: who is lord over us?"], a:3, why:"Verse 4 quotes their boast that with their tongue they will prevail and answer to no lord." }
    ] },
  { n:13, summary:"Four cries of how long compress a whole anguish: wilt thou forget me for ever, hide thy face from me, leave sorrow in my heart daily, let my enemy be exalted over me? Left unchecked, the spiral ends in death, and so the prayer begs God to lighten mine eyes, lest I sleep the sleep of death and my enemy say, I have prevailed against him. The psalm is remembered for how quickly it turns from that pit: but I have trusted in thy mercy; my heart shall rejoice in thy salvation. The last line becomes a vow of song — I will sing unto the LORD, because he hath dealt bountifully with me — turning the complaint into confidence without waiting for a single answer.",
    context:"A brief lament of felt abandonment that pivots from four cries of how long to trust, rejoicing, and song.",
    keyVerses:[
      { ref:"Psalms 13:1", text:"How long wilt thou forget me, O LORD? for ever? how long wilt thou hide thy face from me?" },
      { ref:"Psalms 13:3", text:"Consider and hear me, O LORD my God: lighten mine eyes, lest I sleep the sleep of death;" },
      { ref:"Psalms 13:6", text:"I will sing unto the LORD, because he hath dealt bountifully with me." }
    ],
    takeaway:"Honest how-longs can end in song: trusting God's mercy turns sorrow into rejoicing.",
    quiz:[
      { q:"How many times does the psalmist ask How long in the opening two verses of Psalm 13?", choices:["Two","Three","Four","Six"], a:0, why:"Verses 1-2 ask how long four times: forget me, hide thy face, sorrow daily, enemy exalted." },
      { q:"What fear does the psalmist attach to the sleep of death in Psalm 13?", choices:["That his family will forget him","That his enemy will say, I have prevailed against him","That God's promises will fail","That he will never wake again"], a:1, why:"Verse 4 fears the enemy's boast of victory and the rejoicing of those who trouble him." },
      { q:"How does Psalm 13 end?", choices:["With a curse on the enemy","With a command to keep silent","With a vow to sing unto the LORD because he hath dealt bountifully","With a list of complaints still unanswered"], a:2, why:"Verse 6: I will sing unto the LORD, because he hath dealt bountifully with me." }
    ] },
  { n:14, summary:"A corruption psalm with one famous opening: the fool hath said in his heart, There is no God. Such people are corrupt and have done abominable works, until the LORD, looking down from heaven to see if any understand and seek God, finds none that doeth good, no, not one. Their brutality is banal: they eat up my people as they eat bread and call not upon the LORD. Yet the tables turn — there were they in great fear, for God is in the generation of the righteous, and those who shame the counsel of the poor forget that the LORD is his refuge. The psalm closes longing for intervention: oh that the salvation of Israel were come out of Zion, for when the LORD bringeth back the captivity of his people, Jacob shall rejoice and Israel shall be glad.",
    context:"A wisdom lament describing a corrupt generation where the fool denies God, and longing for salvation to come out of Zion.",
    keyVerses:[
      { ref:"Psalms 14:1", text:"The fool hath said in his heart, There is no God. They are corrupt, they have done abominable works, there is none that doeth good." },
      { ref:"Psalms 14:2", text:"The LORD looked down from heaven upon the children of men, to see if there were any that did understand, and seek God." },
      { ref:"Psalms 14:7", text:"Oh that the salvation of Israel were come out of Zion! when the LORD bringeth back the captivity of his people, Jacob shall rejoice, and Israel shall be glad." }
    ],
    takeaway:"Denying God corrupts life; true wisdom seeks Him, and His salvation turns captivity into joy.",
    quiz:[
      { q:"According to Psalm 14, who claims there is no God?", choices:["The heathen kings only","The priests of foreign altars","The weary and oppressed","The fool, and he says it in his heart"], a:3, why:"Verse 1: The fool hath said in his heart, There is no God." },
      { q:"In Psalm 14, what everyday comparison describes how the wicked consume God's people?", choices:["They eat up my people as they eat bread","They grind souls like millstones","They hunt with fowlers' nets","They drink from stolen wells"], a:0, why:"Verse 4 asks whether the workers of iniquity have no knowledge, who eat up my people as they eat bread." },
      { q:"What hope does Psalm 14 hold out at its close?", choices:["The wicked will be taught wisdom by the poor","The salvation of Israel will come out of Zion, and Jacob shall rejoice","A new temple will be raised in Jerusalem","The nations will bring gifts to Israel"], a:1, why:"Verse 7 longs for salvation out of Zion and promises rejoicing when the LORD brings back the captivity of His people." }
    ] },
  { n:15, summary:"A question opens this entrance psalm, and a character portrait answers it. LORD, who shall abide in thy tabernacle? who shall dwell in thy holy hill? The answer is conduct, not ceremony: he that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart. The portrait fills in details: no backbiting with the tongue, no evil done to a neighbour, no reproach taken up against him; the vile person is contemned while those who fear the LORD are honoured; the worshipper sweareth to his own hurt, and changeth not; money is not put out to usury, nor reward taken against the innocent. The final line is a promise to match the question: he that doeth these things shall never be moved.",
    context:"An entrance psalm asking who may dwell with God and answering with a portrait of truthful, just, unshakeable character.",
    keyVerses:[
      { ref:"Psalms 15:1", text:"LORD, who shall abide in thy tabernacle? who shall dwell in thy holy hill?" },
      { ref:"Psalms 15:2", text:"He that walketh uprightly, and worketh righteousness, and speaketh the truth in his heart." },
      { ref:"Psalms 15:4", text:"In whose eyes a vile person is contemned; but he honoureth them that fear the LORD. He that sweareth to his own hurt, and changeth not." }
    ],
    takeaway:"Dwelling near God belongs to the truthful and just; such character shall never be moved.",
    quiz:[
      { q:"What two questions open Psalm 15?", choices:["Who is like unto thee, O LORD? and who is a rock save our God?","Where shall I go from thy Spirit? and where shall I flee?","Who hath believed our report? and to whom is the arm revealed?","Who shall abide in thy tabernacle? and who shall dwell in thy holy hill?"], a:3, why:"Verse 1 asks who may abide in the tabernacle and dwell in the holy hill." },
      { q:"In Psalm 15, what does the worthy worshipper do when his own oath works against him?", choices:["He asks to be released from the promise","He pays another to fulfill it for him","He swears only when convenient","He sweareth to his own hurt, and changeth not"], a:3, why:"Verse 4 praises the one who keeps his word even when keeping it hurts." },
      { q:"What promise closes Psalm 15 for the person who does these things?", choices:["He shall never be moved","His days shall be doubled","His enemies will serve him","He will want for no good thing"], a:0, why:"Verse 5 ends: He that doeth these things shall never be moved." }
    ] },
  { n:16, summary:"Trust is this psalm's spine: preserve me, O God, for in thee do I put my trust. The psalmist refuses other gods — their sorrows shall be multiplied that hasten after another god — and claims the LORD as the portion of mine inheritance and of my cup, with lines fallen unto me in pleasant places and a goodly heritage. Counsel received from the LORD instructs him in the night seasons; because he has set the LORD always before him, and God is at his right hand, he shall not be moved. Gladness and hope follow, reaching past death: thou wilt not leave my soul in hell, neither wilt thou suffer thine Holy One to see corruption. The closing verse shines: thou wilt shew me the path of life; in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.",
    context:"A trust psalm refusing other gods, claiming the LORD as its portion and inheritance, and resting in hope beyond death.",
    keyVerses:[
      { ref:"Psalms 16:5", text:"The LORD is the portion of mine inheritance and of my cup: thou maintainest my lot." },
      { ref:"Psalms 16:8", text:"I have set the LORD always before me: because he is at my right hand, I shall not be moved." },
      { ref:"Psalms 16:11", text:"Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore." }
    ],
    takeaway:"With the LORD as your portion and at your right hand, the path of life and fulness of joy are sure.",
    quiz:[
      { q:"What inheritance does the psalmist claim in Psalm 16?", choices:["Fields and vineyards in the hill country","The LORD himself — the portion of mine inheritance and of my cup","The silver and gold of the nations","A dwelling near the king's palace"], a:1, why:"Verse 5: The LORD is the portion of mine inheritance and of my cup: thou maintainest my lot." },
      { q:"According to Psalm 16, what happens to those who hasten after another god?", choices:["They find the peace they seek","They inherit the earth","Their sorrows shall be multiplied","They become priests of the most High"], a:2, why:"Verse 4: Their sorrows shall be multiplied that hasten after another god." },
      { q:"Where does Psalm 16 locate fulness of joy?", choices:["In a long life of prosperity","In freedom from every trial","In the praise of other people","In God's presence, at His right hand"], a:3, why:"Verse 11: In thy presence is fulness of joy; at thy right hand there are pleasures for evermore." }
    ] },
  { n:17, summary:"A prayer rises from lips that are not feigned, asking to be heard in the right. The psalmist invites examination — thou hast proved mine heart; thou hast visited me in the night; thou hast tried me, and shalt find nothing — and credits the word of God's lips with keeping him from the paths of the destroyer. He asks to be kept as the apple of the eye and hidden under the shadow of thy wings from the wicked who compass him about like a lion greedy of his prey, lurking in secret places. His enemies are men of the world, which have their portion in this life. His hope is otherwise: as for me, I will behold thy face in righteousness: I shall be satisfied, when I awake, with thy likeness.",
    context:"A psalmist under attack pleads innocence before God's searching eye and asks to be kept as the apple of the eye.",
    keyVerses:[
      { ref:"Psalms 17:5", text:"Hold up my goings in thy paths, that my footsteps slip not." },
      { ref:"Psalms 17:8", text:"Keep me as the apple of the eye, hide me under the shadow of thy wings," },
      { ref:"Psalms 17:15", text:"As for me, I will behold thy face in righteousness: I shall be satisfied, when I awake, with thy likeness." }
    ],
    takeaway:"God searches hearts; the vindicated will be satisfied to awake in His likeness.",
    quiz:[
      { q:"What does the psalmist ask to be kept as, in Psalm 17?", choices:["The salt of the earth","A lamp on a lampstand","The apple of the eye","A signet on the hand"], a:2, why:"Verse 8: Keep me as the apple of the eye, hide me under the shadow of thy wings." },
      { q:"What animal image does Psalm 17 use for the enemies encircling the psalmist?", choices:["A roaring bear","A lion greedy of his prey","A striking serpent","A charging horse"], a:1, why:"Verse 12 compares the enemy to a lion greedy of his prey and a young lion lurking in secret places." },
      { q:"How does Psalm 17 distinguish the psalmist's hope from the hope of men of the world?", choices:["He seeks riches while they seek honor","He asks for victory while they ask for peace","Men of the world have their portion in this life; he will behold God's face in righteousness","He builds altars while they build houses"], a:2, why:"Verse 14 assigns the enemies their portion in this life; verse 15 answers with beholding God's face and waking in His likeness." }
    ] },
  { n:18, summary:"A royal thanksgiving in which the singer loves the LORD as his rock, fortress, deliverer, buckler, and high tower. His cry rose from a strait where the sorrows of death compassed him and the floods of ungodly men made him afraid; God heard out of his temple and came down in storm — the earth shook, smoke went up from his nostrils, he rode upon a cherub and did fly, he thundered and scattered arrows of lightning. He drew the singer out of many waters into a large place, delighting in him and rewarding his integrity. Strength follows the rescue: the candle lit and darkness enlightened, feet like hinds', hands taught to war, enemies beaten small as the dust before the wind, strangers fading away. The psalm ends exalting the living God: blessed be my rock — great deliverance to his king, and mercy to his anointed, to David, and to his seed for evermore.",
    context:"A royal thanksgiving for dramatic rescue in battle, closing with mercy promised to David and to his seed for evermore.",
    keyVerses:[
      { ref:"Psalms 18:2", text:"The LORD is my rock, and my fortress, and my deliverer; my God, my strength, in whom I will trust; my buckler, and the horn of my salvation, and my high tower." },
      { ref:"Psalms 18:46", text:"The LORD liveth; and blessed be my rock; and let the God of my salvation be exalted." },
      { ref:"Psalms 18:50", text:"Great deliverance giveth he to his king; and sheweth mercy to his anointed, to David, and to his seed for evermore." }
    ],
    takeaway:"The LORD is rock and fortress; He draws those who call on Him out of many waters into a large place.",
    quiz:[
      { q:"What chain of titles does the psalmist give the LORD in Psalm 18:2?", choices:["Shepherd, door, vine, and way","Father, Son, and Spirit","Sun, shield, rain, and dew","Rock, fortress, deliverer, buckler, and high tower"], a:3, why:"Verse 2 stacks the titles: The LORD is my rock, and my fortress, and my deliverer... my buckler, and the horn of my salvation, and my high tower." },
      { q:"In Psalm 18, what image describes how God rescued the psalmist from danger?", choices:["He sent from above and drew me out of many waters","He pulled me from a burning house","He carried me on eagles' wings","He hid me inside a cave"], a:0, why:"Verse 16: He sent from above, he took me, he drew me out of many waters." },
      { q:"According to Psalm 18:35, what has made the psalmist great?", choices:["His armies and his allies","Thy gentleness hath made me great","His wealth of silver and gold","His fame among the nations"], a:1, why:"Verse 35: Thy right hand hath holden me up, and thy gentleness hath made me great." }
    ] },
  { n:19, summary:"Two revelations, one God. The first is wordless: the heavens declare the glory of God, day uttering speech unto day and night shewing knowledge unto night, their line gone out through all the earth, with the sun rejoicing like a bridegroom coming out of his chamber and running his circuit like a strong man. The second is spoken: the law of the LORD is perfect, converting the soul; his testimony is sure and his judgments true — desired more than much fine gold, sweeter than honey, warning the servant, with great reward in keeping them. The psalm then bows before the Giver: who can understand his errors? Cleanse thou me from secret faults, keep back thy servant from presumptuous sins — until the closing prayer, let the words of my mouth and the meditation of my heart be acceptable in thy sight, O LORD, my strength, and my redeemer.",
    context:"A Torah psalm moving from the wordless testimony of the skies to the perfect law of the LORD and a prayer for a clean heart.",
    keyVerses:[
      { ref:"Psalms 19:1", text:"The heavens declare the glory of God; and the firmament sheweth his handywork." },
      { ref:"Psalms 19:7", text:"The law of the LORD is perfect, converting the soul: the testimony of the LORD is sure, making wise the simple." },
      { ref:"Psalms 19:14", text:"Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer." }
    ],
    takeaway:"God speaks through creation and through His word; both call for a cleansed, acceptable heart.",
    quiz:[
      { q:"What two figures picture the sun in Psalm 19?", choices:["A lamp and a lantern","A shepherd and a king","A bridegroom coming out of his chamber and a strong man running a race","A sower and a reaper"], a:2, why:"Verse 5: Which is as a bridegroom coming out of his chamber, and rejoiceth as a strong man to run a race." },
      { q:"In Psalm 19, the judgments of the LORD are declared more desirable than what?", choices:["Fine gold — and sweeter than honey","Silver and precious stones","Long life and riches","Crowns and kingdoms"], a:3, why:"Verse 10: More to be desired are they than gold, yea, than much fine gold: sweeter also than honey and the honeycomb." },
      { q:"What prayer closes Psalm 19?", choices:["Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight","Cleanse me with hyssop, and I shall be clean","Create in me a clean heart","Order my steps in thy word"], a:0, why:"Verse 14 closes with the prayer that the words of the mouth and the meditation of the heart be acceptable to the LORD." }
    ] },
  { n:20, summary:"A blessing is spoken over a king facing trouble. The intercessors ask that the name of the God of Jacob defend him, that help be sent from the sanctuary and strength out of Zion, that his offerings be remembered and his counsel fulfilled; they pledge to rejoice in his salvation and set up banners in the name of our God. The voice of confidence answers: now know I that the LORD saveth his anointed, hearing him from his holy heaven with the saving strength of his right hand. Then comes the confession that gives the psalm its edge: some trust in chariots, and some in horses, but we will remember the name of the LORD our God. The outcome is foretold in those terms — they are brought down and fallen, but we are risen and stand upright.",
    context:"A prayer of blessing for a king before battle, contrasting trust in chariots and horses with trust in the name of the LORD.",
    keyVerses:[
      { ref:"Psalms 20:6", text:"Now know I that the LORD saveth his anointed; he will hear him from his holy heaven with the saving strength of his right hand." },
      { ref:"Psalms 20:7", text:"Some trust in chariots, and some in horses: but we will remember the name of the LORD our God." },
      { ref:"Psalms 20:9", text:"Save, LORD: let the king hear us when we call." }
    ],
    takeaway:"Chariots and horses fail; remembering the name of the LORD raises His people to stand upright.",
    quiz:[
      { q:"In Psalm 20, from where is help asked to come for the king?", choices:["Egypt's horsemen","The sanctuary, and strength out of Zion","Allied nations east of the river","The treasuries of Israel"], a:1, why:"Verse 2: Send thee help from the sanctuary, and strengthen thee out of Zion." },
      { q:"What contrast does Psalm 20:7 draw?", choices:["Swords against shields","Kings against priests","Some trust in chariots and horses, but we will remember the name of the LORD","Rain against drought"], a:2, why:"Verse 7 sets worldly military trust against remembering the name of the LORD our God." },
      { q:"What outcome does Psalm 20 expect for those who trust the LORD compared with those who do not?", choices:["Both sides stand equal after the battle","The trusting flee to the mountains","The result depends on the size of each army","They are brought down and fallen, but we are risen and stand upright"], a:3, why:"Verse 8: They are brought down and fallen: but we are risen, and stand upright." }
    ] },
  { n:21, summary:"Joy fills this royal thanksgiving. The king shall joy in the LORD's strength because God gave him his heart's desire and withholden nothing his lips requested: blessings of goodness met him, a crown of pure gold was set on his head, and when he asked life, he received length of days for ever and ever. Honour and majesty are laid upon him; because the king trusteth in the LORD, through the mercy of the most High he shall not be moved. The same hand that crowned him will find out all enemies: those who hate God are made as a fiery oven in the time of his anger, their mischievous devices frustrated though they intended evil. The last verse is the congregation's doxology: be thou exalted, LORD, in thine own strength: so will we sing and praise thy power.",
    context:"A royal psalm of thanksgiving for blessings and victories granted to the king, and for the defeat prepared for God's enemies.",
    keyVerses:[
      { ref:"Psalms 21:1", text:"The king shall joy in thy strength, O LORD; and in thy salvation how greatly shall he rejoice!" },
      { ref:"Psalms 21:7", text:"For the king trusteth in the LORD, and through the mercy of the most High he shall not be moved." },
      { ref:"Psalms 21:13", text:"Be thou exalted, LORD, in thine own strength: so will we sing and praise thy power." }
    ],
    takeaway:"The king who trusts in the LORD rejoices in His strength; God's power accomplishes what armies cannot.",
    quiz:[
      { q:"What was set on the king's head in Psalm 21?", choices:["A crown of pure gold","A helmet of bronze","A garland of olive branches","A diadem of precious jewels"], a:0, why:"Verse 3: Thou settest a crown of pure gold on his head." },
      { q:"According to Psalm 21:7, why shall the king not be moved?", choices:["Because his army outnumbers his foes","Because he trusteth in the LORD, through the mercy of the most High","Because his throne is fortified with iron","Because his enemies have made peace with him"], a:1, why:"Verse 7 grounds the king's stability in trusting the LORD and the mercy of the most High." },
      { q:"What did the king ask of God and receive, in Psalm 21?", choices:["Wealth beyond measure","A name among the nations","Life, even length of days for ever and ever","Wisdom to judge the poor"], a:2, why:"Verse 4: He asked life of thee, and thou gavest it him, even length of days for ever and ever." }
    ] },
  { n:22, summary:"It opens with the cry, My God, my God, why hast thou forsaken me? — cried day and night without relief, though Israel's fathers trusted and were delivered. The sufferer is a worm and no man, mocked by onlookers who shake their heads: he trusted on the LORD, let him deliver him. The anguish is physical: strong bulls of Bashan beset him; he is poured out like water, his heart melted like wax, his tongue cleaving to his jaws, brought into the dust of death; dogs compass him, they pierced my hands and my feet, and his garments are parted by lot. Then the psalm turns: heard from the horns of the unicorns, the sufferer vows to declare God's name to his brethren and praise Him in the congregation. The meek shall eat and be satisfied, the ends of the world shall turn to the LORD, and a seed shall serve Him, telling a people yet unborn that He hath done this.",
    context:"A lament of a forsaken sufferer — mocked, pierced, and stripped — that turns midway into praise promised to the whole world.",
    keyVerses:[
      { ref:"Psalms 22:1", text:"My God, my God, why hast thou forsaken me? why art thou so far from helping me, and from the words of my roaring?" },
      { ref:"Psalms 22:16", text:"For dogs have compassed me: the assembly of the wicked have inclosed me: they pierced my hands and my feet." },
      { ref:"Psalms 22:27", text:"All the ends of the world shall remember and turn unto the LORD: and all the kindreds of the nations shall worship before thee." }
    ],
    takeaway:"The cry of the forsaken ends in worldwide praise: God hears the afflicted, and a seed declares, He hath done this.",
    quiz:[
      { q:"Which animals does Psalm 22 use to picture the sufferer's enemies?", choices:["Wolves and jackals","Serpents and scorpions","Boars and vultures","Strong bulls of Bashan, dogs, and a roaring lion"], a:3, why:"Verses 12-16 surround the sufferer with bulls of Bashan, a ravening lion, and dogs that compass him." },
      { q:"What does the psalm say was done to the sufferer's hands and feet?", choices:["They pierced my hands and my feet","They were bound with bronze cords","They were washed and anointed","They were marked with ink"], a:0, why:"Verse 16: They pierced my hands and my feet." },
      { q:"What turn does Psalm 22 make in its second half?", choices:["The sufferer curses his tormentors","The sufferer vows to declare God's name and praise Him, as the ends of the world turn to the LORD","The king musters an army for revenge","The lament repeats with even greater sorrow"], a:1, why:"From verse 22 the psalm turns to praise, promising that all the ends of the world shall remember and turn unto the LORD." }
    ] },
  { n:23, summary:"The best-known psalm in the Bible moves from pasture to table to home. The LORD is my shepherd; I shall not want: he maketh me to lie down in green pastures, leadeth me beside the still waters, restoreth my soul, and leadeth me in the paths of righteousness for his name's sake. Even the valley of the shadow of death loses its terror — I will fear no evil: for thou art with me; thy rod and thy staff they comfort me. Hospitality replaces hostility: thou preparest a table before me in the presence of mine enemies, thou anointest my head with oil, and my cup runneth over. The journey ends where the psalm ends: surely goodness and mercy shall follow me all the days of my life, and I will dwell in the house of the LORD for ever.",
    context:"A trust psalm picturing the LORD as a shepherd who feeds, restores, guides, and hosts His own through danger to an everlasting home.",
    keyVerses:[
      { ref:"Psalms 23:1", text:"The LORD is my shepherd; I shall not want." },
      { ref:"Psalms 23:4", text:"Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
      { ref:"Psalms 23:6", text:"Surely goodness and mercy shall follow me all the days of my life: and I will dwell in the house of the LORD for ever." }
    ],
    takeaway:"With the LORD as shepherd we lack nothing: He restores, accompanies us through the valley, and brings us home.",
    quiz:[
      { q:"Beside what kind of waters does the shepherd lead in Psalm 23?", choices:["The roaring seas","The rushing rivers","The still waters","The deep wells"], a:2, why:"Verse 2: He leadeth me beside the still waters." },
      { q:"What comfort does the psalmist claim in the valley of the shadow of death?", choices:["That the valley is only imagined","That the journey will be shortened","That his flock waits on the other side","That thou art with me; thy rod and thy staff comfort him"], a:3, why:"Verse 4: I will fear no evil: for thou art with me; thy rod and thy staff they comfort me." },
      { q:"In Psalm 23, what does the LORD prepare in the presence of the psalmist's enemies?", choices:["A table","A fortress","A banner","A river"], a:0, why:"Verse 5: Thou preparest a table before me in the presence of mine enemies." }
    ] },
  { n:24, summary:"Two scenes unfold. First, creation's ownership: the earth is the LORD's, and the fulness thereof, founded upon the seas — and so the question, who shall ascend into the hill of the LORD? The answer is character: he that hath clean hands, and a pure heart, who hath not lifted up his soul unto vanity, nor sworn deceitfully; such a one receives the blessing from the LORD and righteousness from the God of his salvation. Then the procession: lift up your heads, O ye gates, and be ye lift up, ye everlasting doors, and the King of glory shall come in. The question who is this King of glory? is asked twice and answered twice — the LORD strong and mighty, the LORD mighty in battle, and finally, the LORD of hosts, he is the King of glory.",
    context:"A processional psalm declaring the earth as the LORD's, naming who may stand in His holy place, and heralding the King of glory.",
    keyVerses:[
      { ref:"Psalms 24:1", text:"The earth is the LORD's, and the fulness thereof; the world, and they that dwell therein." },
      { ref:"Psalms 24:4", text:"He that hath clean hands, and a pure heart; who hath not lifted up his soul unto vanity, nor sworn deceitfully." },
      { ref:"Psalms 24:10", text:"Who is this King of glory? The LORD of hosts, he is the King of glory. Selah." }
    ],
    takeaway:"The whole earth is the LORD's; clean hands and a pure heart welcome the King of glory.",
    quiz:[
      { q:"Whose is the earth and the fulness thereof, according to Psalm 24?", choices:["The kings who conquer it","The LORD's","The righteous who inherit it","The nations who till it"], a:1, why:"Verse 1: The earth is the LORD's, and the fulness thereof." },
      { q:"Who may ascend into the hill of the LORD and stand in his holy place, in Psalm 24?", choices:["Those who bring many offerings","The priests and Levites only","He that hath clean hands, and a pure heart","The strong and mighty in battle"], a:2, why:"Verses 3-4 answer the entry question with clean hands and a pure heart, not ritual gifts." },
      { q:"How is the King of glory finally identified in Psalm 24?", choices:["The son of David","The brightness of the morning","The LORD seated on Zion's hill","The LORD of hosts"], a:3, why:"Verse 10: Who is this King of glory? The LORD of hosts, he is the King of glory." }
    ] },
  { n:25, summary:"An acrostic prayer lifts a soul to God in trust and asks to be taught: shew me thy ways, lead me in thy truth, for on thee do I wait all the day. The psalmist begs the LORD to remember his own tender mercies and lovingkindnesses of old and not the sins and transgressions of his youth, reasoning that the LORD is good and upright, teaching sinners in the way and guiding the meek in judgment. For thy name's sake he asks pardon, admitting that his iniquity is great. The way of the God-fearing is mapped out — the secret of the LORD is with them, their feet are plucked out of the net, their seed inherits the earth — while the prayer keeps circling back to affliction: desolate and afflicted, troubles enlarged, hated with cruel hatred by many enemies. It ends with a plea for integrity and uprightness to preserve him and a cry: redeem Israel, O God, out of all his troubles.",
    context:"An acrostic prayer braiding petitions for teaching, forgiveness of youthful sins, and rescue from many cruel enemies.",
    keyVerses:[
      { ref:"Psalms 25:4", text:"Shew me thy ways, O LORD; teach me thy paths." },
      { ref:"Psalms 25:7", text:"Remember not the sins of my youth, nor my transgressions: according to thy mercy remember thou me for thy goodness' sake, O LORD." },
      { ref:"Psalms 25:14", text:"The secret of the LORD is with them that fear him; and he will shew them his covenant." }
    ],
    takeaway:"God teaches and pardons those who wait on Him; the secret of the LORD is with them that fear Him.",
    quiz:[
      { q:"What does the psalmist ask the LORD NOT to remember in Psalm 25?", choices:["The sins of his youth and his transgressions","His tears and his fastings","The covenant with his fathers","The names of his enemies"], a:0, why:"Verse 7: Remember not the sins of my youth, nor my transgressions." },
      { q:"According to Psalm 25, with whom is the secret of the LORD found?", choices:["With kings and their counselors","With them that fear him","With the priests in the sanctuary","With the meek who inherit the land"], a:1, why:"Verse 14: The secret of the LORD is with them that fear him; and he will shew them his covenant." },
      { q:"What two petitions close Psalm 25?", choices:["Pardon and prosperity","Teaching and victory","Let integrity and uprightness preserve me; redeem Israel, O God, out of all his troubles","Silence for enemies and rest for the weary"], a:2, why:"Verses 21-22 close with preservation by integrity and uprightness and the cry, Redeem Israel, O God, out of all his troubles." }
    ] },
  { n:26, summary:"An invitation to inspection opens the psalm: judge me, O LORD; for I have walked in mine integrity. The psalmist asks God to examine, prove, and try his reins and heart, and reports a life of loyalty — thy lovingkindness is before mine eyes, walking in thy truth, refusing the company of vain persons, dissemblers, and evil doers. He will wash his hands in innocency and so compass God's altar, publishing with the voice of thanksgiving and telling of all thy wondrous works, having loved the habitation of God's house and the place where thine honour dwelleth. One petition guards the whole prayer: gather not my soul with sinners, whose hands hold mischief and whose right hand is full of bribes. Integrity closes the psalm as it opened: my foot standeth in an even place; in the congregations will I bless the LORD.",
    context:"A psalmist invites God to examine and prove him, declaring his integrity, his love for God's house, and his refusal to sit with the wicked.",
    keyVerses:[
      { ref:"Psalms 26:2", text:"Examine me, O LORD, and prove me; try my reins and my heart." },
      { ref:"Psalms 26:6", text:"I will wash mine hands in innocency: so will I compass thine altar, O LORD:" },
      { ref:"Psalms 26:12", text:"My foot standeth in an even place: in the congregations will I bless the LORD." }
    ],
    takeaway:"Integrity invites God's examination; clean hands may approach His altar with thanksgiving.",
    quiz:[
      { q:"What does the psalmist invite the LORD to do to him in Psalm 26?", choices:["Reward him with long life","Hide him from his enemies","Speak to him in dreams","Examine me, and prove me; try my reins and my heart"], a:3, why:"Verse 2: Examine me, O LORD, and prove me; try my reins and my heart." },
      { q:"How has the psalmist behaved toward the company of the wicked in Psalm 26?", choices:["He has refused to sit with vain persons and evil doers","He has eaten with them to win them over","He has borrowed money from them","He has fought them in the streets"], a:0, why:"Verses 4-5: I have not sat with vain persons, neither will I go in with dissemblers... I will not sit with the wicked." },
      { q:"In Psalm 26, why does the psalmist wash his hands in innocency?", choices:["To mock his accusers","So he may compass God's altar and publish thanksgiving","To prepare for a long journey","To cleanse himself from disease"], a:1, why:"Verses 6-7: I will wash mine hands in innocency: so will I compass thine altar... and tell of all thy wondrous works." }
    ] },
  { n:27, summary:"Fear has lost its grip on this psalm: the LORD is my light and my salvation — whom shall I fear? Though an host should encamp against me, my heart shall not fear. Out of that confidence grows its famous single desire: one thing have I desired of the LORD, to dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to inquire in his temple. Trouble finds him hidden in God's pavilion, set upon a rock, his head lifted above enemies as he offers sacrifices of joy. A dialogue of devotion follows — when thou saidst, Seek ye my face; my heart said unto thee, Thy face, LORD, will I seek — together with pleas not to be forsaken, even if father and mother forsake me, then the LORD will take me up. The closing counsel has steadied readers for centuries: wait on the LORD, be of good courage, and he shall strengthen thine heart.",
    context:"A psalm of confident trust in danger, longing for God's house, and closing with the counsel to wait on the LORD.",
    keyVerses:[
      { ref:"Psalms 27:1", text:"The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?" },
      { ref:"Psalms 27:4", text:"One thing have I desired of the LORD, that will I seek after; that I may dwell in the house of the LORD all the days of my life, to behold the beauty of the LORD, and to inquire in his temple." },
      { ref:"Psalms 27:14", text:"Wait on the LORD: be of good courage, and he shall strengthen thine heart: wait, I say, on the LORD." }
    ],
    takeaway:"One thing is worth seeking: to dwell with God; waiting on Him turns fear into courage.",
    quiz:[
      { q:"What ONE thing does the psalmist desire of the LORD in Psalm 27?", choices:["Victory over every enemy","Long life and prosperity","To dwell in the house of the LORD all the days of his life","To build an altar in the field"], a:2, why:"Verse 4 names one desire: to dwell in the house of the LORD, beholding His beauty and inquiring in His temple." },
      { q:"In Psalm 27, who takes the psalmist up if father and mother forsake him?", choices:["His brethren","The priests of the temple","The king's court","The LORD"], a:3, why:"Verse 10: When my father and my mother forsake me, then the LORD will take me up." },
      { q:"What double command does Psalm 27 give at its close?", choices:["Wait on the LORD, and be of good courage","Flee and hide","Watch and pray","Give thanks and sing"], a:0, why:"Verse 14: Wait on the LORD: be of good courage, and he shall strengthen thine heart." }
    ] },
  { n:28, summary:"The psalm begins with a fear bigger than armies: that God might be silent. Unto thee will I cry, O LORD my rock; be not silent to me, lest, if thou be silent to me, I become like them that go down into the pit. Hands lifted toward the holy oracle carry two requests — keep me from being drawn away with the wicked, who speak peace to their neighbours but have mischief in their hearts, and give them according to their deeds, since they regard not the works of the LORD. Then comes the pivot of answered prayer: blessed be the LORD, because he hath heard the voice of my supplications. The LORD is my strength and my shield; my heart trusted in him, and I am helped — so with my song will I praise him, and the psalm ends asking God to save, bless, feed, and lift up His people for ever.",
    context:"A prayer begging God not to stay silent while enemies who speak peace plot mischief, turning into praise for answered help.",
    keyVerses:[
      { ref:"Psalms 28:1", text:"Unto thee will I cry, O LORD my rock; be not silent to me: lest, if thou be silent to me, I become like them that go down into the pit." },
      { ref:"Psalms 28:7", text:"The LORD is my strength and my shield; my heart trusted in him, and I am helped: therefore my heart greatly rejoiceth; and with my song will I praise him." },
      { ref:"Psalms 28:9", text:"Save thy people, and bless thine inheritance: feed them also, and lift them up for ever." }
    ],
    takeaway:"When God answers, prayer turns to song: the LORD is strength and shield to all who trust Him.",
    quiz:[
      { q:"What does the psalmist fear if the LORD stays silent in Psalm 28?", choices:["That his enemies will laugh at him","That he will become like them that go down into the pit","That his prayers will multiply","That the harvest will fail"], a:1, why:"Verse 1 begs the rock not to be silent, lest he become like those going down to the pit." },
      { q:"What hypocrisy does Psalm 28 expose in the wicked?", choices:["They pray loudly but live in secret sin","They give gifts while plotting theft","They speak peace to their neighbours, but mischief is in their hearts","They fast publicly but feast at home"], a:2, why:"Verse 3: which speak peace to their neighbours, but mischief is in their hearts." },
      { q:"What gesture accompanies the psalmist's prayer in Psalm 28?", choices:["Covering his face with both hands","Beating his breast in sorrow","Stretching out his hands to the poor","Lifting up his hands toward God's holy oracle"], a:3, why:"Verse 2: Hear the voice of my supplications, when I cry unto thee, when I lift up my hands toward thy holy oracle." }
    ] },
  { n:29, summary:"A thunderstorm becomes a temple service. Heaven's court is called first: give unto the LORD, O ye mighty, give unto the LORD glory and strength; worship the LORD in the beauty of holiness. Then the storm rolls — the voice of the LORD is upon the waters: the God of glory thundereth. That voice is powerful and full of majesty: it breaketh the cedars of Lebanon, makes them skip like a calf, divideth the flames of fire, shaketh the wilderness of Kadesh, maketh the hinds to calve, and discovereth the forests, while in his temple doth every one speak of his glory. Above it all the LORD sitteth upon the flood, King for ever; the storm that shakes creation ends in blessing — the LORD will give strength unto his people, and bless his people with peace.",
    context:"A thunderstorm psalm in which the LORD's voice breaks cedars and shakes the wilderness, while His people receive strength and peace.",
    keyVerses:[
      { ref:"Psalms 29:2", text:"Give unto the LORD the glory due unto his name; worship the LORD in the beauty of holiness." },
      { ref:"Psalms 29:4", text:"The voice of the LORD is powerful; the voice of the LORD is full of majesty." },
      { ref:"Psalms 29:11", text:"The LORD will give strength unto his people; the LORD will bless his people with peace." }
    ],
    takeaway:"The voice that breaks cedars is the same voice that blesses His people with peace.",
    quiz:[
      { q:"Where is the voice of the LORD heard at the start of the storm in Psalm 29?", choices:["Upon the waters","In the temple courts","From Mount Sinai","In the streets of Zion"], a:0, why:"Verse 3: The voice of the LORD is upon the waters: the God of glory thundereth." },
      { q:"What trees does the voice of the LORD break, in Psalm 29?", choices:["Oaks of Bashan","The cedars of Lebanon","Palms of Jericho","Olives of the hill country"], a:1, why:"Verse 5: The voice of the LORD breaketh the cedars; yea, the LORD breaketh the cedars of Lebanon." },
      { q:"How does Psalm 29 end for the LORD's people?", choices:["With a command to keep silence","With a warning of judgment","With strength given and peace bestowed","With a call to march to battle"], a:2, why:"Verse 11: The LORD will give strength unto his people; the LORD will bless his people with peace." }
    ] },
  { n:30, summary:"Rescue from the brink makes this thanksgiving burn. The psalmist extols the LORD who lifted him up, healed him when he cried, brought up his soul from the grave, and kept him alive so he should not go down to the pit. The congregation is summoned to join: sing unto the LORD, O ye saints of his, for his anger endureth but a moment — weeping may endure for a night, but joy cometh in the morning. Then the testimony turns confessional: in prosperity I said, I shall never be moved; thou didst hide thy face, and I was troubled. His desperate argument follows — what profit is there in my blood? shall the dust praise thee? — and God's answer was transformation: thou hast turned for me my mourning into dancing, put off my sackcloth, and girded me with gladness, so that my glory may sing praise to thee and give thanks for ever.",
    context:"A thanksgiving psalm for rescue from near death, moving from prosperous self-confidence through God's hidden face to mourning turned dancing.",
    keyVerses:[
      { ref:"Psalms 30:2", text:"O LORD my God, I cried unto thee, and thou hast healed me." },
      { ref:"Psalms 30:5", text:"For his anger endureth but a moment; in his favour is life: weeping may endure for a night, but joy cometh in the morning." },
      { ref:"Psalms 30:11", text:"Thou hast turned for me my mourning into dancing: thou hast put off my sackcloth, and girded me with gladness;" }
    ],
    takeaway:"Weeping may endure for a night, but God turns mourning into dancing when we cry to Him.",
    quiz:[
      { q:"What reversal does Psalm 30 celebrate in verse 11?", choices:["Riches exchanged for poverty","War exchanged for peace","Mourning turned into dancing, sackcloth exchanged for gladness","Sorrow sown and joy reaped"], a:2, why:"Verse 11: Thou hast turned for me my mourning into dancing: thou hast put off my sackcloth, and girded me with gladness." },
      { q:"What did the psalmist say in his prosperity, according to Psalm 30?", choices:["The LORD is my shepherd","Who shall ascend the hill of the LORD?","I will extol thee among the nations","I shall never be moved"], a:3, why:"Verse 6: And in my prosperity I said, I shall never be moved." },
      { q:"How long may weeping endure, according to Psalm 30:5?", choices:["For a night","For a season","For seven years","Until old age"], a:0, why:"Verse 5: Weeping may endure for a night, but joy cometh in the morning." }
    ] },
  { n:31, summary:"A pressured psalmist trusts, prays, and praises by turns. He asks the LORD to be his strong rock, to pull him out of the net laid privily, and commits his spirit into God's hands — thou hast redeemed me, O LORD God of truth. Then comes the misery catalog: his eye is consumed with grief, his life spent with sighing; neighbours flee from him, he is forgotten as a dead man out of mind, like a broken vessel, slandered by many who devise to take away his life. Against it all stands faith — thou art my God; my times are in thy hand. He asks that lying lips be put to silence and celebrates the goodness laid up for them that fear him, hidden in the secret of God's presence from the pride of man. Though he said in haste, I am cut off, the LORD heard his cry — so he urges the saints: be of good courage, and he shall strengthen your heart.",
    context:"A trust-and-lament prayer of one netted by slander, committing his spirit and times into the LORD's hand and urging courage.",
    keyVerses:[
      { ref:"Psalms 31:5", text:"Into thine hand I commit my spirit: thou hast redeemed me, O LORD God of truth." },
      { ref:"Psalms 31:15", text:"My times are in thy hand: deliver me from the hand of mine enemies, and from them that persecute me." },
      { ref:"Psalms 31:24", text:"Be of good courage, and he shall strengthen your heart, all ye that hope in the LORD." }
    ],
    takeaway:"Commit your spirit and your times to God; He redeems, hides, and strengthens all who hope in Him.",
    quiz:[
      { q:"What famous entrustment does Psalm 31 make in verse 5?", choices:["My times are in thy hand","Thy word have I hid in my heart","Into thine hand I commit my spirit","My soul doth magnify the Lord"], a:2, why:"Verse 5: Into thine hand I commit my spirit: thou hast redeemed me, O LORD God of truth." },
      { q:"What broken object does the psalmist compare himself to in Psalm 31?", choices:["A shattered mirror","A snapped bow","A crushed reed","A broken vessel"], a:3, why:"Verse 12: I am forgotten as a dead man out of mind: I am like a broken vessel." },
      { q:"Where does Psalm 31 say God hides those who fear Him from the pride of man?", choices:["In the secret of His presence","Behind walls of stone","In the wilderness strongholds","In the temple's inner court"], a:0, why:"Verse 20: Thou shalt hide them in the secret of thy presence from the pride of man." }
    ] },
  { n:32, summary:"Two beatitudes open: blessed is he whose transgression is forgiven, whose sin is covered, and blessed is the man unto whom the LORD imputeth not iniquity. The psalmist then tells how he learned that blessing. While he kept silence, his bones waxed old through his roaring all the day long; God's hand was heavy on him day and night, and his moisture turned into the drought of summer. Release came through speech: I acknowledged my sin unto thee; I will confess my transgressions unto the LORD — and thou forgavest the iniquity of my sin. For this every one that is godly should pray in the time when God may be found; the forgiven one gains a hiding place, preservation from trouble, and songs of deliverance compassing him about. Instruction follows: be not as the horse or mule that must be held in with bit and bridle, but trust in the LORD, whose mercy compasses him about.",
    context:"A penitential psalm whose hidden sin wore the writer down until confession brought forgiveness, a hiding place, and songs of deliverance.",
    keyVerses:[
      { ref:"Psalms 32:1", text:"Blessed is he whose transgression is forgiven, whose sin is covered." },
      { ref:"Psalms 32:5", text:"I acknowledged my sin unto thee, and mine iniquity have I not hid. I said, I will confess my transgressions unto the LORD; and thou forgavest the iniquity of my sin. Selah." },
      { ref:"Psalms 32:7", text:"Thou art my hiding place; thou shalt preserve me from trouble; thou shalt compass me about with songs of deliverance. Selah." }
    ],
    takeaway:"Confession opens the hiding place: forgiven sinners are surrounded with songs of deliverance.",
    quiz:[
      { q:"What animals does Psalm 32 warn against becoming?", choices:["Serpents and doves","Lions and bears","Wolves and sheep","A horse or a mule, which have no understanding"], a:3, why:"Verse 9: Be ye not as the horse, or as the mule, which have no understanding: whose mouth must be held in with bit and bridle." },
      { q:"What happened while the psalmist kept silent about his sin, in Psalm 32?", choices:["His bones waxed old and God's hand was heavy upon him","He prospered and forgot his trouble","His enemies confessed first","He dreamed prophetic dreams"], a:0, why:"Verses 3-4: When I kept silence, my bones waxed old... for day and night thy hand was heavy upon me." },
      { q:"What does Psalm 32 promise the one who trusts in the LORD?", choices:["A life without trouble","Mercy shall compass him about","Riches in this life","Victory over every enemy"], a:1, why:"Verse 10: Many sorrows shall be to the wicked: but he that trusteth in the LORD, mercy shall compass him about." }
    ] },
  { n:33, summary:"A creation-and-providence praise. Singers are called to rejoice with harp, psaltery, and an instrument of ten strings, singing a new song, because the word of the LORD is right: by the word of the LORD were the heavens made, all the host of them by the breath of his mouth — he spake, and it was done. Nations may plot, but he bringeth the counsel of the heathen to nought, while the counsel of the LORD standeth for ever. Blessed is the nation whose God is the LORD. From heaven he beholdeth all the sons of men; no king is saved by the multitude of an host, no mighty man by much strength, for an horse is a vain thing for safety. The eye of the LORD rests on those who fear him and hope in his mercy, delivering their soul from death and keeping them alive in famine; so our soul waiteth for the LORD, our help and our shield.",
    context:"A praise psalm crediting God's word with creation and providence, and His eye with watching those who hope in His mercy.",
    keyVerses:[
      { ref:"Psalms 33:6", text:"By the word of the LORD were the heavens made; and all the host of them by the breath of his mouth." },
      { ref:"Psalms 33:12", text:"Blessed is the nation whose God is the LORD; and the people whom he hath chosen for his own inheritance." },
      { ref:"Psalms 33:16", text:"There is no king saved by the multitude of an host: a mighty man is not delivered by much strength." }
    ],
    takeaway:"God spoke the heavens into being; no army or strength can save those His eye does not watch in mercy.",
    quiz:[
      { q:"According to Psalm 33, how were the heavens made?", choices:["By the word of the LORD and the breath of his mouth","By the labor of angels","Through a battle with the deep","From fire and storm"], a:0, why:"Verse 6: By the word of the LORD were the heavens made; and all the host of them by the breath of his mouth." },
      { q:"What does Psalm 33 call a vain thing for safety?", choices:["Wealth laid up in storehouses","An horse, because of his great strength","Walls of a strong city","A multitude of counselors"], a:1, why:"Verse 17: An horse is a vain thing for safety: neither shall he deliver any by his great strength." },
      { q:"Whose eye is upon them that fear Him and hope in His mercy, according to Psalm 33?", choices:["The eye of the watchman","The eye of the king","The eye of the LORD","The eye of the priest"], a:2, why:"Verse 18: Behold, the eye of the LORD is upon them that fear him, upon them that hope in his mercy." }
    ] },
  { n:34, summary:"A personal thanksgiving turns into teaching. The singer blesses the LORD at all times, invites the humble to magnify him with him, and testifies: I sought the LORD, and he heard me, and delivered me from all my fears — this poor man cried, and the LORD heard him, and saved him out of all his troubles. Instruction follows for whoever desires life and loves many days: keep thy tongue from evil, and thy lips from speaking guile; depart from evil, and do good; seek peace, and pursue it. God's care is close and personal — the angel of the LORD encampeth round about them that fear him; his eyes are upon the righteous and his ears open to their cry; the LORD is nigh unto them that are of a broken heart, and saveth such as be of a contrite spirit. Many are the afflictions of the righteous, but the LORD delivereth him out of them all.",
    context:"A thanksgiving psalm in which the rescued singer invites the humble to taste and see the LORD's goodness and learn the fear of him.",
    keyVerses:[
      { ref:"Psalms 34:8", text:"O taste and see that the LORD is good: blessed is the man that trusteth in him." },
      { ref:"Psalms 34:18", text:"The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit." },
      { ref:"Psalms 34:19", text:"Many are the afflictions of the righteous: but the LORD delivereth him out of them all." }
    ],
    takeaway:"Taste and see: the LORD stays near the brokenhearted and delivers the righteous out of all afflictions.",
    quiz:[
      { q:"What invitation does Psalm 34 give about experiencing the LORD?", choices:["Listen and obey","Watch and wait","Climb and behold","O taste and see that the LORD is good"], a:3, why:"Verse 8: O taste and see that the LORD is good: blessed is the man that trusteth in him." },
      { q:"To whom is the LORD near, according to Psalm 34?", choices:["Them that are of a broken heart and of a contrite spirit","The wealthy and the wise","The strong and the swift","The priests at the altar"], a:0, why:"Verse 18: The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit." },
      { q:"What practical counsel does Psalm 34 give to one who desires life and loves many days?", choices:["Accumulate riches and honor","Keep thy tongue from evil, and thy lips from speaking guile","Retreat from society","Speak boldly against every evildoer"], a:1, why:"Verses 12-13 answer the question about a good life with keeping the tongue from evil and lips from guile." }
    ] },
  { n:35, summary:"A courtroom prayer: plead my cause, O LORD, with them that strive with me. The psalmist asks God to take hold of shield and buckler, draw out the spear, and say unto my soul, I am thy salvation; his persecutors should be made as chaff before the wind, their way dark and slippery, their hidden net catching themselves in the destruction they prepared. He contrasts their cruelty with his own loyalty — when they were sick he humbled his soul with fasting and mourned as for a friend or brother, but in his adversity they rejoiced, gnashing upon him with their teeth, while false witnesses laid to his charge things that he knew not. He asks how long wilt thou look on and pleads for God to awake to his judgment and shame the mockers who cry, Aha, aha. The psalm ends with joy: those who favour his righteous cause say continually, Let the LORD be magnified, which hath pleasure in the prosperity of his servant.",
    context:"An innocent man falsely charged prays for God to plead his cause against mockers who repay good with evil.",
    keyVerses:[
      { ref:"Psalms 35:1", text:"Plead my cause, O LORD, with them that strive with me: fight against them that fight against me." },
      { ref:"Psalms 35:13", text:"But as for me, when they were sick, my clothing was sackcloth: I humbled my soul with fasting; and my prayer returned into mine own bosom." },
      { ref:"Psalms 35:27", text:"Let them shout for joy, and be glad, that favour my righteous cause: yea, let them say continually, Let the LORD be magnified, which hath pleasure in the prosperity of his servant." }
    ],
    takeaway:"God pleads the cause of the wronged; those who repay good with evil answer to Him.",
    quiz:[
      { q:"In Psalm 35, how did the psalmist treat his enemies when they were sick?", choices:["He rejoiced at their suffering","He sent physicians to them","He humbled his soul with fasting and mourned as for a friend or brother","He ignored their illness"], a:2, why:"Verses 13-14: when they were sick, my clothing was sackcloth; I humbled my soul with fasting... as though he had been my friend or brother." },
      { q:"What does Psalm 35 ask God to say directly to the psalmist's soul?", choices:["Thy sins are forgiven","Fear not the future","Thou art my servant","Say unto my soul, I am thy salvation"], a:3, why:"Verse 3: Draw out also the spear... say unto my soul, I am thy salvation." },
      { q:"According to Psalm 35, what is the wronged person's final posture?", choices:["Speaking of God's righteousness and praise all the day long","Silent resignation to fate","Personal vengeance against the mockers","Withdrawal from the congregation"], a:0, why:"Verse 28: And my tongue shall speak of thy righteousness and of thy praise all the day long." }
    ] },
  { n:36, summary:"A meditation in two movements. First the wicked: the transgression of the wicked saith within my heart that there is no fear of God before his eyes; he flatters himself until his iniquity be found to be hateful, his words are iniquity and deceit, and he deviseth mischief upon his bed, setting himself in a way that is not good. Then the LORD: thy mercy is in the heavens, thy faithfulness reacheth unto the clouds, thy righteousness is like the great mountains, thy judgments are a great deep — thou preservest man and beast. The children of men put their trust under the shadow of thy wings, abundantly satisfied with the fatness of thy house and made to drink of the river of thy pleasures, for with thee is the fountain of life: in thy light shall we see light. The psalm closes with the workers of iniquity fallen, unable to rise.",
    context:"A wisdom psalm setting the self-flattering wicked against the LORD's vast mercy, the fountain of life, and light in which we see light.",
    keyVerses:[
      { ref:"Psalms 36:5", text:"Thy mercy, O LORD, is in the heavens; and thy faithfulness reacheth unto the clouds." },
      { ref:"Psalms 36:7", text:"How excellent is thy lovingkindness, O God! therefore the children of men put their trust under the shadow of thy wings." },
      { ref:"Psalms 36:9", text:"For with thee is the fountain of life: in thy light shall we see light." }
    ],
    takeaway:"The wicked flatter themselves; those who know God drink from the fountain of life and see light in His light.",
    quiz:[
      { q:"According to Psalm 36, what is missing before the wicked man's eyes?", choices:["Pity for the poor","The fear of God","Knowledge of the law","Hope of reward"], a:1, why:"Verse 1: The transgression of the wicked saith within my heart, that there is no fear of God before his eyes." },
      { q:"In Psalm 36, under what do the children of men put their trust?", choices:["The shelter of city walls","The covenant of the priests","The shadow of God's wings","The care of angels"], a:2, why:"Verse 7: Therefore the children of men put their trust under the shadow of thy wings." },
      { q:"How does Psalm 36 describe the LORD's righteousness and judgments?", choices:["As sandals of brass","As a lamp unto the feet","As pillars of the temple","Righteousness like the great mountains, judgments a great deep"], a:3, why:"Verse 6: Thy righteousness is like the great mountains; thy judgments are a great deep." }
    ] },
  { n:37, summary:"A wisdom psalm built on the refrain fret not. The evildoer flourishes only briefly — they shall soon be cut down like the grass, and wither as the green herb. Instead of fretting, the believer trusts in the LORD and does good, delights himself in the LORD, commits his way unto him, and rests, waiting patiently; the meek shall inherit the earth and delight themselves in the abundance of peace. The wicked borroweth and payeth not again, their sword enters into their own heart, they consume into smoke; a little that a righteous man hath is better than the riches of many wicked. I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread. God orders the steps of a good man. The wicked who spread like a green bay tree pass away, but mark the perfect man: the end of that man is peace, for the salvation of the righteous is of the LORD.",
    context:"A wisdom psalm counseling the faithful not to fret over prospering evildoers but to trust, delight, commit, and wait on the LORD.",
    keyVerses:[
      { ref:"Psalms 37:3", text:"Trust in the LORD, and do good; so shalt thou dwell in the land, and verily thou shalt be fed." },
      { ref:"Psalms 37:5", text:"Commit thy way unto the LORD; trust also in him; and he shall bring it to pass." },
      { ref:"Psalms 37:25", text:"I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread." }
    ],
    takeaway:"Fret not: trust, commit, and wait on the LORD, and the end of the upright is peace.",
    quiz:[
      { q:"What does Psalm 37 tell the reader NOT to do when evildoers prosper?", choices:["Challenge them publicly","Mourn and fast daily","Fret not thyself, neither be envious","Pray for their wealth"], a:2, why:"Verse 1: Fret not thyself because of evildoers, neither be thou envious against the workers of iniquity." },
      { q:"What does the psalmist report never seeing across a long life, in Psalm 37?", choices:["A king ruling in righteousness","Rain in the dry season","Peace between brothers","The righteous forsaken, nor his seed begging bread"], a:3, why:"Verse 25: I have been young, and now am old; yet have I not seen the righteous forsaken, nor his seed begging bread." },
      { q:"Whose steps does the LORD order, according to Psalm 37?", choices:["A good man's","A king's","A priest's","A judge's"], a:0, why:"Verse 23: The steps of a good man are ordered by the LORD: and he delighteth in his way." }
    ] },
  { n:38, summary:"A penitential psalm in which sickness, sin, and abandonment press together. The psalmist feels God's arrows sticking fast in him and his hand pressing sore; there is no soundness in his flesh, no rest in his bones because of his sin. His iniquities are gone over his head as a heavy burden too heavy to carry; his wounds are corrupt through his own foolishness, and he goes mourning all the day long, roaring over the disquietness of his heart while his strength fails and the light of his eyes goes out. Lovers and friends stand aloof from his sore, while enemies lay snares and imagine deceits all the day. His response is refusal to answer: as a deaf man he heard not, as a dumb man he opened not his mouth — for in thee, O LORD, do I hope. He declares his iniquity and is sorry for his sin, closing with the plea: make haste to help me, O Lord my salvation.",
    context:"A penitential plea from a sufferer who owns his sin under God's pressing hand, stays silent before slanderers, and begs swift help.",
    keyVerses:[
      { ref:"Psalms 38:4", text:"For mine iniquities are gone over mine head: as an heavy burden they are too heavy for me." },
      { ref:"Psalms 38:15", text:"For in thee, O LORD, do I hope: thou wilt hear, O Lord my God." },
      { ref:"Psalms 38:18", text:"For I will declare mine iniquity; I will be sorry for my sin." }
    ],
    takeaway:"Sin is a burden too heavy to carry; honesty before God opens the way to hope and help.",
    quiz:[
      { q:"What burden image does Psalm 38 use for sin?", choices:["Sin is a stone tied to the neck","Sin is a chain around the feet","Sin is a fire consuming the bones","Mine iniquities are gone over mine head: as an heavy burden they are too heavy for me"], a:3, why:"Verse 4: For mine iniquities are gone over mine head: as an heavy burden they are too heavy for me." },
      { q:"How does the psalmist respond to those who lay snares and speak deceit against him in Psalm 38?", choices:["He is as a deaf man who hears not and a dumb man who opens not his mouth","He gathers allies to answer them","He flees to the mountain","He curses them before the congregation"], a:0, why:"Verses 13-14: But I, as a deaf man, heard not; and I was as a dumb man that openeth not his mouth." },
      { q:"What does the psalmist admit in Psalm 38:18?", choices:["He has kept every statute","I will declare mine iniquity; I will be sorry for my sin","He fears the congregation's judgment","He has never doubted God"], a:1, why:"Verse 18: For I will declare mine iniquity; I will be sorry for my sin." }
    ] }
);
