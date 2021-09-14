const express = require('express')
const path = require('path')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Index.html'))
})

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Gallery.html'))
})

app.get('/board', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'board.html'))
})

app.listen(PORT, () => {
    console.log(`Server has been started on PORT ${PORT} ...`)
})
