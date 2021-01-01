require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
// cors
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(morgan("combined"));
//cookie-parser
const cookieParser = require('cookie-parser');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

//cors setup
const corsOption = {
    origin: (origin, callback) => {
        return callback(null, true);
    },
    optionsSuccessStatus: 200,
    credentials: true,
};
app.use(cors(corsOption));
app.use(cookieParser());

//my routes
const authRoute = require('./routes/auth.route');
const readBlogPostRoute = require('./routes/read.route');
const likesRoute = require('./routes/blog/likes.route');
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
app.use('/api', likesRoute);
app.use('/api', readBlogPostRoute);
app.use('/api', createBlogPostRoute);
app.use('/api', updateBlogPostRoute);
app.use('/api', deleteBlogPostRoute);

app.listen(port, (() => console.log(`server started on port ${port}`)));