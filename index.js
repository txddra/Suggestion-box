const express =require('express');
const app = express();
const mongoose =require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

const router = require('./routes/createdRoutes');





mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(()=> console.log('MongoDB Connected')).catch((err)=> console.log(`MongoDB Error ${err}`))



const port = process.env.PORT || 3000;








app.use(morgan('dev'))


//for post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//parent route
app.use('api/v1/suggestions',router)

// app.get('/', (req, res)=>{
//     res.send('Server is working')
// });

app.listen(port,()=>
{
    console.log(`Listening on port ${port}`)})