const Comment = require('../models/Comment');

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { blogId, email, comment } = req.body;
    
    const newComment = new Comment({
      blogId,
      email,
      comment
    });

    const savedComment = await newComment.save();
    
    res.status(201).json({
      success: true,
      message: 'Comment submitted successfully',
      comment: savedComment
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error submitting comment',
      error: error.message
    });
  }
};

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('blogId', 'title category')
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      comments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching comments',
      error: error.message
    });
  }
};

// Get comments by blog ID
const getCommentsByBlog = async (req, res) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({ blogId, isApproved: true })
      .sort({ createdAt: -1 });
    
    res.json({
      success: true,
      comments
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching comments',
      error: error.message
    });
  }
};

// Delete comment
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    
    if (!comment) {
      return res.status(404).json({
        success: false,
        message: 'Comment not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Comment deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting comment',
      error: error.message
    });
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentsByBlog,
  deleteComment
};
