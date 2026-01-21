// Write your code below
 const argv = process.argv[2];


  if(isNaN(Number(argv))||Number(argv)>100||Number(argv)<0){
    console.log("Invalid input");

}else{
   let  args =Number(argv);
    if(args >= 80 && args <=100){
        console.log('Grad is A');
    
     }else if(args >= 70 && args <=79){
        console.log('Grad is B');
    
     }
     else if(args >= 60 && args <=69){
        console.log('Grad is C');
    
     }
     else if(args >= 50 && args <=59){
        console.log('Grad is D');
    
     }else if(args >= 0 && args <=49){
        console.log('Grad is F');
    
     }
    
}
