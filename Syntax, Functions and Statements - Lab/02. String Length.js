function stringLenght(wordOne, wordTwo, wordThree)
{

let firstWord = wordOne.length;
let secondWord = wordTwo.length;
let thirdWord = wordThree.length;
let sum = firstWord + secondWord + thirdWord;
let average = (firstWord + secondWord + thirdWord) / 3
let floor = Math.floor(average)
console.log(sum)
console.log(floor)

}
stringLenght('chocolate', 'ice cream', 'cake')