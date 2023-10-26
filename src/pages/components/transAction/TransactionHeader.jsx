import React,{useEffect} from 'react';
import { Box, Fab } from '@mui/material'
import { grey } from '@mui/material/colors';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import TransActionInformation from './TransActionInformation';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
const TransactionHeader = ({ setDrawer }) => {
    const theme = useTheme()
    const smallerThanLg = useMediaQuery(theme.breakpoints.down('lg'))
    const biggerThanSm = useMediaQuery(theme.breakpoints.up('sm')) 
    //setting the drawer to false after the screen gets bigger than the drawer standart size
    useEffect(() => {
       setDrawer(false)
        
    }, [biggerThanSm]);

    return (
        <Box sx={{ py: 3, mb: 3, boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;', backgroundColor: grey[200] }}>

            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                <TransActionInformation hType={smallerThanLg ? 'h5' : 'h4'} />
            </Box>


            <Box textAlign='center' sx={{ display: { md: 'none' } }}>
                <Fab color='primary' onClick={() => setDrawer(true)}>
                    <ExpandMoreRoundedIcon />
                </Fab>
            </Box>
        </Box>
    );
};

export default TransactionHeader;