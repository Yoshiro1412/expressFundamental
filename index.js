const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const port = 3000

// HTTP Methods
app.get('/',(req,res) => {
    res.send('Hello express')
})

app.post('/',(req,res) => {
    res.send('Post!?')
})

app.put('/user',(req,res) => {
    res.send('Put jeje')
})

app.delete('/user',(req,res)=> {
    res.send('Deleted >.< !!!!')
})

app.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/public/about.html')
})

// Routing
router.get('/',(req,res)=> {
    res.sendFile(__dirname+'/public/index.html')
})

router.get('/about',(req,res)=>{
    res.sendFile(__dirname+'/public/about.html')
})

// Static files
app.use('/static',express.static('public'))

app.use('/home',router)

// Run the server
app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`)
})