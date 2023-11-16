import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserObject } from "../pages/userTable/UserTable.component";
import axios from "axios";



interface IinitialState {
    data: IUserObject[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: string
}

const initialState: IinitialState = {
    data: [],
    loading: 'idle',
    error: ''
}

export const getAllUsers = createAsyncThunk('users/getAllUsers', async () => {
    try {
        let token = localStorage.getItem('token')
        const res = await axios.get('http://localhost:4000/user/getAllUsers', {
            headers: {
                'x-token': token
            }
        })
        return res.data.data
    }
    catch (err) {
        return err
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.fulfilled, (state, action: PayloadAction<IUserObject[]>) => {
            state.data = action.payload
            state.loading = 'succeeded'
        }),
            builder.addCase(getAllUsers.pending, (state) => {
                state.loading = 'pending'
            }),
            builder.addCase(getAllUsers.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.error.message || 'An error occured'
            })
    }
})

export default userSlice.reducer