import { configureStore } from '@reduxjs/toolkit';
import currentUserSlice from '@/store/currentUser';

const store = configureStore({
    reducer: {
        currentUser: currentUserSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
