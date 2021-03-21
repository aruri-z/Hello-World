const express = require('express')
const app = express()
const { User } = require('./models')

app.get('/', async (req, res) => {
  
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