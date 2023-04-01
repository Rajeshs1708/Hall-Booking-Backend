require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { db } = require('./connection')
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const hotelsRoute = require('./routes/hotels')
const roomsRoute = require('./routes/rooms')

//Middlewares
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Home page Hello world !')
})

//middleswares
app.use('/api/hotels', hotelsRoute)
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/rooms', roomsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong'
  return res.status(errorStatus).send({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  db()
  console.log(`App is Listening to the port ${PORT}`)
})
