// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.db('TodoApp').collection('Todos').find().toArray()  ---- find() - vraca sve
    // db.db('TodoApp').collection('Todos').find({completed: true}).toArray()  ---- pretrazuje po kriterijumu
    db.db('TodoApp').collection('Todos').find().count()
        .then(
            (docs) => {
                console.log('Todos');
                console.log(JSON.stringify(docs, undefined, 2));
            },
            (err) => {
                console.log('Unable to fetch todos', err);
            }
        )

    db.close();
});