 var a=[12,45,67,18,30];
 var temp;
 for(var i=0;i<a.length;i++)
 {
     for(var j=0;j<a.length-1-i;j++)
     {
         if(a[j]>a[j+1])
         {
            temp=a[j];
            a[j]=a[j+1];
            a[j+1]=temp
         }
       
     }
     console.log(a[i]); 
 }
