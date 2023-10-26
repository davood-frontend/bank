import React from 'react';
import {HomeHeader,HomeBody,HomeFooter} from './components/home'
import { Box } from '@mui/material';
import SignUp from './components/general/SignUp';
import Login from './components/general/Login';

const Home = () => {
    return (
        <Box sx={{ p: 3 }}>
            <SignUp />
            <Login />
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </Box>
    );
};

export default Home;