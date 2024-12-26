const nums = [2, 7, 11, 15];
const target = 9;

const suma = (arr, num) => {
    let trazeniBrojevi = arr.reduce((acc,e,i) =>{
       let bezElementaIzReduce = arr.filter((f, j) => f !== e)
        let par = bezElementaIzReduce.filter((g,k) =>  e + g == num)    
       acc.push(par)
        
        return acc
    }, [])
    console.log(trazeniBrojevi)


  
}

suma(nums, target)