const p1 = new Promise(function (resolve , reject){
    // Do async task
    setTimeout(function(){
        console.log('Task Completed')
        resolve()
    } ,1000)
})

p1.then(function(){
    console.log('Promise consumed')
})


new Promise((resolve,reject) => {
    setTimeout( ()=>{
        console.log('Task 2')
        resolve()
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({useername:"Chai",  email: "tanishsaini262gmail.com"})
    },1000)
})
p3.then((user)=>{
    console.log(user.useername)
})



const p4 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if( !error){
            resolve({username:"Kroos",mail:"K8.com"})
        }else{
            reject('ERROR:something went wrong')
        }
    },1000)
})

p4.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("The promise is either resolve or rejected")
})





const p5 = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error = true
        if( !error){
            resolve({username:"JS",mail:"LM10"})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})


async function consumeP5(){
    try {
        const resp = await p5
    console.log(resp);
    } catch (error) {
        console.log(error)
    }
}
consumeP5()


// async function getAllUsers(){
//    try {
//     const resp =  fetch("https://jsonplaceholder.typicode.com/posts")
//     const data = await  (await resp).json()
//     console.log(data)
    
//    } catch (error) {
//         console.log("EEEEEE",error)
//    }

// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/posts")
.then((r)=>{
    return r.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})     