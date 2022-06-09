function GreatestCommonDivisorGDC(numberOne, numberTwo)
{
    
    numberOne = Math.abs(numberOne);
    numberTwo = Math.abs(numberTwo);
  while(numberTwo) {
    var t = numberTwo;
    numberTwo = numberOne % numberTwo;
    numberOne = t;
  }
  console.log(numberOne)
}
GreatestCommonDivisorGDC(15, 5)