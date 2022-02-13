const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("/")
  res.send('Hello Comedu!')
})

const responseMessage = `HTTP/1.1 200 OK
Date: Sun, 10 Oct 2010 23:26:07 GMT
Content-Type: text/html
Content-Length: 48

<html><body><h2>Hello, World!</h2></body></html>
`

app.get('/raw', (req, res) => {
  console.log("/raw")
  res.socket.end(responseMessage)
})

app.post('/raw', (req, res)=>{
  console.log("/raw")
  console.log(`headers: ${req.headers}`)
  console.log(`body: ${req.body}`)
  const data = {
    'headers': JSON.stringify(req.headers),
    'body': JSON.stringify(req.body)
  };
  res.send(data);
})

app.listen(port, () => {
  console.log(`Listening: ${port}`)
})