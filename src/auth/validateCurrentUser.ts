/* eslint-disable no-async-promise-executor */
/**
 * External dependencies
 */
import { defer } from 'react-router';
import { isEmpty } from 'lodash';
import { doAction } from '@mollahdev/hooks-js';
import jwt_decode from 'jwt-decode';
/**
 * Internal dependencies
 */
import type { CurrentUserState } from '@/types/store';
import type { User } from '@/types';
import { currentUserActions } from '@/store/currentUser';
import Cookies from 'js-cookie';
import { userApi } from '@/store/user/api';
import store from '@/store';

const validateCurrentUser = async () => {
    const fetch = (): Promise<
        CurrentUserState['user'] | NonNullable<unknown>
    > =>
        new Promise(async (resolve) => {
            const token = Cookies.get(
                import.meta.env.VITE_ADMIN_AUTH_TOKEN
            ) as CurrentUserState['token'];

            // when user is logged out
            if (isEmpty(token)) {
                return resolve({});
            }

            store.dispatch(currentUserActions.setToken(token));
            // when user is already logged in
            const hasUser = store.getState().currentUser.user;
            if (!isEmpty(hasUser)) {
                return resolve(hasUser);
            }

            const decoded = jwt_decode(token!) as Pick<User, 'id'>;
            const { data, error } = (await store.dispatch(
                userApi.endpoints.getUserById.initiate(decoded.id)
            )) as any;

            if (!isEmpty(error) && isEmpty(data)) {
                doAction('notification', {
                    title: 'Unauthorized!',
                    message: 'Something went wrong!',
                    type: 'danger',
                    container: 'top-right',
                });
                return null;
            }

            store.dispatch(currentUserActions.setUser(data));
            resolve(data);
        });

    return defer({ currentUser: fetch() });
};

export default validateCurrentUser;
