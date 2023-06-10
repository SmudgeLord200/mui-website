import * as React from 'react';
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import styled from '@emotion/styled';
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from './ScrollToTop';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { StyledEngineProvider } from '@mui/material/styles';

const RootDiv = styled('div')({
    display: 'flex',
    maxHeight: '100%',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
})

const ContentDiv = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
})

const MainLayout = () => {
    const [scrollTarget, setScrollTarget] = useState(undefined);

    return (
        <RootDiv
            ref={(node) => {
                if (node) {
                    setScrollTarget(node);
                }
            }}>
            <ContentDiv>
                <div id="back-to-top-anchor" />

                {/* Header */}
                <StyledEngineProvider injectFirst>
                    <Header />
                </StyledEngineProvider>

                <ScrollToTop scrollTarget={scrollTarget}>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollToTop>

                {/* Children of contents */}
                <Outlet />

                {/* Footer */}
                <Footer />
            </ContentDiv>
        </RootDiv>
    )
}

export default MainLayout;