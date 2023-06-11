import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from '@/store/currentUser';
import coreSlice from '@/store/core';
import { coreSliceActions } from '@/store/core';
import { doAction } from '@mollahdev/hooks-js';

const store = configureStore({
    reducer: {
        currentUser: currentUserSlice,
        core: coreSlice,
    },
});

window.addEventListener('offline', () => {
    store.dispatch(coreSliceActions.setOnline(false));
    doAction('notification', {
        title: "You're Offline!",
        type: "warning",
        container: 'top-center', 
    });
})

window.addEventListener('online', () => {
    store.dispatch(coreSliceActions.setOnline(true));
    doAction('notification', {
        title: "You're Back to Online",
        type: "info",
        container: 'top-center', 
    });
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
