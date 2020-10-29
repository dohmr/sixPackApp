const express = require('express');
// const logger = require('morgan');
const mongoose = require('mongoose');


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/sixPackApp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})