/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_WEBHOOK_WEATHER_URL: string;
    VITE_LINKEDIN_URL: string;
    VITE_GITHUB_URL: string;
    VITE_REALM_ID: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
}