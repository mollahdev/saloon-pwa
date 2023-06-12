/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_HOST: string;
    readonly VITE_ADMIN_AUTH_TOKEN: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
