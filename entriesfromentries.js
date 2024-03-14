/*
group by is used to 

*/

let profile={
    name:'mahesh',
    city:'hadapsar'
}
console.log(profile);
console.log(Object.entries(profile));
let arr=Object.entries(profile);

console.log(Object.fromEntries(arr));

let arr4=[[1,2],[2,3],[4,5]]
let ct=Object.fromEntries(arr4);
console.log(ct);
console.log(Object.entries(ct));