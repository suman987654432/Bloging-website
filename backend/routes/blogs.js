const express = require('express');
const router = express.Router();
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogsByCategory
} = require('../controllers/blogController');

router.post('/', createBlog);
router.get('/', getAllBlogs);
router.get('/category/:category', getBlogsByCategory); 
router.get('/:id', getBlogById);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
