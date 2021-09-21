// try to show what is the minimum an maximum values of an array

let array = [1, 6, 545, 8, 9, 67];
let maxMin = array.reduce((acc, ini) => {
    let result = [];
    let min = acc < ini ? acc : ini;
    result[0] = min;
    // let max = acc > ini ? acc : ini;
    // result[1] = max;
    // return result;
});

console.table(maxMin);
