import { Typography } from '@mui/material';
import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LandingGrid from './LandingGrid';
import MainGraphic from '../../Organisms/Main-Graphic/MainGraphic';
import ScrollButton from '../../Atoms/ScrollButton/ScrollButton';
import { serviceDataType } from '../../../Types/dbDataTypes';
import { servicesRef } from '../../../Firebase/firebase';

const LandingPage = () => {
  const [serviceObjectArray, setServiceObjectArray] = useState<
    serviceDataType[] | null
  >(null);
  const { t } = useTranslation('landingPage');
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
      <ScrollButton showBelow={250} />
      <MainGraphic />
      <Typography
        sx={{
          fontSize: '16',
          paddingTop: '1.5rem',
          marginBottom: '0.625rem',
          fontWeight: 'bold',
        }}
      >
        {t('heading')}
      </Typography>
      {serviceObjectArray && (
        <LandingGrid serviceObjectArray={serviceObjectArray} />
      )}
    </main>
  );
};

export default LandingPage;
