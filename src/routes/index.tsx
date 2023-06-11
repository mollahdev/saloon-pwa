/**
 * External dependencies
 */
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from 'react-router-dom';
/**
 * Internal dependencies
 */
import AdminLayout from '@/layouts/admin-layout';
import PublicLayout from '@/layouts/public-layout';
import Home from '@/pages/public/home';
import Overview from '@/pages/admin/overview';
import Login from '@/pages/public/login';
import Service from '@/pages/admin/service';
import loginAction from '@/pages/public/login/action';
import ReviewsPage from '@/pages/public/reviews';
import validateCurrentUser from '@/auth/validateCurrentUser';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="login"
                    element={<Login />}
                    loader={validateCurrentUser}
                    action={loginAction}
                />
                <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route
                path="/admin"
                element={<AdminLayout />}
                loader={validateCurrentUser}
            >
                <Route index element={<Navigate replace to="overview" />} />
                <Route path="overview" element={<Overview />} />
                <Route path="service" element={<Service />} />
            </Route>
        </>
    )
);

export default router;
