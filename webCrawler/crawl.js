// step 1 => stub the function wnt to test
// step 2 => test the function
const {JSDOM} = require('jsdom')


function getURLsFromHTML(htmlBody, baseURL){
    const urls =[]
    const dom =  new JSDOM(htmlBody)
    const links = dom.window.document.querySelectorAll('a')
    for (const i of links){
        if(i.href.slice(0,1) === '/'){
            //relative
            try {
                const urlObj = new URL(`${baseURL}${i.href}`)
            urls.push(urlObj.href)
            }catch (err){
                console.log(`error with relative url: ${err.message}`)
            }
            
        }
        else{
            // absolute
            try {
                const urlObj = new URL(i.href)
            urls.push(urlObj.href)
            }catch (err){
                console.log(`error with absolute url: ${err.message}`)
            }
        }
        
    }
    return urls
}




function normalizeURL(urlString){
    const urlObj = new URL(urlString) // URL constructor lowercases a string 

    
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if ( hostPath && hostPath.slice(-1) === "/"){
        console.log(hostPath)
        return hostPath.slice(0, -1)
    }
    return  hostPath

}

module.exports = {
    normalizeURL,
    getURLsFromHTML
}