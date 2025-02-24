import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem, Select, InputAdornment, Box } from '@mui/material';
import { Email, Lock, Person } from '@mui/icons-material';
import Image from '../assets/login.jpg';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login Data:', formData);
        // Handle login logic
    };

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${Image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Container maxWidth="xs" disableGutters>
                <Box
                    sx={{
                        p: 4,
                        boxShadow: 3,
                        borderRadius: 2,
                        bgcolor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white background
                        backdropFilter: 'blur(8px)', // Adds a blur effect
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h4">
                        Gradium AI
                    </Typography>
                    <Typography variant='subtitle' gutterBottom>
                        A Course Outcome Management System
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email />
                                    </InputAdornment>
                                ),
                            }}
                            required
                        />

                        <TextField
                            fullWidth
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            margin="normal"
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                            }}
                            required
                        />

                        <Select
                            fullWidth
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            displayEmpty
                            variant="outlined"
                            sx={{ mt: 2, textAlign: 'left' }}
                            required
                        >
                            <MenuItem value="" disabled>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Person />
                                    <Typography>Select Role</Typography>
                                </Box>
                            </MenuItem>

                            <MenuItem value="Admin">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Person />
                                    <Typography>Admin</Typography>
                                </Box>
                            </MenuItem>

                            <MenuItem value="HoD">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Person />
                                    <Typography>Head of Department</Typography>
                                </Box>
                            </MenuItem>

                            <MenuItem value="Faculty">
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Person />
                                    <Typography>Faculty</Typography>
                                </Box>
                            </MenuItem>
                        </Select>

                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                            sx={{ mt: 3, py: 1.5 }}
                        >
                            Login
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;
