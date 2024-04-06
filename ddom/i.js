
var a = document.querySelectorAll('li')
a[0].style.color = 'red'
a[1].style.backgroundColor = 'purple'
a[2].style.fontSize = "1rem"
a.forEach(function(i){
    i.style.color = "green"
})
var b = Array.from(a)
b.map( function (i){
    i.style.backgroundColor = 'orange' 
})

var p = document.querySelector(".parent")
console.log(p.children[1].style.backgroundColor = 'purple')
for (let i = 0; i < p.children.length; i++) {
    var element = p.children[i].style.backgroundColor = "green";
    console.log(element)
}


function A(name){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(name))
    console.log(li)
    document.querySelector(".lang").appendChild(li)
}
A("js")
A("[ython")
A("golang")

const sec = document.querySelector("li:nth-child(1)")
const nli = document.createElement("li")
nli.textContent = "Mojo"
console.log(sec)

sec.replaceWith(nli)