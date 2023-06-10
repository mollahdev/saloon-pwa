import React from 'react';
import ReactDOM from 'react-dom/client';
import router from '@/routes';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import store from '@/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <RouterProvider router={router} />
        </StoreProvider>
    </React.StrictMode>
);

AOS.init();
