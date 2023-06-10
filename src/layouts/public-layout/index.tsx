import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Web from '@/icons/web';
import HomeIcon from '@/icons/home';
import StarIcon from '@/icons/star';
import Profile from '@/icons/profile';

export default function PublicLayout() {
    return (
        <main className="text-white-text font-primary px-5 pt-10 pb-[100px] sm:pb-[150px] min-h-screen">
            <div className="container max-w-[700px] mx-auto">
                <p className="text-base font-light opacity-70 pb-2">
                    Good Afternoon
                </p>
                <div className="flex justify-between items-center gap-x-6">
                    <p className="font-semibold text-3xl md:text-4xl">
                        Big Apple Barber Shop
                    </p>
                    <a href="#" className="inline-flex items-center gap-x-0.5">
                        <span className="underline">website</span>
                        <span className="text-yellow">
                            <Web width="18" height="18" />
                        </span>
                    </a>
                </div>
            </div>
            <Outlet />
            <div className="sm:max-w-[400px] min-w-[320px] bottom-nav bg-white text-dark-bg grid grid-cols-3">
                <NavLink
                    className="flex py-3 px-4 sm:rounded-full justify-center items-center gap-1.5"
                    to="/"
                >
                    <HomeIcon width="25" height="25" />
                    <span className="text-sm">Home</span>
                </NavLink>
                <NavLink
                    className="flex py-3 px-4 sm:rounded-full justify-center items-center gap-1.5"
                    to="/reviews"
                >
                    <StarIcon width="25" height="25" />
                    <span className="text-sm">Reviews</span>
                </NavLink>
                <NavLink
                    className="flex py-3 px-4 sm:rounded-full justify-center items-center gap-1.5"
                    to="/login"
                >
                    <Profile width="25" height="25" />
                    <span className="text-sm">Admin</span>
                </NavLink>
            </div>
        </main>
    );
}
