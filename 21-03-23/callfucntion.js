<<<<<<< HEAD
// obj1={
//     name :"aryan",
//     rollno:14
// };

// obj2={
//     name:"harry",
//     rollno:15
// };

// function hi(){
//     return this.name;
// };
// console.log(hi.call(obj1));

// objnumber={
//     x:3,
//     y:6
// };

// objnumber1={
//     x:5,
//     y:7
// };

// function square(){
//     return this.x**2 + this.y**2;
// };

// console.log(square.call(objnumber1));
 const object={
        xaxis:12,
        yaxis:24,
        square: function(){
            return this.xaxis**2 + this.yaxis**2;
        }
 };

const object1={
    xaxis:2,
    yaxis:34
};

console.log(object.square.call(object));
console.log(object.square());


let obj={
    age:20,
    getage: function(){
        return this.age;
    }
}

let obj1={
    age:30
}

console.log(obj.getage.call(obj1));
=======
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



>>>>>>> d3c401b57cb33b4802ae141cd39f71bd5ef6d73a
