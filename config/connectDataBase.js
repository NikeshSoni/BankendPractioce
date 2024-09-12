const mongoose = require("mongoose");
// MongoDB URI (replace with your own MongoDB URI)
const mongoURI = 'mongodb://localhost:27017/learningDataBase';  // Replace with your MongoDB URI
// Connect to MongoDB

const connectDb = async () => {
    // try {
    //     const connect = await mongoose.connect(mongoURI);
    //     console.log("database Done ", connect.connection.host, connect.connection.name);

    // } catch (error) {
    //     console.log(" hififi", error);
    // }

    try {
        mongoose.connect(mongoURI,)
            .then(() => console.log('MongoDB Connected'))
            .catch(err => console.log(err))
    } catch (error) {
        console.log(error);
        
    }
    ;
}


module.exports = connectDb;


