const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Comedu!')
})

app.listen(port, () => {
  console.log(`Listening: ${port}`)
})