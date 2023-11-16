import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.component'
import UserTable from '../userTable/UserTable.component'
import Login from '../login/Login.component'

const NavbarRoute = () => {
    // Check the user's authentication status based on the token in localStorage
    const isUserAuthenticated = !!localStorage.getItem('token');

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {isUserAuthenticated ? (
                        <Route path='/' element={<Navbar />}>
                            <Route index element={<UserTable />} />
                        </Route>
                    ) : (
                        <Route path='login' element={<Login />} />
                    )}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default NavbarRoute
