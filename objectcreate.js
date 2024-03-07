//this method is used to create a object from the already 
//defined object. the already defined object is used as the prototype.


let person={
    iscitizen:true,
    printinfo:function()
    {
        return(`this is the citizen ${this.iscitizen},name is ${this.name}`)
    }
}

//remeber the fact that here we used the name property 
//in the person but declared and used in the person2.
// it works , it definitely works.

let person2=Object.create(person);
person2.name='mahesh';
person2.iscitizen=true;

console.log(person2.printinfo());