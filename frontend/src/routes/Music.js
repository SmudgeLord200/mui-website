import { Container, Box, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Pagination from '@mui/material/Pagination';
import logo from '../logo.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocales from '../hooks/useLocales';
import { useDispatch } from 'react-redux';

const Music = () => {
    const navigate = useNavigate();
    const { t } = useLocales();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const onMusicDetails = () => {
        navigate(`/musicdetails`)
    }

    return (
        <Container maxWidth='md'>
            <Typography variant="h6" mt={2}>Music</Typography>
            <Stack spacing={2} mt={2} alignItems="center" justifyContent="center">
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
                >
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card onClick={onMusicDetails}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 240 }}
                                    image={logo}
                                    title='Album Title'
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom noWrap variant="h6" component="div">
                                        Album Title
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

export default Music;