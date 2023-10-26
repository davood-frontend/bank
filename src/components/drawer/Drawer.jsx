import React from 'react';
import { SwipeableDrawer } from '@mui/material'
import SidebarContent from '../sidebar/SidebarContent';
import { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
const Drawer = () => {
    const {drawer,setDrawer} = useContext(MainContext)
    return (
        <SwipeableDrawer onClose={() => setDrawer(false)} anchor='left' open={drawer} sx={{'.MuiDrawer-paper': { width: 240 }, display: { sm: 'none' } }}>
            <SidebarContent />
        </SwipeableDrawer>
    );
};

export default Drawer;