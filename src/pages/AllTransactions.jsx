import React, { useState } from 'react';
import { Box, Table, TableBody, TableHead, TableCell, TableRow, TableContainer, Chip, Typography, Fab, SwipeableDrawer } from '@mui/material'
import TransactionHeader from './components/transAction/TransactionHeader';
import Drawer from './components/transAction/Drawer';
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
const AllTransactions = () => {
    const { allTransActions, numberFormatter, accInfo } = useContext(MainContext)
    const [drawer, setDrawer] = useState(false)
    return (
        <Box>
            <TransactionHeader setDrawer={setDrawer} />
            <Drawer drawer={drawer} setDrawer={setDrawer} />
            <TableContainer sx={{ width: 7 / 8, marginX: 'auto' }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align='center'>
                                نام حساب
                            </TableCell>
                            <TableCell align='center'>
                                تاریخ تراکنش
                            </TableCell>
                            <TableCell align='center'>
                                ساعت تراکنش
                            </TableCell>
                            <TableCell align='center'>
                                مبلغ تراکنش
                            </TableCell>
                            <TableCell align='center'>
                                نوع عملیات
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allTransActions.length > 0 && allTransActions.map((item, index) => {
                            const createdAt = item.created_at;
                            const seprated = createdAt.split(' ');
                            let date = seprated[0]
                            let time = seprated[1]
                            return (<TableRow key={index}>
                                <TableCell align='center' sx={{ py: 3 }}>
                                    {accInfo}
                                </TableCell>
                                <TableCell align='center'>
                                    {date}
                                </TableCell>
                                <TableCell align='center'>
                                    {time}
                                </TableCell>
                                <TableCell align='center'>
                                    {numberFormatter(item.amount)}
                                </TableCell>
                                <TableCell align='center'>
                                    <Chip color={item.type == 0 ? 'success' : 'error'} label={item.type == 0 ? 'برداشت' : 'انتقال'} />
                                </TableCell>
                            </TableRow>)
                        })}

                    </TableBody>
                </Table>
                {allTransActions == 0 && <Box sx={{ width: 1, display: 'flex', justifyContent: 'center', mt: 5 }}>
                    <Typography variant='h5'>
                        تراکنشی یافت نشد
                    </Typography>
                </Box>}
            </TableContainer>
        </Box>
    );
};

export default AllTransactions;