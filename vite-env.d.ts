/// <reference types="vite/client" />

// FIX: Add explicit type definitions for environment variables to fix TypeScript errors.
// This ensures that `import.meta.env` is correctly typed throughout the project, resolving
// the "Property 'env' does not exist on type 'ImportMeta'" errors.
interface ImportMetaEnv {
    readonly VITE_FIREBASE_API_KEY: string;
    readonly VITE_FIREBASE_AUTH_DOMAIN: string;
    readonly VITE_FIREBASE_PROJECT_ID: string;
    readonly VITE_FIREBASE_STORAGE_BUCKET: string;
    readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
    readonly VITE_FIREBASE_APP_ID: string;
    readonly VITE_FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
