'use strict'
let Project = require('../models/project');
let fs = require('fs');

let controller = {
    home: function (req, res) {
        return res.status(200).send({
            message: 'Home ok'
        });
    },

    test: function (req, res) {
        return res.status(200).send({
            message: 'Test ok'
        })
    },

    saveProject: function (req, res) {
        let project = new Project();
        let params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((err, projectStored) => {
            if (err) {
                return res.status(500).send({
                    message: 'Petition malformed'
                });
            }

            if (!projectStored) {
                return res.status(404).send({
                    message: 'Project cannot be saved'
                });
            }

            return res.status(200).send({
                project: projectStored
            })
        });
    },

    getProject: function (req, res) {
        let projectId = req.params.id;

        if (projectId === null) {
            return res.status(404).send({
                message: 'Project not exist'
            });
        }

        Project.findById(projectId, (err, project) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error at returning data'
                });
            }

            if (!project) {
                return res.status(404).send({
                    message: 'Project not exist'
                });
            }

            return res.status(200).send({ project: project })
        });
    },

    getProjects: function (req, res) {
        Project.find({}).sort('-year').exec((err, projects) => {
            if (err) return res.status(500).send({ message: 'Error at returning data' });

            if (!projects) return res.status(404).send({ message: 'No projects to show' });

            return res.status(200).send({ projects })
        });
    },

    updateProject: function (req, res) {
        let projectId = req.params.id;
        let update = req.body;

        Project.findByIdAndUpdate(projectId, update, { new: true }, (err, projectUpdated) => {
            if (err) return res.status(500).send({ message: 'Error at updating' });

            if (!projectUpdated) return res.status(404).send({ message: 'Project not exist' });

            return res.status(200).send({ project: projectUpdated });
        });
    },

    deleteProject: function (req, res) {
        let projectId = req.params.id;

        Project.findByIdAndDelete(projectId, (err, projectDeleted) => {
            if (err) return res.status(500).send({ message: 'Project cannot be deleted' });

            if (!projectDeleted) return res.status(404).send({ message: 'Project cannot be find and deteled' });

            return res.status(200).send({ project: projectDeleted });
        })
    },

    uploadImage: function (req, res) {
        let projectId = req.params.id;
        let fileName = 'Image not upload';

        if (req.files) {
            let filePath = req.files.image.path;
            let fileSplit = filePath.split('/');
            let fileName = fileSplit[1];
            let extSplit = fileName.split('\.');
            let fileExt = extSplit[1];

            if (fileExt === 'png' || fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'gif') {
                Project.findByIdAndUpdate(projectId, { image: fileName }, { new: true }, (err, projectUpdated) => {
                    if (err) return res.status(500).send({ message: 'Image not uploaded' });

                    if (!projectUpdated) return res.status(404).send({ message: 'Project not exist' });

                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            } else {
                fs.unlink(filePath, (err) => {
                    return res.status(500).send({ message: 'Extension not valid' })
                });
            }
        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    }
};

module.exports = controller;