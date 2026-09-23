/* Book Launchpad — Meditations, study guides (units 1-12). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "meditations"; });
if (!_bk) throw new Error("data/canon.js must load before meditations.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:1, t:"Book One",
    summary:"The opening book is a ledger of gratitude. Marcus lists what he owes each person who shaped him: gentleness from his grandfather, piety and simplicity from his mother, endurance and doing things himself from his tutor. From Diognetus he learned to scorn charlatans and take up philosophy; from Rusticus to abandon rhetoric and public display, read with diligence, and — crucially — to prize Epictetus's commentaries. Apollonius showed him steadiness under pain and loss; Sextus combined mildness with authority; Alexander the Grammarian taught him to correct speech without reproach. From court figures he learned the envy that hedges kings, never to plead busyness to friends, and, from Claudius Maximus, cheerful self-command. The portrait of his father — constant, frugal, unhurried, deaf to flattery — crowns the list. Thanking the gods for his family, teachers, wife, and escape from the sophists, he closes with the discipline that binds it all: expect difficult people each morning, and remember we are fellow-workers, like feet, hands, and eyelids.",
    context:"Book One is Marcus's debts-of-gratitude inventory — the specific lessons he credits to family, teachers, courtiers, and his father, ending with the morning prep for difficult people.",
    keyVerses:[
      { ref:"Book One, §15", text:"Betimes in the morning say to thyself, This day I shalt have to do with an idle curious man, with an unthankful man, a railer, a crafty, false, or an envious man; an unsociable uncharitable man." },
      { ref:"Book One, §15", text:"for we are all born to be fellow-workers, as the feet, the hands, and the eyelids; as the rows of the upper and under teeth: for such therefore to be in opposition, is against nature; and what is it to chafe at, and to be averse from, but to be in opposition?" },
      { ref:"Book One, §16", text:"Away with thy books, suffer not thy mind any more to be distracted, and carried to and fro; for it will not be; but as even now ready to die, think little of thy flesh" }
    ],
    takeaway:"Begin each day expecting difficult people, and meet them as fellow-workers in reason, not obstacles.",
    quiz:[
      { q:"Who does Marcus credit with putting Epictetus's commentaries into his hands?",
        choices:["Rusticus","Apollonius","Diognetus","Claudius Maximus"], a:0,
        why:"In §4 he thanks Rusticus for lighting on Epictetus's Hypomnemata, 'which also he gave me of his own.'" },
      { q:"In §15, why does Marcus say he should not be angry with the day's 'railer' or 'crafty' man?",
        choices:["Because anger would damage his reputation at court","Because they sin through ignorance of what is truly good and truly bad","Because the gods have forbidden anger in all forms","Because their offences are really too trivial to matter"], a:1,
        why:"Their ill qualities have happened to them 'through ignorance of that which is truly good and truly bad,' and he is their kinsman by participation of the same reason." },
      { q:"A colleague flubs a presentation and a coworker mocks him publicly. Applying Book One, what is the reasoned response?",
        choices:["Match the mockery so the mocker learns how it feels","Stay silent forever to avoid conflict of any kind","Correct the fault kindly, remembering both are fallible kin in reason","Report the mocker to management at the first opportunity"], a:2,
        why:"Alexander the Grammarian corrected errors 'handsomely and civilly' without reproach, and §15 grounds patience in our kinship through shared reason." }
    ] },
  { n:2, t:"Book Two",
    summary:"Written at dawn at Carnuntum, these notes open with reproach: how long has he put off self-mastery, though his allotted time is draining away. The remedies are compact — treat every action as if it were your last, done with gravity, justice, and no hypocrisy; stop outsourcing happiness to other people's souls. Theophrastus's distinction follows: sins through lust are worse than sins through anger, because the lustful sinner is led by pleasure while the angry man is forced by grief. Then the great argument for calm: if the gods exist, they will not let what is truly evil harm you; and death, honour, poverty, and pain happen to good and bad alike, being in themselves neither good nor bad. Everything dissolves — bodies into matter, memories into time — and death is only a work of nature, which only a child would fear. Our life is a warfare and a mere pilgrimage; what endures is philosophy, keeping the inner spirit unpolluted. The book signs off: 'Whilst I was at Carnuntum.'",
    context:"Book Two is the dawn notebook — written among the Quadi at Carnuntum — full of urgency, the sin-through-lust debate, and the 'life is a warfare' resolve.",
    keyVerses:[
      { ref:"Book Two, §7", text:"those sins are greater which are committed through lust, than those which are committed through anger. For he that is angry seems with a kind of grief and close contraction of himself, to turn away from reason; but he that sins through lust, being overcome by pleasure, doth in his very sin bewray a more impotent, and unmanlike disposition." },
      { ref:"Book Two, §8", text:"As for life therefore, and death, honour and dishonour, labour and pleasure, riches and poverty, all these things happen unto men indeed, both good and bad, equally; but as things which of themselves are neither good nor bad; because of themselves, neither shameful nor praiseworthy." },
      { ref:"Book Two, §15", text:"Our life is a warfare, and a mere pilgrimage. Fame after life is no better than oblivion. What is it then that will adhere and follow? Only one thing, philosophy." }
    ],
    takeaway:"Do each task as if it were your last: life, death, riches, and fame are indifferent — only your own integrity is truly good or bad.",
    quiz:[
      { q:"According to the note appended at the end of Book Two, where was Marcus when he wrote these entries?",
        choices:["At Rome, in the palace","In the country of the Quadi at Carnuntum","On campaign in Germany at Granua","At his estate at Sinuessa"], a:1,
        why:"The book closes with '_Whilst I was at Carnuntum_' (§15); Book One §15 likewise set its meditation in the country of the Quadi at Granua." },
      { q:"Why does Theophrastus judge sins of lust worse than sins of anger?",
        choices:["Anger at least has a just cause, lust never does","Lust breaks laws; anger only breaks customs","The angry man is driven by grief, the lustful man is overcome by pleasure and self-chosen","Anger harms only the angry person, lust harms others"], a:2,
        why:"The lustful sinner, 'being overcome by pleasure,' bewrays an impotent, unmanlike disposition; the angry man seems forced to anger through grief, as if first wronged." },
      { q:"A rumour about a reorganisation could cost you your job title. Using Book Two's argument, what follows?",
        choices:["Panic now so you can act early","Treat the loss of title as neither truly good nor truly bad, and keep acting justly","Pretend the rumour does not exist","Lobby harder than everyone else to protect the title"], a:1,
        why:"§8 argues honour and dishonour, riches and poverty happen to good and bad alike, 'but as things which of themselves are neither good nor bad.'" }
    ] },
  { n:3, t:"Book Three",
    summary:"The book argues for haste from a new angle: even if life is long, the understanding that makes it valuable may decay first, so there is no time to waste. Next comes a claim about nature: even things that seem rough — the cracked crust of a loaf, ripening figs, the lion's brow — are delightful because natural, and a trained eye finds pleasure everywhere in what simply happens. A roll call of deaths follows: Hippocrates caught disease; Alexander, Pompey, and Caesar had to die; Heraclitus died filled with water and dirt; lice killed Democritus, and 'another sort of vermin' killed Socrates. The image is a completed voyage: sail, land, go out. Marcus then urges thrift of attention — stop speculating about other people's affairs — and sets the test: nothing may outweigh righteousness, truth, temperance, and fortitude. Popular applause, honour, riches, and pleasure must never 'confront and contest' with the rational good. The disciplined mind leaves nothing foul, and death cannot catch it mid-play.",
    context:"Book Three turns mortality into a work plan: the mind may fail before the body, so quit the rhetoric habit, delight in natural things, and rank the good.",
    keyVerses:[
      { ref:"Book Three, §2", text:"So ripe olives, when they are next to putrefaction, then are they in their proper beauty." },
      { ref:"Book Three, §3", text:"Thou hast taken ship, thou hast sailed, thou art come to land, go out, if to another life, there also shalt thou find gods, who are everywhere." },
      { ref:"Book Three, §7", text:"For it is not lawful, that anything that is of another and inferior kind and nature, be it what it will, as either popular applause, or honour, or riches, or pleasures; should be suffered to confront and contest as it were, with that which is rational, and operatively good." }
    ],
    takeaway:"Test every temptation against one standard: nothing outranks righteousness, truth, temperance, and fortitude.",
    quiz:[
      { q:"In §3's roll call of deaths, what does Marcus say killed Socrates?",
        choices:["The poison of hemlock, self-chosen","Lice, as with Democritus","Another sort of vermin: wicked, ungodly men","Old age, quietly at home"], a:2,
        why:"He writes 'Lice killed Democritus; and Socrates, another sort of vermin, wicked ungodly men.'" },
      { q:"Why does the decaying mind make haste urgent in §1?",
        choices:["Because reputation fades fastest with age","Because the intellective faculty that knows and judges may fail before death comes","Because the body weakens and work becomes painful","Because old men owe the gods their final years"], a:1,
        why:"The faculties 'wherein the best strength and vigour of the mind is most requisite' may fail him before he dies, so he must hasten while he can still use them." },
      { q:"You are offered a lucrative side deal that requires hiding details from your employer. The Book Three test asks:",
        choices:["Whether the chance of being caught is small","Whether anything really outranks righteousness, truth, temperance, and fortitude","Whether everyone else in the industry does it","Whether you can justify it to yourself later"], a:1,
        why:"§7 says nothing of another kind — applause, honour, riches, pleasures — may 'confront and contest' with the rational good; make choice of the best and stick to it." }
    ] },
  { n:4, t:"Book Four",
    summary:"Famous for the command to retreat: people run to country villages, the seashore, and mountains, but 'a man cannot any whither retire better than to his own soul,' where brief and fundamental precepts refresh him. Anger dissolves when he remembers that reasonable creatures are made for one another, that his standing dilemma is 'either a providence, or Democritus his atoms,' and that the whole world is as it were one city. Two maxims steady him: objects stand outside the soul, and all tumult comes from opinion within; and everything seen will soon change. From shared reason and law it follows that all men are fellow-citizens. Death is natural; fame is fleeting — the names of Camillus and Scipio grow obsolete, and 'all is vanity.' The famous reversal runs: say not 'Oh, wretched I, to whom this mischance is happened!' but 'happy I,' if you can bear it without grief. The book ends with the promontory: waves beat continually, yet it stands and stills the swelling water about it.",
    context:"Book Four is the retreat manual — retire into your own soul, demote fame, reverse 'wretched me' into 'happy me,' and stand like a sea-promontory.",
    keyVerses:[
      { ref:"Book Four, §3", text:"A man cannot any whither retire better than to his own soul" },
      { ref:"Book Four, §14", text:"Not as though thou hadst thousands of years to live. Death hangs over thee: whilst yet thou livest, whilst thou mayest, be good." },
      { ref:"Book Four, §40", text:"Thou must be like a promontory of the sea, against which though the waves beat continually, yet it both itself stands, and about it are those swelling waves stilled and quieted." }
    ],
    takeaway:"You always have a retreat: step back into your own soul, and let other people's noise break and settle around you.",
    quiz:[
      { q:"Which retreats does Marcus call out as needless at the start of §3?",
        choices:["Monasteries, hermitages, and caves","Country villages, the sea-shore, and mountains","Temples, libraries, and gardens","Ships, camps, and frontier forts"], a:1,
        why:"§3 names 'private retiring places, as country villages, the sea-shore, mountains; yea thou thyself art wont to long much after such places.'" },
      { q:"What is the force of the dilemma 'either a providence, or Democritus his atoms'?",
        choices:["Both options are false and must be rejected","Either way, the gods punish wrongdoers","Either the world is governed or it is chance atoms — and either way anger at events loses its footing","Providence is certain, atoms a heresy"], a:2,
        why:"Whether events flow from providence or from atomic collision, none of them is aimed at him personally, so indignation at his 'lot and portion' is misplaced." },
      { q:"A stream of hostile comments piles up under your post. The promontory image counsels:",
        choices:["Delete the account and disappear","Argue with each commenter in turn","Stand steady in what reason requires, letting the waves spend and settle themselves","Recruit allies to outnumber the critics"], a:2,
        why:"§40: like the promontory, he 'both itself stands, and about it are those swelling waves stilled and quieted.'" }
    ] },
  { n:5, t:"Book Five",
    summary:"It opens at the alarm clock: unwilling to rise, he reminds himself he was born for work, like the sparrows, ants, spiders, and bees that each perform their part; rest has its stint, and overshooting it is not self-love. Next, three kinds of benefactors: some demand repayment, some keep score, and some — like the vine that has borne her grapes — barely know what they have done. Then fate as prescription: as a physician prescribes riding or cold baths, the nature of the universe prescribes sickness and loss, and both should be accepted for the sake of health. He allows for relapse: return to the dogmata as sore eyes return to the sponge and egg. Two working rules stand out: the mind can turn any impediment into material — 'that which before was in her way, is now her readiest way' — and death cannot spoil him: whenever it comes, he may still be a happy man, for happy is he whose inclinations, desires, and actions are good.",
    context:"Book Five is the get-out-of-bed book: born for work like the bees, kindness without scorekeeping, fate as the physician's prescription, impediment as material.",
    keyVerses:[
      { ref:"Book Five, §6", text:"Others again there be, who when they have done any such thing, do not so much as know what they have done; but are like unto the vine, which beareth her grapes, and when once she hath borne her own proper fruit, is contented and seeks for no further recompense." },
      { ref:"Book Five, §17", text:"So that what before was the impediment, is now the principal object of her working; and that which before was in her way, is now her readiest way." },
      { ref:"Book Five, §30", text:"Let death surprise me when it will, and where it will, I may be εὔμοιρος, or a happy man, nevertheless." }
    ],
    takeaway:"Do the good and move to the next task like the vine, and treat every obstacle as the material for your next move.",
    quiz:[
      { q:"Whose prayer does Marcus quote in §7 as a model of praying 'absolutely and freely'?",
        choices:["The Lacedæmonians', for their strangers' seats","The Athenians', asking Jupiter for rain on all their fields","The Egyptians', for the Nile's flooding","The Pythagoreans', greeting the rising sun"], a:1,
        why:"§7: 'The form of the Athenians' prayer did run thus: O rain, rain, good Jupiter, upon all the grounds and fields that belong to the Athenians.'" },
      { q:"Why does §1 say oversleeping is a failure of self-love?",
        choices:["Because sleep is always a vice to be stamped out","Because loving yourself means loving your nature and its end, which is action","Because the emperor's duties cannot wait","Because early rising impresses others"], a:1,
        why:"'It must needs be therefore, that thou dost not love thyself, for if thou didst, thou wouldst also love thy nature, and that which thy nature doth propose unto herself as her end.'" },
      { q:"A blocked permit stalls your whole project. The Book Five move is to:",
        choices:["Wait until the obstruction clears by itself","Cancel the project and blame the delay","Convert the impediment into the next object of your work, as §17 directs","Push the permit office until they yield"], a:2,
        why:"§17: the mind turns the impediment into her aim — 'that which before was in her way, is now her readiest way.'" }
    ] },
  { n:6, t:"Book Six",
    summary:"Quick strikes open it: matter is tractable, the governing reason can do no evil, and 'the best kind of revenge is, not to become like unto them.' An either/or settles anxiety: if the world is chaos, why cling; if providence orders it, be quiet and trust the Governor. Devices follow — name food 'the carcass of a fish' to strip pomp's conjuring; treat an aggressor like a sparring partner, dodging without suspicion or hate; spell out duty letter by letter without quarrelling. Death is 'a cessation from the impression of the senses, the tyranny of the passions, the errors of the mind, and the servitude of the body'; Alexander of Macedon and his mule-driver, dead, both came to one. He warns himself not to let court life give him 'a new tincture,' then gives the deepest civic line: 'My city and country as I am Antoninus, is Rome; as a man, the whole world.' Listening, the bee-hive rule, and bitter honey to jaundiced eyes round it out.",
    context:"Book Six is the field manual of devices: strip food and pomp by plain naming, spar with offenders like a wrestler, and hold Rome-versus-the-world.",
    keyVerses:[
      { ref:"Book Six, §5", text:"The best kind of revenge is, not to become like unto them." },
      { ref:"Book Six, §26", text:"Death is a cessation from the impression of the senses, the tyranny of the passions, the errors of the mind, and the servitude of the body." },
      { ref:"Book Six, §39", text:"My city and country as I am Antoninus, is Rome; as a man, the whole world." }
    ],
    takeaway:"Never repay wrong in kind: your revenge is to stay unlike the wrongdoer, serving your larger city, the world.",
    quiz:[
      { q:"In §22, who joins Alexander of Macedon in the observation that, dead, 'both came to one'?",
        choices:["His tutor Aristotle","The keeper of his stables","He that dressed his mules","His general Ptolemy"], a:2,
        why:"'Alexander of Macedon, and he that dressed his mules, when once dead both came to one' — either resumed into the original rational essences or scattered into atoms." },
      { q:"What does the palestra comparison in §19 teach about handling an aggressor?",
        choices:["Fight back harder to earn respect","Avoid him gently and without suspecting or hating him, as with a sparring partner","Report him to the games' officials","Refuse ever to be in the same room"], a:1,
        why:"The wrestler warding off blows keeps 'the same mind and disposition'; for us too 'it is very possible for us to avoid and decline, though we neither suspect, nor hate.'" },
      { q:"A rival spreads a rumour using your own sharp tactics against you. Book Six's revenge rule says the best response is:",
        choices:["A louder counter-campaign","To keep your conduct unlike theirs","A formal complaint through channels","A public debate to settle it"], a:1,
        why:"§5: 'The best kind of revenge is, not to become like unto them.'" }
    ] },
  { n:7, t:"Book Seven",
    summary:"Its refrain is repetition: 'There is nothing that is new. All things that are, are both usual and of little continuance.' Even to live again would be to see the same shows, puppets, and bones thrown to hungry curs. Yet the notes sharpen the same few tools. Say 'I am a member' of the body of reasonable beings, not merely a part, or you do not yet love men from the heart. Like the emerald, keep your colour whatever anyone does or says. Banish opinion, the false dæmon, since happiness is a good spirit; accept change as the hot bath accepts the burning of wood. When wronged, ask what the offender supposed good and evil, and pity follows. Quotation gathers Plato and Antisthenes: 'It is a princely thing to do well, and to be ill-spoken of.' Life is a wrestler's art, not a dancer's — built to be thrown and rise again. And the flagged absurdity: dispensing with vice in yourself while stamping it out of everyone else.",
    context:"Book Seven loops the same comforts — nothing new under the sun, keep your colour like the emerald, quote Plato and Antisthenes, wrestle rather than dance.",
    keyVerses:[
      { ref:"Book Seven, §1", text:"There is nothing that is new. All things that are, are both usual and of little continuance." },
      { ref:"Book Seven, §12", text:"Whatsoever any man either doth or saith, thou must be good; not for any man's sake, but for thine own nature's sake; as if either gold, or the emerald, or purple, should ever be saying to themselves, Whatsoever any man either doth or saith, I must still be an emerald, and I must keep my colour." },
      { ref:"Book Seven, §24", text:"It is a princely thing to do well, and to be ill-spoken of." }
    ],
    takeaway:"Keep your colour like the emerald: goodness is your nature's own work, not a response to how others behave.",
    quiz:[
      { q:"In §10, what is the difference between saying 'I am a member' (μέλος) and 'I am a part' (μέρος)?",
        choices:["There is no difference; they are synonyms","A member shares one operation with the body; calling yourself a mere part means you do not yet love men from the heart","A member obeys; a part commands","Members are physical; parts are mental"], a:1,
        why:"§10: if thou say 'I am μέρος, or a part, thou dost not yet love men from thy heart' — the member works as one body for one common operation." },
      { q:"Why is §15's fear-of-change argument aimed at fear of death?",
        choices:["Because change is always pleasant","Because the dead are merely sleeping","Because nothing useful or natural happens without change, and death is the same kind of change for you","Because change only affects the young"], a:2,
        why:"Hot baths need wood changed by fire, food must change to nourish: 'for thee also, by death, to come to change, is a thing of the very same nature.'" },
      { q:"Your integrity at work is rewarded with gossip instead of thanks. §24's line supports:",
        choices:["Demanding public credit for the deed","Doing the good anyway and wearing the bad report princely","Reducing your effort to match the reward","Leaving for a place that will value you"], a:1,
        why:"Out of Antisthenes, §24: 'It is a princely thing to do well, and to be ill-spoken of.'" }
    ] },
  { n:8, t:"Book Eight",
    summary:"It begins with vainglory punctured: too late to win the name of philosopher, so forget credit and live what remains as nature requires — happiness is not in syllogisms, wealth, honour, or pleasure, 'but in the practice of those things, which the nature of man, as he is a man, doth require.' Each action gets the audit: 'How will this when it is done agree with me? Shall I have no occasion to repent of it?' Alexander, Caius, and Pompey shrink beside Diogenes, Heraclitus, and Socrates, whose power reached into things themselves. No time to read? There is time to train: master pleasures and pains, scorn vainglory, care for the unthankful. On others: expect figs from a fig tree, and no physician wonders at an ague. The great images: Lucilla buried Verus, then was buried herself; the limb cut from the body may, man alone, grow back; the mind is a fountain that cannot be dyed. 'Let thy chief fort and place of defence be, a mind free from passions.'",
    context:"Book Eight audits each action for repentance, ranks the philosophers over the conquerors, and builds the fortress: a mind free from passions.",
    keyVerses:[
      { ref:"Book Eight, §24", text:"Lucilla buried Verus; then was Lucilla herself buried by others." },
      { ref:"Book Eight, §46", text:"let thy chief fort and place of defence be, a mind free from passions. A stronger place, (whereunto to make his refuge, and so to become impregnable) and better fortified than this, hath no man." },
      { ref:"Book Eight, §50", text:"As a fountain of sweet and clear water, though she be cursed by some stander by, yet do her springs nevertheless still run as sweet and clear as before; yea though either dirt or dung be thrown in, yet is it no sooner thrown, than dispersed, and she cleared." }
    ],
    takeaway:"Build your defence inward: a mind free from passions cannot be forced, and insults disperse like dirt in a running spring.",
    quiz:[
      { q:"What does Marcus report in §47 when told someone speaks ill of him?",
        choices:["That the report is certainly false","That he speaks ill of thee, is reported; that thou art hurt thereby, is not","That he must confront the speaker at once","That he should reply with equal slander"], a:1,
        why:"'that he speaketh ill of thee, so much is reported. But that thou art hurt thereby, is not reported: that is the addition of opinion, which thou must exclude.'" },
      { q:"In §32, what does the cut-off hand or foot illustrate?",
        choices:["That limbs are useless without exercise","That anger at events dismembers you from the whole — yet man alone can be reunited","That the body should be trained like a soldier's","That surgery is a metaphor for philosophy"], a:1,
        why:"Whoever is offended at what happens 'divides himself from it'; yet for man alone, 'once divided and cut off... he might return, and grow together again.'" },
      { q:"A customer curses at you over a policy you did not set. The §50 fountain says:",
        choices:["Match their tone to show strength","Refuse service and escalate to security","Apologise for the policy to end the scene","Let the abuse disperse and keep serving, sweet and clear"], a:3,
        why:"The fountain 'cannot be dyed or infected'; dirt thrown in 'is no sooner thrown, than dispersed, and she cleared.'" }
    ] },
  { n:9, t:"Book Nine",
    summary:"Injustice is impious: nature made reasonable creatures for mutual good, so the wrongdoer transgresses against the common parent — as do the liar against truth and the pleasure-chaser who accuses fate of unfair distribution. The mind's corruption, he adds, is a worse plague than any corruption of the air. On death: wait for it as you wait for a child's birth — and since living with men of different opinions is such toil, he can even say, 'Hasten, I thee pray, O Death; lest I also in time forget myself.' He that sins, sins unto himself, becoming worse, not others. All reasonable beings share one soul and should flow together, yet man alone forgets the inclination. Troubles were only ever in one's own opinions. The prayer revision is the centrepiece: not to obtain the woman but not to lust; not to be rid of the man but to bear him; not to keep the child but not to fear losing him. Even Epicurus, sick, kept his mind free from trouble.",
    context:"Book Nine calls injustice impiety against nature, demotes praying for outcomes, and prefers asking for freedom from lust and fear.",
    keyVerses:[
      { ref:"Book Nine, §1", text:"He that is unjust, is also impious." },
      { ref:"Book Nine, §3", text:"Hasten, I thee pray, O Death; lest I also in time forget myself." },
      { ref:"Book Nine, §40", text:"One prayeth that he may compass his desire, to lie with such or such a one, pray thou that thou mayst not lust to lie with her. Another how he may be rid of such a one; pray thou that thou mayst so patiently bear with him, as that thou have no such need to be rid of him." }
    ],
    takeaway:"Pray not for the thing you want but for the mind that does not need it: no lust, no fear, patient with people.",
    quiz:[
      { q:"§11 records 'This day I did come out of all my trouble.' Where had the trouble been?",
        choices:["In the court at Rome","In other people's malice","In his own opinions","In an illness of the body"], a:2,
        why:"The trouble 'was not without anywhere that thou shouldest come out of it, but within in thine own opinions, from whence it must be cast out.'" },
      { q:"Why does §1 call injustice impiety?",
        choices:["Because temples fund the courts","Because nature made reasonable creatures to do one another good, so wronging them wrongs the common parent","Because unjust men always swear false oaths","Because only priests can define justice"], a:1,
        why:"The universe, 'the common parent of all,' made reasonable creatures 'one for another... in nowise [to] hurt one another'; the transgressor is 'guilty of impiety.'" },
      { q:"A teammate keeps missing deadlines and you dread every standup. The §40 pattern recommends praying:",
        choices:["That the teammate gets transferred","For patience to bear with him so you no longer need to be rid of him","That the deadlines be cancelled","For proof of his incompetence for HR"], a:1,
        why:"'pray thou that thou mayst so patiently bear with him, as that thou have no such need to be rid of him.'" }
    ] },
  { n:10, t:"Book Ten",
    summary:"He addresses his soul, willing it good, simple, single, and open — needing no external thing, convinced all is by the gods' providence. A test follows: whatever happens is either bearable by your natural constitution — so bear it — or it will end you, and itself with you. Everything that happens was appointed from all eternity by the same causes that made you. Against fear of dissolution: alteration is universal, nothing is lost, all returns to the seeds of the universe. Section 8 offers the bargain — keep the names good, modest, true, and become 'a new man,' or relapse like the half-eaten gladiator begging to be reserved for the same teeth tomorrow. Soldiers proud of hunting the Sarmatai are no better than the spider proud of her fly. And the leaves passage: children, applauders, and critics alike are leaves — the wind blows, others bud in their place. Why grasp? 'A good eye must be good to see whatsoever is to be seen, and not green things only.'",
    context:"Book Ten speaks straight to the soul — bear or be ended, become 'a new man' or relapse like the half-eaten gladiator, and count children and critics as leaves.",
    keyVerses:[
      { ref:"Book Ten, §16", text:"Give what thou wilt, and take away what thou wilt, saith he that is well taught and truly modest, to Him that gives, and takes away." },
      { ref:"Book Ten, §34", text:"The winds blow upon the trees, and their leaves fall upon the ground. Then do the trees begin to bud again, and by the spring-time they put forth new branches. So is the generation of men; some come into the world, and others go out of it." },
      { ref:"Book Ten, §35", text:"A good eye must be good to see whatsoever is to be seen, and not green things only." }
    ],
    takeaway:"Take whatever is dealt — giving and taking away are one economy — and stay ready for every object, not just the green things you prefer.",
    quiz:[
      { q:"In §10, whom does Marcus compare to the spider proud of her caught fly?",
        choices:["Courtesans flattering their patrons","The famous soldiers who defeated the Sarmatai","Merchants hoarding grain in a dearth","Senators competing for honours"], a:1,
        why:"'so may they be proud, and applaud themselves for their valiant acts against the Sarmatai... what do they for the most part but hunt after prey?'" },
      { q:"What work do the leaves do in §34?",
        choices:["They show that autumn is sad","They figure children, applauders, and critics alike: short-lived, replaced, not worth grasping or fleeing","They prove the soul is immortal","They measure the seasons of virtue"], a:1,
        why:"'Of these leaves then thy children are... they that applaud thee... they also are but leaves... Why then shouldest thou so earnestly either seek after these things, or fly from them?'" },
      { q:"You only feel competent when tasks are pleasant and praised. §35's eye-rule diagnoses:",
        choices:["A need for better projects","Healthy ambition; keep going","Normal fatigue; rest is the cure","A sound understanding, like a good eye, must be ready for whatsoever happens, not only the agreeable"], a:3,
        why:"'he that saith, O that my children might live! and, O that all men might commend me... is an eye that seeks after green things.'" }
    ] },
  { n:11, t:"Book Eleven",
    summary:"The reasonable soul's privileges open it: she sees herself, reaps her own fruit, and, unlike a dancer interrupted, is complete at any moment — saying, 'I have lived; neither want I anything of that which properly did belong unto me.' Contempt comes by division: split the music into notes and the spell breaks. Tragedies existed to rehearse worldly chances; comedy, to curb pride. The branch cut off by hatred is cut from the whole tree, yet — the mercy — can be grafted back, never quite as at first. Section 12 answers contempt with courtesy: 'Will any contemn me? let him look to that.' Section 16 lists nine arguments against anger plus a tenth from Hercules: remember they sin against their will, you are much the same, life is a moment, and 'meekness is a thing unconquerable... the nearer everything is unto unpassionateness, the nearer it is unto power.' Odd memoranda close it: the Pythagoreans' heavens, Socrates and Xanthippe, and Epictetus's kiss — 'tomorrow perchance shall he die.'",
    context:"Book Eleven is the anger handbook: nine-plus-one arguments against rage, meekness as power, the grafted branch, and odds and ends from Socrates and Epictetus.",
    keyVerses:[
      { ref:"Book Eleven, §1", text:"so that she may depart with that comfort, 'I have lived; neither want I anything of that which properly did belong unto me.'" },
      { ref:"Book Eleven, §14", text:"There is nothing more shameful than perfidious friendship. Above all things, that must be avoided." },
      { ref:"Book Eleven, §16", text:"that meekness is a thing unconquerable, if it be true and natural, and not affected or hypocritical." }
    ],
    takeaway:"Meekness is power, not weakness: the closer you stand to unruffled calm, the harder you are to conquer.",
    quiz:[
      { q:"What did tragedies first exist for, according to §5?",
        choices:["To worship Dionysus with song","To put men in mind of worldly chances and casualties","To mock the powerful safely","To train actors' memories"], a:1,
        why:"'Tragedies were at first brought in and instituted, to put men in mind of worldly chances and casualties.'" },
      { q:"Why does §16 call anger and grief 'weakness'?",
        choices:["Because they are unfashionable at court","Because they involve yielding: both the angry and the grieving have 'received a wound' and cowardly yielded to their affections","Because they waste productive hours","Because the law punishes them"], a:1,
        why:"'both he that is angry and that grieveth, have received a wound, and cowardly have as it were yielded themselves unto their affections'; 'the nearer everything is unto unpassionateness, the nearer it is unto power.'" },
      { q:"A relative repeatedly ruins family dinners with rants. Book Eleven's counsel is closest to:",
        choices:["Cut them off at the first rant","Rant back louder to win the room","Stay meek and teach them gently — unruffled calm is the unconquerable ground","Ignore them while quietly planning revenge"], a:2,
        why:"§16: meekness 'is a thing unconquerable, if it be true and natural'; anger, by contrast, is a wound and a yielding." }
    ] },
  { n:12, t:"Book Twelve",
    summary:"The final book compresses. Whatever you aspire to, you may possess now — by forgetting the past, referring the future to providence, and spending the present on holiness and righteousness. Of man's three things — body, life, mind — the mind alone is properly his; strip from it what others do, what he did, and future worries, and it rests round like Empedocles' sphere. He wonders that men who love themselves best care more for others' opinions than their own. Asked how he knows there are gods, he answers: they are in some manner visible, 'and neither have I ever seen mine own soul, and yet I respect and honour it.' Against the man who blames the age: cast away opinion and thou art safe. And death gets the playhouse image: nature, like a fair praetor, dismisses the actor. 'Oh, but the play is not yet at an end?' 'In matter of life, three acts is the whole play' — and He who dismisseth thee is well pleased.",
    context:"Book Twelve is the pocket edition: mind alone is yours, the gods argued from your own soul, and death is the praetor dismissing the actor after three acts.",
    keyVerses:[
      { ref:"Book Twelve, §3", text:"I have often wondered how it should come to pass, that every man loving himself best, should more regard other men's opinions concerning himself than his own." },
      { ref:"Book Twelve, §13", text:"If it be not fitting, do it not. If it be not true, speak it not." },
      { ref:"Book Twelve, §27", text:"Oh, but the play is not yet at an end, there are but three acts yet acted of it? Thou hast well said: for in matter of life, three acts is the whole play." }
    ],
    takeaway:"Say only what is true, do only what is fitting, and leave the length of the play to its author.",
    quiz:[
      { q:"Of the three things man consists of in §2, which alone is 'properly thine'?",
        choices:["The mind","The life, as long as it lasts","The body, as its outline belongs to you","None; all is held from the gods"], a:0,
        why:"'Three things there be in all, which thou doest consist of; thy body, thy life, and thy mind... But the third alone is that which is properly thine.'" },
      { q:"What is Marcus's answer in §21 to 'how knowest thou certainly that there be Gods?'",
        choices:["Scripture and oracles confirm it","The world's design proves a designer","They are in some manner visible, and as he honours his unseen soul, so he knows the gods by daily experience of their providence","Faith requires no reasons"], a:2,
        why:"'even to the very eye, they are in some manner visible' and 'by the daily experience that I have of their power and providence... I know certainly that they are.'" },
      { q:"You feel cheated because your career 'ended too soon' at a reorganisation. §27's stagecraft advice:",
        choices:["Protest to the board for a longer run","Measure your worth by acts still unplayed","Accept the dismissal as nature's fair release, since in life three acts is the whole play","Start a competing company out of spite"], a:2,
        why:"The same nature that brought thee in sends thee out 'as if the praetor should fairly dismiss him from the stage'; 'Go thy ways then well pleased and contented.'" }
    ] }
);
