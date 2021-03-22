const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('landing/welcome')
})

router.get('/about', (req, res) => {
    res.send("About Us")
})

router.get('/contact', (req, res) => {
    res.send("Contact Us")
})

module.exports = router;
