import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("dummyToken")? JSON.parse(localStorage.getItem("dummyToken")) : null
}

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state, value){
            state.token = value.payload
        }
    }
})

export const {setToken} = authSlice.actions
export default authSlice.reducer