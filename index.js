const axios = require('axios')
const cheerio = require('cheerio')
const yargs = require('yargs')

const argv = yargs
    .option('url', {
        alias: 'u',
        describe: 'URL to scrape',
        demandOption: true,
        type: 'string'
    })
    .option('selector', {
        alias: 's',
        describe: 'CSS selector to match the element',
        demandOption: true,
        type: 'string'
    })
    .help()
    .argv

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

scrapeWebPage(argv.url, argv.selector)