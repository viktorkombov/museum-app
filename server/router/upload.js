const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { uploadController } = require('../controllers');
const fileUpload = require('../middleware/file-upload');

router.get('/', uploadController.getUploads);
router.post('/', fileUpload.single('image'), uploadController.createUpload);

router.get('/:ID', uploadController.getUpload);

router.delete('/:ID', uploadController.deleteUpload)


module.exports = router