import React, { useState } from "react";
import {
    Box, TextField, Button, MenuItem, Typography, Container, Paper
} from "@mui/material";

const AdminCreateUser = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        position: "",
    });

    const backend_url = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("User Data:", formData);
        try {
            const response = await fetch(`${backend_url}/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json();
            console.log(result);
        }
        catch(error){
            console.log(error);
        }
  };

    return (
        <Container maxWidth="lg">
            <Paper
                elevation={0}
                sx={{ p: 2, borderRadius: 3, bgcolor: "white", mt: 4, width: "100%" }}
            >

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField
                            fullWidth
                            label="First Name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Last Name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Box>

                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    />

                    <TextField
                        fullWidth
                        select
                        label="Select Position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        variant="outlined"
                        required
                    >
                        <MenuItem value="" disabled>Select Position</MenuItem>
                        <MenuItem value="HoD">Head of Department</MenuItem>
                        <MenuItem value="Faculty">Faculty</MenuItem>
                    </TextField>

                    <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2, py: 1.5, fontSize: "16px", fontWeight: "bold" }}
                    >
                        Create User
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default AdminCreateUser;
