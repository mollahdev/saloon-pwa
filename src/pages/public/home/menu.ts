import EventIcon from '@/icons/event';
import HaircutIcon from '@/icons/haircut';
import GalleryIcon from '@/icons/gallery';
import MapIcon from '@/icons/map';
import ChangeIcon from '@/icons/change';
import StylistIcon from '@/icons/stylist';

const menus = [
    {
        aos: {
            'data-aos': 'fade-up',
            'data-aos-duration': '500',
            className: 'col-span-2',
        },
        link: 'appointments',
        theme: 'bg-yellow hover:bg-yellow-darken',
        title: 'Book an Appointment',
        icon: EventIcon,
    },
    {
        aos: {
            'data-aos': 'fade-up',
            'data-aos-duration': '500',
            'data-aos-delay': '200',
        },
        link: 'services',
        theme: 'bg-white text-dark-bg hover:bg-white-darken',
        title: 'Check our Services',
        icon: HaircutIcon,
    },
    {
        aos: {
            'data-aos': 'fade-up',
            'data-aos-duration': '700',
            'data-aos-delay': '100',
        },
        link: 'services',
        theme: 'bg-green hover:bg-green-darken',
        title: 'Gallery',
        icon: GalleryIcon,
    },
    {
        aos: {
            'data-aos': 'fade-up',
            'data-aos-duration': '900',
            'data-aos-delay': '300',
            className: 'col-span-2 sm:col-span-1',
        },
        link: 'reschedule',
        theme: 'bg-red hover:bg-red-darken',
        title: 'Login & Reschedule',
        iconTheme: 'text-white-text',
        icon: ChangeIcon,
    },
    {
        aos: {
            'data-aos': 'fade-up',
            'data-aos-duration': '800',
            'data-aos-delay': '100',
            className: 'col-span-1 sm:col-span-2',
        },
        link: 'contact',
        theme: 'bg-[#b8d8fc] hover:bg-[#99bee7]',
        title: 'Get Direction or Contact',
        icon: MapIcon,
    },
    {
        aos: {
            'data-aos': 'fade-up',
            'data-aos-duration': '900',
            'data-aos-delay': '400',
        },
        link: 'contact',
        theme: 'bg-white hover:bg-white-darken',
        title: ' Meet our Stylist',
        icon: StylistIcon,
    },
];

export default menus;
