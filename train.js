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


// const flatten = (coll) => {
//     const result = [];
//     for (const item of coll) {
//         if (Array.isArray(item) === true) {
//             for (const element of item) {
//                 result.push(element);
//             }
//         } else {
//             result.push(item)
//         }
//     }
//     return result
// }

// const things = ['one', ['one', 'three', 'four'], 'three'];
// const flattened = flatten(things);

// console.log(flattened);

// const duplicate = (item) => [item, item]; 
// const things = ['one', ['one', 'three', 'four'], 'three'];
// const newThings = things.map(duplicate);
// console.log(newThings);
import _ from 'lodash';

const getSameCount = (coll1, coll2) => {
    let result = [];
    for (const item of coll1) {
        for (const item2 of coll2) {
            if (item === item2) {
                result.push(item)
            }
        }
    }
    result = uniq(result);
    return result.length;
}

const result = getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]);

console.log(result);
