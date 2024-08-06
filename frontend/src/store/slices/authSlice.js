import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const authSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8000/api/auths'}),
    endpoints: (builder)=>({
        registerUser: builder.mutation({
            query: (userData) =>({
                url: '/register',
                method: 'POST',
                body: userData
            })
        }),

        loginUser: builder.mutation({
            query: (userData) =>({
                url: '/login',
                method: 'POST',
                body: userData
            })
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = authSlice;
