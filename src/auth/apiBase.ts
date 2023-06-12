import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
const { VITE_API_HOST, VITE_ADMIN_AUTH_TOKEN } = import.meta.env;

export const apiBase = fetchBaseQuery({
    baseUrl: VITE_API_HOST,
    prepareHeaders: (headers) => {
        headers.set(
            'Authorization',
            `Bearer ${Cookies.get(VITE_ADMIN_AUTH_TOKEN)}`
        );
        return headers;
    },
});
