function freqcount(string){
    let mapcount= new Map();

    for(const ch of string){
        if(mapcount.has(ch)){

            mapcount.set(ch,mapcount.get(ch)+1);
        }
        else{
            mapcount.set(ch,1);
        }
    }
    return mapcount;
}

let str="Hi My name is  Slim Shady";

let freq = freqcount(str);
console.log(freq);