const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
var head=0;
var tail=0;

rl.question('enter the number of times ,you want to flip the coin\n',(numofflips)=>{
    for(var i=0;i<numofflips;i++)
    {
        var random=Math.random();
        console.log(+random);
    
     if(random<0.5)
     {

      tail++;
     }
    else
     {
       head++;
        }
      
    }
    let percentageOfHead=(head*100)/numofflips;
    console.log('percentage  is '+percentageOfHead); 

});
