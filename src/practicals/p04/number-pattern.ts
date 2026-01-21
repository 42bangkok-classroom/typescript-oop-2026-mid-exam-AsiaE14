// Write your code below
const a = process.argv[2];

if(isNaN(Number(a))){


}else{
    let pattern =" "
 let  args =Number(a);

 for (let i = 0; i <=args; i++) {    //first 'for loop' for horizontal lines
    for (let j = 0; j <= (args-i); j++) {    //second 'for loop' to add 'spaces' before pattern
        pattern += " ";
    }

    for (let k = 0; k <= i; k++) {      //third 'for loop' to add * to pattern string
        pattern += k+1;
    }
    pattern += "\n";    //new line after row completion
}
console.log(pattern);   //printing star to console
}

