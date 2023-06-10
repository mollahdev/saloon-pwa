/**
 * External dependencies 
 */ 
import { Outlet, Navigate, Await, useLoaderData, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";
/**
 * Internal dependencies 
 */ 
import { isLoggedIn } from "@/store/currentUser";
import { CurrentUserState } from "@/types/store";

const Dashboard = () => (
    <section>
        <aside>
            <h1>Nav bar</h1>
            <Link to="overview">Overview</Link>
            <Link to="service">Service</Link>
        </aside>
        <main>
            <Outlet/>
        </main>
    </section>
)

export default function AdminLayout() {
    const data = useLoaderData() as {
        currentUser: Promise<CurrentUserState>
    }
    const isValid = useSelector(isLoggedIn)

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await
                resolve={ data.currentUser }
                children={ () => isValid ? <Dashboard/> : <Navigate replace to="/login"/>}
            />
        </Suspense>
    )
}