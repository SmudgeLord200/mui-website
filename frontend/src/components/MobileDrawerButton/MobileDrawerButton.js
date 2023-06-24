import { Button, ClickAwayListener, Divider, Menu, MenuItem, MenuList, Popper, Stack, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import useLocales from '../../hooks/useLocales'
import { useNavigate } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import styled from '@emotion/styled';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const StyledAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    "&::before": {
        backgroundColor: 'white'
    }
    //& .MuiPaper-root-MuiAccordion-root:before
}))

const MobileDrawerButton = ({ nav, closeDrawerButton = false, masterOpen = false, onMasterOpen = null }) => {
    const navigate = useNavigate();
    const { t, onChangeLang } = useLocales();

    const handleClick = () => {
        onMasterOpen(!masterOpen)
    };

    const doSomething = (n) => {
        if (n.typeOf == 'Language') {
            handleChangeLang(n.LANG)
        }

        if (n.typeOf == 'Discography') {
            onNavigate(n.path)
        }

        closeDrawerButton(true)
        onMasterOpen(false)
    }

    const onNavigate = (val) => {
        navigate(val);
    }

    const handleChangeLang = (value) => {
        onChangeLang(value);
    };

    return (
        <>
            <List
                // sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        {nav.icon}
                    </ListItemIcon>
                    <ListItemText primary={t(`${nav.name}`)} />
                    {masterOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {nav.children.map((subnav, index) => {
                    return (
                        <Collapse in={masterOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton key={index} onClick={() => doSomething(subnav)}>
                                    <ListItemIcon>{subnav.icon}</ListItemIcon>
                                    <ListItemText primary={t(`${subnav.name}`)} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    )
                })}
            </List>
        </>
    )
}

export default MobileDrawerButton;