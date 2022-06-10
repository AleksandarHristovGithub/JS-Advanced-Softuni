function DiagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        firstDiagonal += input[i][i];
        secondDiagonal += input[i][input.length - i - 1]
    }

    return `${firstDiagonal} ${secondDiagonal}`
}