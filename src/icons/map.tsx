import { IconProps } from '@/types/icons';

export default function MapIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
        >
            <path d="M612-120l-263-93-179 71q-17 9-33.5-1T120-173v-558q0-13 7.5-23t19.5-15l202-71 263 92 178-71q17-8 33.5 1.5T840-788v565q0 11-7.5 19T814-192l-202 72zm-34-75v-505l-196-66v505l196 66zm60 0l142-47v-512l-142 54v505zm-458-12l142-54v-505l-142 47v512zm458-493v505-505zm-316-66v505-505z"></path>
        </svg>
    );
}
