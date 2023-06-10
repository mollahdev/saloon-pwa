/**
 * External dependencies
 */
import { Navigate, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
/**
 * Internal dependencies
 */
import { CurrentUserState } from '@/types/store';
import { isLoggedIn } from '@/store/currentUser';

const LoginForom = () => {
    return (
        <div>
            <h1>Login form</h1>
        </div>
    );
};

export default function Login() {
    const data = useLoaderData() as {
        currentUser: Promise<CurrentUserState>;
    };
    const isValid = useSelector(isLoggedIn);
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await
                resolve={data.currentUser}
                children={() =>
                    isValid ? <Navigate replace to="/admin" /> : <LoginForom />
                }
            />
        </Suspense>
    );
}
