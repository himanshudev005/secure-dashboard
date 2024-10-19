import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

interface AuthResponse {
  token: string;
}

interface SigninRequest {
  email: string;
  password: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
}

// Define the API slice with authentication
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://reqres.in/api/',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token; 
      if (token) {
        headers.set('authorization', `Bearer ${token}`); 
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define the signin mutation
    signin: builder.mutation<AuthResponse, SigninRequest>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<AuthResponse, SigninRequest>({
        query: (credentials) => ({
          url: 'register',
          method: 'POST',
          body: credentials,
        }),
      }),

    // Define a protected endpoint (requires authentication)
    getProtectedUserData: builder.query<UserData, void>({
      query: () => 'users/2', 
    }),
  }),
});

// Export hooks for use in functional components
export const { useSigninMutation, useSignUpMutation, useGetProtectedUserDataQuery } = userApi;
