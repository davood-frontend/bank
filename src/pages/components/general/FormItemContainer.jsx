import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { grey } from '@mui/material/colors';

const FormItemContainer = ({ children,mt }) => {
    return (
        <Grid container sx={{ backgroundColor: grey[200], p: 2.5, borderRadius: 2, mt : mt !== 'none' && 3, width: 1, alignItems: 'center' }}>
            {children}
        </Grid>
    );
};

export default FormItemContainer;