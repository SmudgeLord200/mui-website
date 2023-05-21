import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAboutInfo, selectAboutInfo } from '../stores/about';
import { unwrapResult } from '@reduxjs/toolkit';

const About = () => {
    const dispatch = useDispatch();
    const aboutInfo = useSelector(selectAboutInfo);

    useEffect(() => {
        async function getAbout() {
            dispatch(getAboutInfo())
                .then(unwrapResult)
                .then((result) => {
                    console.log(result)
                })
                .catch((e) => {
                    console.log(e)
                })
        }
        getAbout();
    }, [])

    return (
        <Container>
            <Typography>About</Typography>
            {aboutInfo.map((info, index) => {
                return (
                    <Typography key={index}>{info.attributes.description}</Typography>
                )
            })}
        </Container>
    )
}

export default About;