function mathOperations(numberOne, numberTwo, operator)
{
  if(operator === "+")
  {
      console.log(numberOne + numberTwo)
  }
  else if (operator === "-")
  {
      console.log(numberOne - numberTwo)
  }
  else if (operator === "*")
  {
      console.log(numberOne * numberTwo)
  }
  else if (operator === "/")
  {
      console.log(numberOne / numberTwo)
  }
  else if (operator === "%")
  {
      console.log(numberOne % numberTwo)
  }
  else if (operator === "**")
  {
      console.log(numberOne ** numberTwo)
  }
}
mathOperations()