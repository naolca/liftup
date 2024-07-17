/* create a slice to handle logging in and signing up */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import env from 'process';
const API = 'http://localhost:5000';

// Define a service using a base URL and expected endpoints
export const AuthApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: API}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            })
        }),
        signup: builder.mutation({
            query: (body) => ({
                url: '/auth/signup',
                method: 'POST',
                body
            })
        })
    })
});


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useSignupMutation } = AuthApi;




