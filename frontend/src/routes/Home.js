import * as React from 'react';
import { Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useLocales from '../hooks/useLocales';

const Home = () => {
    const navigate = useNavigate();
    const { t } = useLocales();

    return (
        <Container maxWidth="md">
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                mt={2}
                sx={{ border: '1px solid black' }}
            >
                Carousel of images
            </Box>

            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                mt={2}
                sx={{ border: '1px solid black' }}
            >
                {t('Home')}
            </Box>
        </Container>
    )
}

export default Home;