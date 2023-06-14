import type { IconProps } from '@/types/icons';

export default function BarbersIcon(props: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            version="1.1"
            viewBox="0 0 30 30"
        >
            <g
                fill="currentColor"
                fillOpacity="1"
                strokeDasharray="none"
                strokeMiterlimit="4"
                strokeOpacity="1"
                transform="translate(0 -289.063)"
            >
                <path
                    stroke="none"
                    strokeWidth="0.5"
                    d="M18.854 8.582a3.517 3.517 0 00-2.887 1.516 5.42 5.42 0 01.387 1.998c0 .693-.176 1.331-.438 1.93a3.517 3.517 0 002.938 1.59 3.517 3.517 0 100-7.034zM22 16.346l-2.088 3.265a9.589 9.589 0 01.875 3.739l.022.783-.516.588a12.576 12.576 0 01-2.564 2.213 10.472 10.472 0 009.078-3.527A7.912 7.912 0 0022 16.345z"
                    opacity="0.91"
                    transform="translate(0 289.063)"
                ></path>
                <path
                    stroke="red"
                    strokeWidth="0.004"
                    d="M10.836 297.642a3.517 3.517 0 00-3.517 3.517 3.517 3.517 0 003.517 3.517 3.517 3.517 0 003.517-3.517 3.517 3.517 0 00-3.517-3.517zm3.146 7.763l-3.07 4.803-3.112-4.8a7.913 7.913 0 00-4.818 7.055 10.472 10.472 0 007.904 3.597c3.154 0 5.977-1.394 7.902-3.594a7.913 7.913 0 00-4.806-7.06z"
                    opacity="0.91"
                ></path>
            </g>
        </svg>
    );
}
