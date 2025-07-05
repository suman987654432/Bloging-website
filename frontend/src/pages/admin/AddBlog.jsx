import { useState } from 'react';
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
} from '@mantine/core';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    bannerImage: '',
    summary: '',
    content: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = ['Beauty', 'Tech', 'Fitness', 'Business', 'Sports'];

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://bloging-website-wnaj.onrender.com/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert('Blog published successfully!');
        setFormData({
          title: '',
          category: '',
          bannerImage: '',
          summary: '',
          content: '',
        });
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to publish blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="md">Create New Blog Post</Title>
      <form onSubmit={handleSubmit}>
        <Stack gap="md">
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
            <Text fw={500} size="sm" mb="xs">Content</Text>
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

          <Group justify="flex-end" mt="md">
            <Button type="submit" loading={isSubmitting}>
              {isSubmitting ? 'Publishing...' : 'Publish Blog'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Container>
  );
};

export default AddBlog;
