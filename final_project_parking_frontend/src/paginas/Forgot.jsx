import React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import buhoImage from '../assets/buho.jpg';

const ForgotPassword = () => {
    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: '0 1rem',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    width: '100%',
                }}
            >
                <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <img src={buhoImage} alt="Poli Parking" style={{ maxWidth: '100px', marginBottom: '0.5rem' }} />
                    <Typography variant="h5">Recuperar Contraseña</Typography>
                </Box>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    variant="outlined"
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
                    Enviar
                </Button>
                <Typography variant="body2" align="center" sx={{ marginTop: '1rem', color: '#757575' }}>
                    Se enviarán instrucciones a tu email.
                </Typography>
            </Box>
        </Container>
    );
};

export default ForgotPassword;