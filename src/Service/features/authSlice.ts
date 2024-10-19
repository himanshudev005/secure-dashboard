import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
};

// Create auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the token (on successful signin)
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload); 
    },
    // Action to remove the token (on logout)
    removeToken(state) {
      state.token = null;
      localStorage.removeItem('token'); 
    },
  },
});

// Export actions and reducer
export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
