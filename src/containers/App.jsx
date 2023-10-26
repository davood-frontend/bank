import React, { useEffect, useState } from 'react';
import MainLayout from '../layout/MainLayout';
import SidebarContainer from './SidebarContainer';
import ContentContainer from './ContentContainer';
import Sidebar from '../components/sidebar/Sidebar';
import Page from '../components/main/Page';
import ActionButton from '../components/drawer/ActionButton';
import { MainContext } from '../context/mainContext';
import { submitSignUpRequest, submitLoginRequest, getLoanRequest, getAmountRequest, getAllTransActionsRequest, getTurnoverRequest, sendMoneyRequest } from '../service/serverRequests'
import { useCookies } from 'react-cookie';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import { CostumSnackbar } from '../components/costun/CostumComponents';
// import {Home,LoanRequest,TransferMoney,AllTransactions} from '../pages'
import Home from '../pages/Home';
import TransferMoney from '../pages/TransferMoney';
import AllTransactions from '../pages/AllTransactions';
import LoanRequest from '../pages/LoanRequest';
const App = () => {
  const theme = useTheme()
  const largerThanSm = useMediaQuery(theme.breakpoints.up('sm'))

  const [drawer, setDrawer] = useState(false)
  const [signUpDialog, setSignUpDialog] = useState(false)
  const [loginDialog, setLoginDialog] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)
  const [balance, setBalance] = useState(0)
  const [turnover, setTurnover] = useState(0)
  const [cookies, setCookie, removeCookie] = useCookies(['userToken', 'fullName', 'isLogin'])
  const [allTransActions, setAllTransActions] = useState([])
  const [accInfo, setAccInfo] = useState('')
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    text: '',
    variant: ''
  })


  useEffect(() => {
    if (cookies.isLogin) {
      setIsLogin(true)
    }
    if (cookies.accInfo) {
      let data = decodeURIComponent(cookies.accInfo)
      setAccInfo(data)
    }
  }, [])

  useEffect(() => {
    if (largerThanSm) {
      setDrawer(false)
    }
  }, [largerThanSm])



  //handler functions

  const navigateHome = () => {
    setTabIndex(0)
  }

  const onSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return ''
    }
    setSnackbar({ xisOpen: false })
  }


  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue)
    setDrawer(false)
  }


  const numberFormatter = (num) => {
    num = parseInt(num)
    let formatted = num.toLocaleString('en-US', { style: 'decimal', maximumFractionDigits: 3 })
    return formatted
  }


  //server request functions

  const submitSignUp = async (values) => {
    try {
      const request = await submitSignUpRequest(values);
      if (request.status === 200) {
        setSignUpDialog(false)
        setLoginDialog(true)
        setSnackbar({ isOpen: true, text: 'حساب کاربری با موفقیت ساخته شد', variant: 'success' })
      }
    } catch (err) {
      console.log(err);
      setSnackbar({ isOpen: true, text: 'مشکل در برقراری ارتباط', variant: 'error' })

    }
  }

  const getAmount = async () => {
    try {
      const request = await getAmountRequest(cookies.userToken)
      setBalance(request.data)

    } catch (err) {
      console.log(err.message);
    }
  }


  const submitLogin = async (values) => {
    let data = values.first_name + ' ' + values.last_name;

    try {
      setAccInfo(data)
      const request = await submitLoginRequest(values)
      if (request.data !== 'کاربر یافت نشد') {
        rememberMe && setCookie('isLogin', true)
        setCookie('userToken', request.data)
        setIsLogin(true)
        setSnackbar({ isOpen: true, text: 'با موفقیت وارد حساب کاربری شدید', variant: 'success' })
      } else {
        setSnackbar({ isOpen: true, text: 'کاربر یافت نشد', variant: 'error' })
      }

    } catch (err) {
      console.log(err);
    } finally {
      data = encodeURIComponent(data)
      setLoginDialog(false)
      setCookie('accInfo', data)
    }
  }

  const getLoan = async (amount) => {
    try {
      const request = await getLoanRequest(amount, cookies.userToken)
      setBalance(balance + request.data)
      setSnackbar({ isOpen: true, text: 'وام با موفقیت به حساب شما واریز شد', variant: 'success' })
      navigateHome()

    } catch (err) {
      setSnackbar({ isOpen: true, text: 'مشکل در برقراری ارتباط', variant: 'error' })
      console.log(err.message);
    }
  }

  const getAllTransActions = async () => {
    if (cookies.userToken) {
      try {
        const request = await getAllTransActionsRequest(cookies.userToken)
        const data = request.data.reverse()
        setAllTransActions(data)
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  const getTurnover = async () => {

    try {
      const request = await getTurnoverRequest(cookies.userToken)
      setTurnover(request.data.total)
    } catch (err) {

      console.log(err.message);
    }
  }



  const submitLogout = () => {
    removeCookie('userToken')
    removeCookie('accInfo')
    removeCookie('isLogin')
    setSnackbar({ isOpen: true, text: 'با موفقیت از حساب کاربری خارج شدید', variant: 'success' })
    navigateHome()
    setIsLogin(false)
  }

  const sendMoney = async (amount, reciever) => {
    try {
      const request = await sendMoneyRequest(amount, cookies.userToken, reciever)
      if (request.data === 'موجودی کافی نیست') {
        setSnackbar({ isOpen: true, text: 'موجودی کافی نیست', variant: 'error' })
      } else if (request.data === "SQLSTATE[23000]: Integrity constraint violation: 1048 Column 'account_id' cannot be null") {
        setSnackbar({ isOpen: true, text: 'کاربر یافت نشد', variant: 'error' })
      }
      setSnackbar({ isOpen: true, text: 'عملیات با موفقیت انجام شد', variant: 'success' })
      navigateHome()
    } catch (err) {
      console.log(err.message)
      setSnackbar({ isOpen: true, text: 'مشکل در برقراری ارتباط', variant: 'error' })
    }
  }

  const contextData = {
    drawer,
    setDrawer,
    signUpDialog,
    setSignUpDialog,
    loginDialog,
    setLoginDialog,
    tabIndex,
    setTabIndex,
    handleTabChange,
    submitSignUp,
    setSnackbar,
    submitLogin,
    submitLogout,
    isLogin,
    setIsLogin,
    setRememberMe,
    getLoan,
    balance,
    cookies,
    getAmount,
    getAllTransActions,
    allTransActions,
    numberFormatter,
    getTurnover,
    turnover,
    sendMoney,
    accInfo,
    navigateHome,
  }
  return (
    <MainContext.Provider value={contextData} >

      <MainLayout>

        <CostumSnackbar snackbar={snackbar} onSnackbarClose={onSnackbarClose} />

        <ActionButton setDrawer={setDrawer} setSnackbar={setSnackbar}/>

        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        <ContentContainer>
          <Page tabIndex={tabIndex} index={0}>
            <Home />
          </Page>

          <Page tabIndex={tabIndex} index={2}>
            <LoanRequest />
          </Page>

          <Page tabIndex={tabIndex} index={3}>
            <TransferMoney />
          </Page>

          <Page tabIndex={tabIndex} index={4}>
            <TransferMoney />
          </Page>

          <Page tabIndex={tabIndex} index={5}>
            <AllTransactions />
          </Page>

        </ContentContainer>


      </MainLayout>
    </MainContext.Provider>
  );
};

export default App;

