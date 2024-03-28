// constructor -> singleton
// literals -> not singleton
const myS = Symbol("key1")
const JsUser = {
    "name": "Tanish",
    age: 20,
    [myS]: "mykey1",

    mail: "tani@openai.com",
    lastLogin: ["Monday", "saturday"]
}

//console.log(JsUser["name"])
JsUser.greeting = function(){
    console.log("Hello")
}

// console.log(JsUser)
// console.log(JsUser.greeting())



// singletoon
const user = new Object()
user.id = "4"
user.name = "sam"
user.isLogin = false

const reg = {
    email: "sam@gmail.com",
    fullname: {
        username: {
            fname: "tanish",
            lname: "saini"
        },
        age: 20,

    }
}
const o3 = Object.assign({},JsUser,user,reg)
// console.log(o3)
// console.log(Object.entries(o3))
 
// console.log(reg.fullname.username.fname)

  


const course = {
    course: "JS",
    price: "999",
    instructor: "Tanish"

}

const {instructor} = course
console.log(instructor)

 

