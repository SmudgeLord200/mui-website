import { useNavigate } from "react-router-dom";
import useLocales from "../../hooks/useLocales";
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from "../../logo.svg"

const MusicDetails = () => {
    const navigate = useNavigate();
    const { t } = useLocales();

    return (
        <Container maxWidth="md">
            <Button
                variant="contained"
                onClick={() => navigate(`/music`)}
                sx={{ my: 2 }}
            >
                Back
            </Button>
            <Typography variant="h6">Music Details</Typography>
            <Stack spacing={2} mt={2} direction="column" alignItems="center" justifyContent="center">
                {/* TODO: put this img container in the loop */}
                <Box
                    component="img"
                    // src={logo}
                    alignItems="center"
                    justifyContent="center"
                    width="80%"
                    height="8rem"
                    sx={{ border: '1px solid black' }}
                />
                {/* TODO: change the loop structure as will get from backend */}
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Stack>

            <Divider sx={{ py: 2 }}>Related</Divider>
            <Stack spacing={2} direction="column" alignItems="center" justifyContent="center">
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 12 }}
                >
                    <Grid item xs={2} sm={4} md={4} lg={4} xl={4}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    sx={{ height: 200 }}
                                    image={logo}
                                    title='Related'
                                >
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom noWrap variant="h6" component="div">
                                        Related
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    )
}

export default MusicDetails;