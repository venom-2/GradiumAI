import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/SidebarAdmin';
import AdminCreateUser from '../pages/AdminCreateUser';
import AdminViewUser from '../pages/AdminViewUser';
import { Box } from '@mui/material';

const AdminDashboard = () => {
  const location = useLocation();

  // Mapping paths to components
  const pageComponents = {
    '/admin-panel/create-user': <AdminCreateUser />,
    '/admin-panel/view-users': <AdminViewUser />,
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar (Fixed Width) */}
      <Box sx={{ width: 240 }}>
        <Sidebar />
      </Box>

      {/* Main Content (Dynamically Rendered) */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {pageComponents[location.pathname] || <h2>Welcome to Admin Panel</h2>}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
