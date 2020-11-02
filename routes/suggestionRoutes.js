const router = require('express').Router();

router.get('/',(req, res)=>{
    res.render('views/index')
 })

// const Suggestion = require('../models/Suggestion');

const {
    getAllSuggestions,
    createSuggestion,
    deleteSuggestion,
    updateSuggestion,
    getSingleSuggestion,
    getSuggestionByName
} = require('../controllers/suggestionController')



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