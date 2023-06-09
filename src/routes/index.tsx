/**
 * External dependencies 
 */ 
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate
} from "react-router-dom";
import { Fragment } from "react";
/**
 * Internal dependencies 
 */ 
import PublicLayout from "@/layouts/public-layout";
import AdminLayout from "@/layouts/admin-layout";
import Home from "@/pages/public/home";
import Overview from "@/pages/admin/overview";
import Login from "@/pages/public/login";
import hasAdminAccess from "@/auth/hasAdminAccess";
import ErrorPage from "@/pages/public/404";
  
const router = createBrowserRouter(
  createRoutesFromElements(
    <Fragment>
      <Route path="/" element={<PublicLayout/>} errorElement={<ErrorPage/>}>
        <Route index element={<Home/>} />
        <Route path="login" element={<Login/>} />
      </Route>
      <Route path="/admin" element={<AdminLayout/>} loader={hasAdminAccess}>
        <Route index element={<Navigate replace to="overview"/>} />
        <Route path="overview" element={<Overview/>} />
      </Route>
    </Fragment>
  )
);

export default router