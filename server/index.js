const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const pino = require('express-pino-logger')()

const passport = require('passport')
const users = require('./routes/api/users')

const app = express()
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(pino)

const db = require('./config/keys').mongoURI

mongoose
	.connect(db, { useNewUrlParser: true })
	.then(() => console.log('MongoDB successfully connected'))
	.catch((err) => console.log(err))

app.get('/api/greeting', (req, res) => {
	const name = req.query.name || 'World'
	res.setHeader('Content-Type', 'application/json')
	res.send(JSON.stringify({ greeting: `Hello ${name}!` }))
})

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

// Routes
app.use('/api/users', users)

const port = process.env.PORT || 3001 // process.env.port is Heroku's port if you choose to deploy the app there

app.listen(port, () => console.log('Express server is running on localhost:3001'))
