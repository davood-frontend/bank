import React from 'react';
import { Box } from '@mui/material';
const Page = ({ tabIndex, index, children, ...props }) => {
    return (
        <div
            role='tabpanel'
            hidden={tabIndex !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...props}
        >

            {tabIndex === index && <Box >
                {children}
            </Box>}

        </div>
    );
};

export default Page;