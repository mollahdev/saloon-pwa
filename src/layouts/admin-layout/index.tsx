/**
 * External dependencies
 */
import {
    Outlet,
    Navigate,
    Await,
    useLoaderData,
    NavLink,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
/**
 * Internal dependencies
 */
import { isLoggedIn } from '@/store/currentUser';
import { CurrentUserState } from '@/types/store';
import LoadingFallback from '@/layouts/admin-layout/loading-fallback';
import getSidebarMenu from '@/layouts/admin-layout/menu';
import type { RootState } from '@/store';

const Dashboard = () => {
    const user = useSelector((state: RootState) => state.currentUser.user);
    return (
        <section className="dashboard">
            <header className="dashboard__header">
                <h1>{user.name}</h1>
            </header>
            <main className="dashboard__main">
                <aside className="dashboard__sidebar">
                    {getSidebarMenu(user.role).map((item, index) => (
                        <Tooltip title={item.title} placement="right">
                            <NavLink
                                className="flex text-sm items-center gap-x-2 px-4 py-4 transition duration-300"
                                to={item.path}
                                key={index}
                            >
                                <span className="icon">
                                    <item.icon width="22" />
                                </span>
                                <span className="title">{item.title}</span>
                            </NavLink>
                        </Tooltip>
                    ))}
                </aside>
                <div className="dashboard__content p-4">
                    <Outlet />
                </div>
            </main>
        </section>
    );
};

export default function AdminLayout() {
    const data = useLoaderData() as {
        currentUser: Promise<CurrentUserState>;
    };
    const isValid = useSelector(isLoggedIn);

    useEffect(() => {
        if (!document.body.classList.contains('private')) {
            document.body.classList.add('private');
            document.body.classList.remove('public');
        }
    }, []);

    return (
        <Suspense fallback={<LoadingFallback />}>
            <Await
                resolve={data.currentUser}
                children={() =>
                    isValid ? <Dashboard /> : <Navigate replace to="/login" />
                }
            />
        </Suspense>
    );
}
