const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Olá mundo!!!')
    console.log('Server running on http://localhost:3000')
})

app.listen(3000)