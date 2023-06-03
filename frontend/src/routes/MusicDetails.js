import { useNavigate } from "react-router-dom";
import useLocales from "../hooks/useLocales";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        </Container>
    )
}

export default MusicDetails;