

// const  chai = () => {
//     let username = "Tanish"
//     console.log(this.username)
// }
// chai()
( function chai (){
    console.log(`Hello`)
})();
( () => {
    console.log(`hello Again`)
})()

var a = [1,2,"asus"]

for (const i of a) {
    console.log(i)
}

const m = new Map()
m.set("IN", "+91")
m.set("US","+01")
for (const [key,value] of m) {
    console.log(key)
}
console.log(m)