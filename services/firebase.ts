

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// 在 Netlify UI 中设置这些环境变量
// FIX: Cast `import.meta` to `any` to access the `env` property without TypeScript errors. This is a workaround because type definitions for Vite environment variables are missing.
const env = (import.meta as any).env;

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID,
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID
};

// 初始化Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };