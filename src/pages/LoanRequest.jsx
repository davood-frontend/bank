import React from 'react';
import { Box, Typography, Button, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { getLoanSchema } from '../validations/allValidations';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import { CostumInput } from '../components/costun/CostumComponents';
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
import FormItemContainer from './components/general/FormItemContainer';
const LoanRequest = () => {
    const { getLoan, navigateHome } = useContext(MainContext)
    const inputNames = {
        fullName: '',
        birthDateDay: '',
        birthDateMonth: '',
        birthDateYear: '',
        id: '',
        residence: '',
        nationality: '',
        phone: '',
        firstAdress: '',
        secondAdress: '',
        state: '',
        city: '',
        postalCode: '',
        amount: '',
    }

    const formik = useFormik({
        initialValues: inputNames,
        validationSchema: getLoanSchema,
        onSubmit: (values) => {
            getLoan(values.amount)
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
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
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
                                        <FormControlLabel value='shomareMeli' control={<Radio />} label='شماره ملی' checked />
                                        <FormControlLabel value='shomareShenasai' control={<Radio />} label='شماره شناسایی' />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={12} md={6} sx={{ mt: { xs: 2, md: 0 } }}>
                                <CostumInput type='number' fullWidth placeholder='شماره ملی یا شناسایی' sx={{ backgroundColor: 'whitesmoke' }}
                                    helperText={formik.touched.id && formik.errors.id}
                                    error={Boolean(formik.touched.id && formik.errors.id)}
                                    value={formik.values?.id}
                                    onChange={formik.handleChange}
                                    name="id"
                                />

                            </Grid>
                        </FormItemContainer>

                        <FormItemContainer>

                            <Grid xs={12} md={6} sx={{ px: 1, mt: { xs: 2, md: 0 } }}>
                                <Typography sx={{ mb: 1 }}>
                                    اقامت
                                </Typography>
                                <CostumInput fullWidth placeholder='ایران'
                                    helperText={formik.touched.residence && formik.errors.residence}
                                    error={Boolean(formik.touched.residence && formik.errors.residence)}
                                    value={formik.values?.residence}
                                    onChange={formik.handleChange}
                                    name="residence"
                                />
                            </Grid>
                            <Grid xs={12} md={6} sx={{ px: 1, mt: { xs: 4, md: 0 } }}>
                                <Typography sx={{ mb: 1 }}>
                                    ملیت
                                </Typography>
                                <CostumInput fullWidth placeholder='ایرانی'
                                    helperText={formik.touched.nationality && formik.errors.nationality}
                                    error={Boolean(formik.touched.nationality && formik.errors.nationality)}
                                    value={formik.values?.nationality}
                                    onChange={formik.handleChange}
                                    name="nationality"
                                />
                            </Grid>

                            <Grid xs={12} md={6} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    تلفن همراه
                                </Typography>
                                <CostumInput type='number' fullWidth placeholder='000 - 000 - 000'
                                    helperText={formik.touched.phone && formik.errors.phone}
                                    error={Boolean(formik.touched.phone && formik.errors.phone)}
                                    value={formik.values?.phone}
                                    onChange={formik.handleChange}
                                    name="phone"
                                />
                            </Grid>

                            <Grid xs={12} md={6} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    تلفن ثابت
                                </Typography>
                                <CostumInput type='number' fullWidth placeholder='000 - 000 - 000'
                                />
                            </Grid>

                            <Grid xs={12} md={6} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    آدرس اول
                                </Typography>
                                <CostumInput fullWidth placeholder='xxx - xxx - xxx'
                                    helperText={formik.touched.firstAdress && formik.errors.firstAdress}
                                    error={Boolean(formik.touched.firstAdress && formik.errors.firstAdress)}
                                    value={formik.values?.firstAdress}
                                    onChange={formik.handleChange}
                                    name="firstAdress"
                                />
                            </Grid>

                            <Grid xs={12} md={6} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    آدرس دوم
                                </Typography>
                                <CostumInput fullWidth placeholder='xxx - xxx - xxx'
                                    helperText={formik.touched.secondAdress && formik.errors.secondAdress}
                                    error={Boolean(formik.touched.secondAdress && formik.errors.secondAdress)}
                                    value={formik.values?.secondAdress}
                                    onChange={formik.handleChange}
                                    name="secondAdress"
                                />
                            </Grid>

                            <Grid xs={12} md={6} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    استان
                                </Typography>
                                <CostumInput fullWidth placeholder='xxx - xxx - xxx'
                                    helperText={formik.touched.state && formik.errors.state}
                                    error={Boolean(formik.touched.state && formik.errors.state)}
                                    value={formik.values?.state}
                                    onChange={formik.handleChange}
                                    name="state"
                                />
                            </Grid>

                            <Grid xs={6} md={3} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    شهر
                                </Typography>
                                <CostumInput fullWidth placeholder='xxx - xxx - xxx'
                                    helperText={formik.touched.city && formik.errors.city}
                                    error={Boolean(formik.touched.city && formik.errors.city)}
                                    value={formik.values?.city}
                                    onChange={formik.handleChange}
                                    name="city"
                                />
                            </Grid>

                            <Grid xs={6} md={3} sx={{ px: 1, mt: 4 }}>
                                <Typography sx={{ mb: 1 }}>
                                    کد پستی
                                </Typography>
                                <CostumInput type='number' fullWidth placeholder='000 - 000 - 000'
                                    helperText={formik.touched.postalCode && formik.errors.postalCode}
                                    error={Boolean(formik.touched.postalCode && formik.errors.postalCode)}
                                    value={formik.values?.postalCode}
                                    onChange={formik.handleChange}
                                    name="postalCode"
                                />
                            </Grid>

                        </FormItemContainer>

                        <FormItemContainer>
                            <Grid xs={12} >
                                <Typography sx={{ mb: 1 }}>مبلغ وام</Typography>
                                <CostumInput type='number' value={formik.values.amount} fullWidth sx={{ direction: 'rtl' }}
                                    helperText={formik.touched.amount && formik.errors.amount}
                                    error={Boolean(formik.touched.amount && formik.errors.amount)}
                                    onChange={formik.handleChange}
                                    name="amount"
                                />
                            </Grid>
                        </FormItemContainer>




                    </Grid>
                    <Grid xs={12} md={3} sx={{ px: 2, mt: { xs: 2, md: 0 } }}>
                        <CostumSubmit type='submit'> تایید </CostumSubmit>
                        <Button variant='outlined' color='error' sx={{ width: 1, borderRadius: '3px', mt: 1 }} onClick={cancelHandler}>لغو</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default LoanRequest;