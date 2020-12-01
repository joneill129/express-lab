const express = require('express') // require express
const path = require('path')
const topicsLi = require('./data/topics.li.js')

const app = express(); // run express

// Configure express app
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Link stylesheet using middleware
app.use(express.static('public'));


// define URL routes
app.get('/', (req, res) => {
    res.redirect('home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/topics', (req, res) => {
    res.render('topics/index', {
        topics: topicsLi.getAll()
    })
})

// Where to listen for requests
app.listen(3000, () => {
    console.log('listening on port 3000')
})