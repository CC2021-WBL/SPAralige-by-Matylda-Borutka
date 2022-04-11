import { DocumentReference } from 'firebase/firestore';

export interface serviceDataType {
  id?: string;
  name: string;
  description: string;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  therapist: DocumentReference;
}
