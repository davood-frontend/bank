import React from 'react';
import { Box, Avatar, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import sample3 from '../../../assets/sample3.jpg'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import { homeFooterData } from '../../../constants';
const HomeFooter = () => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))


    return (
        <Box sx={{ my: 8, px: 2 }}>
            <Grid container>
                <Grid xs={12} md={4} lg={3}>
                    <Typography variant='h4' sx={{ mb: 6 }}>
                        نگاهی به ما با استفاده از اعداد
                    </Typography>
                    <Avatar variant='rounded' src={sample3} sx={{ height: 300, width: 1 }} />
                </Grid>
                <Grid xs={11} md={6} container sx={{ marginX: 'auto' }}>
                    <Typography variant='subtitle2' textAlign='left' sx={{ my: { xs: 5, md: 0 } }}>
                        در طی سال های گذشته بانک ما پیشرفت های زیادی در حوضه تکنولوژی امنیت و سهل استفاده داشته که همه اینها باعث جلب رضایت مشتری های مختلف از سرتاسر دنیا شده است. با نگاه کردن با آمار های زیر میتوانید از سرمایه گذاری روی ما کاملا مطمئن شوید.
                    </Typography>
                    {homeFooterData.map((item, index) => (
                        <Grid key={index} xs={6} sx={{ mb: { xs: 4, md: 0 } }} >
                            <Box sx={{ marginX: 'auto', width: 5 / 7, textAlign: { xs: 'center', md: 'left' }, }}>
                                <Typography variant={smallerThanMd ? 'h4' : 'h3'}>
                                    {item.title}
                                </Typography>
                                <Typography variant='caption'>
                                    {item.caption}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomeFooter;