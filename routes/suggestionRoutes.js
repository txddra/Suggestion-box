const router = require('express').Router();

const Suggestion = require('../models/Suggestion');

const {
    getAllSuggestions,
    createSuggestion,
    deleteSuggestion,
    updateSuggestion,
    getSingleSuggestion,
    getSuggestionByName
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
router.get('/by-name-suggestion/:name', getSuggestionByName)

//suggestion by id
router.get('/single-suggestion/:id',getSingleSuggestion )


//create suggestion
router.post('/create-suggestion', createSuggestion)
//update Suggestion
router.put('/update-suggestion/:title',updateSuggestion)

//delete suggestion
router.delete('/delete-suggestion/:id',deleteSuggestion );



module.exports = router