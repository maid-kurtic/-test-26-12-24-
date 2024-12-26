let arr = ["Sings", "like", "Thunder"];
let separator = '-';

const spojeniNiz = (arr, separator) => {
    let spojeniArr = arr.join(separator);
    return spojeniArr
}

console.log(spojeniNiz(arr,separator))