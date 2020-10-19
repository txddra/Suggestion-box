const express =require('express');
const app = express();
const mongoose =require('mongoose');
const morgan = require('morgan');

require('dotenv').config();

const port = process.env.PORT || 3000;






mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(()=> console.log('MongoDB Connected')).catch((err)=> console.log(`MongoDB Error ${err}`))

app.use(morgan('dev'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res)=>{
    res.send('Server is working')
});

app.listen(port,()=>
{
    console.log(`Listening on port ${port}`)})