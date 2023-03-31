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

let m=obj.getage.bind(obj1);
 console.log(m());