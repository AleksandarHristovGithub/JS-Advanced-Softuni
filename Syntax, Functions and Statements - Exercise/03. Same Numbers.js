function sameNumbers(number)
{
    number = String(number);
 
    let result = true;
    let sum = 0;
 
    let firstDigit = number[0];
    for (let i = 0; i < number.length; i++) {
        sum += +number[i];
 
        if (number[i] !== firstDigit) {
            result = false;
        }
    }
 
    console.log(result);
    console.log(sum);
}
sameNumbers(1111)