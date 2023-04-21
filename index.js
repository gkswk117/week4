const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.get('/dog', (req,res)=>{
    res.send({'sound':'멍멍'})
})

app.get('/cat', (req,res)=>{
    res.send({'sound':'야옹'})
})

app.listen(PORT, ()=>{
    console.log(`Example app listening on port ${PORT}`)
})