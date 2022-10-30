import { Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Calc from "../components/Calculator/Calc";
const Calculator = () => {
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
                <Container maxWidth="sm" sx={{ mt: 2, mb: 2 }}>
                    <Grid container spacing={2}>
                        {/* Item 1*/}
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: "auto" }}>
                                <Typography align="center" variant="h3" gutterBottom>
                                    Калькулятор
                                </Typography>
                                <Calc />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Calculator;