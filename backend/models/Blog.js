const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Beauty', 'Tech', 'Fitness', 'Business', 'Sports']
  },
  bannerImage: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    default: 'Admin'
  },
  publishedDate: {
    type: Date,
    default: Date.now
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Blog', blogSchema);
