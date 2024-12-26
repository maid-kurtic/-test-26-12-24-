let strs = ["flower", "flow", "flight"];

const zajednickiPrefiks = (strs) => {

let nizovi = strs.reduce((acc, e) => {
acc.push(e.split(''))
return acc
}, [])  
let prefiks = []
nizovi.forEach((e, i) => {
    if(e[i] == nizovi[0][i]){
        prefiks.push(e[i])
    };

})
console.log(prefiks.join(''))
}

zajednickiPrefiks(strs)
