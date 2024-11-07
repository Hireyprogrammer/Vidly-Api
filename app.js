const express = require('express')

// const Joi = require('joi')

const genres = require('./routes/genres')

const app = express();

app.use('/api/genres' , genres)

 app.use(express.json());

 Port =9000

 app.listen(Port , ()=>{console.log(`Server running port ${Port}`)})