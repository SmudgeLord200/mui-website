import * as React from 'react';
import { Container, Box, Typography, Stack, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAboutInfo, getInfoLoading, selectAboutInfo } from '../stores/about';
import { unwrapResult } from '@reduxjs/toolkit';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import AdbIcon from '@mui/icons-material/Adb';
import styled from '@emotion/styled';

const CustomizedTimelineContent = styled(TimelineContent)(({ theme }) => ({
    backgroundColor: "#000",
    color: "#fff",
    padding: '12px 2px',
    margin: '0px 10px',
}))

const About = () => {
    const dispatch = useDispatch();
    const aboutInfo = useSelector(selectAboutInfo);
    const aboutLoading = useSelector(getInfoLoading);

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
            {aboutLoading &&
                <Stack spacing={2} mt={2} alignItems="center" justifyContent="center">
                    <CircularProgress />
                </Stack>
            }

            {!aboutLoading &&
                <Timeline position="alternate">
                    {aboutInfo.map((info, index) => {
                        return (
                            <TimelineItem key={index}>
                                <TimelineSeparator sx={{ px: 1 }}>
                                    <TimelineConnector />
                                    <TimelineDot>
                                        <AdbIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2, backgroundColor: '#000', color: '#fff', borderRadius: 40 }}>
                                    <Typography variant="h6" component="span">
                                        {info.attributes.date}
                                    </Typography>
                                    <Typography>{info.attributes.description}</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            }
        </Container>
    )
}

export default About;