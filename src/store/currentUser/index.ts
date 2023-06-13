/**
 * External dependencies
 */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
/**
 * Internal dependencies
 */
import { CurrentUserState } from '@/types/store';
import { RootState } from '@/store';

const initialState = {};

const currentUser = createSlice({
    name: 'currentUser',
    initialState: initialState as CurrentUserState,
    reducers: {
        setUser(state, action: PayloadAction<CurrentUserState['user']>) {
            state.user = action.payload;
            return state;
        },
        setToken(state, action: PayloadAction<CurrentUserState['token']>) {
            state.token = action.payload;
            return state;
        },
    },
});

export const isLoggedIn = (state: RootState): boolean => {
    if (!state.currentUser.user) return false;
    const { currentUser } = state;

    if ('string' !== typeof currentUser.user.status) return false;
    return currentUser.user.status && currentUser.user.status === 'active';
};

export const currentUserActions = currentUser.actions;
export default currentUser.reducer;
