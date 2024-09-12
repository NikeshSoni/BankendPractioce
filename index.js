const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/connectDataBase");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000 ;


connectDb();
app.use(express.json()); // this is a middle ware for the help to pass data 

app.use('/api/contacts' , require("../mycontect-backend/routes/contactRoute"));
app.use(errorHandler)

app.listen( port , () => {
    console.log("hii iam Nikesh" , port);
})

