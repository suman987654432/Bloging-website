import React from 'react';

const CommentSection = ({ 
  commentForm, 
  handleInputChange, 
  handleCommentSubmit, 
  isSubmitting, 
  MAX_COMMENT_LENGTH 
}) => {
  return (
    <div className="mt-16">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Share Your Thoughts</h3>

        <form onSubmit={handleCommentSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={commentForm.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="comment" className="block text-lg font-semibold text-gray-700 mb-3">
              Your Comment
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({commentForm.comment.length}/{MAX_COMMENT_LENGTH} characters)
              </span>
            </label>
            <textarea
              id="comment"
              name="comment"
              value={commentForm.comment}
              onChange={handleInputChange}
              required
              rows="6"
              maxLength={MAX_COMMENT_LENGTH}
              className={`w-full px-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg transition-all duration-300 resize-none ${
                commentForm.comment.length > MAX_COMMENT_LENGTH * 0.9 
                  ? 'border-orange-300' 
                  : 'border-gray-300'
              }`}
              placeholder="Write your comment here..."
            />
            {commentForm.comment.length > MAX_COMMENT_LENGTH * 0.9 && (
              <p className="text-sm text-orange-600 mt-1">
                You're approaching the character limit.
              </p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || commentForm.comment.length > MAX_COMMENT_LENGTH}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Comment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentSection;
