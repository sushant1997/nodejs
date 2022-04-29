const express = require('express');
const app = express();
const PORT = process.env. PORT || 3000;

const routes = require('./routes/user.routes')
const path = require('path')



app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/api', routes);


app.listen(PORT, (err) => {
    if(err){
        throw err;
        
    }
    console.log(`Server running on port ${PORT}!`)
})