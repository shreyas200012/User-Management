import { Outlet, useNavigate } from 'react-router-dom'
import { NavbarContainer, NavbarItem, NavLink } from "./Navbar.styles"
import { useState } from 'react'
import AntdModal from '../../Components/AntdModal/AntdModal.component';
import UserRegistration from '../userRegistration/UserRegistration.component';
import { IconButton } from '@mui/material';
import { Icons } from '../../constants/Icons';
import { loginSliceAction } from '../../slices/loginSlice';
import { Login } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';


const Navbar = () => {
    const { user } = useSelector((state: RootState) => state.login)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const showModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const actions = {
        onCancel: closeModal
    }

    const ModalBody = () => {
        return (
            <>
                <div style={{ paddingTop: '15px' }}>
                    <UserRegistration actions={actions} />
                </div>
            </>
        )
    }

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token')


        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <NavbarContainer>
                <NavbarItem>
                    <NavLink to='/'>
                        Users
                    </NavLink>
                </NavbarItem>

                <NavbarItem style={{ textAlign: 'center' }}>
                    Hi, {user.userName}
                </NavbarItem>

                <NavbarItem style={{ textAlign: 'right' }}>
                    {user.role.trim().toLowerCase() === 'admin' &&

                        <NavLink to='' onClick={showModal}>

                            Add User
                        </NavLink>
                    }

                    <IconButton onClick={handleLogout} sx={{ color: 'white', marginLeft: '10px' }}>
                        {Icons.logout}
                    </IconButton>
                </NavbarItem>
            </NavbarContainer>
            <Outlet />

            <AntdModal width={1000} closeIcon={true} centered={true} maskClosable={true} onCancel={closeModal} open={isModalOpen} body={<ModalBody />} />
        </>
    )
}

export default Navbar