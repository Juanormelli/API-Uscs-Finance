const express = require('express');
const cors = require('cors');
const connection = require('../infra/mongoose/index.js')

connection.createConnection()


const app = express()

app.use(cors());
app.use(express.json());

app.get('/teste', (req, res, next) => {
    console.log("teste")
    res.send("este")
})


app.use((err, req, res, next) => {

    return res.status(500).json({
        status: 'Error',
        message: `Internal Server Error - ${err.message}`,
    })
});

app.listen(3336,()=>console.log("Server is running"))


module.exports = app

