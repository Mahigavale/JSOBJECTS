
const prof=new Object();
prof.name='A';
prof.val='B';



const prof2={
    ad:'asd',
    be:'asd'
}
console.log(Object.assign(prof,prof2));
console.log(prof);


let con3={};

console.log(Object.assign(con3,{ad:'asd',vc:'sdf'}));//cloning methods in objects.
console.log(con3);