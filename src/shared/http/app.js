const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const connection = require('../infra/mongoose/index.js')
const Model = require('../../modules/transaction/models/transactionModel')

connection.createConnection()

console.log(Model)
const app = express()

app.use(cors());
app.use(express.json());

app.use(routes)

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

