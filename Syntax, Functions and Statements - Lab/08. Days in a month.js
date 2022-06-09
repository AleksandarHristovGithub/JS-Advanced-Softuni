function daysInAMonth(currentMonth, currentYear)
{
    console.log (new Date(currentYear, currentMonth, 0).getDate());
}
daysInAMonth(2, 2021)