let express = require('express');
let app = express();
let project = require('../models/project');

const createProject = (req,res) => {
    let newProject = req.body;
    project.insertProjects(newProject, (error, result) => {
        if (error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'project successfully added'});
        }
    });
}

const retrieveProject = (req,res) => {
    project.getProjects((error, result) => {
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Success'});
        }
    });
}

module.exports = {retrieveProject, createProject};