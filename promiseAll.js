const cakeOne=new Promise((resolve,reject)=>{
    resolve('Cheese Cake')
})

const cakeTwo=new Promise((resolve,reject)=>{
    resolve('Brownie Cake')
})

const cakeThree= new Promise((resolve,reject)=>{
    resolve('Icecream Cake')
})

Promise.all([
    cakeOne,cakeTwo,cakeThree
]).then((messages)=> {
    console.log(messages)
})