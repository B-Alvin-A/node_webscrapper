const axios = require('axios')
const cheerio = require('cheerio')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function promptUser(){
    return new Promise((res) => {
        rl.question('Enter the URL to scrape: ', (url)=> {
            rl.question('Enter the CSS selctor to match the element: ', (selector) => {
                res({ url,selector })
            })
        })
    })
}

async function scrapeWebPage(url,selector) {
    try {
        const response = await axios.get(url)
        const html = response.data

        const $ = cheerio.load(html)

        const selectedElement = $(selector)

        if(selectedElement.length === 0){
            console.log('No element found with the provided selector')
        }
        else {
            console.log('Text content of the selected element:', selectedElement.text())
        }
    } catch (err) {
        console.error('Error: ', err.message)
    }
}

async function main(){
    const userInput = await promptUser()
    scrapeWebPage(userInput.url, userInput.selector)
    rl.close()
}

main()