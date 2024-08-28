import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer:{
        [authSlice.reducerPath]: authSlice.reducer,
        user: userSlice
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(authSlice.middleware)
})