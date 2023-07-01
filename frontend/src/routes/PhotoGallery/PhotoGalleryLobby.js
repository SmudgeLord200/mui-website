import * as React from 'react';
import { Container, Box, Typography, Stack, Grid, Card, CardActionArea, CardMedia, CardContent, Pagination, Button } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import logo from '../../logo.svg'

const PhotoGalleryLobby = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
        setPage(page);
    }

    return (
        <Container maxWidth="md">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
                <Typography variant="h6">Photo Gallery Lobby</Typography>
                {/* <Button>Filter Panel</Button> */}
            </Stack>
            {/* <Stack spacing={2} mt={2} alignItems="center" justifyContent="center"> */}
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
                        <Button>Category A</Button>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Button>Category B</Button>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Button>Category C</Button>
                    </Grid>
                </Grid>
            {/* </Stack> */}
        </Container>
    )
}

export default PhotoGalleryLobby;