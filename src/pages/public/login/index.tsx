/**
 * External dependencies
 */
import {
    Navigate,
    useLoaderData,
    Await,
    Link,
    Form,
    useActionData,
    useNavigation,
} from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/**
 * Internal dependencies
 */
import { CurrentUserState } from '@/types/store';
import { isLoggedIn } from '@/store/currentUser';
import { LoginFormData } from '@/types/store';

const LoginForom = () => {
    const [errors, setErrors] = useState<LoginFormData | null>(null);
    const [loading, setLoading] = useState(false);
    const { state } = useNavigation();
    const errorAction = useActionData() as LoginFormData;

    useEffect(() => {
        if (errorAction) {
            setErrors(errorAction);
        }
    }, [errorAction]);

    useEffect(() => {
        if (state) {
            setLoading(state === 'submitting');
        }
    }, [state]);

    const removeError = (ev: React.FocusEvent<HTMLInputElement>) => {
        if (errors) {
            const n = ev.target.name as keyof LoginFormData;
            setErrors((prev) => {
                prev && delete prev[n];
                return { ...prev };
            });
        }
    };

    return (
        <Form
            method="post"
            className="max-w-[400px] mx-auto pt-[14vh] grid gap-5"
        >
            <div>
                <label className="block pb-2" htmlFor="email">
                    Email
                </label>
                <input
                    onFocus={removeError}
                    className={`p-3 block w-full rounded-md focus:outline-none transition-[border-color] duration-300 border-solid border-2 focus:border-yellow-darken ${
                        errors && errors.email
                            ? 'border-red text-red'
                            : 'text-dark-bg'
                    }`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                />
                {errors && errors.email && (
                    <p className="font-light text-red pt-2 text-sm">
                        {errors.email}
                    </p>
                )}
            </div>
            <div>
                <label className="block pb-2" htmlFor="password">
                    Password
                </label>
                <input
                    onFocus={removeError}
                    className={`p-3 block w-full rounded-md focus:outline-none transition-[border-color] duration-300 border-solid border-2 focus:border-yellow-darken ${
                        errors && errors.password
                            ? 'border-red text-red'
                            : 'text-dark-bg'
                    }`}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                />
                {errors && errors.password && (
                    <p className="font-light text-red pt-2 text-sm">
                        {errors.password}
                    </p>
                )}
            </div>
            <div>
                <button
                    disabled={loading}
                    className="block w-full bg-yellow py-3 px-4 text-dark-bg rounded-md uppercase text-lg hover:bg-yellow-darken transition-all duration-300"
                    type="submit"
                >
                    {loading ? 'Processing...' : 'Login'}
                </button>
            </div>
            <div className="text-center">
                <Link
                    className="inline-block underline opacity-70 hover:opacity-100 transition-opacity duration-300"
                    to="/forgot-password"
                >
                    Forgot password?
                </Link>
            </div>
        </Form>
    );
};

export default function Login() {
    const data = useLoaderData() as {
        currentUser: Promise<CurrentUserState>;
    };
    const isValid = useSelector(isLoggedIn);
    return (
        <Suspense fallback={<p className='text-white'>Loading...</p>}>
            <Await
                resolve={data.currentUser}
                children={() =>
                    isValid ? <Navigate replace to="/admin/overview" /> : <LoginForom />
                }
            />
        </Suspense>
    );
}
