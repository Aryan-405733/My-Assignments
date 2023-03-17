function count(arr){
    let even_count=0;
    let odd_count=0;

    for(let i of arr){
        if(i%2==0){
            even_count++;
        }
        else{
             odd_count++;
        }

    }
    console.log(even_count);
    console.log(odd_count);
}

arr = [3,6,8,7,13,98,76];

count(arr);
