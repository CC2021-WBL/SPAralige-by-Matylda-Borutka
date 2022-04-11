import { collection, getDocs } from 'firebase/firestore';

import { ServiceDataType } from '../Types/dbDataTypes';
import { db } from './firebase';

const servicesCollectionRef = collection(db, 'services');

export async function getAllServices() {
  try {
    const snapshot = await getDocs(servicesCollectionRef);
    const services = snapshot.docs.map((document) => ({
      ...(document.data() as ServiceDataType),
      id: document.id,
    }));
    return services;
  } catch (error) {
    console.log(error);
    return null;
  }
}
