function largestNumber(numberOne, numberTwo, numberThree)
{
 let result;
 if (numberOne > numberTwo && numberOne > numberThree)
 {
     result = numberOne;
 }
 else if (numberTwo > numberOne && numberTwo > numberThree)
 {
     result = numberTwo;
 }
 else if (numberThree > numberOne && numberThree > numberTwo)
 {
     result = numberThree
 }
 console.log(`The largest number is ${result}.`)
}
largestNumber()