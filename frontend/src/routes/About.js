import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAboutInfo, selectAboutInfo } from '../stores/about';
import { unwrapResult } from '@reduxjs/toolkit';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
                    // <Typography key={index}>{info.attributes.description}</Typography>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={info.attributes.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <Typography className="vertical-timeline-element-title">{info.attributes.description}</Typography>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                )
            })}
        </Container>
    )
}

export default About;