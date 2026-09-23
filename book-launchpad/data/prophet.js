/* Book Launchpad — The Prophet, study guides (units 1-28). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "prophet"; });
if (!_bk) throw new Error("data/canon.js must load before prophet.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:1, t:"The Coming of the Ship",
    summary:"Almustafa, the chosen and the beloved, has waited twelve years in Orphalese for the ship that will bear him back to the isle of his birth. On the seventh day of Ielool he climbs the hill, sees his ship coming with the mist, and prays — then, descending, meets the sorrow of departure: not a garment he casts off but a skin he tears with his own hands. Yet he cannot tarry, for the sea that calls all things calls him, and to stay is to freeze and crystallize. The people follow him, the elders plead with him to stay, and the priests confess that love knows not its own depth until the hour of separation. Almitra the seeress asks him to speak his truth of what lies between birth and death; he answers that he can speak only of what is even now moving within their souls.",
    context:"The frame: Almustafa's ship arrives after twelve years in Orphalese, and Almitra the seeress asks him to speak his truth — launching all the discourses that follow.",
    keyVerses:[
      { ref:"The Coming of the Ship", text:"It is not a garment I cast off this day, but a skin that I tear with my own hands." },
      { ref:"The Coming of the Ship", text:"And ever has it been that love knows not its own depth until the hour of separation." },
      { ref:"The Coming of the Ship", text:"Now therefore disclose us to ourselves, and tell us all that has been shown you of that which is between birth and death." }
    ],
    takeaway:"Leaving a place that shaped you tears skin, not cloth — yet the sea's call must be obeyed, and truth passed on before the ship sails.",
    quiz:[
      { q:"How long has Almustafa waited in Orphalese for his ship?",
        choices:["Seven years","Ten years","Twelve years","A hundred years"], a:2,
        why:"The opening says he 'had waited twelve years in the city of Orphalese for his ship that was to return and bear him back to the isle of his birth.'" },
      { q:"In the unit's imagery, what does leaving Orphalese mean to Almustafa?",
        choices:["Casting off a garment he no longer needs","Tearing a skin from his body with his own hands","Closing a book he has finished reading","Waking from a dream he no longer trusts"], a:1,
        why:"He admits he cannot go 'in peace and without sorrow': 'It is not a garment I cast off this day, but a skin that I tear with my own hands.'" },
      { q:"A classmate transfers schools and calls the goodbye painless. Which idea from this unit answers her?",
        choices:["That true departure tears like skin, and honest grief belongs to parting","That painless partings prove the place never mattered","That she should never have enrolled there","That farewells are only ceremonial"], a:0,
        why:"Almustafa thinks 'not without a wound in the spirit shall I leave this city,' calling the departure a torn skin and a heart made sweet with hunger and thirst." }
    ] },
  { n:2, t:"On Love",
    summary:"Almitra asks of Love, and Almustafa answers with commands: when love beckons, follow him, though his ways are hard and steep and the sword hidden among his pinions may wound you. Love crowns and crucifies; he is for your growth and for your pruning. Like sheaves of corn he gathers you, threshes you to make you naked, sifts, grinds, and kneads you, then assigns you to his sacred fire to become sacred bread. If in fear you seek only love's peace and pleasure, better to pass out of love's threshing-floor into the seasonless world where you laugh, but not all of your laughter, and weep, but not all of your tears. For love gives naught but itself and takes naught but from itself; it possesses not nor would be possessed. Think not you can direct its course — if it finds you worthy, love directs your course.",
    context:"Almitra asks the book's first question, of Love; the answer turns on surrender — follow love though it wounds, for it prunes you to grow you.",
    keyVerses:[
      { ref:"On Love", text:"For even as love crowns you so shall he crucify you. Even as he is for your growth so is he for your pruning." },
      { ref:"On Love", text:"Love gives naught but itself and takes naught but from itself." },
      { ref:"On Love", text:"When you love you should not say, “God is in my heart,” but rather, “I am in the heart of God.”" }
    ],
    takeaway:"Follow love even when it wounds: love prunes you to grow you, and asks surrender, not possession.",
    quiz:[
      { q:"What does Almustafa say love does to you, in the harvest images?",
        choices:["Carries you like a boat across a calm sea","Wraps you like a cloak against the winter","Threshes, sifts, grinds, and kneads you like sheaves into bread","Leads you like a lantern through the night"], a:2,
        why:"Like sheaves of corn love gathers you unto himself, threshes you to make you naked, sifts you from your husks, grinds you to whiteness, and kneads you until you are pliant." },
      { q:"Why does the poem warn against seeking only love's peace and pleasure?",
        choices:["Such fear flees the threshing-floor that reveals your heart's secrets","Peace is sinful and pleasure a distraction from work","Love's peace belongs only to the married","Pleasure shortens life and dulls the senses"], a:0,
        why:"Those who fear love's threshing are told to pass 'into the seasonless world where you shall laugh, but not all of your laughter, and weep, but not all of your tears.'" },
      { q:"A person tries to plan and control where love will lead her life. The poem's counsel is that she:",
        choices:["Should steer love's course like a rudder","Cannot direct its course; if she is worthy, love directs her course","Must renounce love to keep her freedom","Should love only those who repay her exactly"], a:1,
        why:"'And think not you can direct the course of love, for love, if it finds you worthy, directs your course.'" }
    ] },
  { n:3, t:"On Marriage",
    summary:"To Almitra's question about marriage, Almustafa answers that husband and wife were born together and shall be together forevermore, even in the silent memory of God — yet he adds the reversal: let there be spaces in your togetherness, and let the winds of the heavens dance between you. Love one another, but make not a bond of love; let it rather be a moving sea between the shores of your souls. Fill each other's cup but drink not from one cup; give of your bread but eat not from the same loaf; sing and dance together, yet let each be alone, as the strings of a lute are alone though they quiver with the same music. Give your hearts, but not into each other's keeping, for only the hand of Life can contain your hearts. Stand together yet not too near together: the pillars of the temple stand apart, and the oak tree and the cypress grow not in each other's shadow.",
    context:"Almitra asks again, of Marriage; the answer balances permanence with spaces — together forevermore, yet not each other's keepers.",
    keyVerses:[
      { ref:"On Marriage", text:"But let there be spaces in your togetherness, And let the winds of the heavens dance between you." },
      { ref:"On Marriage", text:"Love one another, but make not a bond of love: Let it rather be a moving sea between the shores of your souls." },
      { ref:"On Marriage", text:"And stand together yet not too near together: For the pillars of the temple stand apart, And the oak tree and the cypress grow not in each other’s shadow." }
    ],
    takeaway:"Marriage is togetherness with spaces: fill each other's cup but drink not from one, and grow not in each other's shadow.",
    quiz:[
      { q:"What does Almustafa tell married couples to do with each other's cups?",
        choices:["Drink only from one shared cup","Fill each other's cup but drink not from one cup","Empty their cups before the temple","Keep their cups full and unshared"], a:1,
        why:"'Fill each other's cup but drink not from one cup. Give one another of your bread but eat not from the same loaf.'" },
      { q:"Why must spouses 'stand together yet not too near together'?",
        choices:["Because distance prevents quarrels over money","Because only the hand of Life can contain their hearts","Because the law requires separate households","Because nearness dulls the memory of God"], a:3,
        why:"'Give your hearts, but not into each other's keeping. For only the hand of Life can contain your hearts' — hence pillars standing apart and oaks out of each other's shadow." },
      { q:"A partner wants to share every account, hobby, and friend. The poem suggests:",
        choices:["Lute strings quiver with the same music, yet each string is alone","Total merging is the true goal of marriage","Couples should live in separate houses","Sharing everything only weakens the weaker partner"], a:0,
        why:"'Sing and dance together and be joyous, but let each one of you be alone, even as the strings of a lute are alone though they quiver with the same music.'" }
    ] },
  { n:4, t:"On Children",
    summary:"A woman holding a babe asks of Children, and Almustafa overturns ownership: your children are not your children but the sons and daughters of Life's longing for itself, coming through you but not from you. You may give them your love but not your thoughts, for they have their own; you may house their bodies but not their souls, which dwell in the house of tomorrow you cannot visit, not even in dreams. Strive to be like them, but seek not to make them like you, for life goes not backward nor tarries with yesterday. The closing image makes parents bows: the Archer sees the mark upon the path of the infinite and bends you with His might that His arrows may go swift and far — let your bending be for gladness, for He loves the arrow that flies and also the bow that is stable.",
    context:"A woman holding a babe asks of Children; the answer turns children from possessions into arrows sent forth from the bow of their parents.",
    keyVerses:[
      { ref:"On Children", text:"Your children are not your children. They are the sons and daughters of Life’s longing for itself. They come through you but not from you, And though they are with you yet they belong not to you." },
      { ref:"On Children", text:"You may house their bodies but not their souls, For their souls dwell in the house of tomorrow, which you cannot visit, not even in your dreams." },
      { ref:"On Children", text:"Let your bending in the Archer’s hand be for gladness; For even as he loves the arrow that flies, so He loves also the bow that is stable." }
    ],
    takeaway:"Children come through you, not from you: give love, not your thoughts, and bend gladly as the bow that sends arrows swift and far.",
    quiz:[
      { q:"Whom does the poem say children belong to?",
        choices:["To their parents, who made them","To the state, which educates them","To Life's own longing; they come through you but not from you","To the temple, which blesses them"], a:2,
        why:"'They are the sons and daughters of Life's longing for itself... And though they are with you yet they belong not to you.'" },
      { q:"What does the bow-and-arrow image ask of parents?",
        choices:["To aim their children at chosen careers","To accept bending gladly, as the stable bow serves the Archer's flight","To hold the arrow back until it is safe","To become arrows themselves and fly away"], a:1,
        why:"'Let your bending in the Archer's hand be for gladness; for even as he loves the arrow that flies, so He loves also the bow that is stable.'" },
      { q:"A father insists his son copy his own career exactly. On Children's answer is:",
        choices:["The son owes the father obedience","The father should first try the son's path","Only mothers may shape children's souls","Life goes not backward; the son has his own thoughts and tomorrow"], a:3,
        why:"'You may give them your love but not your thoughts, for they have their own thoughts... For life goes not backward nor tarries with yesterday.'" }
    ] },
  { n:5, t:"On Giving",
    summary:"You give but little when you give of your possessions; it is when you give of yourself that you truly give. Possessions are things guarded for fear of tomorrow's need — and fear of need is need itself, like dread of thirst when the well is full. Some give little of much for recognition, and their hidden desire makes their gifts unwholesome; some who have little give all, believers in life's bounty whose coffer is never empty. Highest are those who give without pain, joy, or mindful virtue, like the myrtle breathing fragrance into space. Give unasked, through understanding; all you have shall someday be given, so give now. Judge not the deserving — the trees and flocks give that they may live — and you receivers, assume no weight of gratitude, for it is life that gives unto life, while you who deem yourself a giver are but a witness.",
    context:"A rich man asks of Giving; the answer turns on giving of yourself rather than possessions, and on giving without judging the deserving.",
    keyVerses:[
      { ref:"On Giving", text:"You give but little when you give of your possessions. It is when you give of yourself that you truly give." },
      { ref:"On Giving", text:"And what is fear of need but need itself? Is not dread of thirst when your well is full, the thirst that is unquenchable?" },
      { ref:"On Giving", text:"For in truth it is life that gives unto life--while you, who deem yourself a giver, are but a witness." }
    ],
    takeaway:"Give of yourself, not your surplus; give unasked and unjudging, for it is life that gives unto life through you.",
    quiz:[
      { q:"Who, in the poem, gives 'as in yonder valley the myrtle breathes its fragrance into space'?",
        choices:["Those who give for recognition","Those who give with pain","Those who give seeking neither joy nor credit nor virtue","Those who give only when asked"], a:2,
        why:"They 'give and know not pain in giving, nor do they seek joy, nor give with mindfulness of virtue; they give as in yonder valley the myrtle breathes its fragrance into space.'" },
      { q:"Why does Almustafa call giving only possessions 'little'?",
        choices:["Because possessions are worthless in Orphalese","Because guarded things reveal fear of need, while self-giving is the real gift","Because the rich always give less than the poor","Because possessions must be saved for one's children"], a:1,
        why:"Possessions are 'things you keep and guard for fear you may need them tomorrow,' and 'what is fear of need but need itself?'" },
      { q:"A donor gives publicly and demands recipients prove their worthiness first. The poem's verdict:",
        choices:["Hidden desire makes such gifts unwholesome; trees and flocks give that they may live","Public giving is always the best giving","Only the deserving should ever receive","Gratitude should be demanded from every receiver"], a:0,
        why:"'I would give, but only to the deserving' is answered by the orchard trees and pasture flocks, which 'give that they may live, for to withhold is to perish.'" }
    ] },
  { n:6, t:"On Eating and Drinking",
    summary:"Would that you could live on the fragrance of the earth, like an air plant sustained by the light. But since you must kill to eat and rob the newly born of its mother's milk to quench your thirst, let it be an act of worship, and let your board stand an altar on which the pure and innocent of forest and plain are sacrificed for that which is purer and more innocent in man. When you kill a beast, say in your heart that by the same power you too are slain and shall be consumed, and that the law that delivered you into its hand shall deliver you into a mightier hand. When you crush an apple, bless its seeds; when you gather the grapes, say, I too am a vineyard whose fruit shall be gathered for the winepress; and in winter, when you draw the wine, let there be in your heart a song for each cup.",
    context:"An old innkeeper asks of Eating and Drinking; the answer turns killing-for-food into worship, humility before the slain, and gratitude for each harvest.",
    keyVerses:[
      { ref:"On Eating and Drinking", text:"But since you must kill to eat, and rob the newly born of its mother’s milk to quench your thirst, let it then be an act of worship, And let your board stand an altar on which the pure and the innocent of forest and plain are sacrificed for that which is purer and still more innocent in man." },
      { ref:"On Eating and Drinking", text:"“By the same power that slays you, I too am slain; and I too shall be consumed. For the law that delivered you into my hand shall deliver me into a mightier hand." },
      { ref:"On Eating and Drinking", text:"“I too am a vineyard, and my fruit shall be gathered for the winepress, And like new wine I shall be kept in eternal vessels.”" }
    ],
    takeaway:"Since you must kill to eat, make eating worship: you consume and will be consumed — one sap feeding the tree of heaven.",
    quiz:[
      { q:"When you kill a beast, what does Almustafa say to say in your heart?",
        choices:["That the beast was created for your table alone","That by the same power you too are slain and shall be consumed","That hunting is superior to sacrifice","That the beast's blood pollutes the eater"], a:1,
        why:"'By the same power that slays you, I too am slain; and I too shall be consumed... your blood and my blood is naught but the sap that feeds the tree of heaven.'" },
      { q:"Why should the dinner board become an altar?",
        choices:["To honor the god of the harvest only","Because altars make food taste better","Because priests must bless every meal in Orphalese","Because killing to eat is inevitable, so it must be raised to worship"], a:3,
        why:"'Since you must kill to eat... let it then be an act of worship, and let your board stand an altar.'" },
      { q:"A friend eats mechanically, never thinking where food comes from. This unit would tell her:",
        choices:["To fast until she deserves food","That food is fuel and nothing more","To bless each food — apple, grape, bread — as a shared life she will one day repay","To eat only fruit that has fallen untouched"], a:2,
        why:"Crushing an apple, say 'your seeds shall live in my body'; drawing the winter wine, let there be 'a song for each cup' remembering the autumn and the winepress." }
    ] },
  { n:7, t:"On Work",
    summary:"A ploughman asks of Work, and Almustafa answers that you work to keep pace with the earth and the soul of the earth; to be idle is to become a stranger to the seasons and step out of life's procession. Against the saying that labour is a curse, he insists that in working you fulfil a part of earth's furthest dream, and to love life through labour is to be intimate with life's inmost secret. Then the famous chain: life is darkness save when there is urge, urge blind save knowledge, knowledge vain save work, and all work empty save when there is love. To work with love is to weave cloth with threads drawn from your heart, as if your beloved were to wear it. The sculptor is not nobler than the ploughman — he alone is great who turns the wind's voice into song through loving — for work is love made visible, and bread baked with indifference feeds but half man's hunger.",
    context:"A ploughman asks of Work; the answer chains urge, knowledge, and work together and ends at love — all work empty save when there is love.",
    keyVerses:[
      { ref:"On Work", text:"You work that you may keep pace with the earth and the soul of the earth." },
      { ref:"On Work", text:"And all knowledge is vain save when there is work, And all work is empty save when there is love; And when you work with love you bind yourself to yourself, and to one another, and to God." },
      { ref:"On Work", text:"It is to weave the cloth with threads drawn from your heart, even as if your beloved were to wear that cloth." }
    ],
    takeaway:"Work is love made visible: labour without love is empty, so weave each task as if your beloved would wear the cloth.",
    quiz:[
      { q:"Finish the chain: all work is empty save when there is—",
        choices:["justice","love","leisure","reward"], a:1,
        why:"'And all work is empty save when there is love; and when you work with love you bind yourself to yourself, and to one another, and to God.'" },
      { q:"What does the marble-worker versus ploughman contrast claim?",
        choices:["Sculptors are nobler than ploughmen","Ploughmen are nobler than sculptors","Neither is greater; greatness is turning the wind's voice into song through loving work","Art is useless beside farming"], a:2,
        why:"The wind speaks not more sweetly to the giant oaks than to the least blade of grass, and 'he alone is great who turns the voice of the wind into a song made sweeter by his own loving.'" },
      { q:"A baker resents her early shifts and bakes carelessly anyway. The poem warns:",
        choices:["She should bake faster to finish sooner","Indifference bakes bitter bread that feeds but half man's hunger","Customers cannot taste the baker's mood","She should sell the bakery to a man"], a:1,
        why:"'If you bake bread with indifference, you bake a bitter bread that feeds but half man's hunger,' and a grudge distils poison into the wine." }
    ] },
  { n:8, t:"On Joy and Sorrow",
    summary:"Your joy is your sorrow unmasked, and the selfsame well from which your laughter rises was oftentimes filled with your tears. The deeper that sorrow carves into your being, the more joy you can contain: is not the cup that holds your wine the very cup that was burned in the potter's oven, and the lute that soothes your spirit the very wood that was hollowed with knives? When you are joyous, look deep into your heart and you shall find it is only that which has given you sorrow that is giving you joy; when you are sorrowful, you are weeping for that which has been your delight. Some say joy is greater, some sorrow — but they are inseparable: when one sits alone with you at your board, remember that the other is asleep upon your bed. You are suspended like scales between them, and only when you are empty are you at standstill.",
    context:"A woman asks of Joy and Sorrow; the answer turns on their inseparability — one well gives both laughter and tears.",
    keyVerses:[
      { ref:"On Joy and Sorrow", text:"Your joy is your sorrow unmasked. And the selfsame well from which your laughter rises was oftentimes filled with your tears." },
      { ref:"On Joy and Sorrow", text:"The deeper that sorrow carves into your being, the more joy you can contain." },
      { ref:"On Joy and Sorrow", text:"Together they come, and when one sits alone with you at your board, remember that the other is asleep upon your bed." }
    ],
    takeaway:"Joy and sorrow are inseparable: the deeper sorrow carves, the more joy you can contain — one well gives both.",
    quiz:[
      { q:"What image states sorrow's benefit?",
        choices:["The deeper sorrow carves into your being, the more joy you can contain","Sorrow makes sleep deeper","Sorrow wins the pity of neighbours","Sorrow lightens the purse"], a:0,
        why:"Sorrow carves the vessel of the self, as the potter's oven burns the cup that later holds wine." },
      { q:"The cup and lute images argue that:",
        choices:["Fine things come cheap in Orphalese","Potters and lute-makers suffer for art","The vessel that holds joy was shaped by fire and the instrument of comfort by knives — delight is carved from pain","Wine and music are escapes from grief"], a:2,
        why:"'Is not the cup that holds your wine the very cup that was burned in the potter's oven? And is not the lute that soothes your spirit, the very wood that was hollowed with knives?'" },
      { q:"A teammate says he must erase sadness before he can be happy. The poem answers:",
        choices:["He should pretend sorrow away","They are inseparable; when one sits at your board the other sleeps on your bed","He should seek sorrow to earn joy","Happiness requires solitude"], a:1,
        why:"'Some of you say, Joy is greater than sorrow... But I say unto you, they are inseparable.'" }
    ] },
  { n:9, t:"On Houses",
    summary:"Build of your imaginings a bower in the wilderness ere you build a house within the city walls, for the wanderer in you has home-comings too. Your house is your larger body: it grows in the sun, sleeps in the stillness of night, and dreams — does it not, dreaming, leave the city for grove or hilltop? Almustafa would gather your houses like a sower and scatter them in forest and meadow, but fear gathered your forefathers too near together, and city walls still part your hearths from your fields. Tell me, what do you guard with fastened doors — peace, remembrances, beauty? Or only comfort, and the lust for comfort, the stealthy thing that enters a guest, becomes a host, then a master, and murders the passion of the soul? Children of space shall not be trapped: your house shall be not an anchor but a mast, not tombs made by the dead for the living.",
    context:"A mason asks of Houses; the answer warns against comfort become master and builds the house as a mast, not an anchor.",
    keyVerses:[
      { ref:"On Houses", text:"Build of your imaginings a bower in the wilderness ere you build a house within the city walls." },
      { ref:"On Houses", text:"Verily the lust for comfort murders the passion of the soul, and then walks grinning in the funeral." },
      { ref:"On Houses", text:"Your house shall be not an anchor but a mast. It shall not be a glistening film that covers a wound, but an eyelid that guards the eye." }
    ],
    takeaway:"Beware comfort become master: build a house that is a mast, not an anchor, leaving the boundless in you room to wander.",
    quiz:[
      { q:"What two things does Almustafa say a house should be?",
        choices:["A mast, not an anchor","A tomb, not a tent","A fortress, not a garden","A master, not a servant"], a:0,
        why:"'Your house shall be not an anchor but a mast,' guarding like an eyelid, not covering like a glistening film over a wound." },
      { q:"How does 'the lust for comfort' corrupt, in the poem's sequence?",
        choices:["It arrives as a storm and wrecks the house","It enters a guest, becomes host, then master","It begins as worship and ends as doubt","It starts in childhood and fades with age"], a:1,
        why:"It is 'that stealthy thing that enters the house a guest, and then becomes a host, and then a master... though its hands are silken, its heart is of iron.'" },
      { q:"A family upgrades to a bigger, safer house yet feels life shrinking. The poem's diagnosis:",
        choices:["They need more furniture","The boundless in them cannot abide walls; comfort has become a tamer with a silken hand and an iron heart","Cities are inherently evil","They should never have left their old home"], a:1,
        why:"Comfort 'becomes a tamer, and with hook and scourge makes puppets of your larger desires'; the boundless in you 'abides in the mansion of the sky.'" }
    ] },
  { n:10, t:"On Clothes",
    summary:"Your clothes conceal much of your beauty, yet they hide not the unbeautiful; and though you seek in garments the freedom of privacy you may find in them a harness and a chain. Would that you could meet the sun and the wind with more of your skin and less of your raiment, for the breath of life is in the sunlight and the hand of life is in the wind. To those who say the north wind wove the clothes we wear, he grants it: shame was his loom, and the softening of the sinews was his thread. Modesty is for a shield against the eye of the unclean — but when the unclean shall be no more, what were modesty but a fetter and a fouling of the mind? Forget not that the earth delights to feel your bare feet and the winds long to play with your hair.",
    context:"The weaver asks of Clothes; the answer makes garments potentially a harness, modesty a mere shield, and bare feet the earth's delight.",
    keyVerses:[
      { ref:"On Clothes", text:"Your clothes conceal much of your beauty, yet they hide not the unbeautiful." },
      { ref:"On Clothes", text:"But shame was his loom, and the softening of the sinews was his thread." },
      { ref:"On Clothes", text:"And forget not that the earth delights to feel your bare feet and the winds long to play with your hair." }
    ],
    takeaway:"Garments sought as privacy can become harness and chain; modesty shields only against the unclean, and the earth delights in bare feet.",
    quiz:[
      { q:"Who wove the clothes we wear, in the saying Almustafa repeats?",
        choices:["The north wind","The weavers of Orphalese","The temple priestesses","The first mothers"], a:0,
        why:"'Some of you say, It is the north wind who has woven the clothes we wear. And I say, Ay, it was the north wind' — with shame for his loom." },
      { q:"When would modesty become 'a fetter and a fouling of the mind'?",
        choices:["When it is worn for warmth","When clothes are brightly dyed","When the unclean are no more, so the shield has nothing to guard against","When it is taught to children"], a:2,
        why:"'Modesty is for a shield against the eye of the unclean. And when the unclean shall be no more, what were modesty but a fetter?'" },
      { q:"A student wears elaborate outfits purely to hide from attention she dreads. Clothes' counsel:",
        choices:["Buy still finer clothes","Garments sought as privacy can become a harness and chain; meet the sun and wind with more of your skin","Avoid all mirrors","Never appear in public"], a:1,
        why:"'Though you seek in garments the freedom of privacy you may find in them a harness and a chain,' for the breath of life is in the sunlight and the hand of life in the wind." }
    ] },
  { n:11, t:"On Buying and Selling",
    summary:"To you the earth yields her fruit, and you shall not want if you but know how to fill your hands; it is in exchanging the gifts of the earth that you find abundance. But unless the exchange be in love and kindly justice, it leads some to greed and others to hunger. In the market place, invoke the master spirit of the earth to sanctify the scales that weigh value against value, and suffer not the barren-handed to sell their words for your labour — bid them come to the field or cast a net, for land and sea are bountiful to them as to you. Yet buy of the singers and flute players also: their gifts, though fashioned of dreams, are raiment and food for your soul. Before you leave the market place, see that no one has gone his way with empty hands, for the master spirit shall not sleep till the needs of the least of you are satisfied.",
    context:"A merchant asks of Buying and Selling; the answer turns on exchange in love and kindly justice, and on no one leaving with empty hands.",
    keyVerses:[
      { ref:"On Buying and Selling", text:"It is in exchanging the gifts of the earth that you shall find abundance and be satisfied." },
      { ref:"On Buying and Selling", text:"Yet unless the exchange be in love and kindly justice, it will but lead some to greed and others to hunger." },
      { ref:"On Buying and Selling", text:"And before you leave the market place, see that no one has gone his way with empty hands." }
    ],
    takeaway:"Exchange in love and kindly justice, buy the singer's dream-goods too, and let no one leave the market empty-handed.",
    quiz:[
      { q:"What should be said to the barren-handed who sell words for others' labour?",
        choices:["Come with us to the field or go cast your net with our brothers","Buy bread at half price","Teach the merchants their letters","Leave the city at once"], a:0,
        why:"'Come with us to the field, or go with our brothers to the sea and cast your net; for the land and the sea shall be bountiful to you even as to us.'" },
      { q:"Why buy from singers and flute players?",
        choices:["To keep them from begging","Because their gifts, though fashioned of dreams, are raiment and food for the soul","Because they pay the market tax","Because music is cheaper than bread"], a:1,
        why:"'They too are gatherers of fruit and frankincense, and that which they bring, though fashioned of dreams, is raiment and food for your soul.'" },
      { q:"A trader corners a grain market during a shortage. By this poem's standard he has:",
        choices:["Served the market wisely","Exchanged without love and kindly justice, feeding greed and hunger","Acted as the master spirit intended","Earned his abundance honestly"], a:1,
        why:"'Unless the exchange be in love and kindly justice, it will but lead some to greed and others to hunger.'" }
    ] },
  { n:12, t:"On Crime and Punishment",
    summary:"Wrong is done when your spirit goes wandering upon the wind, alone and unguarded. Your god-self, like ocean, ether, and sun, remains undefiled; but much in you is still man, and much a shapeless pigmy walking asleep in the mist — and it is the man in you who knows crime and punishment. Do not cast the wrongdoer out as a stranger: the wicked cannot fall lower than the lowest in you also, and as a single leaf turns yellow with the silent knowledge of the whole tree, the wrong-doer cannot do wrong without the hidden will of you all. The murdered is not unaccountable, the robbed not blameless; just and unjust stand together like black and white thread in one cloth. When the black thread breaks, examine the whole cloth and the loom. Remorse is already justice at work — you cannot lay it on the innocent or lift it from the guilty — and the corner-stone is not higher than the lowest foundation stone.",
    context:"One of the city's judges asks of Crime and Punishment; the answer dissolves the stranger-criminal, weaving guilty and innocent into one cloth.",
    keyVerses:[
      { ref:"On Crime and Punishment", text:"And as a single leaf turns not yellow but with the silent knowledge of the whole tree, So the wrong-doer cannot do wrong without the hidden will of you all." },
      { ref:"On Crime and Punishment", text:"You cannot separate the just from the unjust and the good from the wicked; For they stand together before the face of the sun even as the black thread and the white are woven together." },
      { ref:"On Crime and Punishment", text:"Is not remorse the justice which is administered by that very law which you would fain serve?" }
    ],
    takeaway:"No one falls lower than the lowest in all of us: the leaf yellows with the whole tree, and remorse itself is justice.",
    quiz:[
      { q:"Whom does Almustafa say knows crime and the punishment of crime?",
        choices:["The god-self in you","The shapeless pigmy in the mist","The man in you","The judges of the city"], a:2,
        why:"'For it is he and not your god-self nor the pigmy in the mist, that knows crime and the punishment of crime.'" },
      { q:"What does the black-and-white thread image claim?",
        choices:["Evil stains good forever","The just and unjust are woven together and cannot be separated","Judges should wear black and white","Every criminal deserves weaving"], a:1,
        why:"'You cannot separate the just from the unjust... even as the black thread and the white are woven together. And when the black thread breaks, the weaver shall look into the whole cloth.'" },
      { q:"A city punishes a thief harshly and considers the matter finished. Crime and Punishment would add:",
        choices:["Punishment should be doubled","Only god-selves may judge","Let him weigh the roots: the community's hidden will is also in the wrong, and remorse may already be justice","Thieves cannot be reformed"], a:2,
        why:"The wrong-doer 'cannot do wrong without the hidden will of you all,' and 'remorse is the justice which is administered by that very law which you would fain serve.'" }
    ] },
  { n:13, t:"On Laws",
    summary:"You delight in laying down laws, yet you delight more in breaking them, like children playing by the ocean who build sand-towers with constancy and destroy them with laughter — and the ocean laughs always with the innocent. But some treat life as a rock and the law as a chisel to carve it in their own likeness: the cripple who hates dancers, the ox who loves his yoke and deems the deer vagrant, the serpent that cannot shed its skin and calls all others naked, the over-fed wedding guest who cries that all feasts are violation. These stand in the sunlight with their backs to the sun; they see only their shadows, and their shadows are their laws. But you who walk facing the sun, what traced image can hold you? You can muffle the drum and loosen the lyre, but who shall command the skylark not to sing?",
    context:"A lawyer asks of Laws; the answer mocks shadow-tracing lawgivers and frees those who face the sun, like the skylark that cannot be commanded.",
    keyVerses:[
      { ref:"On Laws", text:"You delight in laying down laws, Yet you delight more in breaking them." },
      { ref:"On Laws", text:"They see only their shadows, and their shadows are their laws." },
      { ref:"On Laws", text:"People of Orphalese, you can muffle the drum, and you can loosen the strings of the lyre, but who shall command the skylark not to sing?" }
    ],
    takeaway:"Law carved from shadow chisels life into its maker's likeness; those who face the sun cannot be held — who shall command the skylark?",
    quiz:[
      { q:"The sand-tower children image says that people:",
        choices:["Delight in laying down laws yet delight more in breaking them","Never play near the ocean","Build only to shelter others","Fear the ocean's laughter"], a:0,
        why:"'Like children playing by the ocean who build sand-towers with constancy and then destroy them with laughter... the ocean laughs always with the innocent.'" },
      { q:"What does it mean to stand 'with their backs to the sun'?",
        choices:["To work only at night","To see only your own shadows and mistake them for laws","To worship the sun wrongly","To be blinded by truth"], a:1,
        why:"'They see only their shadows, and their shadows are their laws. And what is the sun to them but a caster of shadows?'" },
      { q:"A committee writes endless rules to control members who already behave well. The poem would say:",
        choices:["More rules always mean more order","Rules should replace trust entirely","You can muffle the drum but not command the skylark — free spirits obey no traced shadow","Only written laws are real"], a:2,
        why:"'What man's law shall bind you if you break your yoke but upon no man's prison door?... who shall command the skylark not to sing?'" }
    ] },
  { n:14, t:"On Freedom",
    summary:"At the city gate and by your fireside Almustafa has seen you prostrate yourselves and worship your own freedom, as slaves humble themselves before a tyrant and praise him though he slays them; the freest among you wear their freedom as a yoke and a handcuff. You shall be free indeed not when your days are without care or your nights without want and grief, but when these girdle your life and you rise above them naked and unbound. That which you call freedom is the strongest of the chains, though its links glitter in the sun. The unjust law you would abolish was written with your own hand upon your own forehead; before dethroning a despot, see that the throne he has within you is destroyed; the fear you would dispel sits in your heart, not in the hand of the feared. And your freedom, losing its fetters, becomes itself the fetter of a greater freedom.",
    context:"An orator asks of Freedom; the answer turns freedom itself into the strongest chain, broken only by dethroning the despot within.",
    keyVerses:[
      { ref:"On Freedom", text:"In truth that which you call freedom is the strongest of these chains, though its links glitter in the sun and dazzle your eyes." },
      { ref:"On Freedom", text:"And if it is a despot you would dethrone, see first that his throne erected within you is destroyed." },
      { ref:"On Freedom", text:"And thus your freedom when it loses its fetters becomes itself the fetter of a greater freedom." }
    ],
    takeaway:"The chains that bind are forged within: dethrone the despot in your own heart, and remember freedom outgrown can fetter a greater freedom.",
    quiz:[
      { q:"Where is the seat of a fear you would dispel?",
        choices:["In the hand of the feared","In your own heart","In the temple shadows","In the city laws"], a:1,
        why:"'If it is a fear you would dispel, the seat of that fear is in your heart and not in the hand of the feared.'" },
      { q:"Why must the despot's throne be destroyed 'within you' first?",
        choices:["Because tyrants rule only through the tyranny kept in their subjects' own freedom and pride","Because palaces are sacred","Because armies cannot be trusted","Because thrones are only symbols"], a:0,
        why:"'How can a tyrant rule the free and the proud, but for a tyranny in their own freedom and a shame in their own pride?'" },
      { q:"A country overthrows its dictator but keeps his habits of obedience. By this poem:",
        choices:["The revolution is complete","Freedom's glittering links are still chains until the inner throne falls too","Only new laws matter now","The people were never truly enslaved"], a:1,
        why:"'That which you call freedom is the strongest of these chains, though its links glitter in the sun' — the law was written on your own forehead." }
    ] },
  { n:15, t:"On Reason and Passion",
    summary:"Your soul is oftentimes a battlefield upon which your reason and your judgment wage war against your passion and your appetite. Almustafa would be peacemaker and turn the discord of your elements into oneness and melody, but how shall he, unless you yourselves be peacemakers, nay lovers of all your elements? Reason and passion are the rudder and the sails of your seafaring soul: if either be broken you can but toss and drift or lie becalmed. For reason, ruling alone, is a force confining; passion, unattended, is a flame that burns to its own destruction. Exalt your reason to the height of passion that it may sing, and direct your passion with reason that it may rise like the phoenix above its own ashes. Honour judgment and appetite as two loved guests; say in the shade, God rests in reason, and in the storm, God moves in passion.",
    context:"Almitra the priestess asks of Reason and Passion; the answer makes them rudder and sails, needing each other to steer and to sing.",
    keyVerses:[
      { ref:"On Reason and Passion", text:"Your reason and your passion are the rudder and the sails of your seafaring soul." },
      { ref:"On Reason and Passion", text:"For reason, ruling alone, is a force confining; and passion, unattended, is a flame that burns to its own destruction." },
      { ref:"On Reason and Passion", text:"And since you are a breath in God’s sphere, and a leaf in God’s forest, you too should rest in reason and move in passion." }
    ],
    takeaway:"Reason and passion are rudder and sails: neither steers alone, so rest in reason and move in passion.",
    quiz:[
      { q:"What are reason and passion compared to?",
        choices:["The rudder and sails of a seafaring soul","The hammer and anvil of a forge","The root and branch of a tree","The lock and key of a temple"], a:0,
        why:"'Your reason and your passion are the rudder and the sails of your seafaring soul. If either your sails or your rudder be broken, you can but toss and drift.'" },
      { q:"What becomes of passion 'unattended' by reason?",
        choices:["It becomes wisdom","It sleeps quietly","It is a flame that burns to its own destruction","It turns into reason over time"], a:2,
        why:"'Reason, ruling alone, is a force confining; and passion, unattended, is a flame that burns to its own destruction.'" },
      { q:"A friend plans her life by cold spreadsheets and dismisses every feeling. Reason and Passion replies:",
        choices:["Feelings are noise to delete","Reason ruling alone is a force confining; honour both guests and let passion rise like the phoenix","Spreadsheets are always wrong","Only the young should feel passion"], a:1,
        why:"'He who is more mindful of one loses the love and the faith of both' — and directed passion lives 'through its own daily resurrection.'" }
    ] },
  { n:16, t:"On Pain",
    summary:"Your pain is the breaking of the shell that encloses your understanding: even as the stone of the fruit must break that its heart may stand in the sun, so must you know pain. Could you keep your heart in wonder at the daily miracles of your life, your pain would seem no less wondrous than your joy; you would accept the seasons of your heart as you have always accepted the seasons that pass over your fields, and watch with serenity through the winters of your grief. Much of your pain is self-chosen: it is the bitter potion by which the physician within you heals your sick self. Trust the physician and drink his remedy in silence and tranquillity — his hand, though heavy and hard, is guided by the tender hand of the Unseen, and the cup he brings, though it burn your lips, is fashioned of clay the Potter moistened with His own sacred tears.",
    context:"A woman asks of Pain; the answer makes pain the shell-breaking of understanding and the self-chosen potion of the inner physician.",
    keyVerses:[
      { ref:"On Pain", text:"Your pain is the breaking of the shell that encloses your understanding." },
      { ref:"On Pain", text:"Even as the stone of the fruit must break, that its heart may stand in the sun, so must you know pain." },
      { ref:"On Pain", text:"Much of your pain is self-chosen. It is the bitter potion by which the physician within you heals your sick self." }
    ],
    takeaway:"Pain breaks the shell around your understanding; trust the inner physician and drink the bitter remedy that heals your sick self.",
    quiz:[
      { q:"What is pain, in the poem's first image?",
        choices:["A punishment sent by the gods","The breaking of the shell that encloses your understanding","An accident of the seasons","A debt owed to the earth"], a:1,
        why:"'Your pain is the breaking of the shell that encloses your understanding,' as the fruit's stone must break for its heart to stand in the sun." },
      { q:"Who is 'the physician within you'?",
        choices:["A temple doctor who visits the sick","The memory of your mother","The seeress Almitra","The inner healer whose bitter, self-chosen potion is pain"], a:3,
        why:"'Much of your pain is self-chosen. It is the bitter potion by which the physician within you heals your sick self.'" },
      { q:"A runner keeps training through soreness that finally corrects her weak stride. Pain's frame fits because:",
        choices:["All pain should be ignored","Only athletes know pain","Pain can be the breaking shell that lets understanding stand in the sun, a remedy the inner physician brews","Soreness proves talent"], a:2,
        why:"'Even as the stone of the fruit must break, that its heart may stand in the sun, so must you know pain' — trust the physician and drink his remedy." }
    ] },
  { n:17, t:"On Self-Knowledge",
    summary:"Your hearts know in silence the secrets of the days and the nights, but your ears thirst for the sound of your heart's knowledge: you would know in words what you have always known in thought, and touch with your fingers the naked body of your dreams. And it is well — the hidden well-spring of your soul must needs rise and run murmuring to the sea, its treasure revealed to your eyes. But let there be no scales to weigh your unknown treasure, and seek not the depths with staff or sounding line, for self is a sea boundless and measureless. Say not, I have found the truth, but rather, I have found a truth; say not, I have found the path of the soul, but, I have met the soul walking upon my path — for the soul walks upon all paths and unfolds itself, like a lotus of countless petals.",
    context:"A man asks of Self-Knowledge; the answer turns on self as a measureless sea and truth claimed humbly, 'a truth' never 'the truth'.",
    keyVerses:[
      { ref:"On Self-Knowledge", text:"For self is a sea boundless and measureless." },
      { ref:"On Self-Knowledge", text:"Say not, “I have found the truth,” but rather, “I have found a truth.”" },
      { ref:"On Self-Knowledge", text:"The soul walks not upon a line, neither does it grow like a reed. The soul unfolds itself, like a lotus of countless petals." }
    ],
    takeaway:"Self is a measureless sea: claim a truth, never the truth, and let the soul unfold like a lotus of countless petals.",
    quiz:[
      { q:"What is self compared to?",
        choices:["A walled garden","A sea boundless and measureless","A mountain of stone","A sealed letter"], a:1,
        why:"'Let there be no scales to weigh your unknown treasure... for self is a sea boundless and measureless.'" },
      { q:"Why say 'I have found a truth' rather than 'the truth'?",
        choices:["Because truth is forbidden","Because one truth cancels another","Because the soul walks all paths and unfolds like a lotus of countless petals — no one possesses it all","Because words cannot be spoken aloud"], a:2,
        why:"'The soul walks upon all paths. The soul walks not upon a line... The soul unfolds itself, like a lotus of countless petals.'" },
      { q:"A student finishes one psychology course and announces she finally understands people. Self-Knowledge warns:",
        choices:["Never study again","Seek not the depths of your knowledge with staff or sounding line — self is a measureless sea","Only teachers may claim knowledge","Understanding people is impossible"], a:1,
        why:"'But let there be no scales to weigh your unknown treasure; and seek not the depths of your knowledge with staff or sounding line.'" }
    ] },
  { n:18, t:"On Teaching",
    summary:"No man can reveal to you aught but that which already lies half asleep in the dawning of your knowledge. The teacher who walks in the shadow of the temple gives not of his wisdom but of his faith and his lovingness; if he is indeed wise he does not bid you enter the house of his wisdom, but leads you to the threshold of your own mind. The astronomer may speak of his understanding of space, but he cannot give you his understanding; the musician cannot give you the ear that arrests the rhythm; he who is versed in numbers cannot conduct you to the regions of weight and measure. For the vision of one man lends not its wings to another man — and as each of you stands alone in God's knowledge, so must each be alone in his knowledge of God and his understanding of the earth.",
    context:"A teacher asks of Teaching; the answer denies that wisdom can be transferred — the wise teacher leads you to your own mind's threshold.",
    keyVerses:[
      { ref:"On Teaching", text:"No man can reveal to you aught but that which already lies half asleep in the dawning of your knowledge." },
      { ref:"On Teaching", text:"If he is indeed wise he does not bid you enter the house of his wisdom, but rather leads you to the threshold of your own mind." },
      { ref:"On Teaching", text:"For the vision of one man lends not its wings to another man." }
    ],
    takeaway:"A wise teacher gives faith and lovingness, leading you to the threshold of your own mind — no vision lends its wings to another.",
    quiz:[
      { q:"According to the poem, what does a teacher standing in the temple's shadow actually give?",
        choices:["His wisdom, transferred whole","His faith and his lovingness","Exam answers","His wealth"], a:1,
        why:"'The teacher who walks in the shadow of the temple, among his followers, gives not of his wisdom but rather of his faith and his lovingness.'" },
      { q:"What can the musician NOT give you?",
        choices:["Sheet music","The courage to sing","The ear which arrests the rhythm nor the voice that echoes it","The rhythm which is in all space"], a:2,
        why:"'The musician may sing to you of the rhythm which is in all space, but he cannot give you the ear which arrests the rhythm nor the voice that echoes it.'" },
      { q:"A tutor hands a student finished essays to copy instead of coaching him to write. The poem calls this:",
        choices:["Generous sharing","An attempt to lend wings the vision of one man cannot lend — the student must cross his own mind's threshold","Efficient teaching","The duty of every tutor"], a:1,
        why:"'For the vision of one man lends not its wings to another man'; the wise teacher leads you to the threshold of your own mind." }
    ] },
  { n:19, t:"On Friendship",
    summary:"Your friend is your needs answered: the field you sow with love and reap with thanksgiving, your board and your fireside, for you come to him with your hunger and seek him for peace. When he speaks his mind you fear not the nay in your own mind nor withhold the ay; when he is silent your heart ceases not to listen to his heart, for without words all thoughts and desires are born and shared with joy unacclaimed. When you part you grieve not, for what you love most in him may be clearer in his absence, as the mountain to the climber is clearer from the plain. Let there be no purpose in friendship save the deepening of the spirit — love that seeks anything else is a net cast forth, and only the unprofitable is caught. Give your best; seek him always with hours to live, not hours to kill, for it is his to fill your need, but not your emptiness.",
    context:"A youth asks of Friendship; the answer makes a friend your needs answered, to be sought with hours to live, not hours to kill.",
    keyVerses:[
      { ref:"On Friendship", text:"Your friend is your needs answered. He is your field which you sow with love and reap with thanksgiving." },
      { ref:"On Friendship", text:"And let there be no purpose in friendship save the deepening of the spirit." },
      { ref:"On Friendship", text:"For it is his to fill your need, but not your emptiness." }
    ],
    takeaway:"Friendship deepens the spirit without agenda: seek friends with hours to live, not hours to kill — they fill your need, not your emptiness.",
    quiz:[
      { q:"With what hours should you seek your friend?",
        choices:["Hours to kill","Hours to live","Hours to bargain","Hours of silence"], a:1,
        why:"'What is your friend that you should seek him with hours to kill? Seek him always with hours to live.'" },
      { q:"What does 'a net cast forth' catch, when love seeks something besides its own mystery?",
        choices:["Fish for the market","New friends","Only the unprofitable","Old memories"], a:2,
        why:"'Love that seeks aught but the disclosure of its own mystery is not love but a net cast forth: and only the unprofitable is caught.'" },
      { q:"Someone scrolls his phone beside a friend, killing time together. Friendship's test asks:",
        choices:["Is that not what friends are for","Should he not seek his friend with hours to live, since a friend fills need but not emptiness","Do phones deepen friendship","Does friendship need grand purposes"], a:1,
        why:"'For what is your friend that you should seek him with hours to kill? Seek him always with hours to live.'" }
    ] },
  { n:20, t:"On Talking",
    summary:"You talk when you cease to be at peace with your thoughts; when you can no longer dwell in the solitude of your heart you live in your lips, and sound becomes a diversion and a pastime. In much of your talking, thinking is half murdered, for thought is a bird of space that in a cage of words may unfold its wings but cannot fly. Some seek the talkative through fear of being alone, whose silence would reveal their naked selves; some talk and without knowledge reveal a truth they themselves do not understand; and some hold the truth within and tell it not in words — in their bosom the spirit dwells in rhythmic silence. When you meet your friend, let the spirit in you move your lips, and his soul will keep the truth of your heart as the taste of wine is remembered when the colour is forgotten and the vessel is no more.",
    context:"A scholar asks of Talking; the answer turns on speech as escaped solitude and thought as a bird that cannot fly in a cage of words.",
    keyVerses:[
      { ref:"On Talking", text:"For thought is a bird of space, that in a cage of words may indeed unfold its wings but cannot fly." },
      { ref:"On Talking", text:"In the bosom of such as these the spirit dwells in rhythmic silence." },
      { ref:"On Talking", text:"For his soul will keep the truth of your heart as the taste of the wine is remembered When the colour is forgotten and the vessel is no more." }
    ],
    takeaway:"Much talking half-murders thought; let the voice within your voice speak, and trust silence that keeps truth better than words.",
    quiz:[
      { q:"When do you talk, by the poem's opening claim?",
        choices:["When you cease to be at peace with your thoughts","When you are happiest","When the spirit commands it","When teaching others"], a:0,
        why:"'You talk when you cease to be at peace with your thoughts; and when you can no longer dwell in the solitude of your heart you live in your lips.'" },
      { q:"Why can thought not fly in a cage of words?",
        choices:["Words are too heavy","Wings may unfold but flight is killed — much talking half-murders thinking","Birds fear people","Cages are too small physically"], a:1,
        why:"'In much of your talking, thinking is half murdered. For thought is a bird of space, that in a cage of words may indeed unfold its wings but cannot fly.'" },
      { q:"A meeting runs on constant chatter and half-formed remarks. Talking's counsel would be:",
        choices:["Talk more to clarify","Ban all meetings","Write everything down instead","Value the spirit's rhythmic silence, and speak so the voice within your voice is heard"], a:3,
        why:"'There are those who have the truth within them, but they tell it not in words. In the bosom of such as these the spirit dwells in rhythmic silence.'" }
    ] },
  { n:21, t:"On Time",
    summary:"You would measure time the measureless, adjusting your conduct and directing your spirit by hours and seasons, making of time a stream upon whose bank you sit and watch its flowing. Yet the timeless in you is aware of life's timelessness, and knows that yesterday is but today's memory and tomorrow is today's dream — and that which sings and contemplates in you dwells still within the first moment that scattered the stars into space. Who does not feel his power to love is boundless, yet encompassed within the centre of his being? Is not time even as love is, undivided and paceless? But if in your thought you must measure time into seasons, let each season encircle all the other seasons, and let today embrace the past with remembrance and the future with longing.",
    context:"An astronomer asks of Time; the answer unmeasures it — yesterday today's memory, tomorrow today's dream, time undivided and paceless as love.",
    keyVerses:[
      { ref:"On Time", text:"And knows that yesterday is but today’s memory and tomorrow is today’s dream." },
      { ref:"On Time", text:"And is not time even as love is, undivided and paceless?" },
      { ref:"On Time", text:"And let today embrace the past with remembrance and the future with longing." }
    ],
    takeaway:"Time is undivided and paceless as love: yesterday is today's memory, tomorrow its dream — let today embrace the past and the future.",
    quiz:[
      { q:"What are yesterday and tomorrow, in the poem?",
        choices:["Today's memory and today's dream","Lost and found","Enemies of the present","Two sides of the moon"], a:0,
        why:"'Yesterday is but today's memory and tomorrow is today's dream' — the timeless in you knows life's timelessness." },
      { q:"What does the comparison of time to boundless love argue?",
        choices:["Love wastes time","Time, like love, is undivided and paceless though we chop it into seasons","Time heals all wounds","Love lasts longer than time"], a:1,
        why:"Love feels boundless yet is 'encompassed within the centre of his being' — 'and is not time even as love is, undivided and paceless?'" },
      { q:"Someone lives only by scheduled appointments, treating each hour as a sealed box. The astronomer's unit would counsel:",
        choices:["Buy a better calendar","Abandon schedules entirely","If you must divide time, let each season encircle all the others","Time is money"], a:2,
        why:"'If in your thought you must measure time into seasons, let each season encircle all the other seasons.'" }
    ] },
  { n:22, t:"On Good and Evil",
    summary:"Of the good in you I can speak, but not of the evil — for what is evil but good tortured by its own hunger and thirst, seeking food in dark caves and drinking of dead waters? You are good when one with yourself; yet when divided you are not evil, merely a divided house, a rudderless ship that may wander yet not sink. You are good when you strive to give of yourself, yet not evil when you seek gain — the root that clings to the earth and sucks at her breast; the fruit cannot tell the root to be like it, for giving is a need to the fruit as receiving to the root. You are good when fully awake in speech, not evil when your tongue staggers; stumbling speech may strengthen a weak tongue. You are good in countless ways, and not evil when not good — only loitering and sluggard. Your longing for your giant self is your goodness, torrent in some, flat stream in others.",
    context:"One of the city elders asks of Good and Evil; the answer refuses evil as a separate power — only good tortured by its own hunger.",
    keyVerses:[
      { ref:"On Good and Evil", text:"For what is evil but good tortured by its own hunger and thirst?" },
      { ref:"On Good and Evil", text:"For to the fruit giving is a need, as receiving is a need to the root." },
      { ref:"On Good and Evil", text:"In your longing for your giant self lies your goodness: and that longing is in all of you." }
    ],
    takeaway:"Evil is only good tortured by its own hunger; failing is loitering, not wickedness, and your longing for your giant self is your goodness.",
    quiz:[
      { q:"How does the poem define evil?",
        choices:["A power equal to good","Good tortured by its own hunger and thirst","An inborn curse","The work of strangers"], a:1,
        why:"'Of the good in you I can speak, but not of the evil. For what is evil but good tortured by its own hunger and thirst?'" },
      { q:"Why may the fruit not tell the root to be like it?",
        choices:["The root is older","Fruit cannot speak","Giving is a need to the fruit as receiving is a need to the root — both serve life","Roots are stronger than fruit"], a:2,
        why:"'Surely the fruit cannot say to the root, Be like me, ripe and full and ever giving of your abundance.' Each has its own need." },
      { q:"A man calls himself evil because he wasted a year idling instead of striving. Good and Evil answers:",
        choices:["He is beyond repair","Only priests can judge him","He is not evil but loitering and sluggard; his longing for his giant self is still his goodness","Wasted years are sins to atone for"], a:2,
        why:"'You are good in countless ways, and you are not evil when you are not good, you are only loitering and sluggard.' The longing for the giant self 'is in all of you.'" }
    ] },
  { n:23, t:"On Prayer",
    summary:"You pray in your distress and in your need; would that you might pray also in the fullness of your joy and days of abundance. For what is prayer but the expansion of yourself into the living ether? If it comforts you to pour your darkness into space, it is also for your delight to pour forth the dawning of your heart; if you cannot but weep when your soul summons you, she should spur you again and again till you come laughing. In prayer you rise to meet those praying at that very hour, whom save in prayer you may not meet. Therefore enter the invisible temple for naught but ecstasy and sweet communion: enter only to ask and you shall not receive, to humble yourself and you shall not be lifted. God listens not to your words save when He Himself utters them through your lips; we cannot ask, for thou knowest our needs before they are born in us — thou art our need.",
    context:"A priestess asks of Prayer; the answer turns prayer from asking into expansion and communion, for God knows our needs before they are born.",
    keyVerses:[
      { ref:"On Prayer", text:"For what is prayer but the expansion of yourself into the living ether?" },
      { ref:"On Prayer", text:"For if you should enter the temple for no other purpose than asking you shall not receive:" },
      { ref:"On Prayer", text:"Thou art our need; and in giving us more of thyself thou givest us all.”" }
    ],
    takeaway:"Prayer is expansion into the living ether: enter the invisible temple for ecstasy, not transactions — thou art our need.",
    quiz:[
      { q:"When does the poem say people usually pray?",
        choices:["In distress and in need","At every sunrise","Only in temples","After meals"], a:0,
        why:"'You pray in your distress and in your need; would that you might pray also in the fullness of your joy and in your days of abundance.'" },
      { q:"Why shall you not receive if you enter the temple only to ask?",
        choices:["Asking annoys the gods","Prayer is communion and expansion, not a transaction — God knows our needs before they are born in us","Asking is illegal","Temples charge fees"], a:1,
        why:"'We cannot ask thee for aught, for thou knowest our needs before they are born in us: thou art our need.'" },
      { q:"Someone prays solely for a lottery win and feels unheard. On Prayer's frame explains:",
        choices:["He lacked faith in the lottery","He treated prayer as asking, when 'thou art our need' — the prayer of seas and forests asks for naught","He prayed at the wrong hour","Lotteries are unholy"], a:1,
        why:"'If you should enter the temple for no other purpose than asking you shall not receive' — God listens not to words save when He utters them through your lips." }
    ] },
  { n:24, t:"On Pleasure",
    summary:"Pleasure is a freedom-song, but it is not freedom; the blossoming of desires, but not their fruit; the caged taking wing, but not space encompassed. Sing it with fullness of heart, yet lose not your hearts in the singing. The youth who seek pleasure as if it were all should be neither judged nor rebuked: they shall find pleasure, but not her alone — seven are her sisters, and the least of them is more beautiful than pleasure. Elders who remember pleasure with regret should recall it with gratitude, as the harvest of a summer. Those who shun all pleasures for fear of offending the spirit forget that even in their foregoing is their pleasure, for the spirit is not a still pool to be troubled with a staff. Denial only stores desire; the body is the harp of your soul. The test: be in your pleasures like the bee and the flower, for whom giving and receiving are need and ecstasy.",
    context:"A hermit who visits once a year asks of Pleasure; the answer sings it as a freedom-song that is not freedom, tested by bee and flower.",
    keyVerses:[
      { ref:"On Pleasure", text:"Pleasure is a freedom-song, But it is not freedom." },
      { ref:"On Pleasure", text:"Seven are her sisters, and the least of them is more beautiful than pleasure." },
      { ref:"On Pleasure", text:"And your body is the harp of your soul, And it is yours to bring forth sweet music from it or confused sounds." }
    ],
    takeaway:"Pleasure is a freedom-song, not freedom: sing it with a full heart, and in your pleasures be like the bee and the flower.",
    quiz:[
      { q:"Who seeks pleasure as if it were all, and how does Almustafa treat them?",
        choices:["The youth; he would neither judge nor rebuke them","The elders; he banishes them","The hermits; he praises them","The merchants; he taxes them"], a:0,
        why:"'Some of your youth seek pleasure as if it were all, and they are judged and rebuked. I would not judge nor rebuke them. I would have them seek.'" },
      { q:"What is the bee-and-flower test for good pleasure?",
        choices:["Pleasure must be kept secret","Only the bee benefits","Giving and receiving pleasure are both need and ecstasy, so pleasure should not be one-sided taking","Flowers should be left unpicked"], a:2,
        why:"'To both, bee and flower, the giving and the receiving of pleasure is a need and an ecstasy... be in your pleasures like the flowers and the bees.'" },
      { q:"An ascetic refuses every comfort for fear of offending the spirit. The poem answers:",
        choices:["The spirit is offended by all pleasure","Even in their foregoing is their pleasure; the spirit is not a still pool you can trouble with a staff","Only food is forbidden","Ascetics are always hypocrites"], a:1,
        why:"'Think you the spirit is a still pool which you can trouble with a staff?... even in their foregoing is their pleasure.'" }
    ] },
  { n:25, t:"On Beauty",
    summary:"Where shall you seek beauty, and how shall you find her unless she herself be your way and your guide? Each group fashions her from its own condition: the aggrieved call her kind and gentle like a young mother; the passionate call her a tempest shaking earth and sky; the tired hear soft whisperings; the restless hear her shouting among the mountains. Watchmen say she rises with the dawn; toilers see her leaning from the sunset; the snow-bound await her spring leap; reapers see her dancing with autumn leaves. Yet in truth you spoke not of her but of needs unsatisfied — and beauty is not a need but an ecstasy: not a mouth thirsting nor an empty hand stretched forth, but a heart enflamed and a soul enchanted. Beauty is life when life unveils her holy face — but you are life and you are the veil; beauty is eternity gazing at itself in a mirror — but you are eternity and you are the mirror.",
    context:"A poet asks of Beauty; the answer sorts the crowd's descriptions as unsatisfied needs — beauty is not a need but an ecstasy.",
    keyVerses:[
      { ref:"On Beauty", text:"And beauty is not a need but an ecstasy." },
      { ref:"On Beauty", text:"It is not a mouth thirsting nor an empty hand stretched forth, But rather a heart enflamed and a soul enchanted." },
      { ref:"On Beauty", text:"Beauty is eternity gazing at itself in a mirror. But you are eternity and you are the mirror." }
    ],
    takeaway:"Beauty is not a need but an ecstasy: you are the life and the veil, the eternity and the mirror.",
    quiz:[
      { q:"Whom does beauty visit at dawn, according to the watchmen?",
        choices:["She shall rise with the dawn from the east","She sleeps until noon","She hides in the market","She flees the city"], a:0,
        why:"'At night the watchmen of the city say, Beauty shall rise with the dawn from the east.'" },
      { q:"What were people really describing when they spoke of beauty?",
        choices:["Her true appearance","Needs unsatisfied, for beauty is not a need but an ecstasy","Their dreams of wealth","The seasons of the year"], a:1,
        why:"'All these things have you said of beauty, yet in truth you spoke not of her but of needs unsatisfied, and beauty is not a need but an ecstasy.'" },
      { q:"A photographer chases perfect vistas yet feels empty until she owns the prints. On Beauty's diagnosis:",
        choices:["She needs better equipment","Vistas are overrated","She should photograph people only","She treats beauty as a need and possession, when it is an ecstasy — an image seen though the eyes are closed"], a:3,
        why:"'It is not a mouth thirsting nor an empty hand stretched forth... rather an image you see though you close your eyes.'" }
    ] },
  { n:26, t:"On Religion",
    summary:"Have I spoken this day of aught else? Is not religion all deeds and all reflection, and that wonder and surprise ever springing in the soul while the hands hew the stone or tend the loom? Who can separate his faith from his actions, or spread his hours before him saying, this for God and this for myself? All your hours are wings that beat through space from self to self. He who wears his morality but as his best garment were better naked; he who defines his conduct by ethics imprisons his song-bird in a cage; and he to whom worshipping is a window to open and shut has not yet visited the house of his soul. Your daily life is your temple and your religion: take with you the plough, the forge, the mallet, and the lute, and take with you all men. And if you would know God, be not a solver of riddles — see Him playing with your children, walking in the cloud, smiling in flowers, waving His hands in trees.",
    context:"An old priest asks of Religion; the answer widens it to all deeds and hours — daily life itself the temple.",
    keyVerses:[
      { ref:"On Religion", text:"Is not religion all deeds and all reflection, And that which is neither deed nor reflection, but a wonder and a surprise ever springing in the soul, even while the hands hew the stone or tend the loom?" },
      { ref:"On Religion", text:"Your daily life is your temple and your religion." },
      { ref:"On Religion", text:"Rather look about you and you shall see Him playing with your children." }
    ],
    takeaway:"Religion is no garment or hour but your daily life — all your hours are wings, and God is seen in children, cloud, and flower.",
    quiz:[
      { q:"What does the poem say your daily life is?",
        choices:["A trial before the true life","Your temple and your religion","A distraction from worship","A debt to your ancestors"], a:1,
        why:"'Your daily life is your temple and your religion. Whenever you enter into it take with you your all.'" },
      { q:"Why were they 'better naked' who wear morality as a best garment?",
        choices:["Clothes are expensive","Nakedness is holy","Winters are mild in Orphalese","Because morality worn only for display imprisons the song-bird of conduct in a cage of ethics"], a:3,
        why:"'He who defines his conduct by ethics imprisons his song-bird in a cage. The freest song comes not through bars and wires.'" },
      { q:"A man is devout on Sunday and ruthless in business by Monday. Religion's teaching:",
        choices:["Keep the two worlds separate","Who can separate faith from actions? All hours are wings; bring the plough and the forge into the temple","Business is exempt from religion","Only priests need consistency"], a:1,
        why:"'Who can separate his faith from his actions, or his belief from his occupations?... All your hours are wings that beat through space from self to self.'" }
    ] },
  { n:27, t:"On Death",
    summary:"You would know the secret of death, but how shall you find it unless you seek it in the heart of life? The owl whose night-bound eyes are blind to the day cannot unveil the mystery of light. Life and death are one, even as the river and the sea are one. In the depth of your hopes and desires lies your silent knowledge of the beyond: like seeds dreaming beneath the snow your heart dreams of spring — trust the dreams, for in them is hidden the gate to eternity. Your fear of death is the trembling of the shepherd standing before the king whose hand is to be laid upon him in honour. For what is it to die but to stand naked in the wind and melt into the sun, to free the breath that it may seek God unencumbered? Only when you drink from the river of silence shall you indeed sing; and when the earth shall claim your limbs, then shall you truly dance.",
    context:"Almitra asks the last question, of Death; the answer hides the secret in the heart of life, river and sea being one.",
    keyVerses:[
      { ref:"On Death", text:"For life and death are one, even as the river and the sea are one." },
      { ref:"On Death", text:"Trust the dreams, for in them is hidden the gate to eternity." },
      { ref:"On Death", text:"And when the earth shall claim your limbs, then shall you truly dance." }
    ],
    takeaway:"Seek the secret of death in the heart of life: river and sea are one, and when the earth claims your limbs, then you truly dance.",
    quiz:[
      { q:"Where must you seek the secret of death?",
        choices:["In the heart of life","In the grave","In the temple scrolls","In the owl's eyes"], a:0,
        why:"'How shall you find it unless you seek it in the heart of life? The owl whose night-bound eyes are blind unto the day cannot unveil the mystery of light.'" },
      { q:"What does the shepherd-before-the-king image claim about fear of death?",
        choices:["Death is a punishment to flee","It is trembling before an honouring king — fear mixed with joy at being marked by greatness","Only shepherds fear death","Kings are like death"], a:1,
        why:"Fear of death is 'the trembling of the shepherd when he stands before the king whose hand is to be laid upon him in honour.'" },
      { q:"A patient facing death asks what dying means. This poem would say:",
        choices:["The end of everything","To free the breath to rise and seek God unencumbered — to begin climbing at the mountain top","A punishment for sin","A dream with no meaning"], a:1,
        why:"'What is it to cease breathing, but to free the breath from its restless tides, that it may rise and expand and seek God unencumbered?... When you have reached the mountain top, then you shall begin to climb.'" }
    ] },
  { n:28, t:"The Farewell",
    summary:"From his ship's deck Almustafa faces the people a last time. The wind bids him leave, yet he promises to return with the tide — the mist that drifts at dawn will gather into a cloud and fall as rain. He was among them a lake among mountains, mirroring their summits and the passing flocks of their thoughts; sweeter than their laughter came to him the boundless in them, the vast man in whom they are but cells and sinews. Correcting proverbs, he insists you are also as strong as your strongest link — to measure you by your smallest deed is to reckon the ocean by the frailty of its foam. Wise men came to give wisdom; he came to take theirs. There are no graves here: the mountains and plains are a cradle and a stepping-stone. Then, ready, he bids farewell — a little while, and another woman shall bear him.",
    context:"The frame closes: from his ship's deck Almustafa blesses Orphalese, promises to return with the tide, and departs into the mist.",
    keyVerses:[
      { ref:"The Farewell", text:"To measure you by your smallest deed is to reckon the power of ocean by the frailty of its foam." },
      { ref:"The Farewell", text:"There are no graves here. These mountains and plains are a cradle and a stepping-stone." },
      { ref:"The Farewell", text:"A little while, a moment of rest upon the wind, and another woman shall bear me." }
    ],
    takeaway:"Farewell without emptiness: you are as strong as your strongest link, the plains are a stepping-stone, and he will return with the tide.",
    quiz:[
      { q:"What does Almustafa say the mountains and plains of Orphalese are, since there are no graves?",
        choices:["A cradle and a stepping-stone","A prison and a court","A garden and a wall","A book and a scroll"], a:0,
        why:"'There are no graves here. These mountains and plains are a cradle and a stepping-stone' — passers-by may see themselves and their children dancing hand in hand." },
      { q:"What does the mist-that-rises image promise?",
        choices:["The weather will improve","He will return with the tide, gathering again as cloud and rain","The sea will dry up","His words will evaporate"], a:1,
        why:"'The mist that drifts away at dawn, leaving but dew in the fields, shall rise and gather into a cloud and then fall down in rain. And not unlike the mist have I been.'" },
      { q:"Someone measures their whole life by one public failure. The Farewell's rebuttal:",
        choices:["Failures define us","To measure you by your smallest deed is to reckon the power of ocean by the frailty of its foam","Only success counts","The seasons punish failure"], a:1,
        why:"'You are as weak as your weakest link' is 'but half the truth. You are also as strong as your strongest link'; judging by failures blames the seasons for inconstancy." }
    ] }
);
