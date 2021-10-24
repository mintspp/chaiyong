const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
var path = require("path");
require("dotenv").config();
const port = process.env.PORT || 5000;
// const port = 80;

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function (req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

//webbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
app.use(bodyparser.json());
var path = require("path");
const cors = require('cors');
app.use(
  cors(),
  bodyparser.json(),
  bodyparser.urlencoded({
    extended: true
  })
);

const {
  query_command
} = require("./utilities/query_command")
console.log("Server started...");
var mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
    user: 'root',
    port: '3306',
    password: '',
  database: 'chaiyong',
  multipleStatements: true
});
app.post("/webhook", (req, res) => {
  //console.log(req.body.events);
  Promise
    .all(req.body.events.map(handleEvent))
    .then(result => res.json(result));
});
app.post('/insertMember', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`INSERT INTO MEMBER (NAME,LNAME,ADDRESS,PROVINCE,DISTRICT,SUBDISTRICT,ZIPCODE,EMAIL,PHONE_NUMBER,USERNAME,PASSWORD,IMG) 
  values ('${body.NAME}','${body.LNAME}','${body.ADDRESS}','${body.PROVINCE}','${body.DISTRICT}','${body.SUBDISTRICT}','${body.ZIPCODE}','${body.EMAIL}','${body.PHONE_NUMBER}','${body.USERNAME}','${body.PASSWORD}','${body.IMG}')`);
  console.log(query);
  res.send(query)
});
app.post('/select', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(``);
  console.log(query);
  res.send(query)
});
app.listen(port);
