const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./api/routers/routers');
const mongoDBConnection = require('./api/config/db');
const errorHandler = require('./api/middleware/errorHandler');
const bodyPerser = require('body-parser')
const app = express();



app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors());





app.use('/api/v1/cb',router)


app.use(errorHandler)





app.listen(process.env.PORT || 5000,()=>{
    mongoDBConnection()
    console.log(`server is runign`.bgGreen.white);
})