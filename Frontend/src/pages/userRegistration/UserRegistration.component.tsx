import { Button } from "@mui/material"
import { ButtonContainer, InputContainer, UserFormContainer, UserLabel, UserRegistrationContainer } from "./UserRegistration.styles"
import { FormEvent, useEffect, useState } from "react"
import GInput from "../../Components/HtmlElements/input/GInput.component"
import GSelect from "../../Components/HtmlElements/selectBox/GSelect.component"
import axios from "axios"
import Api from "../../constants/Api"
import { useDispatch } from "react-redux"
import { getAllUsers } from "../../slices/userSlice"
import { toast } from "react-toastify"
import Messages from "../../constants/Message"


interface IUserObject {
    _id?: string;
    userName?: string;
    emailId?: string;
    password?: string;
    dateOfBirth?: string;
    role?: string;
    status?: string
}

type UserRegistrationProps = {
    data?: IUserObject,
    type?: 'edit' | 'submit'
    actions?: {
        onCancel: () => void
    }
}

const UserRegistration = ({ data, type, actions }: UserRegistrationProps) => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('token')

    const [userData, setUserData] = useState({
        userName: '' || data?.userName,
        emailId: '' || data?.emailId,
        password: '' || data?.password,
        dateOfBirth: '' || data?.dateOfBirth,
        role: '' || data?.role,
        status: '' || data?.status
    })

    const changeHandler = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const roleOptions = [
        {
            label: '--- Select Role ---',
            value: ''
        },
        {
            label: 'Admin',
            value: 'Admin'
        },
        {
            label: 'General',
            value: 'General'
        }
    ]

    const statusOptions = [
        {
            label: '--- Select Status ---',
            value: ''
        },
        {
            label: 'Active',
            value: 'Active'
        },
        {
            label: 'Inactive',
            value: 'Inactive'
        }
    ]

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();
        console.log(Api.addUser)

        if (type === 'edit') {
            try {

                const res = await axios.put(`${Api.updateUser}${data?._id}`, userData, {
                    headers: {
                        'x-token': token
                    }
                })
                if (res.data.isSuccess) {
                    toast.success(`${Messages.SUCCESSFULLY_UPDATED}`, {
                        position: 'top-center',
                    })
                    dispatch<any>(getAllUsers())
                }
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
        }
        else {

            try {

                const res = await axios.post(Api.addUser, userData, {
                    headers: {
                        'x-token': token
                    }
                });
                if (res.data.isSuccess) {
                    toast.success(`${Messages.SUCCESSFULLY_CREATED}`, {
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
    }

    useEffect(() => {
        console.log(userData)
    }, [userData])

    return (
        <>
            <UserRegistrationContainer>
                <form onSubmit={submitHandler}>
                    <UserFormContainer>
                        <InputContainer>
                            <UserLabel>User Name</UserLabel>
                            <GInput name="userName" value={userData.userName} onChange={changeHandler} />
                        </InputContainer>

                        <InputContainer>
                            <UserLabel>Email Id</UserLabel>
                            <GInput type="email" name="emailId" value={userData.emailId} onChange={changeHandler} />
                        </InputContainer>

                        <InputContainer>
                            <UserLabel>Password</UserLabel>
                            <GInput type="password" name="password" value={userData.password} onChange={changeHandler} />
                        </InputContainer>

                        <InputContainer>
                            <UserLabel>Date Of Birth</UserLabel>
                            <GInput placeholder="Date Of Birth" type="date" name="dateOfBirth" value={userData.dateOfBirth} onChange={changeHandler} />
                        </InputContainer>

                        <InputContainer>
                            <UserLabel>Role</UserLabel>
                            <GSelect placeholder="Select Role" options={roleOptions} name="role" value={userData.role} onChange={changeHandler} />
                        </InputContainer>

                        <InputContainer>
                            <UserLabel>Status</UserLabel>
                            <GSelect placeholder="Select Status" options={statusOptions} name="status" value={userData.status} onChange={changeHandler} />
                        </InputContainer>

                        <ButtonContainer>
                            <Button variant="contained" onClick={() => {
                                actions?.onCancel()
                            }}
                                color="error" >Cancel</Button>
                            <Button type="submit" variant="contained" color="primary">{type === 'edit' ? 'Edit' : 'Submit'}</Button>
                        </ButtonContainer>
                    </UserFormContainer>
                </form>
            </UserRegistrationContainer>

        </>
    )
}

export default UserRegistration