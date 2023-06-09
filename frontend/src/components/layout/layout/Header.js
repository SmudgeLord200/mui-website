import { AppBar, Box, Button, ButtonGroup, ClickAwayListener, Divider, Drawer, IconButton, ListItemText, MenuItem, MenuList, Popper, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useLocales from "../../../hooks/useLocales";
import { useRef, useState } from "react";
import LanguageIcon from '@mui/icons-material/Language';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
}));

const Header = (props) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();
    const { t, allLang, onChangeLang } = useLocales();
    const [anchorElUser, setAnchorElUser] = useState(null);
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
        <AppBar position="sticky">
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
                                        <MenuItem onClick={() => onNavigate("/")} sx={{ py: 2, px: 2.5 }}>Concerts</MenuItem>
                                        <MenuItem onClick={() => onNavigate("/")} sx={{ py: 2, px: 2.5 }}>Podcasts</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Popper>
                        </Button>

                        <Button color="inherit" onClick={() => onNavigate("/")} style={{ padding: "0px 10px" }}>Photo Gallery</Button>

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
            </StyledToolBar>
        </AppBar>
    )
}

export default Header;