
//12. find() - return the first element that meets a condition
let num6 = [1, 2, 3, 4, 5];
let findNum = num6.find((element) => {
    return element > 4;
})
console.log(findNum);

//13. filter() - return a new array with all elements that meet a condition
let num7 = [1, 2, 3, 4, 5];
let filterNum = num7.filter((element) => {
    return element > 3;
})
console.log(filterNum);

//14. map() - return a new array with the results of calling a function for every array element
let mapNum = num6.map((element) => {
    return element * 2;
})
console.log(mapNum);

//15. forEach() - execute a function for each array element
num6.forEach((element) => {
    console.log(element);
})
