// const express = require('express');
// const Suggestion = require('../models/Suggestion');
// //create a router
// const router = express.Router();


// router.get('/working',(req, res) => {
//     Suggestion.find().then(() => {
//             return res.status(200).json({
//                 confirmation: 'success'
            
//             });
//         })})

//         module.exports = router


// //all suggestions
// router.get('/all-suggestions',(req, res)=>{
// Suggestion.find().then((suggestions)=>{
//     return res.status(200).json({confirmation:'success',suggestions})
// }).catch((err)=>{
//     res.status(400).json({confirmation:'fail', err})
// })
//         })


// //suggestion by name
// router.get('byname-suggestion', (req, res)=>{
//     Suggestion.findOne({name = req.body.name}).then((suggestions)=>{
//         return res.status(200).json({ confirmation: 'success', users });
//     })
// })

// router.get('single-suggestion',(req,res)=>{
//     Suggestion.find()
// })

