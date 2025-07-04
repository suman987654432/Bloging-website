const Blog = require('../models/Blog');
const mongoose = require('mongoose');

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, category, bannerImage, summary, content } = req.body;
    
    const newBlog = new Blog({
      title,
      category,
      bannerImage,
      summary,
      content
    });

    const savedBlog = await newBlog.save();
    
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog: savedBlog
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating blog',
      error: error.message
    });
  }
};

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      blogs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message
    });
  }
};

// Get single blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    res.json({
      success: true,
      blog
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message
    });
  }
};

// Update blog by ID
const updateBlog = async (req, res) => {
  try {
    console.log('Update request received for ID:', req.params.id);
    console.log('Update data:', req.body);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid blog ID format'
      });
    }

    const { title, category, bannerImage, summary, content } = req.body;
    
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        category,
        bannerImage,
        summary,
        content
      },
      { new: true, runValidators: true }
    );
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    console.log('Blog updated successfully:', blog._id);
    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating blog',
      error: error.message
    });
  }
};

// Delete blog by ID
const deleteBlog = async (req, res) => {
  try {
    console.log('Delete request received for ID:', req.params.id);

    // Validate ObjectId format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid blog ID format'
      });
    }

    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }
    
    console.log('Blog deleted successfully:', req.params.id);
    res.json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
      error: error.message
    });
  }
};

// Get blogs by category
const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    console.log('Fetching blogs for category:', category);
    
    // Case-insensitive search and normalize category
    const normalizedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    console.log('Normalized category:', normalizedCategory);
    
    // Find blogs with case-insensitive match
    const blogs = await Blog.find({ 
      category: { $regex: new RegExp(`^${normalizedCategory}$`, 'i') } 
    }).sort({ createdAt: -1 });
    
    console.log('Found blogs count:', blogs.length);
    
    res.json({
      success: true,
      blogs,
      category: normalizedCategory,
      count: blogs.length
    });
  } catch (error) {
    console.error('Error in getBlogsByCategory:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs by category',
      error: error.message,
      blogs: [] // Ensure blogs array is always present
    });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
  getBlogsByCategory
};

