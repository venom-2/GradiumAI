import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Typography, Divider } from '@mui/material';
import { PersonAdd, Settings, Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const changeRoute = (path) => {
        navigate(path);
    }

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box', backgroundColor: '#0b0464' },
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px', cursor: 'pointer' }} onClick={() => changeRoute('/admin-panel')}>
                <Typography variant='h5' gutterBottom sx={{ color: 'white' }}>Gradium AI</Typography>
            </Box>
            <Divider color='white' />
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Top Items */}
                <List sx={{ flexGrow: 1 }}>
                    {/* Create User */}
                    <ListItemButton sx={{ '&:hover': { bgcolor: '#780cc4' } }} onClick={() => changeRoute('/admin-panel/create-user')}>
                        <ListItemIcon>
                            <PersonAdd sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="Create User" sx={{ color: 'white' }} />
                    </ListItemButton>

                    {/* View Users */}
                    <ListItemButton sx={{ '&:hover': { bgcolor: '#780cc4' } }} onClick={() => changeRoute('/admin-panel/view-users')}>
                        <ListItemIcon>
                            <Person sx={{ color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText primary="View Users" sx={{ color: 'white' }} />
                    </ListItemButton>
                </List>

                <Divider color='white' />

                {/* Settings at the Bottom */}
                <List>
                    <ListItemButton>
                        <ListItemText primary="IMSEC, Ghaziabad" sx={{ color: 'white', mx: 4 }} />
                    </ListItemButton>
                </List>

            </Box>
        </Drawer>
    );
};

export default Sidebar;
