import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

const SidebarContainer = ({children}) => {
    return (
        <Grid xs={0} sm={3} md={2.5} lg={1.8} className='container custom-scrollbar' sx={{ height: '100vh', backgroundColor: '#f1f1f1',overflow:'auto',position:'sticky',top:0}}>
            {children}
        </Grid>
    );
};

export default SidebarContainer;