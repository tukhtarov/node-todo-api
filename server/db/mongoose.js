const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const URI = process.env.MONGODB_URI || 'mongodb://admin:Sm14puk7!@cluster0-shard-00-00-d7old.mongodb.net:27017,cluster0-shard-00-01-d7old.mongodb.net:27017,cluster0-shard-00-02-d7old.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
mongoose.connect(URI, {useNewUrlParser: true});

module.exports = {
    mongoose
};