let express = require('express');
let app = express();
let router = express.Router();
let controller = require('../controller/controller');

router.post('/', (req, res) => {
    controller.createProject(req,res);
});

router.get('/', (req, res) => {
    controller.retrieveProject(req,res);
});

module.exports = router;