
 function add(num){
  if(num==0){
    return 0;
  }

  num=num%10;
  return num + add(parseInt(num/10));    
};

console.log(add(12345));