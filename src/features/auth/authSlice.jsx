import { createSlice, createAsyncThunk }  from '@reduxjs/toolkit'
import authService from './authService'

// Get user from local storage

const user = JSON.parse(localStorage.getItem('user'))
// const userDeveloper = JSON.parse(localStorage.getItem('userDeveloper'))

const initialState ={
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register User
export const registerClient = createAsyncThunk('auth/register/client', async(user, thunkAPI) => {
try {
    return await authService.registerClient(user)
} catch (error) {
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
}
})


// export const registerDeveloper = createAsyncThunk('auth/register/developer', async(user, thunkAPI) => {
//     try {
//         return await authService.registerDeveloper(user)
//     } catch (error) {
//         const message =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString()
//           return thunkAPI.rejectWithValue(message)
//     }
//     })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(registerClient.pending, (state) => {
            state.isLoading = true
        })
        .addCase(registerClient.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerClient.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })

        // .addCase(registerDeveloper.pending, (state) => {
        //     state.isLoading = true
        // })
        // .addCase(registerDeveloper.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.isSuccess = true
        //     state.userDeveloper = action.payload
        // })
        // .addCase(registerDeveloper.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.isError = true
        //     state.message = action.payload
        //     state.userDeveloper = null
        // })
        
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer