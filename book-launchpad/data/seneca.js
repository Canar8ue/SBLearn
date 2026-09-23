/* Book Launchpad — On the Shortness of Life, study guides (units 1-5). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "seneca"; });
if (!_bk) throw new Error("data/canon.js must load before seneca.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:1, t:"Part One",
    summary:"Seneca opens by taking up a complaint Paulinus knows: everyone, from the common herd to great men, blames Nature for cutting life short — Aristotle even quarrelled with her because some animals outlived man by centuries. Seneca’s answer sets the essay’s thesis: we do not receive a short life, we make one; we are not poor in days but wasteful of them. Like riches squandered by a bad master yet growing under a wise guardian, life rewards whoever disposes it well. He then catalogues the wastrels: the greedy, the drunk, the slothful, the ambitious, the clients — ‘A is devoted to B, and B to C: no one belongs to himself.’ Men fight over a boundary-stone yet let strangers occupy their lives; they guard money but squander time. He makes a hundred-year-old reckon up his years and find few he truly lived, then mocks those who postpone leisure to their fiftieth or sixtieth year, desiring everything as if immortal. Even Augustus, most blessed of men, never stopped longing for rest.",
    context:"Part One states the thesis — life is long enough if used well — diagnoses how time is squandered, and opens the case that even the most powerful long for leisure.",
    keyVerses:[
      { ref:"§1", text:"Thus it is: we do not receive a short life, but we make it a short one, and we are not poor in days, but wasteful of them." },
      { ref:"§2", text:"Life is long enough, if you know how to use it." },
      { ref:"§3", text:"You fear everything, like mortals as you are, and yet you desire everything as if you were immortals." }
    ],
    takeaway:"Life is not short; we make it short — audit where your days actually go before you blame the supply.",
    quiz:[
      { q:"In §1, what comparison does Seneca draw between riches and life?",
        choices:["Great riches corrupt their owner; a small income keeps him honest","A bad master scatters a great fortune, but a wise guardian makes even a moderate one grow","Money means nothing, so the wise man gives it all away at once","The rich alone can buy leisure, and so they live the longest"], a:1,
        why:"§1 — riches under ‘a bad master’ are ‘dispersed straightway,’ but even a moderate fortune with a wise guardian ‘increases by use’: and our life, he says, is just the same." },
      { q:"Why does Seneca make the hundred-year-old reckon up his whole life ‘in black and white’?",
        choices:["To prove that a full century is more than enough time for any ambition","To show that his estate has been squandered and must be set in order","To show how little of it he truly lived, once time owed to others and idle hours are counted","To give him material for a memoir his grandchildren will enjoy"], a:2,
        why:"§3 — the reckoning adds creditors, mistress, patrons, clients, quarrels, and idle hours: ‘you will see that you have not lived as many years as you count.’" },
      { q:"A friend vows he will finally enjoy life ‘after my fiftieth year.’ What is Part One’s reply?",
        choices:["Enjoyment postponed is enjoyment risked: no one is guaranteed the years between now and fifty","Pleasure is a vice, so the promise is wise only if never kept","Fifty is too early; plan leisure for the sixtieth year instead","Tell your friend to resign at once, since all work is shameful"], a:0,
        why:"§3 quotes exactly this vow — leisure after fifty, office ending at sixty — and asks ‘what guarantee have you that your life will last any longer?’ It is late to begin life just when we must leave it." }
    ] },
  { n:2, t:"Part Two",
    summary:"Part Two produces witnesses. Cicero cursed the consulship he praised all his life and, banished, wrote Atticus that he lived ‘almost as a prisoner’ — yet the wise man would be no half-prisoner, for ‘what can be greater than the man who is greater than Fortune?’ Livius Drusus complained he had never had holidays, even as a boy — too late for a lifelong firebrand of the courts; such great men’s vices would swallow a thousand years. Seneca then ranks the shamefully busy — drinkers, flatterers, banquet-hunters — and delivers the hardest saying: no man knows less about living than a businessman, since a whole life must be spent learning how to live, and how to die. The honoured consuls and advocates all beg for the end of their terms; everyone ‘hurries through his life’ yearning for the future and wearying of the present. Men give time away freely because it is invisible, and beg to live when dying — yet no one will ever hand your years back.",
    context:"Part Two indicts the great and the busy with examples — Cicero, Livius Drusus, the leisured rich — and argues time, being invisible, is given away as if it cost nothing.",
    keyVerses:[
      { ref:"§5", text:"for what can be greater than the man who is greater than Fortune?" },
      { ref:"§7", text:"such a man has not lived long, but has only been long alive." },
      { ref:"§8", text:"yet no one will give you back your years, no one will restore them to you again: your life will run its course when once it has begun, and will neither begin again or efface what it has done." }
    ],
    takeaway:"Guard your time like money: nothing repays it, none of it comes back, and no grey hairs prove you lived — only that you were long alive.",
    quiz:[
      { q:"Cicero, Seneca notes, applied to himself what ‘lowly title’ that the wise man would never accept?",
        choices:["Fortune’s favourite","A servant of the republic","Half a prisoner","An exile without a country"], a:2,
        why:"§5 — Cicero called himself ‘half a prisoner’ in his letter to Atticus, but the wise man enjoys complete liberty: ‘what can be greater than the man who is greater than Fortune?’" },
      { q:"Why do grey hairs and wrinkles not prove that a man has lived long?",
        choices:["Because worry and vice make some men age before their time","Because only lives spent in philosophy count as having been lived at all","Because old men habitually exaggerate the number of their years","Because a ship driven round one harbour by contrary winds makes no voyage — and neither has he"], a:3,
        why:"§7 — a man battered by winds ‘has not travelled much, he has only been much tossed about’; likewise ‘such a man has not lived long, but has only been long alive.’" },
      { q:"You would never hand a stranger your wallet, yet you surrender whole afternoons to pointless meetings. Part Two’s point?",
        choices:["Time, unlike money, renews itself, so generosity with it costs nothing","Invisible goods are spent cheaply, though they are the most precious and can never be restored","A meeting is only wasted if it runs past its scheduled hour","Politeness is a small price for a career, so keep giving time away"], a:1,
        why:"§8 — we play with the most precious thing because it is ‘an incorporeal thing’ that never comes before our eyes, ‘yet no one will give you back your years, no one will restore them to you again.’" }
    ] },
  { n:3, t:"Part Three",
    summary:"Part Three attacks postponement as ‘the greatest waste of life’: the busiest lose today by promising themselves tomorrow, and Seneca quotes the poet — the best days are the first to fly. Time should be drunk like a fast-running torrent; instead the busy reach old age unprepared, like travellers who find the journey over before they noticed it. He then divides life into three parts — past, present, future — and shows the cruel inversion: only the past is certain and beyond Fortune’s reach, yet busy men cannot enjoy it, since reviewing ill-spent years frightens them. Their minds are beasts under the yoke, and time poured into them leaks away like water into a broken vessel. Old men beg for more years and die ‘dragged out’ of life; the unbusy find even a small span ample, ‘invested at good interest,’ and meet death with a steady step. Leisure can be busy too: bronzes, barbers’ chairs, banquets, and the bather who must ask whether he is seated — their very business is sloth.",
    context:"Part Three turns diagnosis to the deepest waste — postponement — then proves busy lives are shortest and stretches ‘busy’ to cover luxurious idleness.",
    keyVerses:[
      { ref:"§9", text:"postponement is the greatest waste of life: it wrings day after day from us, and takes away the present by promising something hereafter: there is no such obstacle to true living as waiting, which loses to-day while it is depending on the morrow." },
      { ref:"§10", text:"Life is divided into three parts: that which has been, that which is, and that which is to come:" },
      { ref:"§12", text:"we ought not to say that such men’s life is one of leisure, but their very business is sloth." }
    ],
    takeaway:"Postponement is the greatest waste of life: whatever is promised to tomorrow is taken from today, and the future is never guaranteed.",
    quiz:[
      { q:"Of life’s three parts, which does Seneca call certain and beyond Fortune’s power?",
        choices:["The present, which we hold in our hands this hour","The future, provided we have planned it carefully","The past, over which Fortune has lost her rights","None of them; all three are equally uncertain"], a:2,
        why:"§10 — of the three stages ‘that which we have passed is certain: this it is over which Fortune has lost her rights,’ yet busy men cannot enjoy reviewing it." },
      { q:"What does the image of time ‘leaking away through the chinks and holes’ of busy men’s minds convey?",
        choices:["Memory naturally decays with old age and disuse","A divided, unquiet mind cannot hold even the present it is given","Time moves faster for the busy than for the idle","The past can only be recovered through careful record-keeping"], a:1,
        why:"§10 — the minds of busy men are ‘like animals under the yoke’; as into a vessel that cannot hold, whatever time you give them ‘leaks away through the chinks and holes of their minds.’" },
      { q:"You keep deferring a long-planned project until conditions are perfect. Part Three’s verdict?",
        choices:["Careful timing is the mark of a wise planner","Some projects genuinely deserve to wait for retirement","Write the plan down first and postponement becomes harmless","Waiting is the greatest obstacle to living, for it loses today to an uncertain morrow"], a:3,
        why:"§9 — ‘postponement is the greatest waste of life,’ and ‘everything future is uncertain: live now straightway.’" }
    ] },
  { n:4, t:"Part Four",
    summary:"Part Four moves from useless to noble study. First the triflers: a Greek disease of the mind — how many rowers Ulysses had, whether the Iliad or the Odyssey came first — has infected Rome with questions about who first won a sea-fight or exhibited elephants; Seneca breaks off at Pompeius’s elephant show to ask how excessive prosperity blinds us, and endorses Fabianus’s verdict that no studies at all beat these. The turn comes in section fourteen: only those who give themselves to philosophy are truly at leisure and truly live, for they annex every century — arguing with Socrates, doubting with Carneades, reposing with Epicurus. Philosophy offers adoption into families of the noblest intellects, an inheritance that grows as it is divided, and a life long because the wise man ‘concentrates all times into it.’ The unit closes with the shortest lives of all: those who forget the past, neglect the present, and dread the future, losing the day in looking forward to the night.",
    context:"Part Four pivots the essay from diagnosing waste to naming the one true leisure — philosophy, whose students own all past ages and concentrate all times into one life.",
    keyVerses:[
      { ref:"§14", text:"The only persons who are really at leisure are those who devote themselves to philosophy: and they alone really live: for they do not merely enjoy their own lifetime, but they annex every century to their own: all the years which have passed before them belong to them." },
      { ref:"§15", text:"None of these men will force you to die, but all of them will teach you how to die: none of these will waste your time, but will add his own to it." },
      { ref:"§16", text:"Those men lead the shortest and unhappiest lives who forget the past, neglect the present, and dread the future: when they reach the end of it the poor wretches learn too late that they were busied all the while that they were doing nothing." }
    ],
    takeaway:"Choose your ancestors among the philosophers: their friendship costs nothing, is never ‘engaged,’ and makes every past century your own.",
    quiz:[
      { q:"What ‘Greek disease of the mind’ has now, Seneca says, taken hold of the Romans?",
        choices:["Investigating useless literary trivia, such as how many rowers Ulysses had","Worshipping Greek gods alongside the Roman ones","Copying Greek fashions in dress, diet, and bathing","Preferring Greek tutors to Roman schooling for their sons"], a:0,
        why:"§13 — the futile questions are ‘how many rowers Ulysses had, whether the Iliad or the Odyssey was written first’; Rome now adds firsts like Duillius’s sea-fight." },
      { q:"Philosophers, Seneca says, ‘annex every century to their own.’ What does he mean?",
        choices:["They conquer the empires that earlier ages built up","Their writings eventually rule the nations that read them","By entering their thought we possess all the years that came before us","They live longer because they avoid luxury and worry"], a:2,
        why:"§14 — philosophers ‘do not merely enjoy their own lifetime, but they annex every century to their own: all the years which have passed before them belong to them.’" },
      { q:"One free evening a week: endless scrolling, or an hour with a philosopher. Part Four’s counsel?",
        choices:["Scrolling is genuine rest, because it demands nothing of you","Read, for the philosophers teach how to live and die, never waste your time, and add their own to it","Both count equally as leisure, so follow your mood","Read only what improves your career prospects"], a:1,
        why:"§15 — ‘None of these men will force you to die, but all of them will teach you how to die: none of these will waste your time, but will add his own to it.’" }
    ] },
  { n:5, t:"Part Five",
    summary:"Part Five gathers the threads and turns to Paulinus. The joys of the busy are disturbed — at the height of pleasure rises the question ‘How long will this last?’ — for everything dependent on chance is uncertain: the higher it rises, the more chances it has of falling. So men labour to gain what they must labour harder to keep, and one ambition replaces another — Marius, Cincinnatus, the exiled Scipio — until leisure is always wished for and never enjoyed. Then the appeal: Paulinus has given the better part of his life to his country, and the corn office is perilous — ‘it is better to understand your own mind than to understand the corn-market.’ Philosophy offers quieter, safer, larger fields: how to live and die, deep repose. Last, do not envy the purple: men throw away all their years for one consulship, Turannius mourned as dead when relieved of his post, and the law releases soldiers at fifty and senators at sixty — yet no one can obtain his own consent to leisure.",
    context:"Part Five completes the arc: fear poisons prosperity, the essay’s thesis lands as a personal plea to Paulinus to leave public office for philosophy, and dying in harness is mocked.",
    keyVerses:[
      { ref:"§17", text:"our life will be pushed along from one business to another: leisure will always be wished for, and never enjoyed." },
      { ref:"§18", text:"yet, believe me, it is better to understand your own mind than to understand the corn-market." },
      { ref:"§19", text:"If such men wish to know how short their lives are, let them think how small a fraction of them is their own." }
    ],
    takeaway:"Ask what fraction of your life is really your own: enough has gone to duty — take some part of your time for yourself, before it is taken.",
    quiz:[
      { q:"Why does the Persian king Xerxes weep over his vast army?",
        choices:["Because he cannot afford to pay his soldiers","Because he mourns his generals lost in earlier wars","Because he pities the enemy they must soon fight","Because in less than a hundred years none of them will be alive"], a:3,
        why:"§17 — Xerxes ‘burst into tears at the thought that in less than a hundred years none of all those warriors would be alive,’ though he himself was about to destroy them." },
      { q:"Why does Seneca tell Paulinus it is ‘better to understand your own mind than to understand the corn-market’?",
        choices:["The corn-market is too difficult for any one man to master","Managing grain feeds bodies; knowing your own mind is the greater, safer work","Plenty of lesser administrators can handle the grain supply","Trading in grain is shameful work for a philosopher"], a:1,
        why:"§18-19 — the corn office is ‘full of risk’ (‘you have to deal with the human stomach’), while philosophy offers ‘quieter, safer, larger fields’ — knowledge of how to live and die." },
      { q:"The law excuses soldiers at fifty and senators at sixty, yet Turannius mourned when relieved of his revenue post. What principle is at stake?",
        choices:["Men cling to work past their capacity because they cannot consent to leisure","The law, not personal desire, should decide when a man stops working","Collecting revenue is more honourable than soldiering","Grief at losing a job proves the job was worth doing"], a:0,
        why:"§20 — men ‘retain their wish for labour longer than their capacity for it,’ and have ‘more difficulty in obtaining their own consent than that of the law to a life of leisure.’" }
    ] }
);
