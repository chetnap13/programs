var pets=['cat','dog','elephant'];
function processpets(pets)
{
    for(let i=0;i<pets.length;i++)
    {
        pets[i]=pets[i]+ 's';
    }
console.log(pets);
}
processpets(pets);
