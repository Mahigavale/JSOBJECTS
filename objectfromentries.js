/*
this method in the objects is used to convert the given object
of elements to the object with the keys and values.
we can convert the array , map to the objects.

Q)=> can we take the two elemented array and the first elements
being the number? will it take the key as number?


*/

let arr=[[1,2],[3,4],[5,6]]
//you will always have to provide two elements array and not one element.
let con=Object.fromEntries(arr);
let arr4=arr.flat(0);
console.log(arr4);

console.log(con);


console.log("Object entries method:",Object.entries(con));