import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/auth/Login'
import Header from '../components/Header'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing