const router = require('express').Router();

const Suggestion = require('../models/Suggestion');

const {
    getAllSuggestions,
    createSuggestion,
    deleteSuggestion
} = require('../controllers/suggestionController')


//create a router


// router.get('/',(req, res) => {
//     Suggestion.find().then(() => {
//             return res.status(200).json({
//                 confirmation: 'success'

//             });
//         })})



//all suggestions
router.get('/all-suggestions', getAllSuggestions)


//suggestion by name
router.get('/by-name-suggestion/:', (req, res) => {
    const name = req.query.suggestions
    Suggestion.find({
        name: name
    }).then((suggestions) => {
        return res.status(200).json({
            confirmation: 'success',
            suggestions
        })
    })
})

//suggestion by id
router.get('/single-suggestion/:id', (req, res) => {
    console.log(req.params.id);
    let foundSuggestion = suggestions
    Suggestion.findById(req.params.id)
        .then((suggestions) => res.status(200).json({
                suggestions
            })
            .catch((err) => res.status(400).json({
                confirmation: 'fail',
                err
            })))
})


//create suggestion
router.post('/create-suggestion', createSuggestion)
//update Suggestion
router.put('/update-suggestion/:title',(req,res)=>{
Suggestion.find(req.params.title).then((foundSuggestion)=>{
if(!foundSuggestion){
return res.status(400).send('Suggestion not found')
}

const {title,suggestion}= req.body;
foundSuggestion.title = title ? title :foundSuggestion.title;
foundSuggestion.suggestion = suggestion ? suggestion : foundSuggestion.suggestion;

}).catch((err)=>res.status(500).json({message:'Server Error'}))
})

//delete suggestion
router.delete('/delete-suggestion/:id',deleteSuggestion );



module.exports = router