import React, { useEffect, useRef, useState } from 'react'
import { Button, Popper, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useLocales from '../../hooks/useLocales';

const PopperButton = ({ nav }) => {
    const { t, onChangeLang } = useLocales();
    const navigate = useNavigate();
    const btnRefs = useRef(null);
    const [openBtn, setOpenBtn] = useState(false);

    const handleToggleBtn = () => {
        setOpenBtn((prev) => !prev)
    }
    
    const handleCloseBtn = (event) => {
        if (btnRefs.current && btnRefs.current.contains(event.target)) {
            return;
        }
        setOpenBtn(false);
    }

    const doSomething = (n) => {
        if (n.typeOf == 'Language') {
            handleChangeLang(n.value)
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
        <Button
            ref={btnRefs}
            id={nav.name}
            aria-controls={openBtn ? 'composition-menu' : undefined}
            aria-expanded={openBtn ? 'true' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggleBtn}
        >
            {nav.name}
            <Popper
                open={openBtn}
                anchorEl={btnRefs.current}
                role={undefined}
                placement="bottom"
            >
                <ClickAwayListener onClickAway={handleCloseBtn}>
                    <MenuList
                        open={openBtn}
                        onClose={handleCloseBtn}
                        style={{ backgroundColor: 'white', borderRadius: 5 }}
                    >
                        {nav.children.map((subnav, index) => {
                            return (
                                <MenuItem key={index} onClick={() => doSomething(subnav)} sx={{ py: 2, px: 2.5 }}>{t(`${subnav.name}`)}</MenuItem>
                            )
                        })}
                    </MenuList>
                </ClickAwayListener>
            </Popper>
        </Button>
    )
}

export default PopperButton;