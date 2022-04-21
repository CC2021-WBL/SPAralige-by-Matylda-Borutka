import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
import { collection, doc, getFirestore } from 'firebase/firestore';

import { getAnalytics } from 'firebase/analytics';
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

// collection ref
export const servicesRef = collection(db, 'services');
export const reservationsRef = collection(db, 'reservations');
export const usersRef = collection(db, 'users');
export const timetablesRef = collection(db, 'timetables');

//document ref
export const createUserRef = (userId: string) => {
  const userRef = doc(db, 'users', userId);
  return userRef;
};

export const createServiceRef = (serviceId: string) => {
  const serviceRef = doc(db, 'services', serviceId);
  return serviceRef;
};
