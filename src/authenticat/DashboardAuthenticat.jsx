import React from 'react'
import { getLocalStorage } from '../utils/LocalStorageUtills'
import { Navigate, Outlet } from 'react-router-dom'

const Dashboard = () => {
    const dashboard = getLocalStorage('user')
    return dashboard ? <Outlet /> : <Navigate to="/login" />
}

export default Dashboard