const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
var sum=0;
rl.question('enter the number\n',(num)=>
{
    for(var i=1;i<=num;i++)
    {
        sum=sum+(1.0/i);
       
    }
    console.log(sum);
    
});