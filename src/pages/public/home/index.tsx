import { Link } from 'react-router-dom';
import menus from '@/pages/public/home/menu';

export default function Home() {
    return (
        <div className="pt-10 sm:pt-14 mx-auto max-w-[700px]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {menus.map((menu, index) => (
                    <div {...menu.aos} key={index}>
                        <Link
                            to={menu.link}
                            className={`flex flex-col justify-between rounded-3xl p-5 transition duration-300 h-full ${menu.theme}`}
                        >
                            <span className={`${menu.iconTheme || ''}`}>
                                <menu.icon width="60" height="60" />
                            </span>
                            <span
                                className={`text-dark-bg text-xl pt-3 sm:pt-5 block font-light ${
                                    menu.iconTheme || ''
                                }`}
                            >
                                {menu.title}
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
