import React from 'react';
import { Box, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Button, FormControlLabel, Checkbox, Avatar, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import LockIcon from '@mui/icons-material/Lock';
import { purple } from '@mui/material/colors';
import { useContext } from 'react';
import { MainContext } from '../../../context/mainContext';
import { signupSchema } from '../../../validations/allValidations';
import { useFormik } from 'formik';


const SignUp = () => {
    const { signUpDialog, setSignUpDialog, setLoginDialog, submitSignUp } = useContext(MainContext)

    const handleDialogChange = () => {
        setSignUpDialog(false)
        setLoginDialog(true)
    }

    const inputNames = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
    }

    const formik = useFormik({
        initialValues: inputNames,
        validationSchema: signupSchema,
        onSubmit: values => {
            submitSignUp(values)
            formik.resetForm()

        }
    })


    return (
        <Dialog open={signUpDialog} onClose={() => setSignUpDialog(false)} sx={{ textAlign: 'center', '& .MuiPaper-root': { margin: 1.5 } }}>

            <Avatar sx={{ mx: 'auto', mt: 3, backgroundColor: purple[500] }} >
                <LockIcon />
            </Avatar>
            <DialogTitle>ثبت نام</DialogTitle>
            <form action="" onSubmit={formik.handleSubmit} autoComplete='off' method='post'>
                <DialogContent sx={{ overflow: 'visible' }}>

                    <Grid container>
                        <Grid xs={6} sx={{ px: { xs: 0.7, lg: 1 } }}>
                            <TextField fullWidth label='نام' name='first_name'
                                onChange={formik.handleChange}
                                value={formik.values.first_name}
                                helperText={formik.touched.first_name && formik.errors.first_name}
                                error={Boolean(formik.touched.first_name && formik.errors.first_name)}
                            />
                        </Grid>
                        <Grid xs={6} sx={{ px: { xs: 0.7, lg: 1 } }}>
                            <TextField fullWidth label='نام خوانوادگی' name='last_name'
                                onChange={formik.handleChange}
                                value={formik.values.last_name}
                                helperText={formik.touched.last_name && formik.errors.last_name}
                                error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                            />
                        </Grid>
                        <Grid xs={12} sx={{ px: { xs: 0.7, lg: 1 }, mt: { xs: 1.5, sm: 2 } }}>
                            <TextField fullWidth label='نام کاربری (به انگلیسی)' sx={{ direction: 'rtl' }} name='username'
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                helperText={formik.touched.username && formik.errors.username}
                                error={Boolean(formik.touched.username && formik.errors.username)}
                            />
                        </Grid>
                        <Grid xs={12} sx={{ px: { xs: 0.7, lg: 1 }, mt: { xs: 1.5, sm: 2 } }}>
                            <TextField type='password' fullWidth label='رمز ورود' name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                helperText={formik.touched.password && formik.errors.password}
                                error={Boolean(formik.touched.password && formik.errors.password)}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ width: 1, mt: 3 }} textAlign='left'>
                        <FormControlLabel sx={{ paddingLeft: 1 }} control={<Checkbox />} label='میخاهم از تمامی بروزرسانی ها و اخبار مطلع شوم' name='updates' />
                    </Box>
                </DialogContent>
                <Box sx={{ width: 1 }} textAlign='right'>
                    <Link variant='body2' sx={{ marginRight: 2, cursor: 'pointer' }} onClick={handleDialogChange}>
                        قبلا حساب ایجاد کرده بودید؟ عضویت
                    </Link>
                </Box>
                <DialogActions>
                    <Button fullWidth type='submit' variant='contained' sx={{ m: 0.5 }} >ثبت نام</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default SignUp;