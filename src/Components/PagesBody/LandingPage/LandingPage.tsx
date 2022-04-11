import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ResponsiveGrid from '../../Template/Layout/ResponsiveGrid';
import { serviceDataType } from '../../../Types/dbDataTypes';
import { servicesRef } from '../../../Firebase/firebase';

const LandingPage = () => {
  const [serviceObjectArray, setServiceObjectArray] = useState<
    serviceDataType[] | null
  >(null);

  useEffect(() => {
    const getServiceObjectArray = async () => {
      try {
        const snapshot = await getDocs(servicesRef);
        if (!snapshot) {
          throw new Error();
        } else {
          const serviceArray: serviceDataType[] = [];
          snapshot.forEach((service) => {
            const convertedData = service.data() as serviceDataType;
            convertedData.id = service.id;
            console.log(convertedData.therapist);
            const therapistObject = convertedData.therapist;
            console.log(therapistObject);

            serviceArray.push(convertedData);
          });
          console.log(serviceArray);
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
