function getShortMessages(messages)
{
    const newvalue=messages.filter(x=> x.message.length<15);
    const onlyMessage=newvalue.map(x=>x.message)
    console.log(onlyMessage);
    
}var messages=[
    {

    message: 'testing fgsdgffjghfdddhghk'
},
{
message: 'testing b'
},
{
    message:'testing c'
}]
getShortMessages(messages);
