import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MASSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// init firebase app
export const app = initializeApp(firebaseConfig);

//google analytics
const analytics = getAnalytics(app);

// init services
// databse
export const db = getFirestore();
//authentication
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
