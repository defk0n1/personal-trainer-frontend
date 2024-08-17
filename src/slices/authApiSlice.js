import { apiSlice } from "./apiSlice.js";
import { logout, setCredentials } from "./authSlice.js";

const USERS_URL = '/api/clients';

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login : builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth/`,
                method : 'POST',
                body : {... data},
            }),
        }),

        logout : builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method : 'POST',
            }),
           async onQueryStarted(arg , {dispatch, queryFulfilled }) {
            try {
                await queryFulfilled
                dispatch(logout())
                dispatch(apiSlice.util.resetApiState())

            } catch (err) {
                console.log(err)
            }
           } 

        }),
        getUserData : builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/profile`,
                method : 'GET',
                body : data,
                credentials: 'include'

            }),
        }),
        refresh: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/auth/refresh`,
                method: 'GET',
            }),
            async onQueryStarted(arg , {dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled
                    const { accessToken , clientId } = data
                    dispatch(setCredentials({ accessToken , clientId }))    
                } catch (err) {
                    console.log(err)
                }
               } 
        })


    }),
})



export const { useLoginMutation , useLogoutMutation , useRefreshMutation ,useGetUserDataMutation} = authApiSlice;