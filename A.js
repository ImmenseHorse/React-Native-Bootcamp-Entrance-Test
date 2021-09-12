function adjacentElementsProduct(array) {
    let max = array[0] * array[1];
    let startIndex = 1;
    while (startIndex < array.length) {
        if (max < array[startIndex] * array[startIndex + 1]) {
            max = array[startIndex] * array[startIndex + 1];
        }
        startIndex += 1;
    }
    return max;
}

const alternatingSums = (arr) => {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2) {
            team2 += arr[i];
        } else {
            team1 += arr[i];
        }
    }
    return [team1, team2];
}