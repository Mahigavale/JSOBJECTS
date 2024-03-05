let profile={
name:'mahesh',
address:'Pune',
age:23,
number:23456789,
city:'satara',
pincode:413604,
}
let text='';
//here x denoted the properties in the given object.
//to access we use profile['name']=> values; remeber.
for(let x in profile)
{
  //console.log(x); 
  console.log(x," ",profile[x]);
}
console.log(text);