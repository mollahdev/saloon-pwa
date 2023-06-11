/**
 * External dependencies
 */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
/**
 * Internal dependencies
 */
import { CoreState } from '@/types/store';

const initialState = {
    isOnline: true,
};

const coreSlice = createSlice({
    name: 'coreSlice',
    initialState: initialState as CoreState,
    reducers: {
        setOnline(state, action: PayloadAction<CoreState['isOnline']>) {
            state.isOnline = action.payload;
            return state;
        },
    },
});

export const coreSliceActions = coreSlice.actions;
export default coreSlice.reducer;
