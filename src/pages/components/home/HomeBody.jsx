import React, { useState } from 'react';
import { Box, Accordion, AccordionDetails, AccordionSummary, Avatar, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Grid from '@mui/material/Unstable_Grid2';
import sample0 from '../../../assets/sample0.jpg'
import sample1 from '../../../assets/sample1.jpg'
import sample2 from '../../../assets/sample2.jpg'
import { bankAccordionData } from '../../../constants'

const HomeBody = () => {
    const theme = useTheme()
    const smallerThanMd = useMediaQuery(theme.breakpoints.down('md'))

    // default state and setting for accordion
    const [expanded, setExpanded] = useState('panel0')
    const handleAccordion = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <Box sx={{ mt: 10, width: 1 }}>
            <Typography sx={{ textAlign: 'center' }} variant='h4'>
                چه چیزی ما را از دیگر بانک ها متمایز میکند؟
            </Typography>

            <Grid container sx={{ mt: 5 }}>
                <Grid xs={12} md={5.5} sx={{ marginBottom: { xs: 5, md: 0 } }}>
                    {bankAccordionData.map((item, index) => <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleAccordion(`panel${index}`)} elevation={0} sx={{ '&:before': { height: '0px' }, backgroundColor: 'transparent' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ fontSize: '35px' }} />} aria-controls='panel1bh-content' id='panel1bh-header'>
                            <Typography variant={smallerThanMd ? 'h5' : 'h4'} >
                                {item.header}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography variant='subtitle1'>
                                {item.text}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>)}

                </Grid>

                <Grid xs={12} md={6.5} container sx={{ mb: 5 }}>
                    <Grid md={12} lg={6} sx={{ px: { lg: 1 }, mb: { xs: 1, lg: 0 } }}>
                        <Avatar src={sample0} variant='rounded' sx={{ height: 430, width: 1, filter: 'brightness(85%)' }} />
                    </Grid>
                    <Grid md={12} lg={6} sx={{ display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, justifyContent: 'space-between' }}>
                        <Box sx={{ height: 210, width: { md: 1 / 2, lg: 1 }, paddingRight: { xs: 0.5, lg: 0 } }}>
                            <Avatar src={sample1} variant='rounded' sx={{ height: 1, width: 1, filter: 'brightness(85%)' }} />
                        </Box>
                        <Box sx={{ height: 210, width: { md: 1 / 2, lg: 1 }, paddingLeft: { xs: 0.5, lg: 0 } }}>
                            <Avatar src={sample2} variant='rounded' sx={{ height: 1, width: 1, filter: 'brightness(85%)' }} />

                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
};

export default HomeBody;