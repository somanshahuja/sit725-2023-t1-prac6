let client = require('../dbConnect');
let projectCollection;

setTimeout( () => {
    projectCollection = client.db('test').collection('Cats');
}, 2000);

const insertProjects = (project, callback) => {
    projectCollection.insertOne(project, callback);
}

const getProjects = (callback) => {
    projectCollection.find().toArray(callback);
}

module.exports = {insertProjects, getProjects};