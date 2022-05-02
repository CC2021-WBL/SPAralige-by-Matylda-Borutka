import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
} from 'firebase/auth';
import { collection, doc, getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

//we know it should be hidden
//at Firebase setting environmental variables generates costs
const firebaseConfig = {
  apiKey: 'AIzaSyD02fXICWksfF5MB-pzTymrQjBuIZGILG8',
  authDomain: 'sparaligebymatylda.firebaseapp.com',
  projectId: 'sparaligebymatylda',
  storageBucket: 'sparaligebymatylda.appspot.com',
  messagingSenderId: '834070220609',
  appId: '1:834070220609:web:40f8100429ae98d0d8dbc0',
  measurementId: 'G-R0RZQCV0DS',
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
export const timetablesRef = collection(db, 'timetables');

//document ref
export const createServiceRef = (serviceId: string) => {
  const serviceRef = doc(db, 'services', serviceId);
  return serviceRef;
};

export const createTimetableRef = (timetableId: string) => {
  const timetableRef = doc(db, 'timetables', timetableId);
  return timetableRef;
};
