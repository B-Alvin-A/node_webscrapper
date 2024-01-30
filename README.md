# CLI Web Scraper

A Node.js command-line interface (CLI) application that allows you to scrape a webpage for text content based on a provided URL and CSS selector.

## Getting Started

These instructions will help you set up and run the CLI web scraper on your local machine.

### Prerequisites

- Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installing

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>

1. Clone this repository to your local machine.
    ```bash
    git clone https://github.com/B-Alvin-A/node_webscrapper.git
    cd your-repository
    ```

2. Install the required dependencies.
    ```bash
    npm install
    ```

3. Run the application.
    ```bash
    node index.js
    ```
    or
    ```bash
    node index_2.js
    ```

## Example Usage

### index.js
_here you will need to enter the url and selector together with the node execution command_
```bash
node index.js --url <your_url> --selector <your_css_selector>
```

### index_2.js
_here you will be prompted to enter the url and selector in the CLI after the node execution command_
    ```bash
    node index.js
    ```

    ```bash
    Enter the URL to scrape: <your_url>
    Enter the CSS selctor to match the element: <your_css_selector>
    ```