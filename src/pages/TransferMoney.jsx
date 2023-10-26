import React from 'react';
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import FormItemContainer from './components/general/FormItemContainer'
import { useFormik } from 'formik';
import { transferMoneySchema } from '../validations/allValidations';
import { CostumInput } from '../components/costun/CostumComponents';
import { styled } from '@mui/material/styles';

const TransferMoney = () => {
    const { sendMoney, navigateHome } = useContext(MainContext)
    const inputNames = {
        fullName: '',
        birthDateDay: '',
        birthDateMonth: '',
        birthDateYear: '',
        id: '',
        recieverId: '',
        amount: '',
    }

    const formik = useFormik({
        initialValues: inputNames,
        validationSchema: transferMoneySchema,
        onSubmit: (values) => {
            sendMoney(values.amount, values.recieverId)
            formik.resetForm()

        }
    })

    const CostumSubmit = styled(Button)(() => ({
        width: '100%',
        borderRadius: '3px',
        backgroundColor: '#7E61EC',
        ':hover': { backgroundColor: '#7153e0' },
        color: 'white',

    }))

    const cancelHandler = () => {
        formik.resetForm()
        navigateHome()
    }



    return (
        <Box sx={{ width: { xs: 9 / 10, lg: 6 / 8 }, marginX: 'auto' }}>
            <form action="" onSubmit={formik.handleSubmit} autoComplete='off'>
                <Grid container sx={{ py: 3 }}>
                    <Grid xs={12} sx={{ mt: 3, mb: 5 }}>
                        <Typography variant='h5'>
                            لطفا اطلاعات خود را تکمیل کنید
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={9} container>
                        <FormItemContainer mt='none'>
                            <Typography sx={{ mb: 1, width: 1 }}>
                                نام  نام خوانوادگی
                            </Typography>
                            <Grid xs={12}>
                                <CostumInput fullWidth
                                    placeholder='نام و نام خوانوادگی'
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                    error={Boolean(formik.touched.fullName && formik.errors.fullName)}
                                    value={formik.values?.fullName}
                                    onChange={formik.handleChange}
                                    name='fullName'
                                />
                            </Grid>
                            <Typography sx={{ mt: 2, width: 1, mb: 1 }}>
                                تاریخ تولد
                            </Typography>
                            <Grid xs={4} sx={{ px: 1 }}>
                                <CostumInput type='number' fullWidth placeholder='روز'
                                    helperText={formik.touched.birthDateDay && formik.errors.birthDateDay}
                                    error={Boolean(formik.touched.birthDateDay && formik.errors.birthDateDay)}
                                    value={formik.values?.birthDateDay}
                                    onChange={formik.handleChange}
                                    name="birthDateDay"
                                />
                            </Grid>
                            <Grid xs={4} sx={{ px: 1 }}>
                                <CostumInput type='number' fullWidth placeholder='ماه'
                                    helperText={formik.touched.birthDateMonth && formik.errors.birthDateMonth}
                                    error={Boolean(formik.touched.birthDateMonth && formik.errors.birthDateMonth)}
                                    value={formik.values?.birthDateMonth}
                                    onChange={formik.handleChange}
                                    name="birthDateMonth"
                                />
                            </Grid>
                            <Grid xs={4} sx={{ px: 1 }}>
                                <CostumInput type='number' fullWidth placeholder='سال'
                                    helperText={formik.touched.birthDateYear && formik.errors.birthDateYear}
                                    error={Boolean(formik.touched.birthDateYear && formik.errors.birthDateYear)}
                                    value={formik.values?.birthDateYear}
                                    onChange={formik.handleChange}
                                    name="birthDateYear"
                                />
                            </Grid>
                        </FormItemContainer>


                        <FormItemContainer>
                            <Grid xs={12} md={6}>
                                <FormControl>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label">
                                        <FormControlLabel value='foo' control={<Radio />} label='شماره ملی' checked />
                                        <FormControlLabel value='foo' control={<Radio />} label='شماره شناسایی' />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>
                                <CostumInput fullWidth placeholder='شماره ملی یا شناسایی'
                                    type='number'
                                    helperText={formik.touched.id && formik.errors.id}
                                    error={Boolean(formik.touched.id && formik.errors.id)}
                                    value={formik.values?.id}
                                    onChange={formik.handleChange}
                                    name="id"
                                />
                            </Grid>
                        </FormItemContainer>



                        <FormItemContainer>
                            <Grid xs={12} md={6} sx={{ px: 1, mt: { xs: 1, md: 0 } }}>
                                <Typography sx={{ mb: 1 }}>
                                    نام کاربری فرد دریافت کننده
                                </Typography>
                                <CostumInput fullWidth placeholder='شماره ملی یا شناسایی'
                                    helperText={formik.touched.recieverId && formik.errors.recieverId}
                                    error={Boolean(formik.touched.recieverId && formik.errors.recieverId)}
                                    value={formik.values?.recieverId}
                                    onChange={formik.handleChange}
                                    name="recieverId"
                                />
                            </Grid>
                            <Grid xs={12} md={6} sx={{ px: 1, mt: { xs: 2, md: 0 } }}>
                                <Typography sx={{ mb: 1 }}>
                                    مبلغ ارسالی
                                </Typography>
                                <CostumInput type='number' value={formik.values.amount} fullWidth sx={{
                                    direction: 'rtl'
                                }}
                                    helperText={formik.touched.amount && formik.errors.amount}
                                    error={Boolean(formik.touched.amount && formik.errors.amount)}
                                    onChange={formik.handleChange}
                                    name="amount"
                                />
                            </Grid>
                        </FormItemContainer>

                    </Grid>
                    <Grid xs={12} md={3} sx={{ px: 2, mt: { xs: 2, md: 0 } }}>
                        <CostumSubmit type='submit'> تأیید </CostumSubmit>
                        <Button variant='outlined' color='error' sx={{ width: 1, borderRadius: '3px', mt: 1 }} onClick={cancelHandler}>لغو</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default TransferMoney;