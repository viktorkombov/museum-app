const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController } = require('../controllers');



router.get('/', postController.getPosts);
router.post('/', postController.createPost);

router.get('/:ID', postController.getPost);

router.put('/:ID', postController.postEditPost)

router.delete('/:ID', postController.deletePost)


module.exports = router