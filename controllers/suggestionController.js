const Suggestion = require('../models/Suggestion');
const Comment = require('../models/Comment')

module.exports={
     getAllSuggestions:(req, res)=>{
        Suggestion.find().then((suggestions)=>{
            return res.status(200).json({confirmation:'success', suggestions})
        }).catch((err)=>{
            res.status(500).json({conformation:'fail', err})
        })
    } ,
    createSuggestion:(req,res)=>{
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
        
    },
    deleteSuggestion:(req, res) => {
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
    },
    updateSuggestion:(req,res)=>{
        Suggestion.find(req.params.title).then((foundSuggestion)=>{
        if(!foundSuggestion){
        return res.status(400).send('Suggestion not found')
        }
        
        const {title,suggestion}= req.body;
        foundSuggestion.title = title ? title :foundSuggestion.title;
        foundSuggestion.suggestion = suggestion ? suggestion : foundSuggestion.suggestion;
        
        }).catch((err)=>res.status(500).json({message:'Server Error'}))
        },
        getSingleSuggestion:(req, res) => {
            // console.log(req.params.id);
            // let foundSuggestion = suggestions
            Suggestion.findById(req.params.id)
                .then((suggestions) => {if(suggestions){
                    Comment.find({
                        owner: suggestions.id
                    }).then((foundComment)=>{
                        return res.render('main/singleSuggestion',{
                            foundSuggestion:suggestions,
                            foundComment: foundComment
                        })
                    })
                }else{
                    return res.status(400).send('no suggestions')
                }
                    // .catch((err) => res.status(400).json({
                    //     confirmation: 'fail',
                    //     err
                    // }))
            })
        },
        getSuggestionByName:(req, res) => {
            const name = req.query.suggestions
            Suggestion.find({
                name: name
            }).then((suggestions) => {
                return res.status(200).json({
                    confirmation: 'success',
                    suggestions
                })
            })
        }
}
