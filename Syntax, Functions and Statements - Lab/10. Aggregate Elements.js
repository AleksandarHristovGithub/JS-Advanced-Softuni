function aggragateElements(array)
{
      let sum = array.reduce((partialSum, a) => partialSum + a, 0);
      let inverseValuesSum = array.reduce((a, b) => a + 1 / b, 0);    

      console.log(sum)
      console.log(inverseValuesSum) 
      console.log(array.join(''));
}
aggragateElements([1, 2, 3])