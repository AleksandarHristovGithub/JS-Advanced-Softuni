function pieceOfPie(flovors, firstTargetFlovor, secondTargetFlovor) {
    let startIndex = flovors.indexOf(firstTargetFlovor);
    let endIndex = flovors.indexOf(secondTargetFlovor);

    return flovors.slice(startIndex, endIndex + 1);
}