import { Typography } from '@mui/material';
import { getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';

import LandingGrid from './LandingGrid';
import MainGraphic from '../../Organisms/Main-Graphic/MainGraphic';
import { auth, servicesRef } from '../../../Firebase/firebase';
import { serviceDataType } from '../../../Types/dbDataTypes';

const LandingPage = () => {
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
        console.log(error);
      }
    };
    getServiceObjectArray();
  }, []);

  return (
    <main>
      <MainGraphic />
      <Typography
        sx={{
          fontSize: '16',
          paddingTop: '1.5rem',
          marginBottom: '0.625rem',
          fontWeight: 'bold',
        }}
      >
        Popularne zabiegi
      </Typography>
      {serviceObjectArray && (
        <LandingGrid serviceObjectArray={serviceObjectArray} uid={uid} />
      )}
    </main>
  );
};

export default LandingPage;
