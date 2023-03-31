let obj={
    firstname:"aryan",
    lastname:"sharma",
    company:"AVI"
    
}

let obj1={
    firstname:"mhd.",
    lastname:"shakeeb",
    company:"AVI",
    
}

function join (){

        return this.firstname + this.lastname;
}

let m=join.bind(obj1);
console.log(m());