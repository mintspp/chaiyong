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

  var query = await query_command(
    `INSERT INTO MEMBER (NAME,LNAME,ADDRESS,PROVINCE,DISTRICT,SUBDISTRICT,ZIPCODE,EMAIL,PHONE_NUMBER,USERNAME,PASSWORD,IMG) 
  values ('${body.NAME}','${body.LNAME}','${body.ADDRESS}','${body.PROVINCE}','${body.DISTRICT}','${body.SUBDISTRICT}','${body.ZIPCODE}','${body.EMAIL}','${body.PHONE_NUMBER}','${body.USERNAME}','${body.PASSWORD}','${body.IMG}')`
  );
  //console.log(query);
  res.send(query)
});

app.post('/login', async (req, res) => {
  const {
    body
  } = req;
  var query = await query_command(`SELECT * FROM MEMBER 
  WHERE USERNAME ='${body.USERNAME}' AND PASSWORD ='${body.PASSWORD}'`)

  res.send(query)
});

app.post('/insertProduct', async (req, res) => {
  const {
    body
  } = req;
  var query = await query_command(
    `INSERT INTO product (PRODUCT_NAME,DETAIL,PRICE,STATUS,STOCK,TYPE,BRAND,IMG) 
  values ('${body.PRODUCT_NAME}','${body.DETAIL}','${body.PRICE}','${body.STATUS}','${body.STOCK}','${body.TYPE}','${body.BRAND}','${body.IMG}')`
  );
  //console.log(query);
  res.send(query)
});

app.post('/insertLike', async (req, res) => {
  const {
    body
  } = req;
  var query = await query_command(`INSERT INTO likes (PRODUCT_ID,MEMBER_ID) 
  values (${body.PRODUCT_ID},${body.MEMBER_ID})`);
  console.log(query);
  res.send(query)
});

app.post('/Shoppingcart', async (req, res) => {
  const {
    body
  } = req;
  var select = await query_command(`SELECT COUNT(*) AS countshopping FROM SHOPPING_CART JOIN cart ON shopping_cart.CART_ID = cart.CART_ID
          WHERE MEMBER_ID = ${body.MEMBER_ID} AND STATUS = '1'`)
  // console.log(select[0].countshopping > 0);
  if (select[0].countshopping > 0) {
    var cart = await query_command(
      `SELECT * FROM cart WHERE MEMBER_ID = ${body.MEMBER_ID} ORDER BY CART_ID DESC LIMIT 1`
    )
    // console.log(cart[0].CART_ID);
    var insertpd = await query_command(`INSERT INTO SHOPPING_CART (CART_ID,PRODUCT_ID,TOTAL)
            VALUES (${cart[0].CART_ID},${body.PRODUCT_ID},'${body.TOTAL}')`)
  } else {
    var insertMB = await query_command(`INSERT INTO CART (MEMBER_ID)
            VALUES (${body.MEMBER_ID})`)
    console.log(insertMB.insertId);
    var insertpd = await query_command(`INSERT INTO SHOPPING_CART (CART_ID,PRODUCT_ID,TOTAL)
            VALUES (${insertMB.insertId},${body.PRODUCT_ID},'${body.TOTAL}')`)
  }

  res.send(insertpd)
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

app.post('/updateMember', async (req, res) => {
  const {
    body
  } = req;
  console.log(body);
  var query = await query_command(`UPDATE member
  SET 
  NAME = '${body.NAME}', 
  LNAME = '${body.LNAME}', 
  PHONE_NUMBER = '${body.PHONE_NUMBER}', 
  EMAIL = '${body.EMAIL}', 
  USERNAME = '${body.USERNAME}', 
  PASSWORD = '${body.PASSWORD}',
  ADDRESS = '${body.ADDRESS}',
  ZIPCODE = '${body.ZIPCODE}',
  SUBDISTRICT = '${body.SUBDISTRICT}',
  DISTRICT = '${body.DISTRICT}',
  PROVINCE = '${body.PROVINCE}',
  IMG = '${body.IMG}'
  WHERE MEMBER_ID = ${body.MEMBER_ID};`);
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

app.post('/updateLike', async (req, res) => {
  const {
    body
  } = req;
  console.log(body);
  var query = await query_command(`UPDATE likes
  SET 
  STATUS = '0' 
  WHERE PRODUCT_ID = ${body.PRODUCT_ID};`);
  console.log(query);
  res.send(query)
});

app.post('/selectshoppinguser', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT cart.MEMBER_ID,shopping_cart.*,product.* FROM cart 
  JOIN shopping_cart ON cart.CART_ID = shopping_cart.CART_ID
  JOIN product ON shopping_cart.PRODUCT_ID = product.PRODUCT_ID
  WHERE MEMBER_ID = ${body.MEMBER_ID} AND shopping_cart.STATUS = '1'`);
  //console.log(query);
  res.send(query)
});

app.post('/selectproductALL', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(
    `SELECT * FROM product WHERE STATUS IN ('1','2','3') AND PRODUCT_NAME LIKE "%${body.search}%" `
  );
  //console.log(query);
  res.send(query)
});

app.post('/selectmemberALL', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(
    `SELECT * FROM member WHERE TYPE = '1' AND NAME LIKE "%${body.search}%"`);
  //console.log(query);
  res.send(query)
});

app.post('/checkmember', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(
    `SELECT * FROM member WHERE MEMBER_ID = '${body.MEMBER_ID}'`);
  //console.log(query);
  res.send(query)
});

app.post('/selectproduct3', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE STATUS = '3' LIMIT 6  `);
  //console.log(query);
  res.send(query)
});

app.post('/selectproduct3s', async (req, res) => {
  const {
    body
  } = req;
  // console.log('bkk')
  var query = await query_command(
    `SELECT * FROM product WHERE STATUS = '3' AND PRODUCT_NAME LIKE "%${body.search}%"`);
  console.log(query);
  res.send(query)
});

app.post('/selectproduct2s', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(
    `SELECT * FROM product WHERE STATUS = '2' AND PRODUCT_NAME LIKE "%${body.search}%" `);
  //console.log(query);
  res.send(query)
});

app.post('/insertorder', async (req, res) => {
  const {
    body
  } = req;
  var query = await query_command(`INSERT INTO orders (CART_ID,TOTAL_PRICE)
  VALUES (${body.CART_ID},"${body.TOTAL_PRICE}")`);
  // console.log(body);
  console.log(query);
  res.send(query)
});

app.post('/insertSHOPPINGRECEIPT', async (req, res) => {
  const {
    body
  } = req;
  var rent = await query_command(`INSERT INTO receipt(CART_ID,RECEIPT_IMG)
  VALUES(${body.CART_ID},'${body.RECEIPT_IMG}')`)
  console.log(rent);
  res.send(rent)
});

app.post('/updatestock', async (req, res) => {
  const {
    body
  } = req;

  var updatestock = await query_command(`UPDATE product SET STOCK = STOCK - '${body.TOTAL}' 
      WHERE PRODUCT_ID = ${body.PRODUCT_ID};`);
  console.log(updatestock);
  var updateshoppingcard = await query_command(`UPDATE shopping_cart SET STATUS = '3'
      WHERE SHOPPING_CART_ID = ${body.SHOPPING_CART_ID};`);
  console.log(updateshoppingcard);
  res.send(updatestock)

});


app.post('/selectproduct2', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM product WHERE STATUS = '2' LIMIT 6 `);
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

app.post('/selectproductlike', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(`SELECT * FROM likes
  WHERE MEMBER_ID = '${body.MEMBER_ID}' AND PRODUCT_ID = '${body.PRODUCT_ID}' AND STATUS = '1'`);
  console.log(query);
  res.send(query)
});

app.post('/selectproductDetail', async (req, res) => {
  const {
    body
  } = req;

  var query = await query_command(
    `SELECT * FROM product WHERE PRODUCT_ID = '${body.PRODUCT_ID}' `);
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
