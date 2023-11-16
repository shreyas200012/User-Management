import { useState } from 'react'
import axios from 'axios'
import { Stack, IconButton } from '@mui/material'
import AntdModal from '../../Components/AntdModal/AntdModal.component'
import { Icons } from '../../constants/Icons'
import Api from '../../constants/Api'
import UserRegistration from '../userRegistration/UserRegistration.component'
import { IUserObject } from './UserTable.component'
import { useDispatch } from 'react-redux'
import { getAllUsers } from '../../slices/userSlice'
import { toast } from 'react-toastify'
import Messages from '../../constants/Message'



type UserEditProps = {
    data: IUserObject
}

const UserEdit = ({ data }: UserEditProps) => {
    const token = localStorage.getItem('token')
    const dispatch = useDispatch();
    const [isModal, setIsModal] = useState<boolean>(false)

    const showModal = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false)
    }

    const deleteUser = async () => {
        try {
            const res = await axios.delete(`${Api.deleteUser}${data._id}`, {
                headers: {
                    'x-token': token
                }
            })
            if (res.data.isSuccess) {
                toast.success(`${Messages.SUCCESSFULLY_DELETED}`, {
                    position: 'top-center'
                })
                dispatch<any>(getAllUsers())
            }
            console.log(res)
        }
        catch (err) {
            console.log(err)
        }
    }

    const actions = {
        onCancel: closeModal
    }

    const ModalBody = () => {
        return (
            <>
                <div style={{ paddingTop: '15px' }}>
                    <UserRegistration data={data} type='edit' actions={actions} />
                </div>
            </>
        )
    }


    return (
        <>
            <Stack direction={'row'} >
                <IconButton color='success' onClick={showModal} >
                    {Icons.edit}
                </IconButton>

                <IconButton onClick={deleteUser} color='error'>
                    {Icons.delete}
                </IconButton>
            </Stack>
            <AntdModal width={900} closeIcon={true} centered={true} maskClosable={true} open={isModal} onCancel={closeModal} body={<ModalBody />} />

        </>
    )
}

export default UserEdit