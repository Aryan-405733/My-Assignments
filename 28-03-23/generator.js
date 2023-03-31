function * fun()
    {
        yield 20;
        yield "akhil";
        yield 30.4;    
    }
      
   
    var gen = fun();
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);