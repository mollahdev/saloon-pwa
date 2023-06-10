import { IconProps } from '@/types/icons';

export default function ChangeIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
        >
            <path
                fill="currentColor"
                d="M480-40q-112 0-216-66T100-257v137H40v-240h240v60H143q51 77 145.5 138.5T480-100q78 0 147.5-30t121-81.5Q800-263 830-332.5T860-480h60q0 91-34.5 171T791-169q-60 60-140 94.5T480-40zM40-480q0-91 34.5-171T169-791q60-60 140-94.5T480-920q112 0 216 66t164 151v-137h60v240H680v-60h137q-51-77-145-138.5T480-860q-78 0-147.5 30t-121 81.5Q160-697 130-627.5T100-480H40zm440 175l-54-121-121-54 121-55 54-121 55 121 121 55-121 54-55 121z"
            ></path>
        </svg>
    );
}
