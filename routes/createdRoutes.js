const express = require('express');
//create a router
const router = express.Router();


router.get('/all-suggestions',(req, res) => {
    User.find().then(() => {
            return res.status(200).json({
                confirmation: 'success'
            
            });
        })})