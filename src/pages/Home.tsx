import { Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        {/* Item 1*/}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 600 }}>
                                <Typography align="center" variant="h3" gutterBottom>
                                    Лабораторные
                                </Typography>

                                <List component="a">
                                    <ListItemButton divider component={Link} to="/about">
                                        <ListItemText primary="О себе" />
                                    </ListItemButton>
                                    <ListItemButton divider component={Link} to="/slideshow">
                                        <ListItemText primary="Слайд-шоу" />
                                    </ListItemButton>
                                    <ListItemButton divider component={Link} to="/calculator">
                                        <ListItemText primary="Калькулятор" />
                                    </ListItemButton>
                                    <ListItemButton divider component={Link} to="/market">
                                        <ListItemText primary="Магазин" />
                                    </ListItemButton>
                                    <ListItemButton divider component={Link} to="/test">
                                        <ListItemText primary="Тест" />
                                    </ListItemButton>
                                    <ListItemButton divider component={Link} to="/">
                                        <ListItemText primary="Неизветсно" />
                                    </ListItemButton>
                                    <ListItemButton divider component={Link} to="/">
                                        <ListItemText primary="Неизветно" />
                                    </ListItemButton>
                                </List>

                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Home;