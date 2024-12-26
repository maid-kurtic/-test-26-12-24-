const str =  " fly me to the     moon     "

const zadnjaRijec = (str) => {
    let trimovan = str.trim();
    let niz = trimovan.split(' ');
    let zadnjaRijecIzNiza = niz.pop();
    return zadnjaRijecIzNiza.length
}
console.log(zadnjaRijec(str))

