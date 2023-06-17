import { Divider, MenuItem, MenuList, Typography } from '@mui/material'
import React from 'react'
import useLocales from '../../hooks/useLocales'
import { useNavigate } from 'react-router-dom'

const MobileDrawerButton = ({ nav }) => {
    const navigate = useNavigate();
    const { t, onChangeLang } = useLocales();

    const doSomething = (n) => {
        if (n.typeOf == 'Language') {
            handleChangeLang(n.LANG)
        }

        if (n.typeOf == 'Discography') {
            onNavigate(n.path)
        }
    }

    const onNavigate = (val) => {
        navigate(val);
    }

    const handleChangeLang = (value) => {
        onChangeLang(value);
    };

    return (
        <>
            <Typography variant="body1">{nav.icon}{nav.name}</Typography>
            <MenuList>
                {nav.children.map((subnav, index) => {
                    return (
                        <MenuItem key={index} onClick={() => doSomething(subnav)} sx={{ px: 2.5 }}>{t(`${subnav.name}`)}</MenuItem>
                    )
                })}
            </MenuList>
            <Divider />
        </>
    )
}

export default MobileDrawerButton;