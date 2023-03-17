function armstrong(n){
  let sum=0;
  let num=n;
    
    while(num!==0){
    sum+=(num%10)**3;
    num=parseInt(num/10);
    }
         return sum===n?console.log("YES"):console.log("NO");
}
console.log(armstrong(371));
console.log(armstrong(321));

