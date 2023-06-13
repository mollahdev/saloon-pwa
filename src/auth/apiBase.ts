import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from '@/store';
const { VITE_API_HOST } = import.meta.env;

export const apiBase = fetchBaseQuery({
    baseUrl: VITE_API_HOST,
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState;
        headers.set('Authorization', `Bearer ${state.currentUser.token || ''}`);
        return headers;
    },
});
