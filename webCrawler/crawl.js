// step 1 => stub the function wnt to test
// step 2 => test the function
const {JSDOM} = require('jsdom')



async function crawlPage(baseURL , currentURL , pages){
    console.log(`actively crawling : ${currentURL}`)

    const baseURLObj = new URL(baseURL)
    const currentURLObj = new URL(currentURL)

    if (baseURLObj.hostname !== currentURLObj.hostname){
        return pages
    }

    const normalizedCurrentURL = normalizeURL(currentURL)
    if(pages[normalizedCurrentURL] > 0){
        pages[normalizedCurrentURL]++
        return pages
    }

    pages[normalizedCurrentURL] = 1
    console.log(`actively crawling : ${currentURL}`)


    try {
        const resp = await fetch(currentURL)

        if (resp.status > 399){
            console.log(`error in fetch with status code ${resp.status} on page ${currentURL}`)
            return pages 
        }
        const contentType = resp.headers.get("content-type")
        if (!contentType.includes("text/html")) {
            console.log(`non html response on page ${currentURL}`)
            return pages
        }

        const htmlBody = await resp.text()
        const nextURLs = getURLsFromHTML(htmlBody , baseURL)

        for( const i of nextURLs){
            pages  =  await crawlPage(baseURL, i, pages)
        }



    }catch(err){
        console.log(`error in fetch on page ${currentURL}`)
    }
return pages


}


















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
    getURLsFromHTML,
    crawlPage
}