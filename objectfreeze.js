

let student={
    name:'mahesh',
    Id:123,
    city:'pune'
}
console.log(student);

Object.defineProperty(student,'pincode',
{
    value:234567,
    writable:true,
    configurable:true,
    enumerable:true
})
console.log(student.pincode);
Object.freeze(student);

// Object.defineProperty(student,'pincode2',
// {
//     value:123456
// })
// console.log(student.pincode2);