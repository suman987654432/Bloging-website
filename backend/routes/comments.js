const express = require('express');
const router = express.Router();
const {
  createComment,
  getAllComments,
  getCommentsByBlog,
  deleteComment
} = require('../controllers/commentController');

router.post('/', createComment);
router.get('/', getAllComments);
router.get('/blog/:blogId', getCommentsByBlog);
router.delete('/:id', deleteComment);

module.exports = router;
