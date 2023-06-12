/**
 * External dependencies
 */
import { isEmpty } from 'lodash';
import { doAction } from '@mollahdev/hooks-js';
import Cookies from 'js-cookie';
import { redirect } from 'react-router-dom';
/**
 * Internal dependencies
 */
import store from '@/store';
import { userApi } from '@/store/user/api';

const { VITE_ADMIN_AUTH_TOKEN } = import.meta.env;

type RequestData = {
    formData: () => FormData;
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export default async function loginAction({ request }) {
    const req = request as RequestData;
    const formData = await req.formData();
    const e: Record<string, string> = {};
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (isEmpty(email)) {
        e['email'] = 'Email is required';
    }

    if (isEmpty(password)) {
        e['password'] = 'Password is required';
    }

    if (!isEmpty(e)) {
        return e;
    }

    const { data, error } = (await store.dispatch(
        userApi.endpoints.login.initiate({
            email,
            password,
        })
    )) as any;

    if (!isEmpty(error) && isEmpty(data)) {
        doAction('notification', {
            title: 'Unauthorized!',
            message: 'Could not verify email and password!',
            type: 'danger',
            container: 'top-right',
        });
        return null;
    }

    Cookies.set(VITE_ADMIN_AUTH_TOKEN, data.token);
    return redirect('/admin/overview');
}
