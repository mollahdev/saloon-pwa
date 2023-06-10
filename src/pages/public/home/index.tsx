import { Link } from 'react-router-dom';
import EventIcon from '@/icons/event';
import HaircutIcon from '@/icons/haircut';
import GalleryIcon from '@/icons/gallery';
import MapIcon from '@/icons/map';
import ChangeIcon from '@/icons/change';
import StylistIcon from '@/icons/stylist';

export default function Home() {
    return (
        <div className="pt-10 sm:pt-14 mx-auto max-w-[700px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Link
                    to="appointments"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="home-menu-link col-span-2 bg-yellow hover:bg-yellow-darken"
                >
                    <span className="text-dark-bg">
                        <EventIcon width="60" height="60" />
                    </span>
                    <span className="text-dark-bg text-xl pt-3 sm:pt-5 block font-light">
                        Book an Appointment
                    </span>
                </Link>
                <Link
                    to="appointments"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-duration="800"
                    className="home-menu-link bg-white hover:bg-white-darken"
                >
                    <span className="text-dark-bg">
                        <HaircutIcon width="60" height="60" />
                    </span>
                    <span className="text-dark-bg text-xl pt-3 sm:pt-5 block font-light">
                        Check our Services
                    </span>
                </Link>
                <Link
                    to="appointments"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-duration="1000"
                    className="home-menu-link bg-green hover:bg-green-darken"
                >
                    <span className="text-dark-bg">
                        <GalleryIcon width="60" height="60" />
                    </span>
                    <span className="text-dark-bg text-xl pt-3 sm:pt-5 block font-light">
                        Gallery
                    </span>
                </Link>

                <Link
                    to="appointments"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-duration="1200"
                    className="home-menu-link bg-red col-span-2 sm:col-span-1 hover:bg-red-darken"
                >
                    <span className="text-white-text">
                        <ChangeIcon width="60" height="60" />
                    </span>
                    <span className="text-white-text text-xl pt-3 sm:pt-5 block font-light">
                        Login &amp; Reschedule
                    </span>
                </Link>
                <Link
                    to="appointments"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-duration="1200"
                    className="home-menu-link bg-[#b8d8fc] col-span-1 sm:col-span-2 hover:bg-[#99bee7]"
                >
                    <span className="text-dark-bg">
                        <MapIcon width="60" height="60" />
                    </span>
                    <span className="text-dark-bg text-xl pt-3 sm:pt-5 block font-light">
                        Get Direction or Contact
                    </span>
                </Link>
                <Link
                    to="appointments"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-duration="1300"
                    className="home-menu-link bg-white hover:bg-white-darken"
                >
                    <span className="text-white-text">
                        <StylistIcon width="60" height="60" />
                    </span>
                    <span className="text-dark-bg text-xl pt-3 sm:pt-5 block font-light">
                        Meet our Stylist
                    </span>
                </Link>
            </div>
        </div>
    );
}
