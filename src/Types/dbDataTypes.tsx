export interface serviceDataType {
  id: string;
  name: string;
  type: string;
  description: string;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  therapist: therapistTypes;
  text: string[];
  text2: { pl: string; en: string };
  // [key: string]: boolean
}

export interface therapistTypes {
  id: string;
  firstname: string;
  surname: string;
  shortBio: string;
  therapistImage: string;
  therapistAltText: string;
}
