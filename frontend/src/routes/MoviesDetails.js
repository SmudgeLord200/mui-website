import { Box, CardHeader, Container, Stack, Tab, Typography } from "@mui/material";
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

const DescriptionContainer = styled(Container)(({ theme }) => ({
    padding: 15,
    marginTop: 10,
}));


const MoviesDetails = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const detailsID = useSelector(selectDetailsID);

    useEffect(() => {
        if (detailsID == null) {
            navigate(`/movies`)
        }
    }, []);

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Container maxWidth="md" sx={{ marginBottom: 5 }}>
                <Typography variant="h6" mt={2}>Details</Typography>
                <Typography>ID is {detailsID}</Typography>
                <Stack spacing={2} mt={2} direction="column" alignItems="center" justifyContent="center">
                    {/* TODO: put this img container in the loop */}
                    <Container maxWidth="xs">
                        <img src={logo} style={{ width: '100%', height: 'auto', border: '5px solid #f2f2f2' }} />
                    </Container>
                    {/* <Container maxWidth="xs">
                        <Box
                            component="img"
                            src={logo}
                            width="100%"
                            height="auto"
                            sx={{ border: '5px solid #f2f2f2' }}
                        />
                    </Container> */}

                    {MOVIES.filter(x => x.id === detailsID).map((movie, index) => {
                        return (
                            <Container maxWidth="md" key={index}>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" variant="head" scope="row">
                                                    Movie Name
                                                </TableCell>
                                                <TableCell align="right">{movie.title_enUS}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" variant="head" scope="row">
                                                    Year
                                                </TableCell>
                                                <TableCell align="right">{movie.year}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" variant="head" scope="row">
                                                    Duration
                                                </TableCell>
                                                <TableCell align="right">{movie.duration} mins</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" variant="head" scope="row">
                                                    Director
                                                </TableCell>
                                                <TableCell align="right">{movie.director_enUS}</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                <TableCell component="th" variant="head" scope="row">
                                                    Character Name
                                                </TableCell>
                                                <TableCell align="right">{movie.character_name_enUS}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <DescriptionContainer maxWidth="md" component={Paper}>
                                    <Typography variant="h6">Description</Typography>
                                    <Typography style={{ wordWrap: "break-word" }}>{movie.description_enUS}</Typography>
                                </DescriptionContainer>
                                {console.log(movie.remarks.length)}
                                {movie.remarks.length != 0 &&
                                    movie.remarks.map((r, index) => {
                                        return (
                                            <DescriptionContainer maxWidth="md" component={Paper}>
                                                <Typography variant="h6">Remarks</Typography>
                                                <Typography style={{ wordWrap: "break-word" }}>{r.remark_enUS}</Typography>
                                            </DescriptionContainer>
                                        )
                                    })
                                }
                            </Container>
                        )
                    })}
                </Stack>
            </Container>
        </Box>
    )
}

export default MoviesDetails;