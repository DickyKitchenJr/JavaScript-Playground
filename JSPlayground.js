//Random HSL Gradient Generator section

//create random HSL
function newHSL() {
  let hue = Math.floor(Math.random() * 361);
  let saturation = Math.floor(Math.random() * 101);
  let lightness = Math.floor(Math.random() * 101);
  let HSL = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
  return HSL;
}
//assign 3 random HSL to gradient
function newLinearGradient() {
  let newGradient = [["0"], ["1"], ["2"]];
  let newLG = "";
  for (i of newGradient) {
    newGradient[i] = newHSL();
  }
  newLG =
    "linear-gradient(to bottom right, " +
    newGradient[0] +
    ", " +
    newGradient[1] +
    ", " +
    newGradient[2] +
    ")";
  document.body.style.background = newLG;
  document.getElementById("color1").innerHTML = newGradient[0];
  document.getElementById("color2").innerHTML = newGradient[1];
  document.getElementById("color3").innerHTML = newGradient[2];
}
//reset all 3 HSL to white to reset background
function plainHSL() {
  document.body.style.background = "white";
  document.getElementById("color1").innerHTML = "hsl(0, 0%, 100%)";
  document.getElementById("color2").innerHTML = "hsl(0, 0%, 100%)";
  document.getElementById("color3").innerHTML = "hsl(0, 0%, 100%)";
}
//generate random HSL gradient and reset HSL on respective button clicks
let clickHSL = document.getElementById("clickmeHSL");
clickHSL.onclick = newLinearGradient;
let resetHSL = document.getElementById("resetHSL");
resetHSL.onclick = plainHSL;

//Joke Generator section

//array of jokes
let jokes = [
  "Did you hear the one about the guy who fell through the eyeglass factory? Yeah... He made a real spectacle of himself.",
  "How many tickles does it take to make an octopus laugh? Ten... ten tickles",
  "Which bear is the most condescending? A pan-duh!",
  "What kind of noise does a witch’s vehicle make? Brrrroooom, brrroooom.",
  "What’s brown and sticky? A stick.",
  "Two guys walked into a bar. The third guy ducked.",
  "How do you get a country girl’s attention? A tractor.",
  "Why are elevator jokes so classic and good? They work on many levels.",
  "What do you call a pudgy psychic? A four-chin teller.",
  "What did the police officer say to his belly-button? You’re under a vest.",
  "What do you call it when a group of apes starts a company? Monkey business.",
  "My wife asked me to stop singing “Wonderwall” to her. I said maybe…",
  "What kind of drink can be bitter and sweet? Reali-tea.",
  "What do you call a naughty lamb dressed up like a skeleton for Halloween? Baaad to the bone.",
  "Want to know why nurses like red crayons? Sometimes they have to draw blood.",
  "What would the Terminator be called in his retirement? The Exterminator.",
  "What did Tennessee? The same thing Arkansas.",
  "Why do bees have sticky hair? Because they use a honeycomb.",
  "Why do some couples go to the gym? Because they want their relationship to work out.",
  "What do you call an angry musician flipping someone off? A song bird.",
  "What’s the most detail-oriented ocean? The Pacific.",
  "Did you hear about the kidnapping at school? It’s fine, he woke up.",
  "How can you tell it’s a dogwood tree? By the bark.",
  "My boss told me to have a good day, so I went home.",
  "Why did the man fall down the well? Because he couldn’t see that well.",
  "Why is Peter Pan always flying? Because he Neverlands.",
  "A fly had a 50% chance of being called a land.",
  "Which state has the most streets? Rhode Island.",
  "Why was the color green notoriously single? It was always so jaded.",
  "I used to hate facial hair, but then it grew on me.",
  "How do celebrities stay cool? They have many fans.",
  "Sundays are always a little sad, but the day before is sadder day.",
  "What did the flowers do when the bride walked down the aisle? They rose.",
  "It takes guts to be an organ donor.",
  "They fired me from my job at the bank today. Yeah, a woman asked me to check her balance, so I pushed her over.",
  "How do you row a canoe filled with puppies? Bring out the doggy paddle.",
  "Why does cold water think it’s ugly? Because no one ever calls it hot",
  "I was going to tell a time-traveling joke, but you guys didn’t like it.",
  "Why do melons have weddings? Because they cantaloupe.",
  "What do you call a toothless bear? A gummy bear!",
  "What’s Forrest Gump’s password? 1forrest1",
  "What does a nosey pepper do? It gets jalapeño business.",
  "If a child refuses to nap, are they guilty of resisting a rest?",
  "I know a lot of jokes about retired people, but none of them work.",
  "How does a spider learn? It searches the web.",
  "Boiled water died today. It will be mist.",
  "What does a house wear? Address.",
  "Why did the scarecrow win an award? He was out standing in his field.",
  "What’s red and smells like blue paint? Red paint.",
  "I’ve been bored recently, so I decided to take up fencing. The neighbors keep demanding that I put it back.",
  "What do sprinters eat before a race? Nothing—they fast.",
  "Why couldn’t the bicycle stand up by itself? It was two-tired.",
  "I’m so good at sleeping, I can do it with my eyes closed.",
  "I told my girlfriend she drew on her eyebrows too high. She seemed surprised.",
  "There is a huge cat running around that refuses to tell the truth. He’s lion",
  "Why shouldn’t you write with a broken pencil? Because it’s pointless.",
  "Do mascara and lipstick ever argue? Sure, but then they makeup.",
  "What piece on the playground is always exhausted? The tire swing.",
  "The tall guy and his short wife got a divorce. They couldn’t see eye to eye.",
  "What does a writer have in common with a football player? Anxiety over a rough draft.",
  "Why did the guy try to wash his hair with a fake turd? It was labeled sham poo.",
  "My refrigerator drawer kept dripping. It had a leek.",
  "What do you call a handsome runner? Dashing.",
  "I’m not a fan of elevator music. I’s bad on so many levels.",
  "Why did the banana go to the doctor? He was peeling bad.",
  "What did the shy pebble wish for? To be a little boulder.",
  "Why do cows wear bells? Because their horns don’t work.",
];

//choose a joke to display at random
function tellAJoke() {
  let ranNum = Math.floor(Math.random() * (jokes.length - 1));
  document.getElementById("joke").innerHTML = jokes[ranNum];
}
//generate random joke on button click
let clickJoke = document.getElementById("jokebutton");
clickJoke.onclick = tellAJoke;

//Non-sense Name Generator section

function nonSenseName() {
  let consonant = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "z",
  ];
  let vowel = ["a", "e", "i", "o", "u", "y"];
  let digraph = [
    "wh",
    "th",
    "sh",
    "ph",
    "nt",
    "ch",
    "ck",
    "ng",
    "wr",
    "br",
    "gr",
    "tr",
    "cr",
    "kr",
    "kn",
    "mb",
    "gh",
    "st",
    "sl",
    "kl",
    "cl",
    "bl",
    "lc",
    "lk",
  ];
  let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let word = [];
  let count = 0;
  let ranNum = Math.floor(Math.random() * 6) + 2;
  // using ranNum to generate a number between 2 and 8 to assign word random letters
  while (count < ranNum) {
    word.push(letters[Math.floor(Math.random() * letters.length)]);
    count++;
  }
  console.log(word);
  //check if consonants put together create digraph, if not change to vowel
  for (const i in word) {
    let each = Number(i);
    let each1 = each + 1;
    let checkDigraph = word[each] + word[each1];
    if (
      consonant.includes(word[each]) &&
      vowel.includes(word[each1]) == false &&
      digraph.includes(checkDigraph) == false &&
      each < word.length - 1
    ) {
      vowelTotalIndex = vowel.length - 1;
      word[each] = vowel[Math.floor(Math.random() * vowelTotalIndex)];
    }
  }
  console.log(word);
  //check if more than 2 vowels are together, if so change middle vowel to digraph
  for (const i in word) {
    let each = Number(i);
    let beforeEach = each - 1;
    let afterEach = each + 1;
    if (
      vowel.includes(word[each]) &&
      vowel.includes(word[beforeEach]) &&
      vowel.includes(word[afterEach])
    ) {
      digraphTotalIndex = digraph.length - 1;
      word[each] = digraph[Math.floor(Math.random() * digraphTotalIndex)];
    }
  }
  console.log(word);
  // capitalize first letter then join array into a string
  let firstLetter = word[0];
  word[0] = firstLetter.toUpperCase();
  word = word.join("");
  //assign new word to webpage
  document.getElementById("nameme").innerHTML = word;
}
//generate random name on button click
let makeName = document.getElementById("namebutton");
makeName.onclick = nonSenseName;
