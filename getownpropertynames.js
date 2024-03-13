/*

the get own property names method is used to get all the names 
of the properties in the given object.
if we do not know the property names we can use this method to
access the property names.
and chaiming this to another method we can perform the 
desired a=opeartions on the given array of the names.
*/


let obj=
{
    name:'mahesh',
    class:'city',
    number:'qw34567i8'
}

let con=Object.getOwnPropertyNames(obj);

console.log(con);

if(con.includes('name'))
{
    console.log("the given property name is present in the array.");
}