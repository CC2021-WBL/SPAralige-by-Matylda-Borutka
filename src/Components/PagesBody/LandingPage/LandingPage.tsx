import { LinearProgress, Typography } from '@mui/material';
import { getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import LandingGrid from './LandingGrid';
import MainGraphic from '../../Organisms/Main-Graphic/MainGraphic';
import ScrollButton from '../../Atoms/ScrollButton.tsx/ScrollButton';
import { auth, servicesRef } from '../../../Firebase/firebase';
import { serviceDataType } from '../../../Types/dbDataTypes';

const LandingPage = () => {
  const [pending, setIsPending] = useState(true);
  const [serviceObjectArray, setServiceObjectArray] = useState<
    serviceDataType[] | null
  >(null);
  const [uid, setUid] = useState<string | null>(null);

  onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      setUid(null);
    } else if (currentUser.uid !== uid) {
      setUid(currentUser.uid);
    }
  });

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
        alert('Oops, coś poszło nie tak, spróbuj jescze raz');
      }
      setIsPending(false);
    };
    getServiceObjectArray();
  }, []);

  const { t } = useTranslation('landingPage');
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
      {pending && <LinearProgress />}
      {!pending && serviceObjectArray && (
        <LandingGrid serviceObjectArray={serviceObjectArray} uid={uid} />
      )}
    </main>
  );
};

export default LandingPage;
