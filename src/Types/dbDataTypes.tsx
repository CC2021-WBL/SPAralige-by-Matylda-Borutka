export interface serviceDataType {
  id: string;
  // name: string;
  name: { pl: string; en: string };
  type: string;
  type2: { pl: string; en: string };
  // description: string;
  description: { pl: string; en: string };
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  altText2: { pl: string; en: string };
  therapist: therapistTypes;
  text: string[];
  text2: { pl: string; en: string };
  // [key: string]: boolean
}

export interface therapistTypes {
  id: string;
  firstname: string;
  surname: string;
  // shortBio: string;
  shortBio: { pl: string; en: string };
  therapistImage: string;
  therapistAltText: string;
  therapistAltText2: { pl: string; en: string };
}
