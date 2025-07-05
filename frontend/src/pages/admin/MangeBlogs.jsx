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
  Select,
  Paper,
  Stack,
} from '@mantine/core';
import { IconEdit, IconTrash, IconRefresh } from '@tabler/icons-react';

const MangeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const allCategories = ['Beauty', 'Tech', 'Fitness', 'Business', 'Sports'];

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
    if (!selectedCategory || selectedCategory === 'all') {
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

  const blogCategories = [...new Set(blogs.map(blog => blog.category))];
  const allAvailableCategories = [...new Set([...allCategories, ...blogCategories])].sort();
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    ...allAvailableCategories.map(c => ({ value: c, label: c }))
  ];

  const rows = filteredBlogs.map((blog) => (
    <Table.Tr key={blog._id}>
      <Table.Td style={{ maxWidth: 200 }}>
        <Text size="sm" fw={500} lineClamp={1}>
          {blog.title}
        </Text>
      </Table.Td>
      <Table.Td>
        <Badge variant="light" color="blue">{blog.category}</Badge>
      </Table.Td>
      <Table.Td>
        <div style={{ width: 80, height: 50, overflow: 'hidden', borderRadius: 8 }}>
          <Image
            src={blog.bannerImage}
            alt={blog.title}
            fit="cover"
            w={80}
            h={50}
            fallbackSrc="https://via.placeholder.com/80x50?text=No+Image"
          />
        </div>
      </Table.Td>
      <Table.Td>
        <Text size="sm">{new Date(blog.createdAt).toLocaleDateString()}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon variant="light" color="yellow" onClick={() => handleEdit(blog._id)}>
            <IconEdit size={16} />
          </ActionIcon>
          <ActionIcon variant="light" color="red" onClick={() => handleDelete(blog._id)}>
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="xl" py="xl" style={{ minHeight: '80vh' }}>
      <Group justify="space-between" mb="md">
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
          <Button 
            onClick={fetchBlogs} 
            leftSection={<IconRefresh size={16} />}
            variant="light"
          >
            Refresh
          </Button>
        </Group>
      </Group>

      {error && <Alert color="red" mb="md">{error}</Alert>}

      <Paper radius="md" shadow="sm" p="sm" style={{ position: 'relative' }}>
        <LoadingOverlay visible={loading} />
        {!loading && filteredBlogs.length === 0 ? (
          <Stack align="center" py="xl">
            <Text c="dimmed">
              {selectedCategory && selectedCategory !== 'all'
                ? `No blogs found in "${selectedCategory}" category`
                : 'No blogs found'}
            </Text>
          </Stack>
        ) : (
          <Table striped highlightOnHover verticalSpacing="sm">
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Title</Table.Th>
                <Table.Th>Category</Table.Th>
                <Table.Th>Banner</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        )}
      </Paper>
    </Container>
  );
};

export default MangeBlogs;
