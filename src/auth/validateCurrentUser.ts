/**
 * External dependencies
 */
import { defer } from 'react-router';
import { isEmpty } from 'lodash';
/**
 * Internal dependencies
 */
import { CurrentUserState } from '@/types/store';
import { currentUserActions } from '@/store/currentUser';
import Cookies from 'js-cookie';
import store from '@/store';

const dummyUser: CurrentUserState = {
    id: '1',
    name: 'John Doe',
    email: '',
    status: 'active',
    role: 'admin',
    createdAt: '2021-01-01 12:00:00',
    imageId: '',
    online: true,
    username: 'johndoe',
};

const validateCurrentUser = async () => {
    const fetch = (): Promise<CurrentUserState | NonNullable<unknown>> =>
        new Promise((resolve, reject) => {
            const token = Cookies.get('admin_access_token');

            // when user is logged out
            if (isEmpty(token)) {
                return resolve({});
            }

            // when user is already logged in
            const hasUser = store.getState().currentUser;
            if (!isEmpty(hasUser)) {
                return resolve(hasUser);
            }

            // verify user token
            setTimeout(() => {
                store.dispatch(currentUserActions.setUser(dummyUser));
                resolve(dummyUser);
            }, 2000);
        });

    return defer({ currentUser: fetch() });
};

export default validateCurrentUser;
