// Write your code below
const a = process.argv[2];

if(isNaN(Number(a))){


}else{
    let pattern =""
 let  args =Number(a);

 for (let i = 1; i <args; i++) {    
    for (let j = args-i; j >=0; j--) {   
        
        pattern += " ";
        
    }

    for (let k = i; k >= 1; k--) {     
        pattern += (k)+"";
    }
    pattern += "\n";  
  
}  console.log(pattern);   




}

