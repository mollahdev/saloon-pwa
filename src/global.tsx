/**
 * External dependencies
 */
import { useEffect } from 'react';
import { Store, iNotification } from 'react-notifications-component';
import { addAction } from '@mollahdev/hooks-js';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
/**
 * Internal dependencies
 */
import type { CurrentUserState } from '@/types/store';
import { currentUserActions } from '@/store/currentUser';

let hooks: Record<string, unknown> = {};
export default function Global() {
    const dispatch = useDispatch();

    useEffect(() => {
        // set token to state
        const token = Cookies.get(
            import.meta.env.VITE_ADMIN_AUTH_TOKEN
        ) as CurrentUserState['token'];
        dispatch(currentUserActions.setToken(token));

        // register notification hook
        if (!hooks['notification']) {
            hooks = addAction('notification', (data: iNotification) => {
                Store.addNotification({
                    animationIn: ['animate__animated', 'animate__fadeIn'],
                    dismiss: {
                        duration: 2000,
                    },
                    ...data,
                });
            });
        }
    }, []);

    return null;
}
