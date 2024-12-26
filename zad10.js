const arr = [1, 2, 2, 2, 3, 3, 4]

const brojacElemenata = (arr) => {
let brojac = arr.reduce((acc, e) => {
    acc.set(e, (acc.get(e) || 0) + 1)
return acc;
}, new Map())
return brojac
}

console.log(brojacElemenata(arr));

//Ovaj zadatak sam vjezbao kod kuce i bio je samo sa stringom  pa vjerovanto da i ovo ima slicnosti sa tim kako
//bi ga ChatGPT uradio, svaka slicnost je slucajna (imam memorisan taj zadatak sa starijim datumom kao dokat)


