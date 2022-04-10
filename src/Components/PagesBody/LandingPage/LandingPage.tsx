import { useEffect, useState } from 'react';

import MainGraphic from '../../Organisms/Main-Graphic/MainGraphic';
import ResponsiveGrid from '../../Template/Layout/ResponsiveGrid';

const serviceDataMock = [
  {
    name: 'Masaż Gorącymi Kamieniami',
    description:
      'Odpręż się chłopie, to tutaj znajdziesz ukojenie. Zapomnij o troskach, zapomnij o brzemieniu.. Połóż się i nie myśl o niczym. Odpocznij,',
    price: 150,
    duration: 1.5,
    image:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII',
    altText: 'massage with stones',
  },
];

export interface serviceData {
  name: string;
  description: string;
  price: number;
  duration: number;
  image: string;
  altText: string;
}

const LandingPage = () => {
  const [serviceObject, setServiceObject] = useState<serviceData[] | null>(
    null,
  );
  useEffect(() => {
    const getServiceObject = async () => {
      try {
        // const response = await fetch(serviceDataMock);
        const response = { ok: 'true' };
        if (!response.ok) {
          throw new Error();
        } else {
          // const service = await response.json();
          const service = serviceDataMock;
          setServiceObject(service);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getServiceObject();
  }, []);

  return (
    <main>
      <MainGraphic></MainGraphic>
      <h1 style={{ textAlign: 'center' }}>SPAralige od Matylde</h1>
      {serviceObject && <ResponsiveGrid serviceObjectArray={serviceObject} />}
    </main>
  );
};

export default LandingPage;
