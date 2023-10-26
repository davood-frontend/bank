import React from 'react';
import { EnterTheWebsite, ExitTheWebsite } from './SidebarHeader';
import SidebarTabs from './SidebarTabs';
import { Box } from '@mui/material';
import { EnterOrExit } from '../../hoc/HocComponents';
const SidebarContent = () => {
    // another file will choose that which header must be rendered based on cookies
    const ChosenComponent = EnterOrExit(EnterTheWebsite,ExitTheWebsite)
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center',position : 'sticky',top : 0 }}>
            {ChosenComponent}
            <SidebarTabs />
        </Box>
    );
};

export default SidebarContent;