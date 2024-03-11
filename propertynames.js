

let profile={
    name:'mahesh',
    number:12345678,
    city:'pune',
    mobile:'7777777777'

}


console.log(Object.getOwnPropertyNames(profile));

let NM=Object.getOwnPropertyNames(profile);
let count=0;
for(let bv of NM)
{
    count++;
    console.log(bv);
    console.log(count);
}