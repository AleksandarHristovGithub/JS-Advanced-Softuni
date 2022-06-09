function dayOfWeek(day)
{
if (day == "Monday")
{
    console.log(1)
}
if (day == "Tuesday")
{
    console.log(2)
}
if (day == "Wednesday")
{
    console.log(3)
}
if(day === "Thursday")
{
console.log(4)
}
if (day === "Friday")
{
    console.log(5)
}
if (day === "Saturday")
{
    console.log(6)
}
if (day === "Sunday")
{
    console.log(7)
}
else if (day != "Monday" && day != "Tuesday" && day != "Wednesday" && day != "Thursday" 
 && day != "Friday" && day != "Saturday" && day != "Sunday")
{
    console.log("error")
}
}
dayOfWeek("Monday")