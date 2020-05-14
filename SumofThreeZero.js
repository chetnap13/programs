var arr=[3,-1,-7,-4,-5,9,-4];
for(var i=0;i<arr.length;i++)
{
    var firstNumber=arr[i];
    for(var j=i+1;j<arr.length;j++)
    {
        var secondNumber=arr[j];
        for(var k=j+1;k<arr.length;k++)
        {
            var thirdNumber=arr[k];
        var sum=firstNumber + secondNumber + thirdNumber;
        if(sum==0)
            {
                console.log( +firstNumber+' ' +secondNumber+' '+thirdNumber);
            }
        }
    }
}
