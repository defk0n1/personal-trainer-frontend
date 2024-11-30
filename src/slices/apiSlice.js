import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from './authSlice';


const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


const baseQuery = fetchBaseQuery({
    baseUrl: apiBaseUrl,

    credentials: 'include',
    prepareHeaders:(headers, {getState}) => {
        const token = getState().auth.token
        if (token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }

})


const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 403){
        console.log('sending refresh token')

        const refreshResult = await baseQuery(
            '/clients/auth/refresh' ,
            api,
            extraOptions
        )

        if(refreshResult?.data) {

            //store the new token
            api.dispatch(setCredentials({...refreshResult.data}))

            //retry original query with new access token

            result = await baseQuery(args,api,extraOptions)
        } else {
            if (refreshResult?.error?.status === 403){
                refreshResult.error.data.message = "Your login has expired"
            }
            return refreshResult
        }
    }

    return result
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Client' , 'Weight'],
    endpoints: (builder) => ({}),
})