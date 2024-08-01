import React from 'react';
import { Container, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import buhoImage from '../assets/buho.jpg';

const Register = () => {
    
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: '0 1rem',
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    flex: { xs: 'none', md: '1' },
                    marginRight: { md: '2rem' },
                    marginBottom: { xs: '2rem', md: '0' },
                    width: { xs: '100%', md: 'auto' },
                }}
            >
                <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <img src={buhoImage} alt="Poli Parking" style={{ maxWidth: '100px', marginBottom: '0.5rem' }} />
                    <Typography variant="h5">Poli Parking</Typography>
                    <Typography variant="h6">Registrar</Typography>
                </Box>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Nombre"
                    type="text"
                    variant="outlined"
                    placeholder="Nombre"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Apellido"
                    type="text"
                    variant="outlined"
                    placeholder="Apellido"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Cédula"
                    type="text"
                    variant="outlined"
                    placeholder="Cédula"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    variant="outlined"
                    placeholder="usuario@correo.com"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    placeholder="Contraseña"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Teléfono"
                    type="tel"
                    variant="outlined"
                    placeholder="Teléfono"
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: '#ff9800',
                    }}
                >
                    Registrar
                </Button>
                <Typography variant="body2" align="center" sx={{ marginTop: '1rem', color: '#757575' }}>
                    <Link to="/login" style={{ color: '#757575', textDecoration: 'none' }}>
                        ¿Ya tienes una cuenta? Iniciar sesión
                    </Link>
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: '1',
                    textAlign: 'center',
                    display: { xs: 'none', md: 'block' },
                }}
            >
                <img src="path-to-image.png" alt="Motociclista" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>
        </Container>
    );
};

export default Register;
