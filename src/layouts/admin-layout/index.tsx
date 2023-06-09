import { Outlet, useLoaderData, Navigate, Await } from "react-router-dom";
import { Suspense } from "react";

export default function AdminLayout() {
    const dataPromise = useLoaderData() as {
        data: boolean
    };

    return (
        <Suspense fallback={<h1>authenticating...</h1>}>
            <Await resolve={dataPromise.data}>
                { access => (
                    !access ? <Navigate replace to="/login" /> : (
                        <section>
                            <aside>
                                <h1>Nav bar</h1>
                            </aside>
                            <main>
                                <Outlet/>
                            </main>
                        </section>
                    )
                ) }
            </Await>
        </Suspense>
    )
}