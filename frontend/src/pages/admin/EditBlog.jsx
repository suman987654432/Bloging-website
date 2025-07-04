import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {
  Button,
  TextInput,
  Textarea,
  Select,
  Container,
  Title,
  Group,
  Stack,
  Text,
  LoadingOverlay
} from '@mantine/core';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    bannerImage: '',
    summary: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories = ['Beauty', 'Tech', 'Fitness', 'Business', 'Sports'];

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setFormData({
          title: data.blog.title,
          category: data.blog.category,
          bannerImage: data.blog.bannerImage,
          summary: data.blog.summary,
          content: data.blog.content
        });
      } else {
        alert('Blog not found');
        navigate('/adminp/blogs');
      }
    } catch (error) {
      alert('Error loading blog');
      navigate('/adminp/blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Blog updated successfully!');
        navigate('/adminp/blogs');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      alert('Failed to update blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Container size="md" py="xl">
        <LoadingOverlay visible={loading} />
      </Container>
    );
  }

  return (
    <Container size="md" py="xl">
      <Group position="apart" mb="md">
        <Title order={2}>Edit Blog Post</Title>
        <Button variant="subtle" onClick={() => navigate('/adminp/blogs')}>
          Back to Blogs
        </Button>
      </Group>
      
      <form onSubmit={handleSubmit}>
        <Stack spacing="md">
          <TextInput
            label="Title"
            placeholder="Enter blog title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            required
          />

          <Select
            label="Category"
            placeholder="Select category"
            data={categories}
            value={formData.category}
            onChange={(val) => handleChange('category', val)}
            required
          />

          <TextInput
            label="Banner Image URL"
            placeholder="https://example.com/image.jpg"
            value={formData.bannerImage}
            onChange={(e) => handleChange('bannerImage', e.target.value)}
            required
          />

          <Textarea
            label="Summary"
            placeholder="Write a short summary"
            value={formData.summary}
            onChange={(e) => handleChange('summary', e.target.value)}
            required
            minRows={3}
          />

          <div>
            <Text weight={500} size="sm" mb="xs">Content</Text>
            <SunEditor
              height="300px"
              setContents={formData.content}
              onChange={(value) => handleChange('content', value)}
              setOptions={{
                buttonList: [
                  ['undo', 'redo'],
                  ['formatBlock', 'fontSize'],
                  ['bold', 'underline', 'italic', 'strike'],
                  ['fontColor', 'hiliteColor', 'textStyle'],
                  ['align', 'list', 'table'],
                  ['link', 'image', 'video'],
                  ['codeView', 'preview', 'print', 'removeFormat'],
                ],
              }}
            />
          </div>

          <Group position="right" mt="md">
            <Button variant="subtle" onClick={() => navigate('/adminp/blogs')}>
              Cancel
            </Button>
            <Button type="submit" loading={isSubmitting}>
              {isSubmitting ? 'Updating...' : 'Update Blog'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Container>
  );
};

export default EditBlog;
