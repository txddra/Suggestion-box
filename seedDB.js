const mongoose = require('mongoose');
const Suggestion = require('./models/Suggestion');
const suggestionSeed = require('./suggestion.json');
require('dotenv').config();


const seedFunc = async()=>{
    try {
        const data = await Suggestion.create(suggestionSeed);
        await console.log(`${data.length} records created`);

        await mongoose.disconnect();

        console.log(`MongoDB Disconnected`)

        process.exit(0)

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};


mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
      console.log('MongoDB Connected')
    mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    seedFunc();
  })
  .catch((err) => console.log(`MongoDB Error: ${err}`));


  