let obj={
    age:20,
    getage: function(a,b){
        return this.age+a+b;
    }
}

let obj1={
    age:30
}

// let m=obj.getage.bind(obj1,"you","aryan");
//  console.log(m());
// let m=obj.getage.bind(obj1);

//  console.log(m("simran","zahid"));

 function getage(a,b){
    console.log(this.age,a,b);
 }

 obj={
    
    age:30
 }

getage.call(obj);

getage.call(obj,20);

getage.apply(obj,[20,30]);

