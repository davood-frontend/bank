import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { blue, green, grey, pink } from '@mui/material/colors';
import { useContext } from 'react';
import { MainContext } from '../../../context/mainContext';
const TransActionInformation = ({ hType }) => {
    const { balance, getAmount, getAllTransActions, numberFormatter, allTransActions, getTurnover, turnover,getAllTransactions } = useContext(MainContext)
    useEffect(() => {
        getAmount();
        getAllTransActions();
        getTurnover();
    }, [])

    function convertPersianToEnglishNumbers(inputString) {
        const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        for (let i = 0; i < persianNumbers.length; i++) {
            const persianNumber = new RegExp(persianNumbers[i], 'g');
            inputString = inputString.replace(persianNumber, englishNumbers[i]);
        }

        return inputString;
    }

    const todaysDate = () => {
        const option = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }
        let d = new Date().toLocaleDateString('fa-IR', option);
        return convertPersianToEnglishNumbers(d)
    }

    return (
        <Grid container sx={{ py: { xs: 3.5, md: 0 } }}>

            <Grid xs={6} md={3} textAlign='center'>
                <Typography variant={hType} sx={{ color: green[500] }}>
                    {numberFormatter(balance)}
                </Typography>
                <Typography variant='body2' sx={{ color: grey[700] }} onClick={() => dater()}>
                    موجودی
                </Typography>
            </Grid>

            <Grid xs={6} md={3} textAlign='center'>
                <Typography variant={hType} sx={{ color: pink[400] }}>
                    {numberFormatter(turnover)}
                </Typography>
                <Typography variant='body2' sx={{ color: grey[700] }}>
                    گردش مالی
                </Typography>
            </Grid>

            <Grid xs={6} md={3} textAlign='center'>
                <Typography variant={hType} sx={{ color: blue[400], mt: { xs: 4, md: 0 } }}>
                    {allTransActions.length}
                </Typography>
                <Typography variant='body2' sx={{ color: grey[700] }}>
                    تعداد تراکنش ها
                </Typography>
            </Grid>

            <Grid xs={6} md={3} textAlign='center' sx={{ mt: { xs: 4, md: 0 } }}>
                <Typography variant={hType}>
                    {todaysDate()} 
                </Typography>



                <Typography variant='body2' sx={{ color: grey[700] }}>
                    تاریخ امروز
                </Typography>
            </Grid>

        </Grid>
    );
};

export default TransActionInformation;