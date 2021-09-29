import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signup, signin } from "./userApi";
import { RootState } from "../../app/store";

export const signupUser = createAsyncThunk(
    "users/signupUser",
    async (payload:any, thunkAPI) => {
        try {
            const { firstName, lastName, email, password} = payload
            // Ideally signup should come from generated client API
            const res = await signup({ firstName, lastName, email, password })
            const {data} = res
            if (res.status === 200) {
                const {firstName, lastName, email, token} = data
                localStorage.setItem("token", token)
                return {...data, firstName, lastName, email }
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

export const signinUser = createAsyncThunk(
    "users/signinUser",
    async (payload:any, thunkAPI) => {
        try {
            const { email, password} = payload
            // Ideally signup should come from generated client API
            const res = await signin({ email, password })
            const {data} = res
            if (res.status === 200) {
                const {firstName, lastName, email, token} = data
                localStorage.setItem("token", token)
                return {...data, firstName, lastName, email }
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    })

export const userSlice = createSlice({
    name: "user",
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(signupUser.fulfilled, (state, payload: any ) => {
            console.log('signupUser.fulfilled', { payload } )
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        })
        .addCase(signupUser.pending, (state ) => {
            console.log('signupUser.pending')
            state.isFetching = true;
        })
        .addCase(signupUser.rejected, (state ) => {
            console.log('signupUser.rejected')
            state.isFetching = true;
            state.isError = true;

        })
        .addCase(signinUser.fulfilled, (state, payload: any ) => {
            console.log('signupUser.fulfilled', { payload } )
            state.isFetching = false;
            state.isSuccess = true;
            state.email = payload.email;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
        })
        .addCase(signinUser.pending, (state ) => {
            console.log('signupUser.pending')
            state.isFetching = true;
        })
        .addCase(signinUser.rejected, (state ) => {
            console.log('signupUser.rejected')
            state.isFetching = true;
            state.isError = true;

            })
    }
})
export const selectUser = (state: RootState) => state.user;

export const { clearState } = userSlice.actions;

export default userSlice.reducer;
