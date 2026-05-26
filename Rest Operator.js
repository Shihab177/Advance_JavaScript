function sum (){
    let sum =0;
  
    for(let argument in arguments){
        sum = sum + arguments[argument]
        
    }
      console.log(sum)
        
}


sum(4,7,9,9)


function sum(name, ...args) {
    let sum = 0;

    for (let i in args) {
        sum += args[i];
    }

    console.log(sum);
    console.log(name);
}
sum("shihab", 10, 20, 30);