// let express = require('express');
// let app = express();
// let router = express.Router();
// let controller = require('../controller/controller');

// router.post('/', (req, res) => {
//     controller.createProject(req,res);
// });

// router.get('/', (req, res) => {
//     controller.retrieveProject(req,res);
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
let controller = require('../controller/controller');

router.post('/api/projects', (req, res) => {
    controller.insertCat(req, res);
});

router.get('/api/projects', (req, res) => {
    controller.getAllCats(req, res);
});

router.delete('/api/projects', (req, res) => {
    controller.remove(req, res);
});

module.exports = router;