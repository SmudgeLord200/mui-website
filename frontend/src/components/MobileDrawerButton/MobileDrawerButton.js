import { Button, ClickAwayListener, Divider, Menu, MenuItem, MenuList, Popper, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import useLocales from '../../hooks/useLocales'
import { useNavigate } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from '@emotion/styled';

const StyledAccordion = styled(Accordion)(({theme}) => ({
    boxShadow: 'none', 
    "&::before": {
        backgroundColor: 'white'
    }
    //& .MuiPaper-root-MuiAccordion-root:before
}))

const MobileDrawerButton = ({ nav, closeDrawerButton = false }) => {
    const navigate = useNavigate();
    const { t, onChangeLang } = useLocales();

    const doSomething = (n) => {
        if (n.typeOf == 'Language') {
            handleChangeLang(n.LANG)
        }

        if (n.typeOf == 'Discography') {
            onNavigate(n.path)
        }

        closeDrawerButton(true)
    }

    const onNavigate = (val) => {
        navigate(val);
    }

    const handleChangeLang = (value) => {
        onChangeLang(value);
    };

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const openL = Boolean(anchorEl);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        // if (anchorRef.current && anchorRef.current.contains(event.target)) {
        //     return;
        // }
        // setOpen(false);
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    return (
        <>
            {/* <Stack direction='row' justifyContent={"center"} alignItems={"center"}>
                {nav.icon}
                <Typography variant="body1">{nav.name}</Typography>
            </Stack>
            <MenuList>
                {nav.children.map((subnav, index) => {
                    return (
                        <MenuItem key={index} onClick={() => doSomething(subnav)} sx={{ px: 2.5 }}>{t(`${subnav.name}`)}</MenuItem>
                    )
                })}
            </MenuList> */}
            <StyledAccordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Stack direction='row' justifyContent={"center"} alignItems={"center"}>
                        {nav.icon}
                        <Typography variant="body1">{nav.name}</Typography>
                    </Stack>
                </AccordionSummary>
                <AccordionDetails>
                    {nav.children.map((subnav, index) => {
                        return (
                            <MenuItem key={index} onClick={() => doSomething(subnav)} sx={{ px: 2.5 }}>{t(`${subnav.name}`)}</MenuItem>
                        )
                    })}
                </AccordionDetails>
            </StyledAccordion>
            {/* <Divider /> */}
        </>
    )
}

export default MobileDrawerButton;