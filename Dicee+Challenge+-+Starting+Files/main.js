var a = Math.random()*6
a = Math.floor(a) + 1  
var s = "dice"+a+".png"
var ran = "images/"+s;

var an = Math.random()*6
an = Math.floor(an) + 1  
var sn = "dice"+an+".png"
var rann = "images/"+sn;

document.querySelectorAll("img")[0].setAttribute("src",ran)
document.querySelectorAll("img")[1].setAttribute("src",rann)


if(an > a){
    document.querySelector(".container h1").innerHTML="Player 2 Wins"
}
else if (a > an){
    document.querySelector(".container h1").innerHTML="Player 1 Wins"

}
else{
    document.querySelector(".container h1").innerHTML="Draw Ho gya bro"
}