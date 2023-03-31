let obj={
    age:20,
    getage: function(a,b,c){
        return this.age+a+b+c;
    }
}

let obj1={
    age:30
}

console.log(obj.getage.apply(obj1,[40,"aryan","you"]));
