import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { IUserObject } from "../pages/userTable/UserTable.component";
import { ILogin } from "../pages/login/Login.component";
import { RootState } from "../store/store";


interface ILoginState {
    user: IUserObject
    token: string,
    status: string
    error: any
}


const initialState: ILoginState = {
    user: {
        _id: '',
        dateOfBirth: '',
        emailId: '',
        role: '',
        status: '',
        userName: ''
    },
    token: '',
    status: '',
    error: ''

}

export const loginAsync = createAsyncThunk('auth/login', async (userData: ILogin) => {
    try {
        const res = await axios.post('http://localhost:4000/login', userData)
        localStorage.setItem('token', res.data.data.token)
        console.log(res.data)
        return res.data.data

    }
    catch (err) {
        console.log('login failed', err)
        return err
    }
})


const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        removeToken: (state) => {
            state.token = ''
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.token;

                state.user = action.payload.user;
                state.error = null;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload; // Error message from the API response
            });
    },
})


export const loginSliceAction = loginSlice.actions
export const selectToken = (state: RootState) => state.login.token
export default loginSlice.reducer

