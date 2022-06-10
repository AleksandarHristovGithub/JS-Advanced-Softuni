function sumFirstLast(arr)
{
  let first = arr[0];
  let last = arr.slice(-1)
  
  let total = Number(first) + Number(last)
  console.log(total)
}
sumFirstLast(['20', '30', '40'])