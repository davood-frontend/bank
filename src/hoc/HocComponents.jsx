import React from 'react';
import { useContext } from 'react';
import { MainContext } from '../context/mainContext';
export const EnterOrExit = (Enter, Exit) => {
    const {isLogin} = useContext(MainContext)
    if (!isLogin) {
        return <Enter />
    } else {
        return <Exit />
    }

}