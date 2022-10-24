import { Avatar, Box, Container, Divider, Grid, Link, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
const About = () => {
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
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 300 }}>
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <Avatar sx={{ bgcolor: "#A833FF", width: 200, height: 200 }} src="https://www.meme-arsenal.com/memes/797464cf727b42c7adca19186c07c944.jpg" />
                                </Box>
                                <Typography align="center" variant="h5" gutterBottom>
                                    Гайсин Искандер
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 300 }}>
                                <Typography align="center" variant="h4" gutterBottom>
                                    Основная информация
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Номер телефона: +8(800)-555-35-35
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Электронная почта: Smth@mail.ru
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Ссылка на ВКонтакте: <Link href="https://vk.com/id0" variant="body2">Перейти</Link>
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Пол: Мужской
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Дата рождения: 21 марта 2001 года
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Образование: Высшее (бакалавр)
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 500 }}>
                                <Typography align="center" variant="h4" gutterBottom>
                                    Информация
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    Я учусь в Башкирском государственном университете, в магистратуре, на направлении прикладная математика и ифнорматика. Бакалавриат закончил здесь же.
                                    в 2018 году закончил иглинскую школу №2. Немного владею программами Photoshop, Blender и Davinci Resolve
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default About;