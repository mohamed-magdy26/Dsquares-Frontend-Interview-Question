function isCanGenerateMessage(newspaper, message) {
  const newspaperLetters = newspaper.split('');
  const messageLetters = message.split('');
  for (let char of messageLetters) {
    if(newspaperLetters.includes(char)) {
      newspaperLetters.splice(newspaperLetters.indexOf(char), 1);
    } else {
      return false;
    }
  }
  return true;
}

//* other solution I made some search about

// function isCanGenerateMessage(newspaper, message) {
//   const newspaperMap = createOccuranceMap(newspaper);
//   for (let char of message) {
//     if (newspaperMap[char]) {
//       newspaperMap[char]--;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// function createOccuranceMap(str) {
//   const map = {};
//   for (let char of str) {
//     if (map[char]) {
//       map[char]++;
//     } else {
//       map[char] = 1;
//     }
//   }
//   return map;
// }

let newspaper = "A thief has stolen a rare parrot from the mansion of a wealthy businessman. Authorities are urging anyone with information to come forward.";
let message = "rare pet"
console.log(isCanGenerateMessage(newspaper, message));

