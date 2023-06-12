/**
 * External dependencies
 */
import { configureStore } from '@reduxjs/toolkit';
import { doAction } from '@mollahdev/hooks-js';
/**
 * Internal dependencies
 */
import currentUser from '@/store/currentUser';
import coreSlice from '@/store/core';
import { coreActions } from '@/store/core';
import { userApi } from '@/store/user/api';

const store = configureStore({
    reducer: {
        currentUser,
        core: coreSlice,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
});

window.addEventListener('offline', () => {
    store.dispatch(coreActions.setOnline(false));
    doAction('notification', {
        title: "You're Offline!",
        type: 'warning',
        container: 'top-center',
    });
});

window.addEventListener('online', () => {
    store.dispatch(coreActions.setOnline(true));
    doAction('notification', {
        title: "You're Back to Online",
        type: 'info',
        container: 'top-center',
    });
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
