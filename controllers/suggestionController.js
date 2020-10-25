const suggestions = require('../models/Suggestion');


module.exports={
    getAllSuggestions:(req, res)=>{
        Suggestion.find().then((suggestions)=>{
            return res.status(200).json({confirmation:'success',suggestions})
        }).catch((err)=>{
            res.status(500).json({conformation:'fail', err})
        })
    } 
}