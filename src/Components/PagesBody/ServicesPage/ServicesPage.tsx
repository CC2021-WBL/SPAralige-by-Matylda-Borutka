import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { serviceDataType } from '../../../Types/dbDataTypes';
import { servicesRef } from '../../../Firebase/firebase';

// import ResponsiveGrid from '../../Template/Layout/ResponsiveGrid';

const ServicesPage = () => {
  const [serviceObjectArray, setServiceObjectArray] = useState<
    serviceDataType[] | null
  >(null);

  useEffect(() => {
    console.log(serviceObjectArray);
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
      {/* {serviceObjectArray && (
        <ResponsiveGrid serviceObjectArray={serviceObjectArray} />
      )} */}
    </main>
  );
};

export default ServicesPage;
