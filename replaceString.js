const readline=require('readline');

const rl=readline.createInterface({
    input: process.stdin,
    output:process.stdout,
});
rl.question('enter the username \n',(username)=>{
    if(username.length>2)
    {

        console.log('hello ' +username+ ' how are you?');
        rl.close;
    }
    else
    {
        console.log('error')
    }
});



