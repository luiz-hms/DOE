const express = require('express')
const server = express()

server.use(express.static('public'))

server.use(express.urlencoded( { extended: true }))

const nunjucks = require('nunjucks')
nunjucks.configure("./", {
    express: server,
    noCache: true
})

const doadores = [
    {
        name: "Luiz Henrique",
        sangue: "AB+"
    },
    {
        name: "Jailma Freire",
        sangue: "O+"
    },
    {
        name: "Edson",
        sangue: "A+"
    },
    {
        name: "Melissa",
        sangue: "B+"
    }
]

server.get("/", function(req, res) {
    return res.render('index.html', { doadores })
})

server.post("/", function(req, res) {
    const name = req.body.name
    const email = req.body.email
    const sangue = req.body.sangue
    doadores.push({
        name: name,
        sangue: sangue
    })

    return res.redirect("/")
})

server.listen(3000, function() {
    console.log('ta funfando')
})
