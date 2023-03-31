function* fib(n){
    let a=0;
    let b=1;
    for(let i=0; i<n;i++ ){
        yield
        [a,b] = [b,a+b]
    }
}

let fib1=fib(10);
for(const f of fib1){
    console.log(f);
}