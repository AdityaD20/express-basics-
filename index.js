const express = require('express')
const path =  require('path')
const app = express()
 const port = 3000

 // const AdiMiddleware =(req, res, next)=>{ /** using thissentence w can create our own middleware  */
// console.log(req)
// next()  }


app.use(express.static(path.join(__dirname, "public"))) /**here public files can share  */
// app.use(AdiMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})
app.get('/about', (req, res) => {
    // res.send('about page!')
     res.sendFile(path.join(__dirname, 'index.html')) /*by doing this we can add differnt pages here  */
    //res.status(500)  /* we can also change port of about page but usimng 500 is not good  */
   // res.json({"Adi": 34})
  })
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})