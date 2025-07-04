import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../pages/admin/AdminNavbar';

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminNavbar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
