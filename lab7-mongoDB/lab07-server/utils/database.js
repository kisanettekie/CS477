const MongoClient = require('mongodb').MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
        .then(client => {
            console.log('connect succesfully!!');
            _db = client.db('bookstore'); //todo-----
            callback();
        }).catch(err => { throw new Error('Connect Failed!') });
}

const getDb = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('Can not get DB');
    }
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;