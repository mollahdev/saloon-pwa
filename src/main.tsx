/**
 * External dependencies.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import router from '@/routes';
import { ReactNotifications } from 'react-notifications-component';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-notifications-component/dist/theme.css';
/**
 * Internal dependencies.
 */
import store from '@/store';
import Global from '@/global';
import OnlineNotification from '@/components/online-notification';
import '@/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <ReactNotifications />
            <OnlineNotification />
            <Global />
            <RouterProvider router={router} />
        </StoreProvider>
    </React.StrictMode>
);

AOS.init();
