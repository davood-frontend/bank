import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';

const ContentContainer = ({children}) => {
    return (
        <Grid xs={12} sm={9} md={9.5} lg={10.2} sx={{ backgroundColor: 'whitesmoke' }}>
            {children}
        </Grid>
    );
};

export default ContentContainer;