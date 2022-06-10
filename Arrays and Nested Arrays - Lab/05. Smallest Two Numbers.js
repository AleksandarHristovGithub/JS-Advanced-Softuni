function smallestTwoNumbers(arr)
{
    res = arr.sort((a,b) => a - b).slice(0, 2);
    console.log(res.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5])