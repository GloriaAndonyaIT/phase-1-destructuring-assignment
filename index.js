const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
const sounds ={
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

const {moo, neigh, baa, oink, cluck} = sounds


// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const {moo:bessie, baa:dolly, oink:babe, cluck:little} = sounds
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const {moo:blackAndWhite, baa:black, oink:pink} = sounds
// Arrays
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// 4. Use destructuring to assign appropriate variables using the color names.
const  [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.



const [r, o, y, g, b, , v] = rainbowColors;




// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 
const [, , , , , indg] = rainbowColors;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const names ={
  muppetName:"Miss Piggy",
  color:"pink",
  song:"Never Before, Never Again",
  job:"Cast member of The Muppet Show",
  partner:"Kermit"
};
const { muppetName, color, song, job, partner } = names;

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const  muppetDetails  ={
  song2:"Moving Right Along",
  song4:"I Hope That Something Better Comes Along",
  nestedJob:"Host of The Muppet Show",
  nestedPartner:"Miss Piggy"
};
const {song2, song4, nestedJob, nestedPartner } =  muppetDetails;