/* Book Launchpad — The Consolation of Philosophy, study guides (units 1-5). AI-assisted draft, team-edited. */
window.BLP = window.BLP || { books: [], gloss: [] }; var BLP = window.BLP;
var _bk = BLP.books.find(function(b){ return b.id === "consolation"; });
if (!_bk) throw new Error("data/canon.js must load before consolation.js");
(_bk.chapters = _bk.chapters || []).push(
  { n:1, t:"The Sorrows of Boethius",
    summary:"In a prison cell the narrator writes his grief in verse, with only the Muses for company. A woman of towering stature and blazing eyes appears at his bedside — Philosophy, his nurse since youth — and drives the Muses away as play-acting wantons who feed his sickness with sweet poison. She wipes the mist of mortal things from his eyes, and he knows her again. He states his case: following Plato's rule that philosophers should enter public life, he resisted greedy courtiers, shielded the weak from false charges, and was condemned unheard for wishing to save the senate — his study of philosophy itself was turned against him. She answers that his true country has one King, that Socrates and Seneca fell before him, and that his swollen passions need gentle treatment before strong remedies. Her questions expose the disease: he has forgotten himself, the end of existence, and that divine reason, not chance, governs the world. Songs carry his complaint, and hers promise that nothing can subdue virtue.",
    context:"Written c. 524 by Boethius awaiting execution for treason — the arc's living test case: philosophy applied as a real prisoner's medicine, not a study.",
    keyVerses:[
      { ref:"Book I, SONG I", text:"Who wrought my studious numbers Smoothly once in happier days, Now perforce in tears and sadness Learn a mournful strain to raise." },
      { ref:"Book I, §4", text:"Whoso calm, serene, sedate, Sets his foot on haughty fate; Firm and steadfast, come what will, Keeps his mien unconquered still; Him the rage of furious seas, Tossing high wild menaces, Nor the flames from smoky forges That Vesuvius disgorges, Nor the bolt that from the sky Smites the tower, can terrify." },
      { ref:"Book I, §6", text:"It is because forgetfulness of thyself hath bewildered thy mind that thou hast bewailed thee as an exile, as one stripped of the blessings that were his; it is because thou knowest not the end of existence that thou deemest abominable and wicked men to be happy and powerful; while, because thou hast forgotten by what means the earth is governed, thou deemest that fortune's changes ebb and flow without the restraint of a guiding hand." }
    ],
    takeaway:"Diagnose before you medicate: much misery is not loss but forgetting who you are and what the world is for.",
    quiz:[
      { q:"According to Philosophy in §5, why is exile impossible for Boethius in the true sense?",
        choices:["Because no Roman law permits exiling a consul","Because his true country is ruled by one King, and whoever ceases to wish to dwell there exiles only himself","Because his sentence was never formally passed at Rome","Because the prison at Pavia is legally his own house"], a:1,
        why:"Philosophy says his country is not ruled 'by the sovereignty of the multitude, but one is its Ruler, one its King,' and that he 'hast banished thyself' by ceasing to wish to dwell there." },
      { q:"Why does Philosophy begin with mild treatment rather than strong remedies?",
        choices:["Because she fears Boethius is too dull to follow argument","Because the prison guards allow only short visits","Because his soul is swollen with anger, pain, and grief, and must first be softened","Because she has not yet diagnosed what is wrong with him"], a:2,
        why:"In §5 she says that since he is 'distraught with anger, pain, and grief, strong remedies are not proper,' and the hard tumours must be 'softened by gentle treatment.'" },
      { q:"A friend ruined by a lawsuit wants only sympathy. Taking Book I as a model, your first move is to...",
        choices:["ask questions that test what he still believes about God, order, and himself before advising","repeat until he agrees that fortune is blind and arbitrary","urge him to flee the country and start over","prescribe hard Stoic doctrines immediately to break his self-pity"], a:0,
        why:"Philosophy opens her cure by questioning Boethius (§6); his surviving belief that divine reason governs the world is 'the divine spark from which thy recovery may be hoped.'" }
    ] },
  { n:2, t:"The Vanity of Fortune's Gifts",
    summary:"Philosophy names his disease: mourning for lost fortune. Fortune has not changed — mutability is her only constancy, and if the wheel stood still it would cease to be the wheel. She lets Fortune plead her own case: her gifts were loans to a naked foundling, and nothing he lost was ever his. Boethius admits the honeyed argument melts as it is spoken, so she counts what remains — his wife, his father-in-law Symmachus, his consular sons — and shows that no lot is ever complete: happiness must be sought within. Then the stronger draught: riches multiply wants instead of ending them, gems and landscapes are beautiful without their owners, power without virtue merely displays the wicked, and fame is a breath — earth is a point beside the heavens, and any name nothing beside eternity. One service only can Fortune do: ill fortune tells the truth and leaves a man his real friends. Songs mock her malice, man's greed, and dying glory, and crown all with love.",
    context:"After Marcus's discipline and Seneca's time-counsel, Boethius turns Fortune's wheel on himself — the arc's summit of philosophy tested by total ruin.",
    keyVerses:[
      { ref:"Book II, §1", text:"What! art thou verily striving to stay the swing of the revolving wheel? Oh, stupidest of mortals, if it takes to standing still, it ceases to be the wheel of Fortune." },
      { ref:"Book II, §4", text:"So true is it that nothing is wretched, but thinking makes it so, and conversely every lot is happy if borne with equanimity." },
      { ref:"Book II, §8", text:"For Good Fortune, when she wears the guise of happiness, and most seems to caress, is always lying; Ill Fortune is always truthful, since, in changing, she shows her inconstancy. The one deceives, the other teaches;" }
    ],
    takeaway:"Hold fortune's gifts as loans: enjoy them without complaint when recalled, and thank adversity for showing you your real friends.",
    quiz:[
      { q:"In Fortune's own defence speech, what does she claim about the goods Boethius has lost?",
        choices:["They were never truly his — she lent them, and recalls what is her own whenever she pleases","They were stolen from him by the informers Basil and Opilio","They were wages owed for his consular service","They were illusions that never existed at all"], a:0,
        why:"Fortune argues: 'if those things the loss of which thou lamentest had been thine, thou couldst never have lost them' — her handmaidens come and go with their mistress." },
      { q:"Why does Philosophy call ill fortune of more use to men than good fortune?",
        choices:["Because suffering burns away the body's appetites","Because the gods listen only to the unhappy","Because misfortune shortens the road to death","Because good fortune flatters and deceives, while ill fortune tells the truth and reveals who your real friends are"], a:3,
        why:"In §8: 'Good Fortune... is always lying; Ill Fortune is always truthful,' and in departing Fortune 'hath taken away her friends, and left thee thine.'" },
      { q:"Your secure-seeming job is suddenly cut. Applying Book II, the sane response is to...",
        choices:["sue, because what an employer gives becomes your property","treat the job as a loan that fortune recalled, and take stock of what cannot be taken from you","conclude that all ambition is wicked and renounce work","expect the position to be restored if you complain loudly enough"], a:1,
        why:"Fortune pleads that her gifts are used, not owned, and Philosophy concludes that happiness 'whose seat is only within us' can never consist in what Fortune can remove." }
    ] },
  { n:3, t:"True Happiness and False",
    summary:"Boethius, now eager for stronger medicine, is promised a sight of true happiness. All mortal creatures pursue one goal by many paths — wealth, rank, power, glory, pleasure — trusting these will buy sufficiency, reverence, strength, renown, and joy. One by one the trade fails: riches multiply wants and beg for guards; dignities cannot plant virtue in the wicked who wear them; sovereignty cannot keep itself safe, and kings live under a hanging sword; renown is other men's breath, noble birth another's fame; pleasure stings like the bee and closes in repentance. The error runs deeper: sufficiency, power, reverence, renown, and joy are one indivisible good, and whoever grasps a part of a partless thing grasps nothing. True happiness therefore exists only where the whole is found — in God, who is not merely happy but is happiness itself, so the happy man becomes, in a manner, a god. Songs weed error's thorns, follow nature's bent homeward, invoke the world's Maker, and end with Orpheus, lost by looking back.",
    context:"The work's constructive peak: between the Stoics' counsel and Machiavelli's power, Boethius locates happiness in God alone, beyond fortune's reach.",
    keyVerses:[
      { ref:"Book III, §2", text:"All mortal creatures in those anxious aims which find employment in so many varied pursuits, though they take many paths, yet strive to reach one goal--the goal of happiness." },
      { ref:"Book III, §10", text:"But we have determined that true happiness is the perfect good; therefore true happiness must dwell in the supreme Deity." },
      { ref:"Book III, §10", text:"So every man who is happy is a god; and though in nature God is One only, yet there is nothing to hinder that very many should be gods by participation in that nature." }
    ],
    takeaway:"Refuse the part-goods: money, rank, fame, and pleasure each fail alone, because sufficiency, power, reverence, renown, and joy are one whole.",
    quiz:[
      { q:"What single goal does Philosophy say all mortal creatures strive for by many different paths?",
        choices:["Pleasure, as Epicurus concluded","Power over their fellow men","Happiness, the state that lacks nothing further","Renown that outlives death"], a:2,
        why:"§2: 'All mortal creatures... though they take many paths, yet strive to reach one goal--the goal of happiness'; the good is that which, when a man hath got it, he 'can lack nothing further.'" },
      { q:"Why must sufficiency, power, reverence, renown, and joy be possessed together?",
        choices:["Because they are one simple, indivisible good, and grasping at a part of a partless thing wins nothing at all","Because ancient philosophers listed exactly five marks of the happy man","Because Fortune distributes them separately among different people","Because each of them is worthless until doubled by money"], a:0,
        why:"§9: 'That which is simple and indivisible by nature human error separates'; whoever seeks one alone — riches without power, power without joy — 'does not even lay hold of that one which he makes his aim.'" },
      { q:"A friend plans to grab life's goods one at a time — money first, respect later, joy someday. Book III warns that...",
        choices:["money must come first, since every other good can be bought","each pursuit cut off from the whole good fails to deliver even the one thing it promises","joy can safely be secured in advance by wealth","respect and fame are really the same prize, so one hunt serves both"], a:1,
        why:"He who seeks riches alone forgoes power and pleasure and ends 'a weakling void of strength,' not even independent; each severally pursued good leaves its seeker short." }
    ] },
  { n:4, t:"Good and Ill Fortune",
    summary:"The hardest objection surfaces: under a good God, why do the wicked flourish while virtue is trampled down? Philosophy answers with paradoxes. Since every will seeks happiness and only the good find it, the good alone have power; the wicked, able to do only evil — and evil is nothing — are weak. Crime does not go unpaid either: wickedness is its own punishment, sinking men below humanity into wolves, foxes, and asses, while righteousness is its own reward. Success in crime deepens the misery; just punishment is a good, so the guilty are more wretched when they escape than when chastened. Why does fortune still look random? Because we cannot read the whole design: Providence is the divine reason disposing all things from above, fate that order unfolded in time, and God, like a wise physician, allots each soul the discipline it can bear. Hence the scandalous conclusion: every fortune is good, being either useful or just. Songs trace the soul's flight past the spheres and show Circe's victims.",
    context:"Philosophy answers the question that breaks consolation everywhere — why the wicked prosper — sealing the arc's faith that all fortune works for good.",
    keyVerses:[
      { ref:"Book IV, §1", text:"the good are always strong, the bad always weak and impotent; that vices never go unpunished, nor virtues unrewarded; that good fortune ever befalls the good, and ill fortune the bad" },
      { ref:"Book IV, §6", text:"Providence is the Divine reason itself, seated in the Supreme Being, which disposes all things; fate is the disposition inherent in all things which move, through which providence joins all things in their proper order." },
      { ref:"Book IV, §7", text:"Since every fortune, welcome and unwelcome alike, has for its object the reward or trial of the good, and the punishing or amending of the bad, every fortune must be good, since it is either just or useful." }
    ],
    takeaway:"Read fortune by its work, not its feel: what punishes or amends the bad and disciplines the good is bad only in appearance.",
    quiz:[
      { q:"How does Philosophy distinguish Providence from fate in §6?",
        choices:["Providence governs the heavens and fate governs the weather","Providence rules the good and fate rules the wicked","Fate is written in the stars, providence in the laws of men","Providence is the divine reason disposing all things from above; fate is that same order unfolded in time"], a:3,
        why:"§6: 'Providence is the Divine reason itself, seated in the Supreme Being, which disposes all things; fate is the disposition inherent in all things which move.'" },
      { q:"Why does Philosophy say the wicked are powerless?",
        choices:["Because they never command armies or wealth for long","Because every will aims at good, the wicked never attain it, and evil, being nothing, gives them no real power","Because fear of discovery keeps them from acting on their plans","Because Providence steps in and blocks every criminal act"], a:1,
        why:"§2: good and bad alike seek good, but only the good reach it; since 'evil is nothing,' the wicked 'are only able to do evil,' which is no power at all." },
      { q:"A colleague who wronged you is promoted and seemingly gets away with it. Living by Book IV, you conclude that...",
        choices:["justice is only a human convention","you should quietly arrange his downfall yourself","his impunity is itself a further evil, and his success a misfortune in disguise","punishment is pointless, since vice makes no one unhappy"], a:2,
        why:"§4: 'the wicked are more unhappy when indulged with an unjust freedom from punishment than when punished by a just retribution,' and a wrong 'involves the misery of the doer, not of the sufferer.' Should events look otherwise, 'it is in thy judgment that there is perverse confusion.'" }
    ] },
  { n:5, t:"Free Will and God's Foreknowledge",
    summary:"If a chain of causes governs all, is the will free? Chance, Philosophy says, is only the unexpected meeting of causes inside providence's order; reason itself carries free choice — fullest near God, weakest in vice. Boethius presses the puzzle: if God infallibly foreknows everything, our acts seem forced, and reward, punishment, prayer, and hope collapse. The solution begins with how knowing works: everything is grasped by the faculty of the knower, not the nature of the thing — sense, imagination, reason, and intelligence take the same object differently, and the higher embraces the lower. God is eternal: not time without end, but the possession of whole, endless life at a single moment. His knowledge is not foresight of a future but sight of a moment that never passes; as watching a walker compels no step, His seeing lays no necessity on the will. Acts He foresees are certain conditionally, free in themselves — so will stands, laws are just, prayer works: practise virtue before the Judge who sees all.",
    context:"Facing death, Boethius frees the will from God's foreknowledge — the arc's last act of providence-thinking before Machiavelli replaces it with power.",
    keyVerses:[
      { ref:"Book V, §2", text:"nor, indeed, can any creature be rational, unless he be endowed with free will." },
      { ref:"Book V, §6", text:"Now, eternity is the possession of endless life whole and perfect at a single moment." },
      { ref:"Book V, §6", text:"thou wilt more rightly deem it not foreknowledge as of something future, but knowledge of a moment that never passes." }
    ],
    takeaway:"Being known is not being forced: God sees your free acts in one eternal present, so choose rightly under the eyes that see all.",
    quiz:[
      { q:"How is chance defined in Book V?",
        choices:["An unexpected result flowing from the concurrence of causes, each pursuing its own end","An event that happens entirely without any cause","A sign from Providence that a man has strayed","The name common people give to bad luck"], a:0,
        why:"§1: chance is 'an unexpected result flowing from a concurrence of causes where the several factors had some definite end,' like a digger unearthing buried gold while tilling." },
      { q:"Why does God's foreknowledge not destroy free will?",
        choices:["Because God revises His knowledge whenever we change our minds","Because God foreknows only the acts of the wicked","Because God's eternity holds all things in one never-passing present, and merely seeing an act — as we see a man walk — imposes no necessity on it","Because the future does not yet exist, so there is nothing to know"], a:2,
        why:"§6: His knowledge is 'not foreknowledge as of something future, but knowledge of a moment that never passes'; the act of vision 'imposes no necessity' on what it sees." },
      { q:"Someone argues that since God already knows your choices, you might as well stop trying. Book V replies that...",
        choices:["prayer can substitute for effort, since God does the rest","being seen is not being compelled: the acts remain free, so laws, rewards, prayer, and responsibility all stand","defiance can falsify God's knowledge and so break fate","only the wicked ever act freely, so effort belongs to them alone"], a:1,
        why:"Two necessities (§6): what God sees is conditionally certain yet free in its own nature; hence 'laws are not unrighteous' and 'hopes and prayers... are not fixed on God in vain.'" }
    ] }
);
