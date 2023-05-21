import * as React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useLocales from '../hooks/useLocales';
import { Trans } from 'react-i18next';
// import { makeStyles } from '@mui/styles';

// const theme = makeStyles(

// );

const Home = () => {
    const navigate = useNavigate();
    const { t } = useLocales();

    return (
        <Container maxWidth="md">
            <Typography>{t("Home")}</Typography>
            <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
                fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
                aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis in
                cum quibusdam sed quae, accusantium et aperiam? Quod itaque exercitationem,
                at ab sequi qui modi delectus quia corrupti alias distinctio nostrum.
                Minima ex dolor modi inventore sapiente necessitatibus aliquam fuga et.
            </Typography>

            {/* <Button onClick={() => navigate('/about')}>About</Button> */}
        </Container>
    )
}

export default Home;