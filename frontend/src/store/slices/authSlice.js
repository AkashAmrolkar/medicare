import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { jwtDecode } from 'jwt-decode';
import { setUser, clearUser } from './userSlice';

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
        }),

        refreshToken: builder.mutation({
            query: ()=>({
                url: 'refresh',
                method: 'post',
                body: { refreshToken: localStorage.getItem('token') },
            }),
            async onQueryStarted(args, {dispatch, queryFulfilled}) {
                try {
                    const {data} = await queryFulfilled;
                    localStorage.setItem('token', data.accessToken)
                    const decodedToken = jwtDecode(data.accessToken)
                    dispatch(setUser(decodedToken))
                } catch (error) {
                    dispatch(clearUser());
                    localStorage.removeItem('token');
                    console.error('Failed to refresh token:', error);
                }
                
            }
        }),
        
        logout: builder.mutation({
            query: () =>({
                url: '/logout',
                method: 'POST',
                body: { refreshToken: localStorage.getItem('token') },
            }),
            async onQueryStarted(args, { dispatch }) {
                localStorage.removeItem('token'); // Clear the access token
                dispatch(clearUser(null));
              },
        })
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useLogoutMutation } = authSlice;
