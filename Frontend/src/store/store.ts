import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import userReducer from '../slices/userSlice'
import loginReducer from '../slices/loginSlice'

const getInitialToken = () => {
    const storedToken = localStorage.getItem('token')
    return storedToken || ''
}

const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer
    },
    preloadedState: {
        login: {
            token: getInitialToken(),
            user: {
                _id: '',
                dateOfBirth: '',
                emailId: '',
                role: '',
                status: '',
                userName: ''
            },
            error: '',
            status: ''
        }
    },
    middleware: [thunk]

})

export default store;

export type RootState = ReturnType<typeof store.getState>