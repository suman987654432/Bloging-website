import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  Table,
  Image,
  Badge,
  Text,
  LoadingOverlay,
  Alert,
  Group,
  ActionIcon,
  Button,
  Select
} from '@mantine/core';
import { IconEdit, IconTrash } from '@tabler/icons-react';

const MangeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Predefined categories - matching the Blog model enum values
  const allCategories = [
    'Beauty',
    'Tech', 
    'Fitness',
    'Business',
    'Sports'
  ];

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        setError(data.message || 'Failed to fetch blogs');
      }
    } catch (err) {
      setError('Error connecting to server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (selectedCategory === '' || selectedCategory === 'all') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === selectedCategory));
    }
  }, [blogs, selectedCategory]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
          method: 'DELETE',
        });
        
        const data = await response.json();
        
        if (data.success) {
          setBlogs(blogs.filter(blog => blog._id !== id));
          alert('Blog deleted successfully!');
          
          // Trigger a custom event to update navbar counts
          window.dispatchEvent(new CustomEvent('refreshCounts'));
        } else {
          alert('Failed to delete blog: ' + data.message);
        }
      } catch (err) {
        alert('Error deleting blog: ' + err.message);
      }
    }
  };

  const handleEdit = (id) => {
    navigate(`/adminp/editblog/${id}`);
  };

  // Get unique categories from blogs and merge with predefined categories
  const blogCategories = [...new Set(blogs.map(blog => blog.category))];
  const allAvailableCategories = [...new Set([...allCategories, ...blogCategories])].sort();
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...allAvailableCategories.map(category => ({
      value: category,
      label: category
    }))
  ];

  const rows = filteredBlogs.map((blog) => (
    <tr key={blog._id}>
      <td>
        <Text size="sm" weight={500} lineClamp={2}>
          {blog.title}
        </Text>
      </td>
      <td>
        <Badge variant="light" color="blue">
          {blog.category}
        </Badge>
      </td>
      <td>
        <Image
          src={blog.bannerImage}
          alt={blog.title}
          width={80}
          height={50}
          fit="cover"
          radius="sm"
          withPlaceholder
        />
      </td>
      <td>
        <Text size="sm">
          {new Date(blog.createdAt).toLocaleDateString()}
        </Text>
      </td>
      <td>
        <Group spacing="xs">
          <ActionIcon 
            variant="light" 
            color="yellow"
            onClick={() => handleEdit(blog._id)}
            title="Edit Blog"
          >
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon 
            variant="light" 
            color="red"
            onClick={() => handleDelete(blog._id)}
            title="Delete Blog"
          >
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <Container size="xl" py="xl">
      <Group position="apart" mb="md">
        <Title order={2}>Manage Blogs</Title>
        <Group>
          <Select
            placeholder="Filter by category"
            data={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            clearable
            style={{ minWidth: 200 }}
          />
          <Button onClick={fetchBlogs}>Refresh</Button>
        </Group>
      </Group>

      {error && (
        <Alert color="red" mb="md">
          {error}
        </Alert>
      )}

      <div style={{ position: 'relative', minHeight: 200 }}>
        <LoadingOverlay visible={loading} />
        
        {!loading && filteredBlogs.length === 0 ? (
          <Text align="center" color="dimmed" py="xl">
            {selectedCategory && selectedCategory !== 'all' ? 
              `No blogs found in "${selectedCategory}" category` : 
              'No blogs found'
            }
          </Text>
        ) : (
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Banner Image</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        )}
      </div>
    </Container>
  );
};

export default MangeBlogs;