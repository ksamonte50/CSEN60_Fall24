// runs synchronously
function showData() {
    // more code
    console.log("showData function running")
}

// runs asynchronously
async function getRandomFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    // console.log(response)
    const data = await response.json()
    console.log(data.text, "\n")
    // console.log("getData finished")
}

async function getTodaysFact() {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today")
    // console.log(response)
    const data = await response.json()
    console.log(data.text, "\n")
    // console.log("getData finished")
}

getRandomFact()
getTodaysFact()
//showData()