import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useRef } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import Drawer from '@mui/material/Drawer';
import { MenuList, MenuItem, ListItemText, List, Divider, ListItemButton, ListItem, ListItemIcon } from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import styled from '@emotion/styled';
import LanguageIcon from '@mui/icons-material/Language';
import CloseIcon from '@mui/icons-material/Close';
import Popper from '@mui/material/Popper';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollToTop from './ScrollToTop';
import PropTypes from 'prop-types';
import useLocales from '../../hooks/useLocales';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const useStyles = styled((theme) => ({
    toolBar: {
        display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', justifyContent: 'space-between', alignItems: 'center',
    },
}));

const RootDiv = styled('div')({
    display: 'flex',
    minHeight: '100%',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
})

const WrapperDiv = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
})

const WrapperContentContainerDiv = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
})

const ContentDiv = styled('div')({
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
})

const drawerWidth = 150;

const MainLayout = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const { t, allLang, onChangeLang } = useLocales();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [scrollTarget, setScrollTarget] = useState(undefined);

    const languageAnchorRef = useRef(null); //Popper anchorRef of language button
    const [openLanBtn, setOpenLanBtn] = useState(false);

    const discographyAnchorRef = useRef(null); //Popper anchorRef of discography button
    const [openDisBtn, setOpenDisBtn] = useState(false);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    //Change Language
    const handleChangeLang = (value) => {
        onChangeLang(value);
    };

    //Desktop menu for language
    const handleToggleLanBtn = () => {
        setOpenLanBtn((prevOpen) => !prevOpen);
    };
    const handleCloseLanBtn = (event) => {
        if (languageAnchorRef.current && languageAnchorRef.current.contains(event.target)) {
            return;
        }
        setOpenLanBtn(false);
    };

    const handleToggleDisBtn = () => {
        setOpenDisBtn((prevOpen) => !prevOpen);
    };
    const handleCloseDisBtn = (event) => {
        if (discographyAnchorRef.current && discographyAnchorRef.current.contains(event.target)) {
            return;
        }
        setOpenDisBtn(false);
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const onNavigate = (val) => {
        navigate(val);
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <ButtonGroup variant="text" orientation="vertical">
                <Button color="inherit" onClick={() => onNavigate("/")}>{t("Home")}</Button>
                <Button color="inherit" onClick={() => onNavigate("/about")}>About</Button>
                <Button color="inherit" onClick={() => onNavigate("/movies")}>Movies</Button>
                <Button color="inherit" onClick={() => onNavigate("/music")}>Music</Button>

                <Typography>Language</Typography>
                <MenuList>
                    {allLang.map((option) => (
                        <MenuItem
                            key={option.value}
                            onClick={() => handleChangeLang(option)}
                            sx={{ py: 1, px: 2.5 }}
                        >
                            <ListItemText
                                primaryTypographyProps={{ variant: 'body1' }}
                            >
                                {option.label}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </ButtonGroup>
        </Box>
    );

    return (
        <RootDiv>
            <WrapperDiv>
                <WrapperContentContainerDiv>
                    <ContentDiv
                        ref={(node) => {
                            if (node) {
                                setScrollTarget(node);
                            }
                        }}>
                        <div id="back-to-top-anchor" />
                        <AppBar position='sticky'>
                            <Toolbar style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    onClick={() => onNavigate('/')}
                                >
                                    <AdbIcon sx={{ mr: 1, }} />
                                    <Typography
                                        variant="h6"
                                        noWrap
                                        component="a"
                                        sx={{
                                            mr: 2,
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            letterSpacing: '.3rem',
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        MUI
                                    </Typography>
                                </IconButton>

                                {isMobile &&
                                    <>
                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            edge="start"
                                            onClick={handleDrawerToggle}
                                            sx={{ mr: 2, }}
                                        >
                                            <MenuIcon />
                                        </IconButton><Drawer
                                            container={container}
                                            variant="temporary"
                                            open={mobileOpen}
                                            onClose={handleDrawerToggle}
                                            ModalProps={{
                                                keepMounted: true, // Better open performance on mobile.
                                            }}
                                            sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 }, }}
                                        >
                                            {drawer}
                                        </Drawer>
                                    </>
                                }
                                {!isMobile &&
                                    <ButtonGroup variant="text">
                                        <Button color="inherit" onClick={() => onNavigate("/")} style={{ padding: "0px 10px" }}>{t("Home")}</Button>
                                        <Button color="inherit" onClick={() => onNavigate("/about")} style={{ padding: "0px 10px" }}>About</Button>

                                        <Button
                                            ref={discographyAnchorRef}
                                            id="composition-button-0"
                                            aria-controls={openDisBtn ? 'composition-menu' : undefined}
                                            aria-expanded={openDisBtn ? 'true' : undefined}
                                            aria-haspopup="true"
                                            color="inherit"
                                            onClick={handleToggleDisBtn}
                                        >
                                            Discography
                                            <Popper
                                                open={openDisBtn}
                                                anchorEl={discographyAnchorRef.current}
                                                role={undefined}
                                                placement="bottom"
                                            >
                                                <ClickAwayListener onClickAway={handleCloseDisBtn}>
                                                    <MenuList
                                                        open={openDisBtn}
                                                        onClose={handleCloseDisBtn}
                                                        style={{ backgroundColor: 'white', borderRadius: 5 }}
                                                    >
                                                        <MenuItem onClick={() => onNavigate("/music")} sx={{ py: 2, px: 2.5 }}>Music</MenuItem>
                                                        <MenuItem onClick={() => onNavigate("/movies")} sx={{ py: 2, px: 2.5 }}>Movies</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Popper>
                                        </Button>

                                        <Button
                                            ref={languageAnchorRef}
                                            id="composition-button-1"
                                            aria-controls={openLanBtn ? 'composition-menu' : undefined}
                                            aria-expanded={openLanBtn ? 'true' : undefined}
                                            aria-haspopup="true"
                                            color="inherit"
                                            onClick={handleToggleLanBtn}
                                        >
                                            <LanguageIcon />
                                            <Popper
                                                open={openLanBtn}
                                                anchorEl={languageAnchorRef.current}
                                                role={undefined}
                                                placement="bottom"
                                            >
                                                <ClickAwayListener onClickAway={handleCloseLanBtn}>
                                                    <MenuList
                                                        open={openLanBtn}
                                                        onClose={handleCloseLanBtn}
                                                        style={{ backgroundColor: 'white', borderRadius: 5 }}
                                                    >
                                                        {allLang.map((option) => (
                                                            <MenuItem
                                                                key={option.value}
                                                                onClick={() => handleChangeLang(option)}
                                                                sx={{ py: 2, px: 2.5 }}
                                                            >
                                                                <ListItemText
                                                                    primaryTypographyProps={{ variant: 'body1' }}
                                                                >
                                                                    {option.label}
                                                                </ListItemText>
                                                            </MenuItem>
                                                        ))}
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Popper>
                                        </Button>
                                    </ButtonGroup>
                                }

                            </Toolbar>
                        </AppBar>

                        <ScrollToTop scrollTarget={scrollTarget}>
                            <Fab size="small" aria-label="scroll back to top">
                                <KeyboardArrowUpIcon />
                            </Fab>
                        </ScrollToTop>

                        <Outlet />

                        <Typography textAlign="center">Footer</Typography>
                    </ContentDiv>
                </WrapperContentContainerDiv>
            </WrapperDiv>
        </RootDiv >
    )
}

export default MainLayout;