const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('public/view',
    {
        express: server,
        noCache: true
    })

server
    .use(express.urlencoded({ extended: true }))
    .use(express.static('view'))
    .get("/", (req, res) => { res.render('index.html') })
    .listen(process.env.PORT || 3000)
//console.log('working...')
