/**
 * External dependencies 
 */ 
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
/**
 * Internal dependencies 
 */ 
import { CurrentUserState } from '@/types/store'
import { RootState } from '@/store'

const initialState = {}

const currentUserSlice = createSlice({
  name: 'currentUserSlice',
  initialState: initialState as CurrentUserState,
  reducers: {
    setUser(state, action: PayloadAction<CurrentUserState>) {
      state = action.payload 
      return state;
    }
  },
})

export const isLoggedIn = (state: RootState): boolean => {
    if( !state.currentUser ) return false;
    const { currentUser } = state

    if( 'string' !== typeof currentUser.status ) return false;
    return currentUser.status && currentUser.status === 'active'
}

export const currentUserActions = currentUserSlice.actions
export default currentUserSlice.reducer