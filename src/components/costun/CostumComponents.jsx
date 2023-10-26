import { TextField } from "@mui/material"
import { styled } from '@mui/material/styles';
import { Snackbar, Alert, Typography } from '@mui/material'

export const CostumInput = styled(TextField)(() => ({
    backgroundColor: 'whitesmoke',
    '& .MuiFormHelperText-root': {
        backgroundColor: '#EEEEEE',
        margin: '0px',
        paddingLeft: '8px',
        paddingTop: '5px',
    }
}))
export const CostumSnackbar = ({snackbar,onSnackbarClose}) => {
    return (
        <Snackbar open={snackbar.isOpen} autoHideDuration={4000} onClose={onSnackbarClose} sx={{ direction: 'rtl' }} >
            <Alert onClose={onSnackbarClose} severity={snackbar.variant} sx={{ width: '350px', alignItems: 'center' ,justifyContent : 'end','& .MuiAlert-action' : {marginLeft : 0,width : '10px'}}} >
                <Typography sx={{ paddingLeft: 2.8, paddingRight: 0.8 ,marginRight:'auto'}}>
                    {snackbar.text}
                </Typography>
            </Alert>
        </Snackbar>
    )
}