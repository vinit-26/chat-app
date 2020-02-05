const express = require('express');
const app = express();

app.get('/', (req,res)=> {
    console.info('Some Information');
    res.send("Some Information");
});

app.listen(3000,console.log('App listening on port 3000'));