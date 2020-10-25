const router = require('express').Router();

const Suggestion = require('../models/Suggestion');

const{getAllSuggestions}=require('../controllers/suggestionController')


//create a router
 

// router.get('/',(req, res) => {
//     Suggestion.find().then(() => {
//             return res.status(200).json({
//                 confirmation: 'success'
            
//             });
//         })})



//all suggestions
router.get('/all-suggestions',getAllSuggestions)


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
    if(!req.body.name||!req.body.title, req.body.suggestion){
return res.status(400).json({confirmation:'fail', message :'All fields must be filled'})
    }
    
    
    Suggestion.findOne({title: req.body.title}).then((foundSuggestion)=>{
        if(foundSuggestion){
            return res.status(400).send('Suggestion already exists');
        }
        
        const newSuggestion = new Suggestion();

        const {title, name, suggestion} = req.body;

        newSuggestion.title = title;
        newSuggestion.name = name;
        newSuggestion.suggestion = suggestion;
        newSuggestion.id = String(suggestions.length + 1)
        
        newSuggestion
        .save()
        .then((foundSuggestion)=> res.status(200).json({message:'Suggestion Created', foundSuggestion}))
        .catch((err)=> res.status(500).json({confirmation:'fail', err}))
        
    })
    
})
//update Suggestion
router.update('/update-suggestion/:title')

module.exports = router
