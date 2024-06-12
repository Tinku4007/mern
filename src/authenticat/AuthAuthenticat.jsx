import React from 'react'
import { getLocalStorage } from '../utils/LocalStorageUtills'
import { Navigate, Outlet } from 'react-router-dom'

const AuthAuthenticat = () => {
    const dashboard = getLocalStorage('user')
    return dashboard ? <Navigate to="/" /> : <Outlet />
}

export default AuthAuthenticat