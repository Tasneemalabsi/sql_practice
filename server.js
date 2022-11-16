'use strict'
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
server.use(express.json())
var mysql = require('mysql');

const PORT = `${process.env.PORT}`;

var con = mysql.createConnection({
  host: PORT,
  user: `${process.env.User}`,
  password: `${process.env.Password}`
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
server.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
})
