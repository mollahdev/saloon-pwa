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

const core = createSlice({
    name: 'core',
    initialState: initialState as CoreState,
    reducers: {
        setOnline(state, action: PayloadAction<CoreState['isOnline']>) {
            state.isOnline = action.payload;
            return state;
        },
    },
});

export const coreActions = core.actions;
export default core.reducer;
