

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


/*
remember the fact that the freeze is a shallow
freeze method. which menas that if the object properties
which are not primitive then we can modify or change the
non primitive properties of the given object.
*/


let employee=
{
    name:'mahesh',
    mobile:1234567890,
    address:
    {
        city:'Pune',
        pin:223344,
        locality:'Hadapsar'
    }
}

console.log(employee);

console.log("freeze line is here:",Object.freeze(employee));
//freeze returns the object it took as argument.

console.log(employee.mobile=78687989);
console.log(employee.name="sachin");
console.log(employee.address.city="latur");
console.log(employee.address.locality="tution area");
console.log(employee);

/*
we can change the property of the object if the property is
also object.
that is the inner objects are not covered by
the object.freeze method.
*/

/*
to use the freeze the inner objects in the object 
use the deep freeze.
*/
