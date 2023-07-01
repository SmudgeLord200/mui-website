import * as React from 'react';
import logo from '../../logo.svg'
import { Container, Typography, Stack, Box, useMediaQuery } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { MOVIES } from '../../locales/movies';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDetailsID } from '../../stores/details';
import { useState } from "react";
import { useEffect } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import usePagination from '../../hooks/usePagination';
import useLocales from '../../hooks/useLocales';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 0.15,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}));

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
}));

const HoverContainer = styled('span')(({ theme }) => ({
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 1,
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        // '& .MuiTypography-root': {
        //     border: '4px solid currentColor',
        // },
    },
}));



const Movies = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useLocales();
    const [page, setPage] = useState(1);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const PAGE_SIZE = (isMobile ? 3 : 6);
    const count = Math.ceil(MOVIES.length / PAGE_SIZE);
    const data = usePagination(MOVIES, PAGE_SIZE)

    const handlePageChange = (e, page) => {
        setPage(page);
        // data.jumpToPage(page);
    }

    const onMoviesDetails = () => {
        // dispatch(setDetailsID(id))
        navigate(`/moviesdetails`)
    }

    return (
        <Container maxWidth="md">
            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={2}>
                <Typography variant="h6">Movies</Typography>
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
                        <Card onClick={() => onMoviesDetails()}>
                            <CardActionArea>
                                {/* <HoverContainer> */}
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={logo}
                                    title='Movie Title'
                                // movie.cover_photo
                                >
                                    {/* <ImageBackdrop className="MuiImageBackdrop-root" />
                                                <Image>
                                                    <Typography
                                                        component="span"
                                                        variant="subtitle1"
                                                        color="inherit"
                                                        sx={{
                                                            position: 'relative',
                                                            p: 4,
                                                            pt: 2,
                                                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                                                            wordWrap: 'break-word',
                                                            textAlign: 'center'
                                                        }}
                                                    >
                                                        {movie.title_enUS}
                                                        <ImageMarked className="MuiImageMarked-root" />
                                                    </Typography>
                                                </Image> */}
                                </CardMedia>
                                {/* </HoverContainer> */}
                                <CardContent>
                                    <Typography gutterBottom noWrap variant="h6" component="div">
                                        Movie Title
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

export default Movies;