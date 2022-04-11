import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ResponsiveGrid from '../../Template/Layout/ResponsiveGrid';
import { servicesRef } from '../../../Firebase/firebase';

// const serviceDataMock = [
//   {
//     name: 'Masaż Gorącymi Kamieniami',
//     description:
//       'Odpręż się chłopie, to tutaj znajdziesz ukojenie. Zapomnij o troskach, zapomnij o brzemieniu.. Połóż się i nie myśl o niczym. Odpocznij,',
//     price: 150,
//     duration: 1.5,
//     image:
//       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
//     altText: 'massage with stones',
//   },
// ];

export interface serviceData {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
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
          const serviceArray: { id: string }[] = [];
          snapshot.forEach((service) =>
            serviceArray.push({ ...service.data(), id: service.id }),
          );
          console.log(serviceArray);
          // setServiceObjectArray(serviceArray);
          setServiceObjectArray(null);
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
