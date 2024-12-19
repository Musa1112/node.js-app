const express = require('express');
const bodyParser = require("body-parser"); // Correct spelling here
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', 'views')


// Import route modules
const adminData = require("./routes/admin.js");
const shopData = require("./routes/shop.js");

// Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



// Mount route handlers with prefixes
// app.use( adminRoutes); // All routes in adminRoutes will be prefixed with /admin
 // All routes in shopRoutes will be prefixed with /shop
app.use(adminData.routes);
app.use(shopData); 


app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'page not found'});
  });
  

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
