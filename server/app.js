const express = require('express')
const path = require('path')


const app = express()

app.use(express.static(path.join(__dirname, '../client' )))
app.set('view engine', 'pug')
console.log(path.join(__dirname,"/views"))
app.set('views',path.join(__dirname,"/views"))





const PORT = process.env.PORT || 3001



// const mmiddleware =
// const routers = require()

// ROUTES USE
// app.use(mmiddleware)
// app.use(routers)


app.get('/', (req,res) => {
  res.render('pages/index')
})

app.get('/admin',(req,res)=>{
  res.render('pages/admin-main')
})



app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)