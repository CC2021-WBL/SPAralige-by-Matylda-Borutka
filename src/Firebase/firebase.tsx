import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCAhvXYkyDboVbqIGZkp-lB58wPogwjnzk',
  authDomain: 'sparalige.firebaseapp.com',
  projectId: 'sparalige',
  storageBucket: 'sparalige.appspot.com',
  messagingSenderId: '200121234428',
  appId: '1:200121234428:web:da10b02207634cc3ccb879',
  measurementId: 'G-GX9LB4FHMZ',
};

// init firebase app
export const app = initializeApp(firebaseConfig);

//google analytics
export const analytics = getAnalytics(app);

// init services
// databse
export const db = getFirestore();
//authentication
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
