function EqualNeighbors(matrix) {
  
    let pairs = 0;

    matrix.forEach((row, i) => {
        row.forEach((element, j) => {
            if (element === row[j + 1]) {
                pairs++;
            }

            if (matrix[i + 1] && element === matrix[i + 1][j]) {
                pairs++;
            }
        })
    });

    return pairs;
}