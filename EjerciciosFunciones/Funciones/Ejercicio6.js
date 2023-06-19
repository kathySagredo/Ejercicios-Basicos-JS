function booleanoArray (array1, array2) {
    let array3 = array1.concat(array2);
    array3.length >= 10 ? console.log(true) : console.log(false);
}

let array1 = [1,2,3,4,5,6,7];
let array2 = [5,6,7,8];
booleanoArray(array1,array2);