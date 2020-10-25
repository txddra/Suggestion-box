const router = require('express').Router();

const Suggestion = require('../models/Suggestion');

const {
    getAllSuggestions,
    createSuggestion
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
router.update('/update-suggestion/:title')
//delete suggestion
router.delete('/delete-suggestion/:id', (req, res) => {
    Suggestion.findByIdAndDelete(req.params.id).then((foundSuggestion) => {
        if (!foundSuggestion) {
            res.status(400).json({
                confirmation: 'fail',
                message: 'User not found'
            })
        } else {
            return res.status(200).json({
                message: 'Suggestion Deleted',
                foundSuggestion
            }).catch((err) => {

                return res.status(500).json({
                    message: 'Server error',
                    err
                })
            })
        }
    }) 
});



module.exports = router