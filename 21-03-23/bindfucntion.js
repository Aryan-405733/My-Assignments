<<<<<<< HEAD
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
=======
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
>>>>>>> d3c401b57cb33b4802ae141cd39f71bd5ef6d73a
console.log(m());