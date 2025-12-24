export type Language = 'en' | 'hu';

export type TranslationKey =
  | 'title'
  | 'hero_title'
  | 'hero_subtitle'
  | 'start_playing'
  | 'how_it_works'
  | 'how_it_works_intro'
  | 'step_1_title'
  | 'step_1_desc'
  | 'step_2_title'
  | 'step_2_desc'
  | 'step_3_title'
  | 'step_3_desc'
  | 'faq_title'
  | 'faq_1_q'
  | 'faq_1_a'
  | 'faq_2_q'
  | 'faq_2_a'
  | 'faq_3_q'
  | 'faq_3_a'
  | 'faq_4_q'
  | 'faq_4_a'
  | 'about_title'
  | 'about_story'
  | 'about_problem'
  | 'about_solution'
  | 'about_success'
  | 'how_to_play_title'
  | 'how_to_play_intro'
  | 'game_title'
  | 'words_collected'
  | 'enter_word'
  | 'submit'
  | 'error_duplicate'
  | 'list_all_words'
  | 'confirm_title'
  | 'confirm_message'
  | 'cancel'
  | 'yes_list'
  | 'confirm_reset_title'
  | 'confirm_reset_message'
  | 'yes_reset'
  | 'all_words'
  | 'no_words'
  | 'start_new'
  | 'nav_codenames'
  | 'nav_about'
  | 'nav_rules'
  | 'footer_built'
  | 'footer_contact'
  | 'htp_step_1_list_1'
  | 'htp_step_1_list_2'
  | 'htp_step_1_list_3'
  | 'htp_step_1_list_4'
  | 'htp_step_2_tip'
  | 'htp_step_3_list_1'
  | 'htp_step_3_list_2'
  | 'htp_step_3_list_3'
  | 'htp_step_3_list_4'
  | 'htp_step_3_list_5';

export const translations: Record<Language, Record<TranslationKey, string>> = {
  hu: {
    title: 'Szolga - Családi Játék',
    hero_title: 'A Tökéletes Ünnepi Családi Játék',
    hero_subtitle: 'Egy telefon, végtelen nevetés. Kapcsolódjatok, tippeljetek és szórakozzatok együtt karácsonykor!',
    start_playing: 'Játék Indítása',
    how_it_works: 'Hogyan Működik',
    how_it_works_intro: 'Egy egyszerű memória- és következtető játék mindenkinek.',
    step_1_title: 'Szavak Megadása',
    step_1_desc: 'Válasszatok ki egy témát, majd adjátok körbe a telefont. Minden játékos titokban beír egy, a témához illő szót.',
    step_2_title: 'Keverés',
    step_2_desc: 'Ha mindenki kész, a játék összekeveri a listát, így senki sem tudja, ki mit írt.',
    step_3_title: 'Tippelés & Csapatépítés',
    step_3_desc: 'Tippelj helyesen, hogy a játékos a "szolgád" legyen. Ő innentől a te csapatodat erősíti!',
    faq_title: 'Gyakori Kérdések',
    faq_1_q: 'Kell több telefon?',
    faq_1_a: 'Nem! Egyetlen telefon elég az egész családnak, amit körbeadtok.',
    faq_2_q: 'Gyerekek is játszhatják?',
    faq_2_a: 'Abszolút! Ha tudnak írni és olvasni, bárki beszállhat.',
    faq_3_q: 'Mi történik, ha valaki ugyanazt írja?',
    faq_3_a: 'A játék automatikusan blokkolja a duplikációkat, így minden szó egyedi marad.',
    faq_4_q: 'Csak karácsonykor játszható?',
    faq_4_a: 'Az ünnepekre hangoltuk, de bármikor elővehetitek egy jó családi összejövetelen!',
    about_title: 'A Játék Története',
    about_story: 'Pár hete egy bulin kicsit lapos volt a hangulat...',
    about_problem: 'Az egyik csaj bedobott egy zseniális játékötletet. Mindenki élvezte, de sajnos valaki mindig kimaradt, mert kellett egy játékmester.',
    about_solution: 'Ezt akartam megoldani, hogy senki se maradjon ki a jóból.',
    about_success: 'Ezért gyorsan összedobtam ezt az appot, és most megosztom veletek, hogy az ünnepek alatt ti is jót szórakozhassatok a családdal! Egyszerű, közös és nagyon vicces.',
    how_to_play_title: 'Játékszabályok',
    how_to_play_intro: 'Itt a részletes útmutató, hogy Szolga mesterré válj.',
    game_title: 'Szógyűjtő Játék',
    words_collected: 'Összegyűjtött szavak:',
    enter_word: 'Írd be a szavad...',
    submit: 'Küldés',
    error_duplicate: 'Ezt a szót már beírták!',
    list_all_words: 'Lista Megjelenítése',
    confirm_title: 'Megerősítés',
    confirm_message: 'Biztosan meg akarod jeleníteni a szavakat? Ez véletlenszerű sorrendbe rendezi őket.',
    cancel: 'Mégse',
    yes_list: 'Igen, Mutasd',
    confirm_reset_title: 'Új Játék?',
    confirm_reset_message: 'Biztosan új játékot kezdesz? A jelenlegi szavak elvesznek.',
    yes_reset: 'Igen, Új Játék',
    all_words: 'Összes Szó:',
    no_words: 'Még nincsenek szavak',
    start_new: 'Új Játék',
    nav_codenames: 'Szolga',
    nav_about: 'Rólunk',
    nav_rules: 'Szabályok',
    footer_built: 'Készítette: Baltay Márton',
    footer_contact: 'Kapcsolat',
    htp_step_1_list_1: 'Üljetek körbe.',
    htp_step_1_list_2: 'Válasszatok egy témát (pl. Történelmi személyek, Márkák).',
    htp_step_1_list_3: 'Adjátok körbe a telefont.',
    htp_step_1_list_4: 'Mindenki írjon be egy, a témához illő szót.',
    htp_step_2_tip: 'Fontos: A játék automatikusan blokkolja a duplikációkat, így minden szó egyedi lesz!',
    htp_step_3_list_1: 'A legfiatalabb játékos kezd.',
    htp_step_3_list_2: 'Tippeld meg, ki írta a listán szereplő egyik szót.',
    htp_step_3_list_3: 'Ha eltalálod, az illető a "szolgád" lesz – innentől egy csapat vagytok!',
    htp_step_3_list_4: 'Egy csapatot csak úgy lehet kiejteni, ha kitalálják az ÖSSZES tagjának a szavát.',
    htp_step_3_list_5: 'Az utolsó életben maradt csapat nyer!'
  },
  en: {
    title: 'Szolga - Family Game',
    hero_title: 'The Perfect Holiday Family Game',
    hero_subtitle: 'One phone, endless laughter. Connect, guess, and have fun together this Christmas!',
    start_playing: 'Start Playing',
    how_it_works: 'How It Works',
    how_it_works_intro: 'A simple game of memory and deduction for everyone.',
    step_1_title: 'Enter Words',
    step_1_desc: 'Pass the phone around. Each player secretly types a word fitting the chosen topic.',
    step_2_title: 'Randomize',
    step_2_desc: 'Once everyone is done, the game shuffles the list so nobody knows who wrote what.',
    step_3_title: 'Guess & Team Up',
    step_3_desc: 'Guess correctly to make a player your "Servant". They join your team to help you win!',
    faq_title: 'Frequently Asked Questions',
    faq_1_q: 'Do we need multiple phones?',
    faq_1_a: 'No! Just one phone is enough for the whole family to pass around.',
    faq_2_q: 'Can kids play?',
    faq_2_a: 'Absolutely! If they can read and write simple words, they can join in.',
    faq_3_q: 'What happens with duplicates?',
    faq_3_a: 'The game automatically blocks duplicate words, so every entry is unique.',
    faq_4_q: 'Is this only for holidays?',
    faq_4_a: 'It’s themed for the holidays, but specific enough to play anytime you gather!',
    about_title: 'A Story Behind the Game',
    about_story: 'It all started a few weeks ago at a party where the vibe was getting a bit flat.',
    about_problem: 'One of the girls tossed up a brilliant game idea. Everyone loved it, but there was one problem: someone always had to be left out to be the "game master".',
    about_solution: 'I wanted to fix that, so no one has to sit on the sidelines.',
    about_success: 'That\'s why I quickly built this app—to solve that problem. Now I\'m sharing it with you so your family can have fun together during the holidays! It\'s easy, inclusive, and hilarious.',
    how_to_play_title: 'How to Play',
    how_to_play_intro: 'Here is the detailed guide to becoming a Szolga master.',
    game_title: 'Word Collection Game',
    words_collected: 'Words collected:',
    enter_word: 'Enter your word...',
    submit: 'Submit',
    error_duplicate: 'This word has already been entered!',
    list_all_words: 'List All Words',
    confirm_title: 'Confirm',
    confirm_message: 'Are you sure you want to reveal all words? This will randomize the order.',
    cancel: 'Cancel',
    yes_list: 'Yes, List Them',
    confirm_reset_title: 'Restart Game?',
    confirm_reset_message: 'Are you sure you want to start a new game? Current words will be lost.',
    yes_reset: 'Yes, Start New',
    all_words: 'All Words:',
    no_words: 'No words collected yet',
    start_new: 'Start New Game',
    nav_codenames: 'Szolga',
    nav_about: 'About',
    nav_rules: 'Rules',
    footer_built: 'Built by M.B.',
    footer_contact: 'Contact',
    htp_step_1_list_1: 'Sit in a circle.',
    htp_step_1_list_2: 'Choose a topic (e.g., Historical Figures, Brands).',
    htp_step_1_list_3: 'Pass the phone around.',
    htp_step_1_list_4: 'Everyone writes one word fitting the topic.',
    htp_step_2_tip: 'Tip: The game blocks duplicate words automatically, so every entry is unique!',
    htp_step_3_list_1: 'The youngest player starts.',
    htp_step_3_list_2: 'Guess who wrote a specific word on the list.',
    htp_step_3_list_3: 'Correct guess? That player becomes your "Servant" (helper). You are now a team!',
    htp_step_3_list_4: 'To eliminate a team, opponents must guess the words of ALL its members.',
    htp_step_3_list_5: 'The last team (or player) standing wins!'
  },
};
