function evenPositionElements(arr)
{
    let arrEven = [];
    for (var i = 0; i < arr.length; i++) {
        if(i % 2 === 0) { 
            arrEven.push(arr[i]);
        }
    }
    console.log(arrEven.join(" "))
    
}
evenPositionElements(['20', '30', '40', '50', '60'])