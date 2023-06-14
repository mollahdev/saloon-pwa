import type { Role } from '@/types';
import type { IconProps } from '@/types/icons';
import EventIcon from '@/icons/event';
import AppointmentsIcon from '@/icons/appointments';
import HaircutIcon from '@/icons/haircut';
import PriceTag from '@/icons/price-tag';
import BarbersIcon from '@/icons/barbers';
import UserIcon from '@/icons/user';
import InfoIcon from '@/icons/info';
import TimeIcon from '@/icons/time';

type SidebarMenu = Array<{
    title: string;
    roles: Role[];
    icon: React.FC<IconProps>;
    path: string;
}>;

const sidebarMenu: SidebarMenu = [
    {
        title: 'Appointments',
        roles: ['super-admin', 'admin', 'basic'],
        icon: AppointmentsIcon,
        path: '/appointments',
    },
    {
        title: 'Services',
        roles: ['super-admin', 'admin'],
        icon: HaircutIcon,
        path: '/appointments',
    },
    {
        title: 'Variation Prices',
        roles: ['super-admin', 'admin'],
        icon: PriceTag,
        path: '/appointments',
    },
    {
        title: 'Barbers',
        roles: ['super-admin', 'admin'],
        icon: BarbersIcon,
        path: '/appointments',
    },
    {
        title: 'Users',
        roles: ['super-admin', 'admin'],
        icon: UserIcon,
        path: '/appointments',
    },
    {
        title: 'Client Info',
        roles: ['super-admin', 'admin'],
        icon: InfoIcon,
        path: '/appointments',
    },
    {
        title: 'Dayoffs/Breaks',
        roles: ['super-admin', 'admin'],
        icon: TimeIcon,
        path: '/appointments',
    },
];

export default function getSidebarMenu(role: Role) {
    return sidebarMenu.filter((item) => item.roles.includes(role));
}
