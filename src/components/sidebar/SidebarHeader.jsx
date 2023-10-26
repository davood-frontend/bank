import React from 'react';
import { Button, Typography, Box, Avatar} from '@mui/material'
import profile from '../../assets/profile.jpg'
import { useContext } from 'react';
import { MainContext } from '../../context/mainContext';
import { grey } from '@mui/material/colors';
export const EnterTheWebsite = () => {
    const {setSignUpDialog,setLoginDialog,setSnackbar} = useContext(MainContext)
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                <Typography variant='caption'>
                    حساب کاربری ندارید؟
                </Typography>
                <Button variant='outlined' size='small' sx={{ mt: 1 }} onClick={() => setLoginDialog(true)}>
                    ورود
                </Button>
                <Button variant='contained' size='small' sx={{ mt: 1 }} onClick={() => setSignUpDialog(true)}>
                    عضویت
                    
                </Button>
            </Box>
            <Avatar src='' sx={{ width: 100, height: 100, mt: 5 }} />
            <Typography sx={{ mt: 1 }}>
                میهمان
            </Typography>
            <Typography variant='caption' textAlign='center' sx={{color : grey[600],mt : 1}}>
             (برای دسترسی کامل لطفا وارد شوید)
            </Typography>
        </>
    );
};

export const ExitTheWebsite = () => {
    const {submitLogout,accInfo} = useContext(MainContext)
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
               
                <Button variant='outlined' color='error' onClick={submitLogout}>
                    خروج از حساب 
                </Button>
            </Box>
            <Avatar src={profile} sx={{ width: 100, height: 100, mt: 5 }} />
            <Typography sx={{ mt: 1 }}>
                {accInfo}
            </Typography>
        </>
    );
};