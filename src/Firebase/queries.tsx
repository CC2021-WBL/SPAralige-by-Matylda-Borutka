import { getDocs } from 'firebase/firestore';
import { serviceDataType } from '../Types/dbDataTypes';
import { servicesRef } from './firebase';

export async function getAllServices() {
  try {
    const snapshot = await getDocs(servicesRef);
    const services = snapshot.docs.map((document) => ({
      ...(document.data() as serviceDataType),
      id: document.id,
    }));
    return services;
  } catch (error) {
    console.log(error);
    return null;
  }
}
