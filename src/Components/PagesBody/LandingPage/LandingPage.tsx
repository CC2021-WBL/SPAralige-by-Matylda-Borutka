import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ResponsiveGrid from '../../Template/Layout/ResponsiveGrid';
import { servicesRef } from '../../../Firebase/firebase';

export interface serviceData {
  id?: string;
  name: string;
  description: string;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
}

const LandingPage = () => {
  const [serviceObjectArray, setServiceObjectArray] = useState<
    serviceData[] | null
  >(null);

  useEffect(() => {
    const getServiceObjectArray = async () => {
      try {
        const snapshot = await getDocs(servicesRef);
        if (!snapshot) {
          throw new Error();
        } else {
          const serviceArray: serviceData[] = [];
          snapshot.forEach((service) => {
            const convertedData = service.data() as serviceData;
            convertedData.id = service.id;
            serviceArray.push(convertedData);
          });
          setServiceObjectArray(serviceArray);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getServiceObjectArray();
  }, []);

  return (
    <main>
      <h1 style={{ textAlign: 'center' }}>SPAralige od Matylde</h1>
      {serviceObjectArray && (
        <ResponsiveGrid serviceObjectArray={serviceObjectArray} />
      )}
    </main>
  );
};

export default LandingPage;
