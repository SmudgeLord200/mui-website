import React, { useEffect, useRef, useState } from 'react'
import { Button, Popper, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
import { idID } from '@mui/material/locale';

const PopperButton = ({
    ref,
    id,
    open,
    handleToggleBtn,
    handleCloseBtn,
}) => {
    return (
        <Button
            ref={ref}
            id={id}
            color="inherit"
            onClick={handleToggleBtn}
        >
            Discography
            <Popper
                open={open}
                anchorEl={refName.current}
                role={undefined}
                placement="bottom"
            >
                <ClickAwayListener onClickAway={handleCloseBtn}>
                    <MenuList
                        open={open}
                        onClose={handleCloseBtn}
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
    )
}

export default PopperButton;