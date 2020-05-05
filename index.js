const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const fetchLink = require('./src/getLink')
const fetchShort = require('./src/getShort')

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
})

app.get('/new', (req, res) => {
	fetchShort(req.query.link, (short) => {
		res.send(short)
	})
})

app.get('/:short', (req, res) => {
	fetchLink(req.params.short, (link) => {
		link == null
			? res.send('Link not found or has expired')
			: res.redirect(`http://${link}`)
	})
})

app.listen(port, console.log(`Listening on port ${port}`))
