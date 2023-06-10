import { IconProps } from '@/types/icons';

export default function HomeIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            fill="#000"
            className="icon glyph"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M21.71 10.29l-9-9a1 1 0 00-1.42 0l-9 9a1 1 0 00-.21 1.09A1 1 0 003 12h1v9a1 1 0 001 1h3a1 1 0 001-1v-6a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 001 1h3a1 1 0 001-1v-9h1a1 1 0 00.92-.62 1 1 0 00-.21-1.09z"
            ></path>
        </svg>
    );
}
