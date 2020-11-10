const fs = require('fs').promises
const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000

const app = express()

app.get('/fighters', listFighters)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

async function listFighters (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')

    const fightersFile = path.join(__dirname, '../fighters.json')

    try {
        const data = await fs.readFile(fightersFile)

        res.json(JSON.parse(data))
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


