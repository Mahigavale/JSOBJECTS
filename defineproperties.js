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

console.log(obj.property1);
obj.property1="asdfg";
console.log(obj.property2);
obj.property2='asdfgjkjhgfdsa';
console.log(obj.property1);
console.log(obj.property2);
console.log(delete obj.property2);
console.log(obj);
//the define properties can be used to define the multiple
//proprties at the single go.
