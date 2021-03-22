const express = require("express");
const hbs = require("hbs");
const wax = require("wax-on");
require("dotenv").config();
const cors = require('cors');
const landingRoutes = require('./routes/landing')
const corporateRoutes = require('./routes/corporate')

// create an instance of express app
let app = express();

// set the view engine
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

// setup wax-on
wax.on(hbs.handlebars);
wax.setLayoutPath("./views/layouts");

// enable forms
app.use(
    express.urlencoded({
        extended: false
    })
);

(async () => {
    app.use('/yarn add ', landingRoutes)
    app.use('/company', corporateRoutes)
})();



app.listen(3000, () => {
    console.log("Server has started");
});