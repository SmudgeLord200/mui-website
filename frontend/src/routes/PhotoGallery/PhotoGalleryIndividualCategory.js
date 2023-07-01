import React from 'react'
import { Container, Box, Typography, Stack, Grid, Card, CardActionArea, CardMedia, CardContent, Pagination, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import logo from '../../logo.svg'

const PhotoGalleryIndividualCategory = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
        setPage(page);
    }

    return (
        <Container maxWidth="md">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
                <Typography variant="h6">Photo Gallery</Typography>
                <Button>Filter Panel</Button>
            </Stack>
            <Stack spacing={2} mt={2} alignItems="center" justifyContent="center">
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
                >
                    {/* TODO: change this loop structure as will get from backend */}
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardActionArea>
                                {/* <HoverContainer> */}
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={logo}
                                    title='Photo Gallery'
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom noWrap variant="h6" component="div">
                                        Photo Gallery
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                <Pagination
                    count={5}
                    page={page}
                    onChange={handlePageChange}
                    showFirstButton
                    showLastButton
                />
            </Stack>
        </Container>
    )
}

export default PhotoGalleryIndividualCategory