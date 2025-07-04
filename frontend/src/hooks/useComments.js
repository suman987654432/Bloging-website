import { useState } from 'react';
import { toast } from 'react-toastify';

export const useComments = (blog) => {
  const [commentForm, setCommentForm] = useState({ email: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const MAX_COMMENT_LENGTH = 5000;

  const handleInputChange = (e) => {
    setCommentForm({
      ...commentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    
    if (commentForm.comment.length > MAX_COMMENT_LENGTH) {
      toast.error(`Comment is too long. Maximum ${MAX_COMMENT_LENGTH} characters allowed.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          blogId: blog._id,
          email: commentForm.email,
          comment: commentForm.comment
        }),
      });

      const data = await response.json();

      if (response.status === 413) {
        toast.error('Comment is too large. Please shorten your comment and try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      if (data.success) {
        toast.success('Comment submitted successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setCommentForm({ email: '', comment: '' });
      } else {
        toast.error('Error submitting comment. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
      if (error.message.includes('413') || error.message.includes('too large')) {
        toast.error('Comment is too large. Please shorten your comment and try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error('Error submitting comment. Please try again.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    commentForm,
    isSubmitting,
    MAX_COMMENT_LENGTH,
    handleInputChange,
    handleCommentSubmit
  };
};
