const { uploadModel } = require("../models");

function getUploads(req, res, next) {
    uploadModel.getAll()
        .then(([result]) => {
            res.json(result)
        })
        .catch(next)
}

function getUpload(req, res, next) {
    const { ID } = req.params;

    uploadModel.findById(ID)

        .then(upload => res.json(upload))
        .catch(next);
}

function createUpload(req, res, next) {
    const record = {src: 'uploads\\/' + req.file.filename, title: req.body.title, date: new Date().getTime(), type: req.file.mimetype};
    
    uploadModel.post(record)
        .then(createdUpload => {
            res.status(200)
                .send(createdUpload)
        }).catch(next);
}

function deleteUpload(req, res, next) {
    const { ID } = req.params;

    uploadModel.DELETE(ID)
        .then(upload => res.json(upload))
        .catch(next);
}


module.exports = {
    getUploads,
    createUpload,
    getUpload,
    deleteUpload
}
