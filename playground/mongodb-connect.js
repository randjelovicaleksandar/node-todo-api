// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
//es6 destructuring - ova dva prethodna su ista, a sa zarezom dodajemo jos stvari

var obj = ObjectID();
console.log(obj);

// var user = {name: 'Aleksandar', age: 23};
// var {name} = user;
// console.log(name);
//es6 destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        // samo prekida funkciju ovo return
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.db('TodoApp').collection('Todos').insertOne({
    //    text: 'Something to do',
    //    completed: false
    // }, (error, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.db('TodoApp').collection('Users').insertOne({
        name: 'Aleksandar',
        age: 23,
        location: 'Belgrade'
    }, (error, result) => {
        if (err) {
            return console.log('unable to insert user', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});