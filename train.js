// const text = 'hello hexlet';

// const capitalize = (text) => (text.length === 0) ? text : `${text[0].toUpperCase()}${text.slice(1)}`;


// const capitalizeWords = (sentence) => {
//   const separator = ' ';
//   const words = sentence.split(separator);
//   const capitalized = [];
//   for (const word of words) {
//     capitalized.push(capitalize(word));
//   }
//   return capitalized.join(separator)
// };

// let result = capitalizeWords(text);

// console.log(result)

// const sentence = 'When you play the game of thrones, you win or you die';
// const sentence2 = 'chicken chicken? chicken! chicken';

// const makeCensored = (sentence, bannedWords) => {
//   const words = sentence.split(' ');
//   const censored = [];

//   for (const word of words) {
//     censored.push(bannedWords.includes(word) ? '$#%!' : word);
//   }

//   return censored.join(' ');
// };

// const result = makeCensored(sentence, ['die', 'play']);
// console.log(result)

