const mongoose = require('mongoose');


function createConnection(){
    const connection = mongoose.connect('mongodb://localhost:27017/juan')
    connection.then((con)=>{return con}).catch((err)=>{return err})
   
   
}
module.exports= {createConnection}