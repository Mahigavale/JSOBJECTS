
let me={
    name:'mahesh',
    number:123456,
    village:'Pune',
    pincode:123456
}


// for(const[Key,value] of Object.entries(me))
// {
//     console.log(`${Key}:${value}`);
// }

// for(const [l,v] of Object.entries(me))
// {
//     console.log(`${l}:${v}`);
    
//    // console.log(demo.value());
// }

console.log("the keys function in the Js.*********");
for(let v of Object.keys(me))
{
  console.log(v);
}


console.log(("the values function in the js.*********"));
for(let c of Object.values(me))
{
    
    
    console.log(c);
}

let cv=Object.keys(me)

if(cv.includes('name6'))
{
    console.log("true it contains the given name as key! ");
}
else{
    console.log("no it dosen't contain the given word as key!");
}

let covd=Object.getOwnPropertyDescriptors(me);
console.log(covd);

let covd2=Object.getOwnPropertyDescriptor(me,'name');
console.log("the get own property descriptor.......!");
console.log(covd2);
console.log(covd2.writable);
console.log(Object.getOwnPropertyDescriptor(me,'name'));
Object.defineProperty(me,'name',{
    value:"Ashok",
    writable:false,
    configurable:false

})
console.log(Object.getOwnPropertyDescriptor(me,'name'));
console.log("the value of the name is changed now!");
// console.log(me.name);
// console.log(me.name.writable);
// console.log(me.name.configurable);
// console.log(me);
let vc=Object.getOwnPropertyDescriptor(me,'name');
console.log(vc);