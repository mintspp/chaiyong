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
  //console.log(query);
  res.send(query)
});

app.post('/insertProduct', async (req, res) => {
  const {
    body
  } = req;
  var query = await query_command(`INSERT INTO product (PRODUCT_NAME,DETAIL,PRICE,STATUS,STOCK,TYPE,BRAND,IMG) 
  values ('${body.PRODUCT_NAME}','${body.DETAIL}','${body.PRICE}','${body.STATUS}','${body.STOCK}','${body.TYPE}','${body.BRAND}','${body.IMG}')`);
  //console.log(query);
  res.send(query)
});

app.post('/updateProduct', async (req, res) => {
  const {
    body
  } = req;
  console.log(body);
  var query = await query_command(`UPDATE product
  SET 
  PRODUCT_NAME = '${body.PRODUCT_NAME}', 
  DETAIL = '${body.DETAIL}', 
  PRICE = '${body.PRICE}', 
  STOCK = '${body.STOCK}', 
  TYPE = '${body.TYPE}', 
  BRAND = '${body.BRAND}',
  STATUS = '${body.STATUS}',
  IMG = '${body.IMG}'
  WHERE PRODUCT_ID = ${body.PRODUCT_ID};`);
  console.log(query);
  res.send(query)
});

app.post('/updateProductstatus', async (req, res) => {
  const {
    body
  } = req;
  console.log(body);
  var query = await query_command(`UPDATE product
  SET 
  STATUS = '0' 
  WHERE PRODUCT_ID = ${body.PRODUCT_ID};`);
  console.log(query);
  res.send(query)
});

app.post('/selectproductALL', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE STATUS IN ('1','2','3') AND PRODUCT_NAME LIKE "%${body.search}%" `);
  //console.log(query);
  res.send(query)
});

app.post('/selectproduct3', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE STATUS = '3' LIMIT 4  `);
  //console.log(query);
  res.send(query)
});

app.post('/selectproducts', async (req, res) => {
  const {
    body
  } = req;
  console.log('bkk')
  var query = await query_command(`SELECT * FROM product WHERE STATUS = '3'`);
  console.log(query);
  res.send(query)
});

app.post('/selectproduct2', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE STATUS = '2' LIMIT 4 `);
  //console.log(query);
  res.send(query)
});

app.post('/selectproduct', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE STATUS = '1' `);
  //console.log(query);
  res.send(query)
});

app.post('/selectproductDetail', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE PRODUCT_ID = '${body.PRODUCT_ID}' `);
  //console.log(query);
  res.send(query)
});

app.post('/select', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(``);
  //console.log(query);
  res.send(query)
});
app.listen(port);
