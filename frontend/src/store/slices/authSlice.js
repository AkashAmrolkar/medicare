import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode';
import { setUser } from './userSlice';

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
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}){
                const {data} = await queryFulfilled;
                localStorage.setItem('token', data.accessToken)
                const decodedToken = jwtDecode(data.accessToken)
                dispatch(setUser(decodedToken))
            }
        }),

        getUserProfile: builder.mutation({
          query:()=>({
            url: '/profile',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation } = authSlice;
