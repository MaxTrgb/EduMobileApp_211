import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: any;
}

const initialState: AuthState = {
  isAuthenticated: true,
  token: null,
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthState>) => {
      console.log('SET_TOKEN', action.payload);
      state.token = action.payload;
      state.isAuthenticated = true;

      console.log(state.token);
      console.log(state.isAuthenticated);
    },
    logOut: state => {
      state.isAuthenticated = false;
    },
  },
});

export const {setToken, logOut} = authSlice.actions;
export default authSlice.reducer;
