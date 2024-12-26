let arr = [7, 3, 10, 15, 2];

const razlikaIzmedjuMinIMax = (arr) => {
    let najmanji = Math.min(...arr);
    let najveci = Math.max(...arr);

    return najveci - najmanji;
}

console.log(razlikaIzmedjuMinIMax(arr))