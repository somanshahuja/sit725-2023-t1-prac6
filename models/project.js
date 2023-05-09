// let client = require('../dbConnect');
// let projectCollection;

// setTimeout( () => {
//     projectCollection = client.db('test').collection('Cats');
// }, 2000);

// const insertProjects = (project, callback) => {
//     projectCollection.insertOne(project, callback);
// }

// const getProjects = (callback) => {
//     projectCollection.find().toArray(callback);
// }

// module.exports = {insertProjects, getProjects};


let client = require('../dbConnect');
let collection = client.db('test').collection('Cats');

const insertCat = (cat, callback) => {
    collection.insertOne(cat, callback);
}

const getCats = (callback) => {
    collection.find().toArray(callback);
}

const deleteCat = (cat, callback) => {
    collection.deleteOne(cat, callback);
}

module.exports = {insertCat, getCats, deleteCat}