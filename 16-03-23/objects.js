let me={
    name: "aryan",
    birthyear: 2000,
    rollno : 14,
    email: "as333@gmail.com",

    

    getage: function(){
        return (2023-this.birthyear)
    }
}

let age = me.getage();

console.log(age);
for(let val in me){
    console.log(`${val} = ${me[val]}`);
}

let array=[1,2,3,4,5,6]
 for (let val of array){
    console.log(val);
 }

