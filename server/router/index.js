const router = require('express').Router();
const users = require('./users');
const posts = require('./posts');
const upload = require('./upload');

router.use('/users', users);
router.use('/posts', posts);
router.use('/uploads', upload)

module.exports = router;
