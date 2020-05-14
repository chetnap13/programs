var a=[5,1,2,7,3];
var temp;
for(var i=1;i<a.length;i++)
{
    temp=a[i];
    for(var j=i-1;j>=0 && temp<a[j];j--)
    {
        a[j+1]=a[j];
        a[j+1]=temp;
    }
    
    console.log(a[i]);
} 
   
