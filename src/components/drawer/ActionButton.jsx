import React from 'react';
import { Fab } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const ActionButton = ({ setDrawer,setSnackbar}) => {
    return (
        <Fab color='primary' aria-label="add" sx={{ display: { sm: 'none' }, position: 'fixed', margin: 1.5, top: '0px' }} onClick={() => setDrawer(prev => !prev)}>
            <MenuRoundedIcon />
        </Fab>
    );
};

export default ActionButton;