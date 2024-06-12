import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Header from '../components/Header'
import SignUp from '../pages/auth/SignUp'
import ProductDetails from '../components/ProductDetails'
import Dashboard from '../authenticat/DashboardAuthenticat'
import AuthAuthenticat from '../authenticat/AuthAuthenticat'
import AddProduct from '../components/AddProduct'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<Dashboard />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/productdetails/:id' element={<ProductDetails />} />
                    <Route path='/add_product' element={<AddProduct />} />
                </Route>
                <Route element={<AuthAuthenticat />}>
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/login' element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing