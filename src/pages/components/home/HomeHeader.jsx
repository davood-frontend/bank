import React from 'react';
import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import { homeHeaderData } from '../../../constants'
const HomeHeader = () => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Box className='bg' sx={{ borderRadius: 7, backgroundColor: 'rgba(170, 204, 200, 0.4)', p: 4 }}>
            <Grid container>
                <Grid xs={12} lg={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant={smallerThanMd ? 'h5' : 'h4'} sx={{ width: { lg: 1 / 2 } }}>
                        با انواع خدمات و پیشنهاد های ویژه ما آشنا شوید
                    </Typography>
                    <Typography variant='subtitle1' sx={{ width: { lg: 1 / 2 }, my: 4 }}>
                        ما ابزار و منابع خاصی را در اختیار شما قرار میدهیم تا بتوانید راحت تر حسابتان را کنترل کنید
                    </Typography>
                </Grid>
                <Grid xs={12} lg={6} container >
                    {homeHeaderData.map((item, index) => <Grid xs={6} sx={{ px: { xs: 0.8, sm: 1, md: 4 } }} key={index}> 
                        <Box key={index} sx={{ mx: 'auto', backgroundColor: "#f9f9f9", width: 1, borderRadius: 7, height: '180px', mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Box sx={{ textAlign: 'center' }}>
                                {item.icon}
                                <Typography variant='subtitle2' sx={{ width: 2 / 3, mx: 'auto' }}>
                                    {item.text}
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>)}
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeHeader;