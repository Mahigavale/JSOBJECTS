// // //this method is used to add or modify the existing 
// // //property in the object.
// // //it is used to configure the property according
// // //to the object property needs.

// // //it can be used to add the new properties and to 
// // //declare the behaviour of property itself.


// // // let person={
// // //     name:'mahesh',
// // //     id:'1234bt',
// // //     city:'Pune',
// // //     pincode:12345
// // // }

// // // console.log(person);
// // // Object.defineProperty(person,'village',{
// // //     value:'Khed',
// // //     writable:true,
// // //     configurable:true,
// // //     writable:true

// // // });
// // // console.log(person);
// // // person.village='makani';
// // // console.log(person);


// // let obj={};

// // Object.defineProperty(obj,'name',{
// //    value:'mahesh'
// // });
// // console.log(obj);
// let obj = {};

// // define a single property of obj object
// Object.defineProperty(obj, "property1", {
//   value: 789,
//   writable: true,
// //   enumerable: true,
//    configurable: true,
// });
// obj.property1=124;
// console.log(obj.property1); 

// console.log(delete obj.property1);

// console.log(obj);

// // Output: 789


let obj34={
    city:'Pune',
    pincode:12345
};

Object.defineProperty(obj34,"name",{
    value:"mahesh",
    writable:true
})

console.log(obj34.name);
console.log(obj34.name='dada');
console.log(obj34.name);
console.log(obj34);

//writable-if true then value can be changed.otherwise not.

//configurable-if true then the property can b delted and the 
//attributes can be changed. otherwise not.

//enumerable-if true then listed in the oops else not listed in oops.

console.log(typeof(null));