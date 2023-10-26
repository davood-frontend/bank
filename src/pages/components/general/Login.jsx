import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, FormControlLabel, Checkbox, Avatar, Link } from '@mui/material'
import { green } from '@mui/material/colors';
import { useContext } from 'react';
import { MainContext } from '../../../context/mainContext';
import Grid from '@mui/material/Unstable_Grid2'
import { loginSchema } from '../../../validations/allValidations';
import { useFormik } from 'formik';
const Login = () => {
    const { loginDialog, setLoginDialog, setSignUpDialog, submitLogin, setRememberMe } = useContext(MainContext)
    const inputNames = {
        first_name: '',
        last_name: '',
        username: '',
        password: '',
    }
    const formik = useFormik({
        initialValues: inputNames,
        validationSchema: loginSchema,
        onSubmit: values => {
            submitLogin(values)
            formik.resetForm()

        }
    })
    const handleDialogChange = () => {
        setLoginDialog(false)
        setSignUpDialog(true)
    }

    return (
        <Dialog open={loginDialog} onClose={() => setLoginDialog(false)} sx={{ textAlign: 'center', '& .MuiPaper-root': { margin: 1.5 } }}>

            <Avatar sx={{ mx: 'auto', mt: 3, backgroundColor: green[500] }} >
                <LoginIcon />
            </Avatar>
            <DialogTitle>ورود به حساب کاربری</DialogTitle>
            <form action="" onSubmit={formik.handleSubmit} method='post' autoComplete='off'>

                <DialogContent sx={{ overflow: 'visible'}}>
                    <Grid container>
                        <Grid xs={6} sx={{ px: { xs: 0.7, lg: 1 } }}>
                            <TextField fullWidth label='نام' name='first_name'
                                onChange={formik.handleChange}
                                value={formik.values.first_name}
                                helperText={formik.touched.first_name && formik.errors.first_name}
                                error={Boolean(formik.touched.first_name && formik.errors.first_name)} />
                        </Grid>
                        <Grid xs={6} sx={{ px: { xs: 0.7, lg: 1 } }}>
                            <TextField fullWidth label='نام خوانوادگی' name='last_name'
                                onChange={formik.handleChange}
                                value={formik.values.last_name}
                                helperText={formik.touched.last_name && formik.errors.last_name}
                                error={Boolean(formik.touched.last_name && formik.errors.last_name)}
                            />

                        </Grid>
                        <Grid xs={12} sx={{ px: { xs: 0.7, lg: 1 }, mt: {xs : 1.5, sm : 2} }}>
                            <TextField fullWidth label='نام کاربری (به انگلیسی)' name='username' sx={{ direction: 'rtl' }}
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                helperText={formik.touched.username && formik.errors.username}
                                error={Boolean(formik.touched.username && formik.errors.username)}
                            />
                        </Grid>
                        <Grid xs={12} sx={{ px: { xs: 0.7, lg: 1 }, mt: {xs : 1.5, sm : 2} }}>
                            <TextField type='password' fullWidth label='رمز ورود' name='password'
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                helperText={formik.touched.password && formik.errors.password}
                                error={Boolean(formik.touched.password && formik.errors.password)}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ width: 1, mt: 3 }} textAlign='left'>
                        <FormControlLabel sx={{ paddingLeft: 1 }} control={<Checkbox />} label='مرا بخاطر بسپار' onChange={(e) => setRememberMe(e.target.checked)} />

                    </Box>
                </DialogContent>
                <Box sx={{ width: 1 }} textAlign='right'>
                    <Link variant='body2' sx={{ marginRight: 2, cursor: 'pointer' }} onClick={handleDialogChange}>حساب کاربری ندارید؟ ثبت نام</Link>
                </Box>
                <DialogActions>
                    <Button fullWidth variant='contained' sx={{ m: 0.5 }} type='submit' onClick={() => console.log(formik.values)}>ورود به حساب</Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default Login;