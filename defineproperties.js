/*
define properties is  used to add the multiple properties
in the given object at a single time.
it's syntax is same as the define property but just a change.

object.defineproperties(obj,{property1:
{
name:
writable:
},{property2:
{
    name:
    configurable:
    writeable:
}});

write the properties in the single curly brace only.
do not use the seperate braces.
use comma as a seperator.
*/

let obj={};

Object.defineProperties(obj,{
    property1:
    {
     value:'maheshrao',
     writable:true,
     configurable:true

    },
    property2:
    {
     value:'dadasaheb',
     configurable:false,
     writable:true
    }
})

//console.log(obj.property1);
obj.property1="asdfg";
//console.log(obj.property2);
obj.property2='asdfgjkjhgfdsa';
//console.log(obj.property1);
//console.log(obj.property2);
//console.log(delete obj.property2);
//console.log(obj);
//the define properties can be used to define the multiple
//proprties at the single go.


let profile={
    name:'mahesh',
    city:'Pune',
    pincode:123456
}
console.log(profile);

Object.defineProperties(profile,{
    taluka:
    {
        value:'Lohara',
        writable:true,
        configurable:true
    },
    district:
    {
        value:'dharashiv',
        writable:true,
        configurable:true
    }
})

console.log(profile);
console.log(profile.taluka);
console.log(profile.district);

console.log(Object.getOwnPropertyDescriptor(profile,'taluka'));
console.log(Object.getOwnPropertyDescriptor(profile,'district'));
console.log(Object.getOwnPropertyDescriptors(profile,'taluka','district'));
console.log("the taluka property before:",profile.taluka);

Object.defineProperty(profile,'taluka',
{
    value:'Omerga',
    writable:true,
    configurable:true,
    enumerable:true

})
console.log("the taluka property after change:",profile.taluka);
console.log(Object.getOwnPropertyDescriptor(profile,'taluka'));
console.log(Object.getOwnPropertyDescriptors(profile,'taluka','district'));
//data descriptors: value and writable
//access descriptors:configurable , enumerable, get ,set