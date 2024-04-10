
function printReport(pages){
    console.log("==========")
    console.log("REPORT")
    console.log("++++++++++")
    const sortedPages = sortPages(pages)
    for(const i of sortedPages){
        const url = i[0]
        const hits = i[1]
        console.log(`found ${hits} links to page ${url}`)
    }
}


function sortPages(pages){
    const pagesArray = Object.entries(pages)
    pagesArray.sort((a,b) => {
        aHits = a[1]
        bHits = b[1]
        return b[1] - a[1]
    })
    return pagesArray
}
module.exports = {
    sortPages,
    printReport
}