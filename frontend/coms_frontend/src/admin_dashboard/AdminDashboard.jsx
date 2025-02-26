import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AdminCreateUser from '../pages/AdminCreateUser';
import { Box } from '@mui/material';

const AdminDashboard = () => {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar (Fixed Width) */}
      <Box sx={{ width: 240 }}>
        <Sidebar />
      </Box>

      {/* Main Content (Takes Remaining Space) */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        {location.pathname === '/admin-panel/create-user' && <AdminCreateUser />}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
