// const express = require('express');
// const router = express.Router();
// const path = require("path");

// // Route to display a form
// router.get('/add-product', (req, res, next) => {
//     res.sendFile(path.resolve(process.cwd(), "views", "add-product.html"))
    
    
// });

// // Route to handle form submission
// router.post('/add-product', (req, res) => {
//     console.log(req.body); // Should log the form data to the console
//     res.redirect('/shop');
// });
      
// // Catch-all route for undefined admin routes (404 error handler)
// router.use((req, res) => {
//     res.status(404); // Set the HTTP status code to 404
//     res.send('<h1>404 - Page Not Found</h1>'); // Custom 404 message
// });

// module.exports = router; // Make sure this is `module.exports` not `module.export`


const path = require('path');

const express = require('express');

const rootDir = require('../util/path'); 

const router = express.Router();
const products = [];


// /admin/add-product => GET
router.get('/admin/add-product', (req, res) => {
  res.render("add-product", {pageTitle: "Add product", path: '/admin/add-product'});
});

// /admin/add-product => POST
router.post('/admin/add-product', (req, res, next) => {
  products.push({title: req.body.title});
  res.redirect('/'); 
});



exports.routes = router;
exports.products = products;
 