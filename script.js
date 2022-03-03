// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
// console.log(warmHugs.replace("like", "love")); - this is not permanent; it only shows up in Terminal
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs); // This is permanent

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// beenImpaled = beenImpaled.slice(18)
console.log(beenImpaled.slice(18));

// 3a
let dotDotDot = "...";

// 3b
// let skullBones = "I don't have a skull" + dotDotDot + "or bones.";
let skullBones = `I don't have a skull ${dotDotDot} or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI); 

// 5
let randomNumber = Math.random(); // 0 through 0.99999
randomNumber *= 3; // 0 to 2.99999
randomNumber = Math.floor(randomNumber); // gets rid of decimal
randomNumber++;
console.log(randomNumber);

// B1
console.log(" Let It Go!".trim().repeat(2).toUpperCase());


// B7a
let reindeers = "Reindeers are better than people.";

// B7b
console.log(reindeers.replace(/ /g,'_')); // g = global
// OR
// console.log(reindeers.replaceAll(' ', '_'));
// OR
// console.log("Reindeers are better than people.", "Reindeers_are_better_than_people.");

// B8
console.log(Math.sqrt(2));
// OR
// let squareRoot = Math.sqrt(2);
// OR
// console.log(Math.SQRT2);


// B9 bonus 
 let newRandomNumber = Math.ceil((Math.random()*17)+6);
console.log(newRandomNumber);

// OR
// let newRandomNumber = (Math.floor((Math.random()*16)+7));
// console.log(newRandomNumber);

// without the bonus bonus
/*
let newRandomNumber = Math.random();
newRandomNumber *=17
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber += 7;
*/




