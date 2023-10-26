import axios from "axios";
const baseUrl = 'https://camp.hassankhosrojerdi.ir/'

// create a new account
export const submitSignUpRequest = (user) => {
    return axios({
        method: 'post',
        url: `${baseUrl}register.php`,
        data: JSON.stringify(user),
        headers: { "Content-Type": "multipart/form-data" },
    })

}

//login to an existing accout
export const submitLoginRequest = (user) => {
    return axios({
        method: 'post',
        url: `${baseUrl}login.php`,
        data: JSON.stringify(user),
    })
}


// get loan
export const getLoanRequest = (amount, token) => {
    return axios({
        method: 'post',
        url: `${baseUrl}transaction.php`,
        data: JSON.stringify({
            type: 0,
            amount: amount,
            token: token,

        })
    })
}

// get amount
export const getAmountRequest = (token) => {
    return axios({
        method: 'post',
        url: `${baseUrl}getAmount.php`,
        data: JSON.stringify({
            token: token,
        })
    })
}

//get all transActions
export const getAllTransActionsRequest = (token) => {
    return axios({
        method: 'post',
        url: `${baseUrl}getTransactionItems.php`,
        data: JSON.stringify({
            token: token,
        })
    })
}

//get turnover

export const getTurnoverRequest = (token) => {
    return axios({
        method: 'post',
        url: `${baseUrl}getTotalAmount.php`,
        data: JSON.stringify({
            token: token
        })
    })
}

//send amout for someone else
export const sendMoneyRequest = (amount,token,reciever) => {
    return axios({
        method: 'post',
        url: `${baseUrl}transaction.php`,
        data: JSON.stringify({
            token: token,
            amount: amount,
            reciver_username : reciever,
            type: 1,
        })
    })
}
