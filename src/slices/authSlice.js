import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    clientId: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials : ( state , action ) => {
           const {accessToken , clientId} = action.payload 
           state.token = accessToken
           state.clientId = clientId
            

        },
        logout : ( state , action ) => {
            state.token = null
            state.clientId = null
        },

        // setUserData : ( state , action ) => {
        // //     state.userData = action.payload;
        // // }, 

    },
});


export const { setCredentials , logout } = authSlice.actions;




export default authSlice.reducer;

export const selectCurrentToken = (state) => state.auth.token