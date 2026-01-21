// Write your code below
const a = process.argv[2];

if(isNaN(Number(a))){


}else{
    let pattern =""
 let  args =Number(a);

 for (let i = 0; i <args; i++) {    
    for (let j = args-i; j >=0; j--) {   
        
        pattern += " ";
        
    }

    for (let k = i; k >= 0; k--) {     
        pattern += (k+1)+"";
    }
    pattern += "\n";  
  
}  console.log(pattern);   




}

