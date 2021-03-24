const express = require('express')
const app = express()
const cors = require('cors')
const { User } = require('./models')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    res.send(error)
  }
})

app.listen(3001, () => {
  console.log('Running on port', 3001);
})