let arr = [1, 2];

const veciOdProsjeka = (arr) => {
    let suma = arr.reduce((acc, e) => acc + e, 0);
    let prosjek = suma / arr.length;
    let veciBrojevi = arr.filter(e => e > prosjek);
    console.log(veciBrojevi);
}

veciOdProsjeka(arr)