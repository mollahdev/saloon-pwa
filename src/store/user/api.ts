import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBase } from '@/auth/apiBase';
import { CurrentUserState } from '@/types/store';
import { User } from '@/types';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: apiBase,
    endpoints: (builder) => ({
        getUserById: builder.query<CurrentUserState, string>({
            query: (id) => `private/user/${id}`,
        }),
        login: builder.mutation<string, Pick<User, 'email' | 'password'>>({
            query: (loginData) => ({
                url: 'user/login',
                method: 'POST',
                body: loginData,
            }),
        }),
    }),
});

export const { useGetUserByIdQuery, useLoginMutation } = userApi;
