const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
rl.question('enter the year\n',(Year)=>
{
    
     if( Year%4==0 && Year%100!=0  || Year%400==0)
    {
        console.log(Year+' is leap year');
    }
    else if(Year.length==3 || Year.length<3)   
    {
        console.log('invalid input');
    }
    else 
    {
        console.log(Year+' is not leap year');
    }
});
