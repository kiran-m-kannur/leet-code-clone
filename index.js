const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Meet Code')
})

app.get('/Problems', (req, res) => {
  res.send(`<html>
              <body>
              <h1 style="color:blue;" > Problem Sections  </h1>
              </body>
              </html> `)
})
 app.get ('/Data', (req,res) =>
 {
  res.json({Name : "Kiran ",
            Age : 30  })
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})