// Express framework
const express = require('express')
const library = require('./library')

const app = express()

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(
    `
        <h1>Homepage</h1>
        <p>${library.printMessage('Homepage content')}</p>
        <p>${library.currentTime()}</p>
    `
    )
    res.end()
})

app.get('/about', (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(
    `
        <h1>About page</h1>
        <p>${library.printMessage('About page content')}</p>
        <p>${library.currentTime()}</p>
    `
    )
    res.end()
})

// export PORT=5000
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})