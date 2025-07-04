import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeroPage from './pages/HeroPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './layouts/AdminLayout';
import AddBlog from './pages/admin/AddBlog';
import MangeBlogs from './pages/admin/MangeBlogs';
import EditBlog from './pages/admin/EditBlog';
import BlogPage from './pages/BlogPage';
import About from './components/About';
import Contact from './components/Contact';
import ContentPage from './pages/ContentPage';
import CommentPage from './pages/admin/CommentPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/category/:category" element={<BlogPage />} />
          <Route path="/content/:id" element={<ContentPage />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/adminp" element={<AdminLayout />}>
            <Route index element={<div className="p-6"><h1 className="text-2xl font-bold">Dashboard</h1></div>} />
            <Route path="dashboard" element={<div className="p-6"><h1 className="text-2xl font-bold">Dashboard</h1></div>} />
            <Route path="addblog" element={<AddBlog />} />
            <Route path="editblog/:id" element={<EditBlog />} />
            <Route path='blogs' element={<MangeBlogs/>} />
            <Route path="comments" element={<CommentPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App