import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ResponsiveGrid from '../../Template/Layout/ResponsiveGrid';
import { servicesRef } from '../../../Firebase/firebase';

// const serviceDataMock = [
//   {
//     name: 'Masaż Gorącymi Kamieniami',
//     type: 'Masaż',
//     description:
//       'Odpręż się chłopie, to tutaj znajdziesz ukojenie. Zapomnij o troskach, zapomnij o brzemieniu.. Połóż się i nie myśl o niczym. Odpocznij,',
//     price: 150,
//     duration: 1.5,
//     image:
//       'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
//     altText: 'massage with stones',
//     therapist: {
//       firstname: 'Damian',
//       surname: 'Twardoręki',
//       shortBio:
//         'Absolwent Wyższej Szkoły Rehabilitacji w Warszawie. Jako magister fizjoterapii kontynuuje wieloletnią, rodzinną tradycję pomocy osobom z dolegliwościami kręgosłupa. Pasjonat chiropraktyki. Posiada ponad 10-letnie doświadczenie zawodowe, wypracowane w centrach rehabilitacji i odnowy biologicznej. Skutecznie łączy zdobytą wiedzę i doświadczenie, z niezwykłymi umiejętnościami wyczucia tkanki. Do każdego klienta podchodzi indywidualnie, dostosowując technikę zabiegu.',
//       therapistImage:
//         'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
//       therapistAltText: "Damian's smiling face",
//     },
//   },
// ];

export interface therapistTypes {
  firstname: string;
  surname: string;
  shortBio: string;
  therapistImage: string;
  therapistAltText: string;
}

export interface serviceData {
  id?: string;
  name: string;
  type: string;
  description: string;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  therapist: therapistTypes;
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
