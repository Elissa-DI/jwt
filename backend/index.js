require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8000;
const connection = require('./db')

//Middlewares

app.use(express.json());
app.use(express.cors());

//Connect to database
connection();

app.listen(port, ()=>{
    console.log(`listening on port ${port}...`);
})