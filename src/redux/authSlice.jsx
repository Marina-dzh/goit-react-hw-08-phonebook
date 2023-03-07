import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null, password:null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder
    .addCase(register.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  })
    .addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    })
    .addCase(logOut.fulfilled, (state) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    })
    .addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    })
})
      
  
  
//   {
    
    
//     [register.rejected](state, action) {
//       console.log( action.payload);
      
//     },
   
//     [refreshUser.pending](state) {
//       state.isRefreshing = true;
//     },
    
//     },
//     [refreshUser.rejected](state) {
//       state.isRefreshing = false;
//     },
//   },
// });

export const authReducer = authSlice.reducer;
