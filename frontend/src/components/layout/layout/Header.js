import { AppBar, Box, Button, ButtonGroup, ClickAwayListener, Divider, Drawer, IconButton, ListItemText, MenuItem, MenuList, Popper, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLocales from "../../../hooks/useLocales";
import { useRef, useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import navigations from '../../../navigations';
import PopperButton from "../../PopperButton/PopperButton";
import MobileDrawerButton from "../../MobileDrawerButton/MobileDrawerButton";
import Icon from '@mui/material/Icon';

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar)

const Header = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const { t, allLang, onChangeLang } = useLocales();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const closeDrawerButton = () => {
        setMobileOpen(false)
    }

    //Change Language
    const handleChangeLang = (value) => {
        onChangeLang(value);
    };

    const onNavigate = (val) => {
        navigate(val);
    }

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Stack direction='column' spacing={1}>
                <Typography variant="h6" sx={{ my: 2 }}>
                    MUI
                </Typography>
                <Divider />
                {navigations.map((nav, index) => {
                    if (nav.hasOwnProperty('type') && nav.type === 'parent') {
                        return (
                            <MobileDrawerButton key={index} nav={nav} closeDrawerButton={closeDrawerButton} />
                            // <PopperButton key={index} nav={nav} />
                        )
                    }
                    else {
                        return (
                            // <ButtonGroup key={index} variant="text" orientation="vertical">
                                <Stack direction='row' justifyContent={"center"}  alignItems={"center"}>
                                    {nav.icon}
                                    <Button key={index} color="inherit" onClick={() => {onNavigate(nav.path); closeDrawerButton(true);}}>{t(`${nav.name}`)}</Button>
                                </Stack>
                                //<Divider /> 
                            // </ButtonGroup>
                        )
                    }
                })}
            </Stack>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed">
                <StyledToolBar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={() => onNavigate('/')}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        <AdbIcon sx={{ mr: 1 }} />
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
                            </IconButton>
                            <Drawer
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
                        </>}

                    {!isMobile &&
                        <ButtonGroup variant="text">
                            {navigations.map((nav, index) => {
                                if (nav.hasOwnProperty('type') && nav.type === 'parent') {
                                    return (
                                        <PopperButton
                                            key={index}
                                            nav={nav}
                                        />
                                    )
                                }
                                else {
                                    return (
                                        <Button key={index} color="inherit" onClick={() => { onNavigate(nav.path) }}>{t(`${nav.name}`)}</Button>
                                    )
                                }
                            })}
                        </ButtonGroup>
                    }
                </StyledToolBar>
            </AppBar>
            <Offset />
        </>
    )
}

export default Header;