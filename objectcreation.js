// objects can be created in multiple ways.
//1)object literal.
//2)constructor function
//3)object create method.

const profile={
    name:'mahesh',
    last:'gavale',
    dob:'12-12-12',
    fullname:function()
    { 
        
        console.log(this.name,this.last);
    }
}
/*
this declaration is called as the object literal
it is simplest yet affordable declaration.
you can declare methods also here.
*/

profile.fullname();


/*
constrcutor function: here we can declare the function and
then use it for the creation of the object.
*/

function fulldetails(name,age,dob,arr)
{
    this.name=name;
    this.age=age;
    this.dob=dob;
    this.arr=arr;
    this.nameage=function()
    {
        return this.name+" "+this.age;
    }
}

/*
I had encountered a problem here, 
as we declare the varibales as arguments in the function then what
about the function methods in the object.
remeber to add only the this keyword before the method in 
the constructor function.
*/
const profile2=new fulldetails('mahesh',23,'11111','haha');
console.log(profile2);
console.log(profile2.nameage());

/*
creating the ojects form the .create method.

*/
const song={
    name:"tera buzz",
    singer:'aastha',
    release:'11-11-11'
}

console.log(song);
const song2=Object.create(song);
song2.name='dsp';
song2.singer='kk';
song2.release='111111';
console.log('object using the create method:',song2);

/*
in the create method we use the referring object as argument
and then create new object using the dot opeartor.

*/