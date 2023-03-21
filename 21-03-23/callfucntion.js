obj1={
    name :"aryan",
    rollno:14
};

obj2={
    name:"harry",
    rollno:15
};

function hi(){
    return this.name;
};
console.log(hi.call(obj1));

objnumber={
    x:3,
    y:6
};

objnumber1={
    x:5,
    y:7
};

function square(){
    return this.x**2 + this.y**2;
};

console.log(square.call(objnumber1));



