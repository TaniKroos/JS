const a =   document.querySelector('form')
a.addEventListener('submit', function(e){
    e.preventDefault()
    const h = (document.querySelector('#height').value)
    const w = (document.querySelector('#weight').value)
    const r = document.querySelector('#results')

    if(h === '' || h<0 || isNaN(h)){
        r.innerHTML = "wrong"
    }else if(w === '' || w<0 || isNaN(w)){
        r.innerHTML = "wrong"
    }else{
        var ans = w/((h*h)/10000)
        r.innerHTML = `${ans}`
    }




})
