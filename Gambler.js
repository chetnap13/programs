var Stake=8;

var Goal=100;





{
    for(var i=0;i<NoOftimes;i++)
    {
        var cash=Stake;

        while(cash>0 && cash<Goal)
        {
            bets++;

            if(Math.random()<0.5)
            {
                cash++;
            }
            else
            {
                cash--;
            }
        
        if(cash==Goal)
        {
            wins++;
        }
        }
    }
    console.log('\ln');
    console.log(wins +"wins of "+NoOftimes);
    console.log("percent of games won= " + 100.0 * wins/NoOftimes);

});


