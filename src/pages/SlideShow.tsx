import { Box, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-material-ui-carousel'

const Images = ["https://adijuhpalace.ru/800/600/https/n1s1.elle.ru/e4/14/6b/e4146b309f701b7e040b31ca16f58157/1920x1200_0xc35dbb80_17119083041493282650.jpeg",
    "https://www.travellinotour.com/assets/image/package/east_europe/1.jpg",
    "https://russland-reisen.de/wp-content/uploads/2019/08/Premium-Reisen-Moskau-e1566306865487.jpg",
    "https://www.mushroomtravel.com/page/wp-content/uploads/2018/10/pixabay-the-eiffel-tower-4104637_1920.jpg",
    "http://albumarium.com/media/W1siZiIsIjU2NDcxYjc5NzY3MDczMzE3YzMxMTcwMCJdLFsicCIsInRodW1iIiwiMTkyMHgxOTIwXHUwMDNFIl1d?sha=933763c3"];
const SlideShow = () => {
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
                            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 750 }}>
                                <Typography align="center" variant="h3" gutterBottom>
                                    Слайд-шоу
                                </Typography>
                                <Carousel autoPlay={true} indicators>
                                    {
                                        Images.map((item) => (<img style={{ objectFit: "cover", height: 600, width: "100%" }} src={item} />))
                                    }

                                </Carousel>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default SlideShow;