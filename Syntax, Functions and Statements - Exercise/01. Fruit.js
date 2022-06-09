function fruit(fruit, kilograms, price)
{
   let kg = kilograms / 1000;
   let kgFixed = kg.toFixed(2);
   let priceForKg = kg * price;
   let priceForKgFixed = priceForKg.toFixed(2);

   console.log(`I need $${priceForKgFixed} to buy ${kgFixed} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80)