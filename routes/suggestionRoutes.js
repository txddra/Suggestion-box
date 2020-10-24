const express = require('express');
const Suggestion = require('../models/Suggestion');
//create a router
const router = express.Router();


router.get('/',(req, res) => {
    Suggestion.find().then(() => {
            return res.status(200).json({
                confirmation: 'success'
            
            });
        })})

        module.exports = router


//all suggestions
router.get('/all-suggestions',(req, res)=>{
Suggestion.find().then((suggestions)=>{
    return res.status(200).json({confirmation:'success',suggestions})
}).catch((err)=>{
    res.status(400).json({err})
})
        })


//suggestion by name
router.get('/by-name-suggestion/:', (req, res)=>{
    const name = req.query.suggestions
  Suggestion.find({name:name}).then((suggestions)=>{
      return res.status(200).json({confirmation:'success', suggestions})
  })
})

//suggestion by id
router.get('/single-suggestion/:id',(req,res)=>{
    Suggestion.findById(req.params.id)
    .then((suggestions)=> res.status(200).json({suggestions})
    .catch((err)=> res.status(400).json({confirmation:'fail', err})))
})


//create suggestion
router.post('/create-suggestion',(req,res)=>{
    const newSuggestion = new Suggestion();

    newSuggestion.title = req.body.title;
    newSuggestion.name = req.body.name;
    newSuggestion.suggestion = req.body.suggestion;
    newSuggestion.likes = req.body.likes;
    newSuggestion.anonymous = req.body.anonymous;

    newSuggestion
    .save()
    .then((val)=> res.status(200).json({confirmation:'success', val}))
    .catch((err)=> res.status(400).json({confirmation:'fail', err}))
});



//update Suggestion
router.update('/update-suggestion/:title')

module.exports = router