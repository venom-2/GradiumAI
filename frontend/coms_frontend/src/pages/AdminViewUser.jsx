import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, CircularProgress, Box } from '@mui/material';

const AdminViewUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const backend_url = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(`${backend_url}/user/fetch`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                if (!response.ok) throw new Error('Failed to fetch users');
                const data = await response.json();
                console.log(data);
                setUsers(data.users);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Box sx={{ mt: 2 }}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant='h5' gutterBottom fontWeight="bold" sx={{ mb: 2 }}>Organization Users</Typography>
            </Box>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Typography color="error">{error}</Typography>
            ) : (
                <TableContainer component={Paper} sx={{ maxHeight: 500, borderRadius: 0, mt: 2 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold', border: "1px solid rgb(0, 0, 0)", backgroundColor: 'rgb(110, 112, 240)', color: 'white' }}>Email</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', border: "1px solid rgb(0, 0, 0)", backgroundColor: 'rgb(110, 112, 240)', color: 'white' }}>First Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', border: "1px solid rgb(0, 0, 0)", backgroundColor: 'rgb(110, 112, 240)', color: 'white' }}>Last Name</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', border: "1px solid rgb(0, 0, 0)", backgroundColor: 'rgb(110, 112, 240)', color: 'white' }}>Position</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <TableRow key={user.email}>
                                        <TableCell sx={{ border: "1px solid rgb(0, 0, 0)" }}>{user.email}</TableCell>
                                        <TableCell sx={{ border: "1px solid rgb(0, 0, 0)" }}>{user.first_name}</TableCell>
                                        <TableCell sx={{ border: "1px solid rgb(0, 0, 0)" }}>{user.last_name}</TableCell>
                                        <TableCell sx={{ border: "1px solid rgb(0, 0, 0)" }}>{user.position}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={4} align="center" sx={{ border: "1px solid rgba(224, 224, 224, 1)" }}>
                                        No Users Found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default AdminViewUser;
