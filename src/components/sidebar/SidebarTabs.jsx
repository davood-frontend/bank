import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material'
import { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
const SidebarTabs = () => {
    const {tabIndex,handleTabChange,isLogin} = useContext(MainContext)
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            'aria-controls': `tabpanel-${index}`
        }
    }
    return (
        <Box sx={{ my: 3 }}>
            <Tabs sx={{
                '.MuiTabs-indicator': {
                    maxHeight: 3,
                    width: 3,
                    marginTop: 3
                },
            }} orientation='vertical' variant='scrollable' scrollButtons='auto' allowScrollButtonsMobile value={tabIndex} onChange={handleTabChange} >

                <Tab disableRipple label='صفحه اصلی'  {...tabProps(0)} />

                <Typography sx={{ mt: 3 }}>
                    خدمات
                </Typography>

                <Tab disableRipple label='درخواست وام' disabled={!isLogin}   {...tabProps(1)} />
                <Tab disableRipple label='انتقال وجه' disabled={!isLogin}  {...tabProps(2)} />

                <Typography sx={{ mt: 5 }}>
                    تراکنش ها
                </Typography>

             
                <Tab disableRipple label='تمامی تراکنش ها' disabled={!isLogin}  {...tabProps(3)} />

            </Tabs>



        </Box>
    );
};

export default SidebarTabs;