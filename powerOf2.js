const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
var c=1;
rl.question('enter the power of two\n',(power)=>
{
    for(var i=1;i<=power;i++)
    {
        c=c*2;
        console.log('2'+ '^'+ i+'=' +c);
    }
    
});