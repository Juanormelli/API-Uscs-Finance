const mongoose = require('mongoose');


function createConnection(){
    const connection = mongoose.connect('mongodb://localhost:27017/juan')
    connection.then((con)=>{console.log(con)}).catch((err)=>{console.log(err)})
   
   
}
module.exports= {createConnection}