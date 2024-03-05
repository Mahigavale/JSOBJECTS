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


profile.taluka='satara';
console.log(profile);


//to delete simply give the expression after the delete keyword.
//it will delete the specified property from the object.
console.log("deletion poeartin here:",delete profile.taluka);
console.log('deleted property here:',profile.taluka);

// if the specified property is deleted sucessfully then it returns the 
//boolean value as true. otherwise false.
console.log('atfer deletion:',profile);