function linearsearch(arr,num){
    for (const i of arr){
        if(i==num)
          return arr.indexOf(i)
    }
    return -1;
}
let i = linearsearch([1,2,3,4,5],3);
console.log(i);