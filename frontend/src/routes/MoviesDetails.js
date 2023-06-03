import { Box, Button, CardHeader, Container, Stack, Tab, Typography } from "@mui/material";
import { selectDetailsID } from "../stores/details";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import { Fragment } from "react";
import logo from "../logo.svg"
import { MOVIES } from '../locales/movies';
import styled from "@emotion/styled";
import useLocales from "../hooks/useLocales";

const DescriptionContainer = styled(Container)(({ theme }) => ({
    padding: 15,
    marginTop: 10,
}));


const MoviesDetails = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { t } = useLocales();
    const detailsID = useSelector(selectDetailsID);

    useEffect(() => {
        if (detailsID == null) {
            navigate(`/movies`)
        }
    }, []);

    const onNavigateBack = () => {
        navigate(`/movies`);
    }

    return (
        <Container maxWidth="md">
            <Button
                variant="contained"
                onClick={onNavigateBack}
                sx={{ my: 2 }}
            >
                Back
            </Button>
            <Typography variant="h6">Movies Details</Typography>
            <Typography>ID is {detailsID}</Typography>
            <Stack spacing={2} mt={2} direction="column" alignItems="center" justifyContent="center">
                {/* TODO: put this img container in the loop */}
                <Box
                    component="img"
                    src={logo}
                    alignItems="center"
                    justifyContent="center"
                    width="80%"
                    height="8rem"
                    sx={{ border: '1px solid black' }}
                />
                {/* TODO: change the loop structure as will get from backend */}
                {MOVIES.filter(x => x.id === detailsID).map((movie, index) => {
                    return (
                        <Accordion key={index}>
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
                    )
                })}
            </Stack>
        </Container>
    )
}

export default MoviesDetails;