// step 1 => stub the function wnt to test
// step 2 => test the function

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
    normalizeURL
}