const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const URI = process.env.MONGODB_URI;
mongoose.connect(URI, {useNewUrlParser: true});

module.exports = {
    mongoose
};