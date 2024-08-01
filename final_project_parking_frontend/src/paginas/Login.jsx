import React from 'react';
import { Container, TextField, Button, Typography, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import buhoImage from '../assets/buho.jpg';
const Login = () => {
    return (
        <Container
            maxWidth="lg"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                padding: '0 1rem',
                flexDirection: { xs: 'column', md: 'row' }, // Responsividad para dirección
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    flex: { xs: 'none', md: '1' }, // Responsividad para flex
                    marginRight: { md: '2rem' }, // Margin solo en pantallas md o más grandes
                    marginBottom: { xs: '2rem', md: '0' }, // Margin solo en pantallas xs
                    width: { xs: '100%', md: 'auto' }, // Ancho completo en pantallas xs
                }}
            >
                <Box sx={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <img src={buhoImage} alt="Poli Parking" style={{ maxWidth: '100px', marginBottom: '0.5rem' }}/>
                    <Typography variant="h5">Poli Parking</Typography>
                    <Typography variant="h6">Iniciar sesión</Typography>
                </Box>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="user-label">Usuario</InputLabel>
                    <Select labelId="user-label" id="user" defaultValue="Administrador">
                        <MenuItem value="Administrador">Administrador</MenuItem>
                        <MenuItem value="Guardia">Guardia</MenuItem>
                        <MenuItem value="Usuario">Usuario</MenuItem>
                        {/* Agrega más opciones según sea necesario */}
                    </Select>
                </FormControl>
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
                    defaultValue=""
                />
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                        marginTop: '1rem',
                        backgroundColor: '#ff9800', /* Color del botón */
                    }}
                >
                    Ingresar
                </Button>
                <Typography variant="body2" align="center" sx={{ marginTop: '1rem', color: '#757575' }}>
                    <Link to="/recovery-password" style={{ color: '#757575', textDecoration: 'none' }}>
                        ¿Olvidó su contraseña?
                    </Link>
                </Typography>
            </Box>
            <Box
                sx={{
                    flex: '1',
                    textAlign: 'center',
                    display: { xs: 'none', md: 'block' }, // Ocultar imagen en pantallas pequeñas
                }}
            >
                <img src="path-to-image.png" alt="Motociclista" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
            </Box>
        </Container>
    );
};

export default Login;