function sumOfNumbersNM(numberOne, numberTwo)
{
    let result = 0;
    let numberOneConvert = Number(numberOne)
    let numberTwoConvert = Number(numberTwo)
    for (let i = numberOneConvert; i <= numberTwoConvert; i++)
    {
        result += i;
    }
     console.log(result);
}
sumOfNumbersNM('1', '5' )