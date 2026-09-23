/* Book Launchpad — The Tao Teh King, study guides (units 1-41). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "tao"; });
if (!_bk) throw new Error("data/canon.js must load before tao-a.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:1,
    summary:"The book opens by drawing the limit of language: any Tao that can be trodden is not the enduring and unchanging Tao, and any name that can be named is not the enduring name. Unnamed, the Tao is the Originator of heaven and earth; named, it is the Mother of all things — two aspects of one Mystery. The paradox is that the source of everything cannot be described, yet can be approached: always without desire we sound its deep mystery; with desire, only its outer fringe. Where the Mystery is deepest is the gate of all that is subtle and wonderful.",
    context:"The opening chapter: the Tao that can be named is not the eternal Tao — language meets its limit, and desire decides what we see.",
    keyVerses:[
      { ref:"Ch. 1", text:"The Tao that can be trodden is not the enduring and unchanging Tao. The name that can be named is not the enduring and unchanging name." },
      { ref:"Ch. 1", text:"(Conceived of as) having no name, it is the Originator of heaven and earth; (conceived of as) having a name, it is the Mother of all things." }
    ],
    takeaway:"Hold the nameless source and the named world as one Mystery; desire shows only the outer fringe — without desire the deep is sounded.",
    quiz:[
      { q:"When desire is always within us, what do we see of the Tao?", choices:["Its outer fringe is all that we shall see","We sound its deep mystery at once","The Mystery's deepest gate opens to us","It shows itself as the Mother of all things"], a:0, why:"The chapter's verse says that with desire always within us, its outer fringe is all we shall see; only without desire is the deep mystery sounded." },
      { q:"How does the chapter hold the unnamed and the named Tao together?", choices:["The named Tao must be abandoned for the unnamed one","They are two aspects of one reality that receive different names as development takes place","The unnamed Tao comes into being after the named one","Naming is a mistake that corrupts the original Tao"], a:2, why:"'Under these two aspects, it is really the same,' the chapter says; development brings the different names, and together they are called the Mystery." },
      { q:"Which practice does this opening chapter most directly recommend?", choices:["Studying names until each one matches the eternal Tao","Always being found without desire, so the deep mystery can be sounded","Climbing to heaven's gate to view the Mystery","Collecting subtle and wonderful things as signs of the Tao"], a:1, why:"The verse directs us: 'Always without desire we must be found, if its deep mystery we would sound.'" }
    ] },
  { n:2,
    summary:"Recognizing beauty creates the idea of ugliness; recognizing skill creates the idea of its lack. So opposites give birth to one another: existence and non-existence, difficulty and ease, length and shortness, height and lowness, musical notes, before and behind. The paradox — that every judgment summons its opposite — is resolved in the sage's practice: he manages affairs without doing anything and conveys instructions without speech. Things spring up, grow, and complete their processes with no claim of ownership, no expectation of reward, no resting in achievement. The work is done, and how no one can see — that is why the power never ceases.",
    context:"The second chapter: opposites arise together, and the sage answers with wordless teaching and actionless management.",
    keyVerses:[
      { ref:"Ch. 2", text:"Therefore the sage manages affairs without doing anything, and conveys his instructions without the use of speech." },
      { ref:"Ch. 2", text:"The work is done, but how no one can see; 'Tis this that makes the power not cease to be." }
    ],
    takeaway:"Judging creates its opposite; so act without contriving, teach without speech, and finish the work without resting in it as an achievement.",
    quiz:[
      { q:"In the chapter's pairs, what do length and shortness do?", choices:["Length abolishes shortness as a defect","Shortness is judged better than length","They fashion out the one the figure of the other","They remain unrelated until someone compares them"], a:2, why:"The chapter says length and shortness 'fashion out the one the figure of the other' — each is known through the other." },
      { q:"Why does knowing the beautiful create the idea of ugliness?", choices:["Because ugliness is simply beauty that has faded","Because fixing one quality in mind conjures its opposite by contrast","Because people grow tired of beauty quickly","Because beauty exists only where ugliness has been removed"], a:1, why:"All in the world know the beauty of the beautiful, 'and in doing this they have (the idea of) what ugliness is' — the judgment produces its pair." },
      { q:"Which habit best matches the sage described here?", choices:["Announcing each success so the credit is recorded","Refusing to begin any work that might fail","Teaching by long verbal instruction day and night","Accomplishing the work without resting in it as an achievement"], a:3, why:"The work is accomplished 'and there is no resting in it (as an achievement)' — that is why the sage's power does not cease." }
    ] },
  { n:3,
    summary:"Government by subtraction: not to value men of superior ability keeps the people from rivalry; not to prize hard-to-procure articles keeps them from theft; not to display exciting things keeps their minds from disorder. The sage empties minds, fills bellies, weakens wills, and strengthens bones; he keeps even the knowing from presuming to act. The paradox is that order comes not from more governing but from less stimulus, and the chapter resolves it plainly: in this abstinence from action, good order is universal. Whatever stirs craving is removed, so the craving itself never forms.",
    context:"The third chapter turns to government: remove prizes and display, and rivalry, theft, and restless craving dry up at the source.",
    keyVerses:[
      { ref:"Ch. 3", text:"Therefore the sage, in the exercise of his government, empties their minds, fills their bellies, weakens their wills, and strengthens their bones." },
      { ref:"Ch. 3", text:"When there is this abstinence from action, good order is universal." }
    ],
    takeaway:"Order comes by subtraction: remove prizes, rare goods, and exciting displays, and rivalry, theft, and disorder never arise.",
    quiz:[
      { q:"Which four things does the sage do in exercising government?", choices:["Rewards ability, prizes rare goods, excites desire, strengthens wills","Empties minds, fills bellies, weakens wills, and strengthens bones","Teaches knowledge, stores wealth, trains armies, builds walls","Publishes laws, appoints the able, punishes thieves, rewards the filial"], a:1, why:"The chapter lists them exactly: 'empties their minds, fills their bellies, weakens their wills, and strengthens their bones.'" },
      { q:"Why would not prizing hard-to-procure articles keep people from theft?", choices:["Theft follows desire, and desire follows from prizing the rare","Rare goods are guarded too well to steal","Thieves respect what a government does not catalogue","Without valuations there is no property to steal at all"], a:0, why:"Not prizing the difficult to procure is 'the way to keep them from becoming thieves' — no prized rarity, no stealing for it." },
      { q:"A manager wants less rivalry and scheming on a team. What does this chapter advise?", choices:["Reward the ablest members more lavishly to redirect competition","Post clear rules against rivalry and punish violations swiftly","Keep exciting prizes out of view so minds stay unclouded","Encourage open rivalry so it burns out on its own"], a:2, why:"Not showing people 'what is likely to excite their desires' keeps their minds from disorder — remove the display, and rivalry loses its fuel." }
    ] },
  { n:4,
    summary:"The Tao is like the emptiness of a vessel: in using it we must guard against all fulness, because its usefulness lies in never being filled. That empty depth is the Honoured Ancestor of all things, unfathomably old — 'I do not know whose son it is. It might appear to have been before God.' The practical form of emptiness is softness: blunt sharp points, unravel complications, attemper brightness, agree with obscurity. The paradox — the least substantial thing is the most enduring power — is resolved by the vessel image: what is empty can never be exhausted, and what brims must spill.",
    context:"The fourth chapter: the Tao as an empty vessel — deepest emptiness, oldest ancestor, employed by blunting sharpness and tempering brightness.",
    keyVerses:[
      { ref:"Ch. 4", text:"The Tao is (like) the emptiness of a vessel; and in our employment of it we must be on our guard against all fulness." },
      { ref:"Ch. 4", text:"I do not know whose son it is. It might appear to have been before God." }
    ],
    takeaway:"Stay empty like a vessel: blunt your sharp points, attemper your brightness, and guard against all fulness when you employ the Tao.",
    quiz:[
      { q:"What is the Tao compared to at the opening of the chapter?", choices:["The emptiness of a vessel","The sharpness of a blade","The brightness of the sun","The fulness of a harvest"], a:0, why:"'The Tao is (like) the emptiness of a vessel; and in our employment of it we must be on our guard against all fulness.'" },
      { q:"Why must we guard against fulness when employing the Tao?", choices:["Because fulness attracts thieves and rivals","Because fulness makes the vessel heavy to carry","Because fulness would end the very emptiness that makes the Tao work","Because fulness blinds the eyes to the Honoured Ancestor"], a:2, why:"The Tao works like a vessel's emptiness; brimming it would defeat its own use — hence the warning against all fulness." },
      { q:"How should you act on your sharpest talents, by this chapter?", choices:["Display them at their brightest to honour the ancestor","Attemper brightness, blunt sharp points, and come to terms with obscurity","Sharpen them constantly so they never dull","Keep them hidden until a moment of great need"], a:1, why:"The chapter's practice: 'We should blunt our sharp points... we should attemper our brightness,' not polish it for display." }
    ] },
  { n:5,
    summary:"Heaven and earth are not benevolent: they treat all things as the dogs of grass are dealt with — used without fondness, dropped without regret. The sages treat the people the same way, and the chapter insists this is not cruelty but impartial constancy. The image is the space between heaven and earth, a bellows: emptied, it loses no power; moved, it sends forth more air. Speech behaves the opposite way — much talk leads to swift exhaustion. The paradox, that indifference outlasts kindness, resolves into practice: guard your inner being and keep it free, like the vast unbiased space that never runs dry.",
    context:"The fifth chapter: heaven and earth are impartial as grass dogs, and the space between them breathes like a bellows.",
    keyVerses:[
      { ref:"Ch. 5", text:"Heaven and earth do not act from (the impulse of) any wish to be benevolent; they deal with all things as the dogs of grass are dealt with." },
      { ref:"Ch. 5", text:"'Tis emptied, yet it loses not its power; 'Tis moved again, and sends forth air the more." }
    ],
    takeaway:"Be impartial like heaven and earth: speak little, guard your inner being, and keep it free like the bellows that never loses power.",
    quiz:[
      { q:"To what does the chapter compare the space between heaven and earth?", choices:["A bellows","A mirror","A bowstring","A marketplace"], a:0, why:"'May not the space between heaven and earth be compared to a bellows?' — emptied it loses no power, moved it sends forth more." },
      { q:"What does it mean that heaven and earth do not act from a wish to be benevolent?", choices:["They help only those who deserve help","They deal with all things impartially, without favoritism","They are cruel to everything that lives","They have withdrawn from the world entirely"], a:1, why:"They treat all things 'as the dogs of grass are dealt with' — uniformly, without special affection — and the sages deal with the people the same way." },
      { q:"You are tempted to talk at length to prove your point. What does this chapter advise?", choices:["Repeat the point until it is exhausted","Speak faster to cover more ground","Invite others to argue the opposite side","Guard your inner being, keep it free, and speak little"], a:3, why:"'Much speech to swift exhaustion lead we see; your inner being guard, and keep it free.'" }
    ] },
  { n:6,
    summary:"A single six-line hymn: the valley spirit does not die, and it is the female mystery thus named. Its gate, from which all things first issued, is the root from which heaven and earth grew. The paradox is that the lowest and emptiest landscape feature — a valley, hollow and receptive — is the undying mother of everything, while what is high and full wears out. The chapter resolves it in its last lines: the power remains long and unbroken because it is used gently, without the touch of pain. Receptivity plus gentleness equals permanence.",
    context:"The sixth chapter: a six-line hymn to the valley spirit — the female mystery whose gate is the root of heaven and earth.",
    keyVerses:[
      { ref:"Ch. 6", text:"The valley spirit dies not, aye the same; The female mystery thus do we name." },
      { ref:"Ch. 6", text:"Long and unbroken does its power remain, Used gently, and without the touch of pain." }
    ],
    takeaway:"Stay low and hollow like the valley: what is receptive, and used gently without the touch of pain, never dies out.",
    quiz:[
      { q:"What image opens this chapter?", choices:["A sharpened sword","The valley spirit","A full vessel","The rising sun"], a:1, why:"The chapter begins: 'The valley spirit dies not, aye the same; the female mystery thus do we name.'" },
      { q:"Why can the valley spirit be called the root of heaven and earth?", choices:["Valleys are the oldest places on the earth","Rain gathers in valleys before rivers reach the sea","Heaven and earth were literally formed in a valley","Its gate is where all things at first issued forth"], a:3, why:"Its gate, 'from which at first they issued forth, is called the root from which grew heaven and earth.'" },
      { q:"Which action best expresses 'used gently, and without the touch of pain'?", choices:["Applying steady, forceless effort that strains nothing","Resting completely until strength returns unaided","Working in short violent bursts with long pauses","Enduring hardship silently as the price of power"], a:0, why:"The power 'long and unbroken does remain' because it is used gently — forceless effort is what keeps it unbroken." }
    ] },
  { n:7,
    summary:"Heaven is long-enduring and earth continues long for one reason: they do not live of, or for, themselves. The sage copies the pattern and states the paradox twice — he puts his own person last, and it is found in the foremost place; he treats his person as if it were foreign to him, and yet it is preserved. The chapter resolves the riddle in its closing question: because he has no personal and private ends, such ends are realised. Self-forgetting is not self-erasure but the only reliable way the self is kept.",
    context:"The seventh chapter: heaven and earth endure by not living for themselves; the sage puts his person last and finds it foremost.",
    keyVerses:[
      { ref:"Ch. 7", text:"The reason why heaven and earth are able to endure and continue thus long is because they do not live of, or for, themselves." },
      { ref:"Ch. 7", text:"Therefore the sage puts his own person last, and yet it is found in the foremost place; he treats his person as if it were foreign to him, and yet that person is preserved." }
    ],
    takeaway:"Put yourself last and treat your person as foreign: what you do not live for is what is preserved and realised.",
    quiz:[
      { q:"Why do heaven and earth endure so long, by the chapter's account?", choices:["Because they do not live of, or for, themselves","Because they are vaster than all creatures","Because they renew themselves each season","Because the sages protect them"], a:0, why:"The chapter states it directly: heaven and earth are able to endure 'because they do not live of, or for, themselves.'" },
      { q:"How does the sage's own person end up preserved and foremost?", choices:["By defending it against every rival","By storing up wealth and honours","By his putting it last and treating it as foreign","By devoting every day to its improvement"], a:2, why:"He puts his person last, 'and yet it is found in the foremost place'; treating it as foreign, 'yet that person is preserved.'" },
      { q:"You want a lasting place in a community. What does this chapter advise?", choices:["Make sure your contributions are personally credited","Give up private ends and serve, and let such ends be realised","Keep your plans to yourself until you are secure","Compete for the foremost place before others take it"], a:1, why:"'Is it not because he has no personal and private ends, that therefore such ends are realised?' — self-forgetting is the lasting route." }
    ] },
  { n:8,
    summary:"The highest excellence is like water: it benefits all things and, without striving, occupies the low place which all men dislike — and that is why its way is near to the Tao. The chapter then locates excellence across life: a residence in the suitability of its place, the mind in abysmal stillness, associations with the virtuous, government in good order, affairs in ability, movement in timeliness. The paradox — the despised low place is the highest position — resolves in the last line: when such a one does not wrangle about his low position, no one finds fault with him.",
    context:"The eighth chapter: the highest excellence is like water — benefiting all things, seeking the low place all men dislike.",
    keyVerses:[
      { ref:"Ch. 8", text:"The highest excellence is like (that of) water. The excellence of water appears in its benefiting all things, and in its occupying, without striving (to the contrary), the low place which all men dislike." },
      { ref:"Ch. 8", text:"And when (one with the highest excellence) does not wrangle (about his low position), no one finds fault with him." }
    ],
    takeaway:"Be like water: benefit all things, take the low place without wrangling, and let ability and timeliness carry your affairs.",
    quiz:[
      { q:"In what does the excellence of water appear, according to the chapter?", choices:["In its force when frozen into floods","In rising to the highest ground","In benefiting all things and occupying the low place without striving","In reflecting the sky wherever it lies"], a:2, why:"'The excellence of water appears in its benefiting all things, and in its occupying, without striving (to the contrary), the low place which all men dislike.'" },
      { q:"Why is water's way said to be near to that of the Tao?", choices:["Water and the Tao both flow in rivers","Water serves everything while taking the position others refuse","Water never changes its nature","Water can dissolve every obstacle"], a:1, why:"Water benefits all things and takes the low place unstriven — that uncompetitive service is why 'its way is near to (that of) the Tao.'" },
      { q:"Two roles open: a prominent title and a useful low-visibility job. What does this chapter counsel?", choices:["Take the title; positions determine excellence","Weigh salaries and choose the richer one","Alternate between the roles each quarter","Take the useful job and do not wrangle about position"], a:3, why:"The excellent occupy 'the low place which all men dislike,' and when they do not wrangle about it, no one finds fault with him." }
    ] },
  { n:9,
    summary:"Four warnings against carrying anything at full stretch: better to leave a vessel unfilled than to carry it full; a point kept feeling sharp cannot long preserve its edge; gold and jade filling a hall cannot be kept safe; wealth and honours that breed arrogancy bring evil on their possessor. The paradox is that the moment of greatest success is the moment of greatest danger, and the chapter resolves it with a rule of timing: when the work is done and one's name is becoming distinguished, to withdraw into obscurity is the way of Heaven. Fullness spills; stopping preserves.",
    context:"The ninth chapter: against fullness — the blunted blade, the unsafe hall of jade, and withdrawal as the way of Heaven.",
    keyVerses:[
      { ref:"Ch. 9", text:"When gold and jade fill the hall, their possessor cannot keep them safe. When wealth and honours lead to arrogancy, this brings its evil on itself." },
      { ref:"Ch. 9", text:"When the work is done, and one's name is becoming distinguished, to withdraw into obscurity is the way of Heaven." }
    ],
    takeaway:"Do not carry the cup brimming: when the work is done and your name grows, withdrawing into obscurity is the way of Heaven.",
    quiz:[
      { q:"What happens to a point that is kept feeling sharp, in the chapter's image?", choices:["It cannot long preserve its sharpness","It cuts more cleanly than before","It turns into a weapon of evil omen","It becomes the pattern for all tools"], a:0, why:"'If you keep feeling a point that has been sharpened, the point cannot long preserve its sharpness.'" },
      { q:"Why is withdrawing into obscurity called 'the way of Heaven'?", choices:["Heaven hides its work so no one can copy it","Retiring at the peak avoids the fall that fullness invites","Heaven rewards those who abandon their achievements","Obscurity is the natural state of all things"], a:2, why:"Fullness — the filled vessel, the hall of jade, arrogancy from honours — brings its evil on itself; withdrawing when the work is done steps off that path." },
      { q:"You have just achieved your greatest success and fame is growing. What does this chapter advise?", choices:["Press the advantage while attention lasts","Withdraw modestly rather than display the success","Convert the fame into wealth quickly","Appoint successors and retire from all work"], a:1, why:"'When the work is done, and one's name is becoming distinguished, to withdraw into obscurity is the way of Heaven.'" }
    ] },
  { n:10,
    summary:"Self-mastery in three movements: hold the intelligent and animal souls in one embrace so they do not separate; give undivided attention to the vital breath and bring it to utmost pliancy, becoming as a tender babe; cleanse away the mysterious sights of imagination and become without a flaw. The same pattern governs rule: can one love the people and govern without purposeful action, like a female bird at the gates? The chapter closes with the paradox of the Tao itself: it produces and nourishes all, yet does not claim, boast, or control — the mysterious Quality.",
    context:"The tenth chapter: self-mastery as embrace and pliancy, and the Tao's mysterious quality — producing all, controlling none.",
    keyVerses:[
      { ref:"Ch. 10", text:"When one gives undivided attention to the (vital) breath, and brings it to the utmost degree of pliancy, he can become as a (tender) babe." },
      { ref:"Ch. 10", text:"it produces them and does not claim them as its own; it does all, and yet does not boast of it; it presides over all, and yet does not control them." }
    ],
    takeaway:"Produce, nourish, and do not control: the mysterious Quality is doing all without claiming, boasting, or presiding as master.",
    quiz:[
      { q:"What can the one become who brings the vital breath to the utmost degree of pliancy?", choices:["A vessel without flaw","As a tender babe","The Honoured Ancestor","A female bird"], a:1, why:"'When one gives undivided attention to the (vital) breath, and brings it to the utmost degree of pliancy, he can become as a (tender) babe.'" },
      { q:"What does the chapter call the Tao's producing without claiming, doing all without boasting, presiding without controlling?", choices:["The way of Heaven","The pattern of the sages","The hidden spring","The mysterious Quality"], a:3, why:"The closing line names it: 'This is what is called The mysterious Quality (of the Tao).'" },
      { q:"Your project succeeds and you could now direct everything it does. What does this chapter recommend?", choices:["Claim ownership to protect the work","Publicly list your contributions each quarter","Preside over all without controlling them","Hand control to the most ambitious member"], a:2, why:"The Tao's model: 'it produces them and does not claim them as its own... it presides over all, and yet does not control them.'" }
    ] },
  { n:11,
    summary:"Three images prove that usefulness lives in emptiness: thirty spokes unite in one nave, but the wheel's use depends on the empty space for the axle; clay is fashioned into vessels, but their use depends on the hollow inside; doors and windows are cut out to form an apartment, but its use depends on the empty space within. Hence the chapter's conclusion: what has positive existence serves for profitable adaptation, and what has not serves for actual usefulness. The paradox — the visible solid is only the frame for an invisible function — is resolved by seeing absence as the working part.",
    context:"The eleventh chapter: three images of the useful void — the wheel's hub, the vessel's hollow, the room's cut-out doors.",
    keyVerses:[
      { ref:"Ch. 11", text:"The thirty spokes unite in the one nave; but it is on the empty space (for the axle), that the use of the wheel depends." },
      { ref:"Ch. 11", text:"Therefore, what has a (positive) existence serves for profitable adaptation, and what has not that for (actual) usefulness." }
    ],
    takeaway:"Cut the windows and keep the hub hollow: what exists adapts, but usefulness itself lives in the empty space.",
    quiz:[
      { q:"In the wheel image, what does the wheel's use depend on?", choices:["The empty space for the axle","The number of the spokes","The strength of the rim","The carver's reputation"], a:0, why:"'The thirty spokes unite in the one nave; but it is on the empty space (for the axle), that the use of the wheel depends.'" },
      { q:"How does the chapter relate existence and usefulness?", choices:["Usefulness is a property of solid existence alone","Existence adapts profitably, but actual usefulness belongs to what is not there","Existence and usefulness are the same thing","Usefulness must be added to existence from outside"], a:1, why:"The conclusion: 'what has a (positive) existence serves for profitable adaptation, and what has not that for (actual) usefulness.'" },
      { q:"Your calendar is packed wall to wall. What does this chapter suggest?", choices:["Pack tighter; empty time is wasted time","Schedule every gap with meetings","Leave real empty space — it is what makes the rest usable","Move all tasks to the morning hours"], a:3, why:"As the room's use depends on the space within, a schedule's use depends on the space left open in it." }
    ] },
  { n:12,
    summary:"Excess sensation destroys the senses it feeds: the five hues take the eyes' sight, the five notes make the ears deaf, the five flavours deprive the mouth of taste; chariot racing and wild hunting madden the mind, and rare and strange objects bend conduct toward evil. The paradox is that seeking more feeling yields less perception. The sage resolves it by choosing: he satisfies the craving of the belly, not the insatiable longing of the eyes — puts the latter from him and seeks the former. Plain nourishment quiets appetite; spectacle only sharpens it.",
    context:"The twelfth chapter: sensation overloads the senses it excites; the sage satisfies the belly, not the eyes.",
    keyVerses:[
      { ref:"Ch. 12", text:"Colour's five hues from th' eyes their sight will take; Music's five notes the ears as deaf can make;" },
      { ref:"Ch. 12", text:"Therefore the sage seeks to satisfy (the craving of) the belly, and not the (insatiable longing of the) eyes." }
    ],
    takeaway:"Feed what nourishes, not what dazzles: the belly's craving satisfies; the eyes' insatiable longing numbs the senses it excites.",
    quiz:[
      { q:"According to the chapter, what do music's five notes do?", choices:["Sharpen the hearing of the trained","Distinguish sweet sounds from harsh","Make the ears as deaf","Restore the mind to stillness"], a:2, why:"'Music's five notes the ears as deaf can make' — excess sensation deadens the very sense it addresses." },
      { q:"Why does the sage satisfy the belly and not the eyes?", choices:["The belly is easier to fill than the eyes","The eyes' longing is insatiable, while plain nourishment quiets craving","The belly belongs to the body, the eyes to the mind","The eyes were made for darkness, not colour"], a:1, why:"He 'seeks to satisfy (the craving of) the belly, and not the (insatiable longing of the) eyes' — appetite fed by spectacle only grows." },
      { q:"You feel overstimulated by feeds, shows, and shopping. What does this chapter advise?", choices:["Put rare and strange objects from you and return to plain sufficiency","Curate finer, rarer objects to refine taste","Schedule strict hours for each pleasure","Indulge fully once, then abstain completely"], a:0, why:"'Objects rare and strange, sought for, men's conduct will to evil change' — the sage puts them from him and satisfies the belly instead." }
    ] },
  { n:13,
    summary:"Favour and disgrace are equally to be feared: getting favour brings apprehension of losing it, and losing it brings fear of still greater calamity. Honour and calamity are both 'personal conditions' because what makes me liable to great calamity is having the body which I call myself; without it, what calamity could come? The paradox — the self is both our exposure and our treasure — resolves into the chapter's criterion for rulers: only one who honours and loves the world as he honours and loves his own person is fit to be entrusted with governing it.",
    context:"The thirteenth chapter: favour and disgrace are equally feared, because the body we call ours is the seat of calamity.",
    keyVerses:[
      { ref:"Ch. 13", text:"The getting that (favour) leads to the apprehension (of losing it), and the losing it leads to the fear of (still greater calamity)" },
      { ref:"Ch. 13", text:"What makes me liable to great calamity is my having the body (which I call myself); if I had not the body, what great calamity could come to me?" }
    ],
    takeaway:"Hold favour and disgrace alike, and your body as no fortress: a self held lightly is fit to be trusted with much.",
    quiz:[
      { q:"In this chapter, favour and disgrace are said to be what?", choices:["Rewards worth seeking equally","Marks of the sage's equanimity","Equally to be feared","Unrelated to the person"], a:2, why:"The chapter opens: 'Favour and disgrace would seem equally to be feared.'" },
      { q:"Why is having a body what makes great calamity possible?", choices:["A self that can be favoured and disgraced is a self that can be hurt","Only bodies can be punished by the state","The body craves the honours that bring disaster","Bodies decay, and decay is the great calamity"], a:0, why:"'What makes me liable to great calamity is my having the body (which I call myself); if I had not the body, what great calamity could come to me?'" },
      { q:"You have just been publicly honoured and feel strangely anxious. What does this chapter advise?", choices:["Seek a second honour to secure the first","Refuse all future honours immediately","Publish the honour widely so it cannot be withdrawn","Hold the favour lightly, as you hold your own person"], a:3, why:"Getting favour leads to 'the apprehension (of losing it)' — the cure is regarding honour and calamity as the same kind of personal condition." }
    ] },
  { n:14,
    summary:"The senses all fail before the Tao: we look and do not see it ('the Equable'), listen and do not hear it ('the Inaudible'), grasp and do not hold it ('the Subtle'). These three cannot be described, so they are blended into The One — not bright above, not obscure below, ceaseless yet unnameable, returning to nothing: the Form of the Formless. We meet it and see no front; follow it and see no back. The paradox of pursuing an unseeable guide resolves in one method: lay hold of the Tao of old to direct the things of the present.",
    context:"The fourteenth chapter: the Tao unseen, unheard, ungraspable — The One without front or back, known by its old clue.",
    keyVerses:[
      { ref:"Ch. 14", text:"We look at it, and we do not see it, and we name it 'the Equable.' We listen to it, and we do not hear it, and we name it 'the Inaudible.'" },
      { ref:"Ch. 14", text:"We meet it and do not see its Front; we follow it, and do not see its Back." }
    ],
    takeaway:"The Tao has no front or back: stop demanding a shape, and lay hold of the Tao of old to direct the present.",
    quiz:[
      { q:"What three names does the chapter give the Tao through the senses?", choices:["The Great, the Passing, the Returning","The Equable, the Inaudible, the Subtle","The Originator, the Mother, the Mystery","The Front, the Back, the One"], a:1, why:"Not seen, it is named 'the Equable'; not heard, 'the Inaudible'; not grasped, 'the Subtle.'" },
      { q:"How can something ceaseless in action yet return and become nothing?", choices:["It rests after every cycle of action","Action and rest alternate like day and night","It is the Form of the Formless, never present as an object","Its action is an illusion of the senses"], a:2, why:"The chapter names it 'the Form of the Formless, and the Semblance of the Invisible' — ceaseless yet never a thing that can be held." },
      { q:"How does the chapter say we should use the Tao practically?", choices:["Lay hold of the Tao of old to direct the things of the present day","Wait for the Tao to appear before acting","Describe the Tao precisely so others can follow","Follow its front when meeting and its back when following"], a:0, why:"Knowing it as it was in the beginning while directing the present 'is called (unwinding) the clue of Tao.'" }
    ] },
  { n:15,
    summary:"The skilful masters of the Tao of old were deep enough to elude knowledge, and the chapter attempts their portrait: shrinking like wading a winter stream, irresolute like those afraid of all around, grave like a guest, evanescent like melting ice, unpretentious like unshaped wood, vacant like a valley, dull like muddy water. The paradox — that such hesitancy is mastery — resolves in the method: who can make muddy water clear? Let it be still and it gradually clears; let movement go on and rest gradually arises. Because they do not wish to be full of themselves, they can afford to seem worn.",
    context:"The fifteenth chapter: portraits of the ancient masters — winter waders, guests, melting ice — and muddy water that clears by stillness.",
    keyVerses:[
      { ref:"Ch. 15", text:"Who can (make) the muddy water (clear)? Let it be still, and it will gradually become clear." },
      { ref:"Ch. 15", text:"They who preserve this method of the Tao do not wish to be full (of themselves)." }
    ],
    takeaway:"Stop stirring the muddy water: stillness clears it, and those not full of themselves can afford to seem worn and worn-out.",
    quiz:[
      { q:"In winter, the old masters of the Tao looked like whom?", choices:["Guests at a festival","Hunters on the trace","Fishermen in thawing ice","Those who wade through a stream"], a:3, why:"'Shrinking looked they like those who wade through a stream in winter' — the first of the portrait's similes." },
      { q:"How does the chapter answer 'Who can make the muddy water clear?'", choices:["Let it be still, and it will gradually become clear","Pour clear water into it","Strain it through unshaped wood","Stir it until the mud settles evenly"], a:0, why:"The method: 'Let it be still, and it will gradually become clear' — forcing clarity only stirs more mud." },
      { q:"A conflict has muddied your team and everyone demands a fix today. What does this chapter advise?", choices:["Impose a settlement before feelings harden","Be still and let the matter gradually become clear","Restart the project from the beginning","Add a new rule for every complaint"], a:2, why:"Muddy water clears by stillness, and rest arises when movement is allowed to go on — not by forcing a resolution." }
    ] },
  { n:16,
    summary:"Vacancy is to be brought to the utmost degree and stillness guarded with unwearying vigour, because all things alike go through their processes of activity and then return to their root. That return is called stillness — a reporting that each thing has fulfilled its appointed end — and it is the regular, unchanging rule. To know the rule is to be intelligent; not to know it leads to wild movements and evil issues. The chapter builds a ladder from knowing to enduring: capacity, forbearance, community of feeling, kingliness, heaven-likeness, the Tao — and life exempt from decay.",
    context:"The sixteenth chapter: utmost vacancy and guarded stillness, all things returning to their root — the unchanging rule that ends decay.",
    keyVerses:[
      { ref:"Ch. 16", text:"The (state of) vacancy should be brought to the utmost degree, and that of stillness guarded with unwearying vigour." },
      { ref:"Ch. 16", text:"To know that unchanging rule is to be intelligent; not to know it leads to wild movements and evil issues." }
    ],
    takeaway:"Bring vacancy to the utmost and guard stillness: everything returns to its root, and knowing that rule, you endure without decay.",
    quiz:[
      { q:"When plants have displayed their luxuriant growth, what do we see them do?", choices:["Return to their root","Shed their seeds and die","Climb toward heaven","Change into stillness without end"], a:0, why:"'When things (in the vegetable world) have displayed their luxuriant growth, we see each of them return to its root.'" },
      { q:"Why does not knowing the unchanging rule lead to wild movements and evil issues?", choices:["Rules must be memorized to be obeyed","Without seeing the return to stillness, every change looks like an emergency","The rule punishes those who ignore it","Nature withdraws its blessing from the ignorant"], a:2, why:"To know the returning is 'to be intelligent; not to know it leads to wild movements and evil issues' — one who misses the return fights the cycle." },
      { q:"Everything around you is peaking and churning at once. What does this chapter counsel?", choices:["Ride the peak and expand with it","Keep stillness, and remember each thing is returning to its root","Cut back everything to force a plateau","Exit entirely before the decline begins"], a:1, why:"Vacancy to the utmost and stillness guarded let you watch the processes without being swept into them." }
    ] },
  { n:17,
    summary:"A four-grade history of rule: in the highest antiquity the people did not know there were rulers; in the next age they loved and praised them; then they feared them; then they despised them. The decline has a cause: when faith in the Tao was deficient in the rulers, a want of faith ensued in the people. The paradox — the greatest rule is invisible — is resolved in the closing portrait: those earliest rulers, irresolute and reticent, weighing their words, finished their work successfully while the people all said, 'We are as we are, of ourselves!'",
    context:"The seventeenth chapter: four grades of rulers, down from the unseen best — whose people say they did it themselves.",
    keyVerses:[
      { ref:"Ch. 17", text:"In the highest antiquity, (the people) did not know that there were (their rulers)." },
      { ref:"Ch. 17", text:"Their work was done and their undertakings were successful, while the people all said, 'We are as we are, of ourselves!'" }
    ],
    takeaway:"Rule so lightly and weigh your words so carefully that the people say, 'We are as we are, of ourselves!'",
    quiz:[
      { q:"In the age after the highest antiquity, how did people regard their rulers?", choices:["They feared and despised them","They loved them and praised them","They did not know there were rulers","They imitated them in everything"], a:1, why:"'In the next age they loved them and praised them. In the next they feared them; in the next they despised them.'" },
      { q:"Why does deficient faith in the rulers breed want of faith among the people?", choices:["The people imitate whatever rulers model","Faith must be commanded to be kept","Rulers publish the people's failures first","Trust is reciprocal: untrustworthy rule teaches distrust"], a:3, why:"'When faith (in the Tao) was deficient (in the rulers) a want of faith in them ensued (in the people)' — faith runs both ways." },
      { q:"You lead a team that keeps waiting for your instructions. What does this chapter aim at?", choices:["Give instructions faster to build trust","Rotate leadership so everyone governs","Lead with a light touch until they say they did it themselves","Publish your goals and demand alignment"], a:2, why:"The best rulers' work was done successfully 'while the people all said, We are as we are, of ourselves!'" }
    ] },
  { n:18,
    summary:"A compact diagnosis of moral decline: when the Great Tao ceased to be observed, benevolence and righteousness came into vogue; then wisdom and shrewdness appeared, and great hypocrisy ensued. The pattern repeats in the family and the state: when harmony no longer prevailed through the six kinships, filial sons found their manifestation; when the states and clans fell into disorder, loyal ministers appeared. The paradox — celebrating a virtue is evidence the virtue has become scarce — is resolved by reading each named virtue backward, as the symptom of the failure that called it into being.",
    context:"The eighteenth chapter: the diagnosis — benevolence, filial piety, and loyalty are named only when the Tao and harmony have failed.",
    keyVerses:[
      { ref:"Ch. 18", text:"When the Great Tao (Way or Method) ceased to be observed, benevolence and righteousness came into vogue." },
      { ref:"Ch. 18", text:"when the states and clans fell into disorder, loyal ministers appeared." }
    ],
    takeaway:"When a virtue must be announced, its ground has failed: treat every praised virtue as the symptom of a loss.",
    quiz:[
      { q:"What came into vogue when the Great Tao ceased to be observed?", choices:["Benevolence and righteousness","Filial sons and loyal ministers","Wisdom and shrewdness","Hypocrisy and disorder"], a:0, why:"'When the Great Tao (Way or Method) ceased to be observed, benevolence and righteousness came into vogue.'" },
      { q:"In this chapter, what does the appearance of loyal ministers indicate?", choices:["That the states and clans have fallen into disorder","That education in virtue is succeeding","That the six kinships are harmonious","That the Great Tao has returned"], a:1, why:"'When the states and clans fell into disorder, loyal ministers appeared' — the virtue is the symptom of the failure." },
      { q:"Your organization begins handing out public integrity awards. What does this chapter imply you should ask?", choices:["Who should judge the nominations","What breakdown made praising virtue necessary","How to make the awards more frequent","Whether the awards should include a prize"], a:2, why:"Virtues find their manifestation only after harmony fails — public praise of loyalty signals the disorder it mourns." }
    ] },
  { n:19,
    summary:"The prescription matches the diagnosis: renounce sageness and discard wisdom, and the people benefit a hundredfold; renounce benevolence and discard righteousness, and the people again become filial and kindly; renounce artful contrivances and scheming for gain, and there are no thieves nor robbers. The paradox is that the famous cures — public morality, cleverness, profit — are themselves the disease, veiling a want of worth behind admired names. The closing verse resolves it: simple views and courses plain and true would selfish ends and many lusts eschew. Subtract the ornament, and the underlying health returns.",
    context:"The nineteenth chapter: the prescription — renounce sageness, benevolence, and contrivance, and return to plain views and plain courses.",
    keyVerses:[
      { ref:"Ch. 19", text:"If we could renounce our sageness and discard our wisdom, it would be better for the people a hundredfold." },
      { ref:"Ch. 19", text:"But simple views, and courses plain and true Would selfish ends and many lusts eschew." }
    ],
    takeaway:"Drop the ornaments — sageness, benevolence, clever contrivance: simple views and courses plain and true starve selfish ends.",
    quiz:[
      { q:"By the chapter, what would renouncing benevolence and discarding righteousness restore?", choices:["Sageness and wisdom in due season","The people's love of learning","The people becoming again filial and kindly","Artful contrivances turned to good use"], a:2, why:"'If we could renounce our benevolence and discard our righteousness, the people would again become filial and kindly.'" },
      { q:"Why would discarding sageness and wisdom be 'better for the people a hundredfold'?", choices:["Wisdom breeds rivalry and hypocrisy among them","Sageness was an imported doctrine","The wise taxed the people's grain","Learning keeps people from their fields"], a:0, why:"Chapter 18 traced the line: after the Tao failed, 'appeared wisdom and shrewdness, and there ensued great hypocrisy.'" },
      { q:"Your project is drowning in clever frameworks and positioning. What does this chapter suggest?", choices:["Add one more elegant framework to unify them","Commission an audit of all the frameworks","Hire consultants to rank the ideas","Trade artful contrivance for simple, plain, true courses"], a:3, why:"The three renunciations end in plainness: 'simple views, and courses plain and true would selfish ends and many lusts eschew.'" }
    ] },
  { n:20,
    summary:"The loneliest chapter: renounce learning and troubles end, yet the gulf between the ready 'yes' and the refusal is as wide as its issues are grave. The multitude look satisfied and pleased, as if enjoying a full banquet or mounted on a tower in spring; the speaker alone is listless, like an infant not yet smiled, dejected, as if having no home, dull and confused, drifting like the sea, like a rude borderer while all men have their spheres of action. The paradox — the sage as fool among the clever — resolves in the last line: he is different from other men, but he values the nursing-mother, the Tao.",
    context:"The twentieth chapter: the sage alone among a satisfied multitude — dull, forlorn, different — yet nursing the Tao.",
    keyVerses:[
      { ref:"Ch. 20", text:"The multitude of men look satisfied and pleased; as if enjoying a full banquet, as if mounted on a tower in spring." },
      { ref:"Ch. 20", text:"(Thus) I alone am different from other men, but I value the nursing-mother (the Tao)." }
    ],
    takeaway:"Accept looking listless and forlorn among the satisfied: hold to the nursing-mother, the Tao, and let the crowd keep its banquet.",
    quiz:[
      { q:"What is the multitude like, in the chapter's simile?", choices:["Travelers crossing a winter stream","Farmers after the harvest","Guests at a full banquet, or mounted on a tower in spring","Soldiers drawn up for battle"], a:2, why:"'The multitude of men look satisfied and pleased; as if enjoying a full banquet, as if mounted on a tower in spring.'" },
      { q:"How does the speaker finally account for being so different from other men?", choices:["Other men are simply mistaken about him","He values the nursing-mother, the Tao","He is waiting for his sphere of action","His dullness is a disguise for wisdom"], a:1, why:"The closing line resolves the strangeness: '(Thus) I alone am different from other men, but I value the nursing-mother (the Tao).'" },
      { q:"Everyone around you competes to seem bright and quick. What does this chapter endorse?", choices:["Wearing the look of a stupid man and holding to the Tao","Studying their manner until you can match it","Announcing your principles so they are known","Withdrawing from all company into solitude"], a:0, why:"'Ordinary men look bright and intelligent, while I alone seem to be benighted' — and the speaker accepts it, nursing the Tao." }
    ] },
  { n:21,
    summary:"A hymn to the invisible source: the grandest forms of active force come from the Tao, their only source, though our sight and touch both miss it. The paradox is stated in mirror lines — eluding sight and touch, the forms of things all crouch in it, and their semblances are there all right. What is most obscure is most packed with reality: profound, dark, obscure, it holds the essences from which truth unfolds, now as of old, its name passing not away. The closing line grounds knowledge: how does he know it of all existing beauties? By this nature of the Tao.",
    context:"The twenty-first chapter: a hymn to the Tao as the dark, elusive source where the forms and essences of things endure.",
    keyVerses:[
      { ref:"Ch. 21", text:"The grandest forms of active force From Tao come, their only source." },
      { ref:"Ch. 21", text:"Eluding sight, eluding touch, The forms of things all in it crouch;" }
    ],
    takeaway:"Trust the unseen source: the forms of things crouch in the dark Tao, and its name passes not away.",
    quiz:[
      { q:"From where do the grandest forms of active force come?", choices:["From the essence of visible things","From heaven's constant flow","From the semblances of things","From Tao, their only source"], a:3, why:"'The grandest forms of active force from Tao come, their only source.'" },
      { q:"How can visible forms crouch in something that eludes sight and touch?", choices:["Their essences endure in the obscure Tao before they appear","The forms are illusions projected onto the Tao","Crouch is a metaphor for decay","Light carries the forms into the dark"], a:0, why:"'Eluding sight, eluding touch, the forms of things all in it crouch... Things essences all there endure.'" },
      { q:"Your plans exist only faintly as yet. What does this chapter encourage?", choices:["Abandon plans the senses cannot confirm","Count on the unseen source: the semblances of things are already there","Force the forms into visibility now","Copy the forms of things that already exist"], a:1, why:"The Tao holds the forms and their semblances 'all right,' and enfolds the truth 'of what, when seen, shall then be told.'" }
    ] },
  { n:22,
    summary:"The chapter of reversals: the partial becomes complete; the crooked, straight; the empty, full; the worn out, new. He whose desires are few gets them; he whose desires are many goes astray. The sage holds the one thing — humility — and shows it to all the world: free from self-display he shines, from self-assertion he is distinguished, from self-boasting his merit is acknowledged, from self-complacency he gains superiority. The paradox is that renouncing each claim wins exactly what the claim sought, resolved in the cause: because he is free from striving, no one in the world is able to strive with him.",
    context:"The twenty-second chapter: the partial becomes complete — the sage's humility, four refusals, and freedom from striving.",
    keyVerses:[
      { ref:"Ch. 22", text:"The partial becomes complete; the crooked, straight; the empty, full; the worn out, new." },
      { ref:"Ch. 22", text:"It is because he is thus free from striving that therefore no one in the world is able to strive with him." }
    ],
    takeaway:"Want little and claim nothing: the partial becomes complete, and freedom from striving leaves no one able to strive with you.",
    quiz:[
      { q:"In the chapter's list of reversals, what does the worn out become?", choices:["New","Full","Straight","Complete"], a:0, why:"'The partial becomes complete; the crooked, straight; the empty, full; the worn out, new.'" },
      { q:"Why is no one in the world able to strive with the sage?", choices:["His humility disarms all criticism","He is stronger than every rival","Because he is free from striving, leaving nothing to contend against","The Tao punishes those who oppose him"], a:2, why:"'It is because he is thus free from striving that therefore no one in the world is able to strive with him.'" },
      { q:"You are tempted to oversell your work in a review meeting. What does this chapter advise?", choices:["Let the strongest claims carry the day","Avoid self-display and self-boasting; let merit be acknowledged","Compare yourself favourably to your peers","Prepare answers to every objection"], a:1, why:"The sage is 'free from self-display, and therefore he shines... from self-boasting, and therefore his merit is acknowledged.'" }
    ] },
  { n:23,
    summary:"Nature cannot sustain its own storms: a violent wind does not last a whole morning, a sudden rain not a whole day — and these are owing to Heaven and Earth; how much less can man keep up spasmodic effort! Hence abstaining from speech marks him who obeys the spontaneity of his nature. The chapter's social paradox is that agreement precedes attainment: those pursuing the Tao, those pursuing its manifestation, even those failing in both, all find happiness in it; only insufficient faith on one side breeds want of faith on the other. Quiet constancy, not gale-force zeal, is what lasts.",
    context:"The twenty-third chapter: violent winds end by morning; nature cannot keep spasms, so keep the Tao as quiet, constant business.",
    keyVerses:[
      { ref:"Ch. 23", text:"A violent wind does not last for a whole morning; a sudden rain does not last for the whole day." },
      { ref:"Ch. 23", text:"(But) when there is not faith sufficient (on his part), a want of faith (in him) ensues (on the part of the others)." }
    ],
    takeaway:"Gale-force efforts die by noon: abstain from speech, keep faith sufficient, and let quiet constancy outlast every storm.",
    quiz:[
      { q:"To whom does the chapter owe the violent wind and the sudden rain?", choices:["To the sages of old","To Heaven and Earth","To the spontaneity of man's nature","To the deficiency of faith"], a:1, why:"'To whom is it that these (two) things are owing? To Heaven and Earth.'" },
      { q:"What limit does nature itself place on spasmodic effort?", choices:["Effort fails only when the seasons change","Wind and rain renew themselves each day","Man alone can sustain what heaven cannot","Even heaven and earth cannot make it last long"], a:3, why:"If Heaven and Earth cannot make such spasmodic actings last, 'how much less can man!'" },
      { q:"You plan to overhaul your habits in one intense weekend. What does this chapter warn?", choices:["Sudden violent efforts do not last; make the Tao your steady business","Weekends are the natural time for renewal","Only great efforts produce lasting change","Habits fail unless every trigger is removed"], a:0, why:"'A violent wind does not last for a whole morning' — nature's example argues for constancy over spasms." }
    ] },
  { n:24,
    summary:"One image carries the moral: he who stands on tiptoes does not stand firm; he who stretches his legs does not walk easily. Strained poses defeat themselves, and self-display is one of them — he who displays himself does not shine; who asserts his own views is not distinguished; who vaunts himself does not find his merit acknowledged; who is self-conceited has no superiority allowed him. The paradox — exaggeration nullifies the thing exaggerated — is settled by the verdict: such conditions are like remnants of food or a tumour, which all dislike, so followers of the Tao do not adopt them.",
    context:"The twenty-fourth chapter: tiptoes and stretched legs — display, assertion, and boasting are tumours the follower of the Tao will not adopt.",
    keyVerses:[
      { ref:"Ch. 24", text:"He who stands on his tiptoes does not stand firm; he who stretches his legs does not walk (easily)." },
      { ref:"Ch. 24", text:"he who displays himself does not shine; he who asserts his own views is not distinguished; he who vaunts himself does not find his merit acknowledged" }
    ],
    takeaway:"Never stand on tiptoe to seem taller: display, assertion, vaunting, and conceit cancel the very effect they strain for.",
    quiz:[
      { q:"What is the fate of the man who stands on tiptoes?", choices:["He walks more quickly","He reaches the highest shelf","He does not stand firm","He tires and sits down"], a:2, why:"'He who stands on his tiptoes does not stand firm; he who stretches his legs does not walk (easily).'" },
      { q:"Why does self-display fail to make one shine?", choices:["It is a strained excess, disliked from the standpoint of the Tao","Display exhausts the light it borrows","Shining is reserved for the skilful","Audiences only reward modesty"], a:0, why:"Such conditions 'are like remnants of food, or a tumour on the body, which all dislike' — the strain defeats the aim." },
      { q:"Before a big presentation, you are coached to look impressive. What does this chapter counsel?", choices:["Rehearse until the confidence is real","Stand flat and natural; drop the vaunting","Borrow authority from senior allies","Open with your strongest boast"], a:1, why:"Tiptoes do not stand firm: 'he who displays himself does not shine' — natural footing beats the strained pose." }
    ] },
  { n:25,
    summary:"There was something undefined and complete, coming into existence before Heaven and Earth: how still, how formless, standing alone and undergoing no change, reaching everywhere with no danger of exhaustion — it may be regarded as the Mother of all things. Not knowing its name, the writer designates it the Tao and calls it The Great: great, it passes on; passing on, it becomes remote; remote, it returns. Four things are great — the Tao, Heaven, Earth, the sage king — and a law runs down the chain: man takes his law from Earth, Earth from Heaven, Heaven from the Tao, whose only law is being what it is.",
    context:"The twenty-fifth chapter: the something undefined and complete before Heaven and Earth — named here the Tao, The Great, mother of all things.",
    keyVerses:[
      { ref:"Ch. 25", text:"There was something undefined and complete, coming into existence before Heaven and Earth." },
      { ref:"Ch. 25", text:"Man takes his law from the Earth; the Earth takes its law from Heaven; Heaven takes its law from the Tao. The law of the Tao is its being what it is." }
    ],
    takeaway:"Model yourself on the Earth, then Heaven, then the Tao — whose only law is being what it is.",
    quiz:[
      { q:"What designation does the writer give the nameless something before Heaven and Earth?", choices:["The Mother, and nothing more","The Tao, the Way or Course","The One, the Equable","The Great Image"], a:1, why:"'I do not know its name, and I give it the designation of the Tao (the Way or Course).' He further names it The Great." },
      { q:"What is 'the law of the Tao'?", choices:["Reaching everywhere without exhaustion","Returning after becoming remote","Its being what it is","Standing alone and unchanging"], a:2, why:"'Heaven takes its law from the Tao. The law of the Tao is its being what it is' — self-so, following nothing." },
      { q:"Where does the chapter's chain of models start for a person?", choices:["With the Earth, whose law man takes","With the Tao directly","With Heaven's ordinances","With the sage king's example"], a:0, why:"'Man takes his law from the Earth; the Earth takes its law from Heaven; Heaven takes its law from the Tao.'" }
    ] },
  { n:26,
    summary:"Gravity is the root of lightness, and stillness the ruler of movement. The image is a marching prince: a wise prince, marching the whole day, does not go far from his baggage waggons, and though brilliant prospects appear he quietly remains in his proper place. The paradox is that the baggage — the heavy, unglamorous anchor — is what makes light movement possible, and losing it is losing everything: if the lord of a myriad chariots carries himself lightly before the kingdom, he has lost his root of gravity; if he proceeds to active movement, he will lose his throne. Rest rules motion.",
    context:"The twenty-sixth chapter: gravity the root of lightness — the wise prince keeps close to his baggage waggons.",
    keyVerses:[
      { ref:"Ch. 26", text:"Gravity is the root of lightness; stillness, the ruler of movement." },
      { ref:"Ch. 26", text:"How should the lord of a myriad chariots carry himself lightly before the kingdom?" }
    ],
    takeaway:"Keep your baggage waggons close: gravity is the root of lightness, and lightness before the kingdom loses the throne.",
    quiz:[
      { q:"What does the wise prince not go far from, marching the whole day?", choices:["The capital city","The brilliant prospects","The river fords","His baggage waggons"], a:3, why:"'A wise prince, marching the whole day, does not go far from his baggage waggons.'" },
      { q:"How can gravity be the root of lightness?", choices:["The heavy always outlasts the quick","Only the anchored can move lightly without losing their place","Gravity makes movement impossible","Lightness grows out of baggage"], a:1, why:"The prince's baggage — his root of gravity — is what lets him march all day; lose the root and the light movement collapses." },
      { q:"Success is making you scattered and showy. What does this chapter advise?", choices:["Delegate the baggage and travel lighter","Announce your composure publicly","Return to your root and let stillness rule movement","Take a brilliant prospect or two as reward"], a:2, why:"'If he do act lightly, he has lost his root (of gravity); if he proceed to active movement, he will lose his throne.'" }
    ] },
  { n:27,
    summary:"Five kinds of invisible mastery: the skilful traveller leaves no traces; the skilful speaker says nothing blameable; the skilful reckoner uses no tallies; the skilful closer needs no bolts, yet what he shuts cannot be opened; the skilful binder uses no knots, yet what he binds cannot be unloosed. The sage practises the same skill on people and things — always skilful at saving, so casting away neither any man nor anything. The paradox is that perfect competence leaves no apparatus to admire, resolved in the mutual rule: the skilful and the unskilled need each other — the utmost degree of mystery.",
    context:"The twenty-seventh chapter: five kinds of traceless skill, and the sage who saves every man and every thing.",
    keyVerses:[
      { ref:"Ch. 27", text:"The skilful traveller leaves no traces of his wheels or footsteps; the skilful speaker says nothing that can be found fault with or blamed" },
      { ref:"Ch. 27", text:"the sage is always skilful at saving men, and so he does not cast away any man; he is always skilful at saving things, and so he does not cast away anything." }
    ],
    takeaway:"Work so skilfully that nothing snags: be always saving men and things, and cast away neither any man nor anything.",
    quiz:[
      { q:"What does the skilful closer need, in the chapter's list?", choices:["No bolts or bars","A single trusted key","Watchmen at the gate","A secret word"], a:0, why:"'The skilful closer needs no bolts or bars, while to open what he has shut will be impossible.'" },
      { q:"How does the sage 'hide the light of his procedure' while saving everyone?", choices:["He works only at night so none observe","He credits others for each rescue","His skill leaves no visible apparatus, so nothing he saves looks managed","He hides the people he saves from view"], a:2, why:"Like the traveller without traces, the sage's saving of men and things leaves no procedure to admire — 'This is called Hiding the light of his procedure.'" },
      { q:"A colleague is failing in a visible way. What does this chapter advise?", choices:["Report the failure so it can be corrected","Replace the colleague before damage spreads","Wait for the colleague to ask for help","Be skilful at saving men; do not cast the person away"], a:3, why:"'The sage is always skilful at saving men, and so he does not cast away any man' — and at saving things, so nothing is cast away." }
    ] },
  { n:28,
    summary:"Three descents keep the world ascending: knowing manhood's strength yet maintaining female feebleness, one becomes the channel to which all beneath the sky flows, the simple child again, free from all stains; knowing how white attracts yet keeping within black's shade, one displays the pattern of humility and makes endless return to man's first state; knowing how glory shines yet loving disgrace, one is the spacious vale to which men come. The paradox — keeping the lower quality is what gathers everything — is completed by the prose: the sage, employed, becomes Head of all Officers, yet in his greatest regulations employs no violent measures.",
    context:"The twenty-eighth chapter: strength keeping to feebleness, white to black, glory to disgrace — the return to the simple child.",
    keyVerses:[
      { ref:"Ch. 28", text:"Who knows his manhood's strength, Yet still his female feebleness maintains;" },
      { ref:"Ch. 28", text:"The sage, when employed, becomes the Head of all the Officers (of government); and in his greatest regulations he employs no violent measures." }
    ],
    takeaway:"Know your strength and keep the feeble form, know glory and love disgrace: the vale-like and unhewn gather the world.",
    quiz:[
      { q:"What does he become who knows his manhood's strength yet keeps his female feebleness?", choices:["The Head of all Officers","The simple child again, free from all stains","A spacious vale for men","A carriage without a nave"], a:1, why:"'Thus he the constant excellence retains; the simple child again, free from all stains.'" },
      { q:"Why does keeping within black's shade display humility before all beneath the sky?", choices:["Black cloth was the labourer's dress","Disgrace is always preferable to glory","The shade conceals his strength from rivals","Declining the glamorous place is the pattern that draws everyone, as to a vale"], a:3, why:"'The pattern of humility displayed, displayed in view of all beneath the sky' — and to him 'all come,' as to the spacious vale." },
      { q:"You hold real authority and are pressed to crack down hard. What does this chapter advise?", choices:["Crack down once, thoroughly, then relax","Delegate the hard measures to officers","In your greatest regulations, employ no violent measures","Publish the rules and enforce them equally"], a:2, why:"The sage 'becomes the Head of all the Officers... and in his greatest regulations he employs no violent measures.'" }
    ] },
  { n:29,
    summary:"Whoever wishes to get the kingdom for himself and to effect this by what he does will not succeed: the kingdom is a spirit-like thing and cannot be got by active doing. He who would so win it destroys it; he who would hold it in his grasp loses it. The paradox of grasping — that seizing damages the seized — is supported by nature's reversals: what was in front is now behind; what warmed anon we freezing find; strength is of weakness oft the spoil. Hence the sage puts away excessive effort, extravagance, and easy indulgence, and lets the spirit-like thing live.",
    context:"The twenty-ninth chapter: the kingdom is a spirit-like thing — won by force it is destroyed, held in the grasp it is lost.",
    keyVerses:[
      { ref:"Ch. 29", text:"The kingdom is a spirit-like thing, and cannot be got by active doing." },
      { ref:"Ch. 29", text:"He who would so win it destroys it; he who would hold it in his grasp loses it." }
    ],
    takeaway:"Do not seize what must be grown: what forced winning destroys and tight grasping loses, freedom from excess preserves.",
    quiz:[
      { q:"What does the chapter call the kingdom?", choices:["A spirit-like thing","A baggage waggon","The Mother of all things","A carriage without a nave"], a:0, why:"'The kingdom is a spirit-like thing, and cannot be got by active doing.'" },
      { q:"How does trying to hold the kingdom make one lose it?", choices:["Grasping provokes rivals to seize it first","Active doing and grasping destroy the very thing they aim to keep","Holding it requires taxes that empty it","The holder's attention is drawn to its borders"], a:1, why:"'He who would so win it destroys it; he who would hold it in his grasp loses it.'" },
      { q:"You are micromanaging a venture to force it to succeed. What does this chapter say?", choices:["Redouble the effort until it obeys","Split the venture into manageable parts","Set firmer deadlines and enforce them","Put away excessive effort; spirit-like things resist force"], a:2, why:"The sage's answer to the kingdom's nature is to put away 'excessive effort, extravagance, and easy indulgence.'" }
    ] },
  { n:30,
    summary:"One who would assist a lord in harmony with the Tao will not assert his mastery by force of arms; such a course is sure to meet with its proper return. The evidence is agricultural: wherever a host is stationed, briars and thorns spring up, and in the sequence of great armies there are sure to be bad years. The skilful commander strikes a decisive blow and stops — never vain, boastful, or arrogant, striking from necessity, not from a wish for mastery. The reason is the chapter's paradox of ripeness: when things attain strong maturity they become old — contrary to the Tao, and so soon ended.",
    context:"The thirtieth chapter: against force of arms — thorns where armies camp, and the decisive blow that stops in time.",
    keyVerses:[
      { ref:"Ch. 30", text:"Wherever a host is stationed, briars and thorns spring up. In the sequence of great armies there are sure to be bad years." },
      { ref:"Ch. 30", text:"When things have attained their strong maturity they become old. This may be said to be not in accordance with the Tao: and what is not in accordance with it soon comes to an end." }
    ],
    takeaway:"Force breeds briars and famine years: strike only from necessity, then stop, before maturity turns to age and decay.",
    quiz:[
      { q:"What springs up wherever a host is stationed?", choices:["Bad years","Loyal ministers","Briars and thorns","Great armies"], a:2, why:"'Wherever a host is stationed, briars and thorns spring up. In the sequence of great armies there are sure to be bad years.'" },
      { q:"Why must the skilful commander stop after a decisive blow?", choices:["Pressing on to complete mastery passes maturity into decay","Armies cannot supply longer campaigns","Victory makes soldiers proud","Enemies regroup if given time"], a:0, why:"'He does not dare (by continuing his operations) to assert and complete his mastery' — and what attains strong maturity becomes old, contrary to the Tao." },
      { q:"You have just won an argument decisively. What does this chapter advise?", choices:["Summarize the win so it is remembered","Do not press from necessity into vainglory","Convert opponents publicly to seal it","Write down the lessons while fresh"], a:1, why:"Strike 'as a matter of necessity... but not from a wish for mastery' — then stop, before boastfulness spoils the result." }
    ] },
  { n:31,
    summary:"Arms, however beautiful, are instruments of evil omen, hateful to all creatures; those who have the Tao do not like to employ them. The superior man uses them only on the compulsion of necessity, prizes calm and repose, and counts victory by force undesirable — for to delight in it would be to delight in the slaughter of men, and such a one cannot get his will in the kingdom. Hence the ritual paradox: in war the place of honour moves to the mourning side; the general takes his place as in the rites of mourning, and the victor should weep for the slain with the bitterest grief.",
    context:"The thirty-first chapter: weapons are instruments of evil omen, and victory has its place among the rites of mourning.",
    keyVerses:[
      { ref:"Ch. 31", text:"Now arms, however beautiful, are instruments of evil omen, hateful, it may be said, to all creatures. Therefore they who have the Tao do not like to employ them." },
      { ref:"Ch. 31", text:"He who has killed multitudes of men should weep for them with the bitterest grief; and the victor in battle has his place (rightly) according to those rites." }
    ],
    takeaway:"Treat every necessary victory as a funeral, not a festival: to delight in the slaughter of men is to fail the kingdom.",
    quiz:[
      { q:"Which places does the superior man prize ordinarily and in war?", choices:["The right ordinarily; the left in war","The centre ordinarily; the rear in war","The rear ordinarily; the front in war","The left ordinarily; the right in time of war"], a:3, why:"'The superior man ordinarily considers the left hand the most honourable place, but in time of war the right hand.'" },
      { q:"Why would delighting in victory prevent one from getting his will in the kingdom?", choices:["Delight in victory is delight in the slaughter of men","Victors are feared and never trusted","Delight weakens the armies' discipline","The kingdom belongs to the mourning, not the merry"], a:0, why:"'To consider this desirable would be to delight in the slaughter of men; and he who delights in the slaughter of men cannot get his will in the kingdom.'" },
      { q:"Your side has just won a bitter institutional battle. What does this chapter advise?", choices:["Hold a celebration to consolidate the win","Promote the general who led it","Mourn the cost and prize calm and repose over triumph","Record the victory in the official history"], a:2, why:"The victor's place is 'according to those rites' of mourning: 'He who has killed multitudes of men should weep for them with the bitterest grief.'" }
    ] },
  { n:32,
    summary:"The Tao, considered as unchanging, has no name; in its primordial simplicity it may be small, yet the whole world dares not deal with one embodying it as a minister. Could a feudal prince or the king guard and hold it, all would spontaneously submit. Under its guidance Heaven and Earth send down the sweet dew, which, without the directions of men, reaches equally everywhere of its own accord. The paradox of the smallest, nameless thing commanding all resolves in two images: once the Tao acts it has a name in which men know to rest, and it relates to the world as rivers and seas to the valley streams.",
    context:"The thirty-second chapter: the nameless simplicity — sweet dew falling equally of itself, and rivers drawing in the valley streams.",
    keyVerses:[
      { ref:"Ch. 32", text:"Heaven and Earth (under its guidance) unite together and send down the sweet dew, which, without the directions of men, reaches equally everywhere as of its own accord." },
      { ref:"Ch. 32", text:"The relation of the Tao to all the world is like that of the great rivers and seas to the streams from the valleys." }
    ],
    takeaway:"Guard the nameless simplicity and know where to rest: like great rivers, the low and unnamed draw all the streams to them.",
    quiz:[
      { q:"Though the Tao in its simplicity may be small, what is true of it?", choices:["It grows once named","The whole world dares not deal with one embodying it as a minister","It is lost without a feudal prince","It rules only through the sweet dew"], a:1, why:"'Though in its primordial simplicity it may be small, the whole world dares not deal with (one embodying) it as a minister.'" },
      { q:"How does the sweet dew distribute itself under the Tao's guidance?", choices:["Without men's directions, equally everywhere, of its own accord","By canals that the princes maintain","By falling only on the humble fields","By men's directions, equally measured"], a:0, why:"'Heaven and Earth (under its guidance) unite together and send down the sweet dew, which, without the directions of men, reaches equally everywhere as of its own accord.'" },
      { q:"You want lasting influence without coercion. What does this chapter suggest?", choices:["Publish your principles widely and often","Reward those who submit first","Collect the streams under your own banner","Rest in the name once action begins, and let submission be spontaneous"], a:3, why:"When the Tao has a name, men 'know to rest in it' and are 'free from all risk of failure and error' — like rivers, it needs no coercion." }
    ] },
  { n:33,
    summary:"A chapter of paired weighings: he who knows other men is discerning, but he who knows himself is intelligent; he who overcomes others is strong, but he who overcomes himself is mighty; he who is satisfied with his lot is rich, and he who acts with energy has a firm will. The paradox is that each outward achievement has an inward twin worth more, and the last pair extends it past death: he who does not fail in his position's requirements continues long, but he who dies and yet does not perish has longevity. Conquest of self outlasts conquest of the world.",
    context:"The thirty-third chapter: paired measures — self-knowledge beats discernment, self-conquest beats strength, and dying without perishing is the real longevity.",
    keyVerses:[
      { ref:"Ch. 33", text:"He who knows other men is discerning; he who knows himself is intelligent. He who overcomes others is strong; he who overcomes himself is mighty." },
      { ref:"Ch. 33", text:"He who does not fail in the requirements of his position, continues long; he who dies and yet does not perish, has longevity." }
    ],
    takeaway:"Turn inward for the greater prize: know yourself, overcome yourself, be satisfied with your lot — and die without perishing.",
    quiz:[
      { q:"What is he called who is satisfied with his lot?", choices:["Mighty","Intelligent","Rich","Discerning"], a:2, why:"'He who is satisfied with his lot is rich; he who goes on acting with energy has a (firm) will.'" },
      { q:"How does dying without perishing count as longevity?", choices:["The self rooted beyond the body outlasts the body's end","Fame keeps a name alive after death","Long life is only one kind of not failing","Descendants continue the positions one held"], a:0, why:"'He who dies and yet does not perish, has longevity' — what does not perish is not the body but the self that outlasts it." },
      { q:"You are skilled at reading others but rarely examine yourself. What does this chapter urge?", choices:["Use your discernment to choose better company","Aim at intelligence: know yourself, and overcome yourself","Overcome others first, then yourself","Study the ancients who knew themselves"], a:3, why:"'He who knows other men is discerning; he who knows himself is intelligent' — and self-overcoming is mightier than conquering others." }
    ] },
  { n:34,
    summary:"All-pervading is the Great Tao, found on the left hand and on the right. All things depend on it for production, and not one refuses obedience; yet when its work is accomplished it does not claim the name of having done it. It clothes all things as with a garment and makes no assumption of being their lord — nameable in the smallest things; and when all things return to their root without knowing it presides, it is nameable in the greatest. The paradox of doing everything while claiming nothing is the sage's method too: it is through not making himself great that he accomplishes his great achievements.",
    context:"The thirty-fourth chapter: the all-pervading Tao that clothes all things and claims no lordship — greatness through not being great.",
    keyVerses:[
      { ref:"Ch. 34", text:"It clothes all things as with a garment, and makes no assumption of being their lord;--it may be named in the smallest things." },
      { ref:"Ch. 34", text:"It is through his not making himself great that he can accomplish them." }
    ],
    takeaway:"Clothe, do not rule: accomplish great achievements by never making yourself great and never claiming the name of having done it.",
    quiz:[
      { q:"Where may the Great Tao be found, by the chapter's opening?", choices:["Only in the smallest things","On the left hand and on the right","In the valleys after rain","At the root of all things"], a:1, why:"'All-pervading is the Great Tao! It may be found on the left hand and on the right.'" },
      { q:"Why may the Tao be named 'in the greatest things'?", choices:["It wears the sky as a garment","It lords over the greatest kingdoms","All things return to their root without knowing it presides","Its work is accomplished in the greatest deeds"], a:2, why:"'All things return (to their root and disappear), and do not know that it is it which presides over their doing so;--it may be named in the greatest things.'" },
      { q:"You did the crucial work behind a collective success. What does this chapter counsel?", choices:["Let the work go unclaimed; do not assume the lordship","Claim the credit once the result is safe","Trade the credit for a larger role","Credit the team while noting your part"], a:0, why:"The Tao 'does not claim the name of having done it,' and the sage's great achievements come 'through his not making himself great.'" }
    ] },
  { n:35,
    summary:"To him who holds in his hands the Great Image of the invisible Tao, the whole world repairs; men resort to him, receive no hurt, and find rest, peace, and the feeling of ease. Then the chapter compares nourishments: music and dainties make a passing guest stop for a time, but the Tao, as it comes from the mouth, seems insipid and without flavour, not worth looking at or listening to — and its use is inexhaustible. The paradox of the flavourless outlasting the delicious resolves by time: treats hold attention briefly; the plain Tao never runs out.",
    context:"The thirty-fifth chapter: the Great Image draws the whole world to rest — the insipid Tao whose use never runs out.",
    keyVerses:[
      { ref:"Ch. 35", text:"To him who holds in his hands the Great Image (of the invisible Tao), the whole world repairs." },
      { ref:"Ch. 35", text:"Music and dainties will make the passing guest stop (for a time). But though the Tao as it comes from the mouth, seems insipid and has no flavour, though it seems not worth being looked at or listened to, the use of it is inexhaustible." }
    ],
    takeaway:"Choose the insipid over the delicious: music and dainties hold a guest a moment, but the Tao's use is inexhaustible.",
    quiz:[
      { q:"What do men find who resort to the holder of the Great Image?", choices:["Rest, peace, and the feeling of ease","Riches without labour","Mastery over the passing guest","The flavour of music and dainties"], a:0, why:"'Men resort to him, and receive no hurt, but (find) rest, peace, and the feeling of ease.'" },
      { q:"Why does the flavourless Tao outlast music and dainties?", choices:["Music and dainties are scarce in most places","Treats are only pauses for a passing guest, while the Tao's use is inexhaustible","The Tao sweetens with familiarity","Guests eventually prefer quiet to music"], a:1, why:"'Music and dainties will make the passing guest stop (for a time)' — but 'the use of it is inexhaustible.'" },
      { q:"Which habit fits this chapter's teaching best?", choices:["Cultivating striking experiences worth repeating","Learning the arts that make guests linger","Keeping a table set for important visitors","Preferring plain, lasting nourishment over stimulating treats"], a:3, why:"The Tao 'seems not worth being looked at or listened to' yet is inexhaustible — judge by lasting use, not by passing taste." }
    ] },
  { n:36,
    summary:"Before every reversal comes its preparation: to take an inspiration one first expires; to weaken another, one first strengthens him; to overthrow, first raises up; to despoil, first makes gifts — 'hiding the light of his procedure.' Out of this pattern comes the maxim: the soft overcomes the hard, and the weak the strong. The chapter's warnings complete it: fishes should not be taken from the deep, and instruments for the profit of a state should not be shown to the people. The paradox that rising is the beginning of falling is answered by depth: keep low, keep soft, keep hidden.",
    context:"The thirty-sixth chapter: what rises will be overthrown — the soft overcomes the hard, and the state's tools stay hidden.",
    keyVerses:[
      { ref:"Ch. 36", text:"The soft overcomes the hard; and the weak the strong." },
      { ref:"Ch. 36", text:"Fishes should not be taken from the deep; instruments for the profit of a state should not be shown to the people." }
    ],
    takeaway:"Stay deep and soft: what rises gets overthrown, and instruments shown to the people invite their use against you.",
    quiz:[
      { q:"What must precede an inspiration, in the chapter's first image?", choices:["A long stillness","A gentle stretching","A previous expiration","A deep sigh"], a:2, why:"'When one is about to take an inspiration, he is sure to make a (previous) expiration.'" },
      { q:"How are weakening and strengthening linked in the chapter?", choices:["The weak strengthen themselves by watching the strong","The one about to weaken another will first have raised him up","Strength and weakness alternate like breaths","The strong weaken only what is already feeble"], a:1, why:"'When he is going to weaken another, he will first strengthen him' — the reversal is prepared in advance." },
      { q:"You are tempted to reveal your best advantage to win favour. What does this chapter warn?", choices:["Instruments for profit shown to the people invite their use against you","Advantages shared are advantages doubled","The deep waters welcome the fisherman","Gifts must precede every despoiling"], a:0, why:"'Fishes should not be taken from the deep; instruments for the profit of a state should not be shown to the people.'" }
    ] },
  { n:37,
    summary:"Part I closes with the purest statement of effortless action: the Tao in its regular course does nothing for the sake of doing it, and so there is nothing which it does not do. If princes and kings could maintain it, all things would of themselves be transformed. And should transformation itself become an object of desire, the answer is the nameless simplicity, free from all external aim: with no desire, at rest and still, all things go right as of their will. The paradox — doing nothing yet leaving nothing undone — resolves by removing the one obstruction, desire.",
    context:"The last chapter of Part I: the Tao does nothing for the sake of doing it, and so nothing is left undone.",
    keyVerses:[
      { ref:"Ch. 37", text:"The Tao in its regular course does nothing (for the sake of doing it), and so there is nothing which it does not do." },
      { ref:"Ch. 37", text:"With no desire, at rest and still, All things go right as of their will." }
    ],
    takeaway:"Do nothing for the sake of doing it: with no desire, at rest and still, all things go right as of their will.",
    quiz:[
      { q:"What would happen if princes and kings could maintain the Tao?", choices:["Their kingdoms would grow without bound","All things would of themselves be transformed","The nameless simplicity would be lost","Heaven and Earth would send the sweet dew"], a:1, why:"'If princes and kings were able to maintain it, all things would of themselves be transformed by them.'" },
      { q:"How can doing nothing leave nothing undone?", choices:["The Tao delegates all its doing","Nothing truly needs to be done","Doing nothing is itself the greatest act","Action for action's sake disturbs; without desire, things move rightly themselves"], a:3, why:"'The Tao in its regular course does nothing (for the sake of doing it), and so there is nothing which it does not do' — desire is the only obstruction." },
      { q:"Your team is transforming well and you long to push it further. What does this chapter say?", choices:["Set stretch goals to direct the transformation","Measure progress weekly and correct course","Express the desire as the nameless simplicity and stay still","Reward the most visible improvers"], a:2, why:"'If this transformation became to me an object of desire, I would express the desire by the nameless simplicity... with no desire, at rest and still.'" }
    ] },
  { n:38,
    summary:"Part II opens with a ladder of decline: those of highest virtue did not seek to show it and so possessed it fully; those of lower degree sought not to lose it and so lacked it. Highest virtue does nothing with purpose; lower virtue is always doing; benevolence acts freely, righteousness strains, and highest propriety shows itself — baring the arm when men fail to respond. Hence the sequence: the Tao lost, attributes appeared; then benevolence, righteousness, the proprieties — propriety the attenuated form of leal-heartedness and the commencement of disorder. The Great man dwells with the fruit and not the flower, abiding by what is solid.",
    context:"Part II opens: a ladder of loss from Tao to propriety — and the Great man choosing the fruit over the flower.",
    keyVerses:[
      { ref:"Ch. 38", text:"Thus it was that when the Tao was lost, its attributes appeared; when its attributes were lost, benevolence appeared; when benevolence was lost, righteousness appeared; and when righteousness was lost, the proprieties appeared." },
      { ref:"Ch. 38", text:"the Great man abides by what is solid, and eschews what is flimsy; dwells with the fruit and not with the flower." }
    ],
    takeaway:"Possess virtue, do not perform it: when righteousness decays into propriety, sincerity thins and disorder begins — choose the fruit.",
    quiz:[
      { q:"What did those who possessed the highest attributes of the Tao do?", choices:["They did not seek to show them, and so possessed them fully","They sought to preserve them from loss","They carried them out with ceaseless care","They showed them and so perfected them"], a:0, why:"'(Those who) possessed in highest degree the attributes (of the Tao) did not (seek) to show them, and therefore they possessed them (in fullest measure).'" },
      { q:"Why is propriety called 'the commencement of disorder'?", choices:["It multiplies rules until none can keep them","It was invented to control the people","It replaces inner faith with outward form, baring the arm when men fail to respond","It demands equality among unequal men"], a:2, why:"Highest propriety shows itself, 'and when men did not respond to it, they bared the arm and marched up to them' — form enforcing what should flow." },
      { q:"You can follow every etiquette exactly or act from genuine care. What does this chapter choose?", choices:["The proprieties, since they are observable","The solid fruit over the flimsy flower of the proprieties","Etiquette first, with care where possible","Care outwardly and etiquette inwardly"], a:1, why:"'The Great man abides by what is solid, and eschews what is flimsy; dwells with the fruit and not with the flower.'" }
    ] },
  { n:39,
    summary:"Since of old, things have got the One: heaven by it is bright and pure, earth firm and sure, spirits supplied with powers, valleys kept full, creatures alive, and princes and kings given the model which to all they give. Deprived of it, heaven would rend, earth break and bend, spirits fail, vales parch, creatures pass away, kings decay. Hence the great find their root in meanness: princes call themselves 'Orphans' and 'Carriages without a nave,' and in enumerating the parts of a carriage we never come on what makes it answer the ends of a carriage. They prefer to be coarse as stone, not elegant as jade.",
    context:"The thirty-ninth chapter: all things stand by the One — and dignity must root itself in acknowledged meanness, stone rather than jade.",
    keyVerses:[
      { ref:"Ch. 39", text:"Thus it is that dignity finds its (firm) root in its (previous) meanness, and what is lofty finds its stability in the lowness (from which it rises)." },
      { ref:"Ch. 39", text:"They do not wish to show themselves elegant-looking as jade, but (prefer) to be coarse-looking as an (ordinary) stone." }
    ],
    takeaway:"Let dignity root itself in meanness: call yourself Orphan, prefer stone to jade, and stand on what is low and firm.",
    quiz:[
      { q:"In the chapter's list, what do princes and kings get from the One?", choices:["Firmness and sureness","The model which to all they give","Powers for their spirits","Fullness throughout their void"], a:1, why:"'Princes and kings who from it get the model which to all they give.'" },
      { q:"Why do the enumerated parts of a carriage never yield 'what makes it answer the ends of a carriage'?", choices:["The ends of a carriage are defined by its owner","Because the nave is never counted among the parts","The enumeration is an ancient riddle with no answer","A carriage's being is not one more part but comes from the One"], a:3, why:"The riddle supports the chapter's point that dignity roots in meanness: no part, however grand, is the being of the whole." },
      { q:"You have gained status and the trappings that go with it. What does this chapter advise?", choices:["Prefer stone to jade; keep your meanness in view as foundation","Display the jade, since dignity must be visible","Trade the stone for jade as status grows","Keep the trappings but hide their cost"], a:0, why:"'They do not wish to show themselves elegant-looking as jade, but (prefer) to be coarse-looking as an (ordinary) stone.'" }
    ] },
  { n:40,
    summary:"Four short lines and one sentence, and among the densest in the book: the movement of the Tao by contraries proceeds, and weakness marks the course of Tao's mighty deeds. Then the two births: all things under heaven sprang from It as existing and named, and that existence sprang from It as non-existent and not named. The paradox is doubled — the mightiest power works as weakness, and all being is born from non-being. The chapter resolves them by direction: reality's current runs contrary to appearance, so the soft, the weak, and the nameless are not failures but the origin and engine of everything.",
    context:"The fortieth chapter: the Tao moves by contraries, its mighty deeds done in weakness, being born of non-being.",
    keyVerses:[
      { ref:"Ch. 40", text:"The movement of the Tao By contraries proceeds; And weakness marks the course Of Tao's mighty deeds." },
      { ref:"Ch. 40", text:"All things under heaven sprang from It as existing (and named); that existence sprang from It as non-existent (and not named)." }
    ],
    takeaway:"Expect the reverse current: the Tao's mightiest deeds are done in weakness, and everything that exists grows out of non-being.",
    quiz:[
      { q:"What marks the course of the Tao's mighty deeds?", choices:["Weakness","Contraries","Stillness","Fullness"], a:0, why:"'And weakness marks the course of Tao's mighty deeds.'" },
      { q:"How does existence spring from non-existence in this chapter?", choices:["Existence names itself out of the void","Non-existence is destroyed to make room for existence","The named, existing world originates in the unnamed, non-existent source","Existence and non-existence take turns ruling"], a:2, why:"'All things under heaven sprang from It as existing (and named); that existence sprang from It as non-existent (and not named).'" },
      { q:"You believe real impact requires visible force. What does this chapter suggest?", choices:["Reserve force for the decisive moment","Work by contraries; let weakness be your means","Double the force to double the impact","Gather allies to make the force irresistible"], a:1, why:"'The movement of the Tao by contraries proceeds' — the mighty deeds are done in the mode of weakness." }
    ] },
  { n:41,
    summary:"Hearing about the Tao divides scholars into three: the highest earnestly carry it into practice; the middle now keep it and now lose it; the lowest laugh greatly at it — and were it not thus laughed at, it would not be fit to be the Tao. The old sentences explain why: brightest, it seems to lack light; progress seems drawing back; the even way a rugged track; highest virtue rises from the vale; the firmest seems poor; solid truth seems change; the largest square shows no corner; the great vessel is the slowest made. Hidden and nameless, the Tao yet skilfully imparts what all things need and completes them.",
    context:"The forty-first chapter: the lowest scholars laugh at the Tao — because what is truest looks most like its opposite.",
    keyVerses:[
      { ref:"Ch. 41", text:"Scholars of the highest class, when they hear about the Tao, earnestly carry it into practice." },
      { ref:"Ch. 41", text:"A vessel great, it is the slowest made; Loud is its sound, but never word it said;" }
    ],
    takeaway:"Expect mockery and reversal, and keep practising: a vessel great is the slowest made, and the Tao completes what it quietly imparts.",
    quiz:[
      { q:"What do scholars of the highest class do when they hear about the Tao?", choices:["They debate it with the sentence-makers","They keep it now and lose it now","They earnestly carry it into practice","They laugh greatly at it"], a:2, why:"'Scholars of the highest class, when they hear about the Tao, earnestly carry it into practice.'" },
      { q:"Why must the Tao be laughed at by the lowest class of scholars?", choices:["Its greatness appears as deficiency, so it invites scorn","Laughter proves they have understood it","Laughter is the first step toward practice","It is hidden precisely from the low"], a:0, why:"'If it were not (thus) laughed at, it would not be fit to be the Tao' — the brightest seen seems to lack light, progress seems drawing back." },
      { q:"Your most important project is mocked and progressing slowly. What does this chapter encourage?", choices:["Rebrand the project so it draws less scorn","Persist: the vessel great is the slowest made","Speed up to silence the laughter","Recruit the highest scholars only"], a:1, why:"'A vessel great, it is the slowest made' — the mockery and slowness are signs of the thing's size, not its failure." }
    ] }
);
