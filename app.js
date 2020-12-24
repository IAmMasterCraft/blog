require('dotenv').config();
const express = require("express");
// cors
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
//cookie-parser
const cookieParser = require('cookie-parser');
//cors setup
app.use(cors());
app.use(cookieParser());

//my routes
const authRoute = require('./routes/auth.route');
const readBlogPostRoute = require('./routes/read.route');
const createBlogPostRoute = require('./routes/blog/create.route');
const updateBlogPostRoute = require('./routes/blog/update.route');
const deleteBlogPostRoute = require('./routes/blog/delete.route');
// bring in keys.js
const db = require("./config/keys");

const port = process.env.PORT || 3000;

//connect to mongoose
mongoose.connect(db.mongoURI, db.mongoSetup)
    .then(() => console.log("MongoDb connected..."))
    .catch(err => console.log(err));

app.use(express.json());

app.use('/api', authRoute);
app.use('/api', readBlogPostRoute);
app.use('/api', createBlogPostRoute);
app.use('/api', updateBlogPostRoute);
app.use('/api', deleteBlogPostRoute);

app.listen(port, (() => console.log(`server started on port ${port}`)));