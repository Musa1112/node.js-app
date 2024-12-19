// const express = require('express');
// const router = express.Router();
// const path = require('path');

// // Route to display the shop's main page
// router.get('/shop', (req, res) => {
//     const shopfile = path.resolve(process.cwd(), "views", "shop.html")
//     res.sendFile(shopfile)
// });

// module.exports = router;


const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require("./admin")

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products
  res.render('shop', {prods: products, pageTitle:"shop", path: '/'});
});

module.exports = router;

