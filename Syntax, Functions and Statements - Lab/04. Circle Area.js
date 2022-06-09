function circleArea(number)
{
    if(typeof number == 'number'){
        let total = Math.PI * number * number;
        let fixed = total.toFixed(2)
        console.log(fixed)
     }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`);
     }
}
circleArea(7)