import React from 'react';
import { SwipeableDrawer } from '@mui/material'
import TransActionInformation from './TransActionInformation';
const Drawer = ({drawer,setDrawer}) => {
    return (
        <SwipeableDrawer anchor='bottom' open={drawer} onClose={() => setDrawer(false)} swipeAreaWidth={59} sx={{ display: { md: 'none' } }}>
            <TransActionInformation hType={'h5'} />
        </SwipeableDrawer>
    );
};

export default Drawer;