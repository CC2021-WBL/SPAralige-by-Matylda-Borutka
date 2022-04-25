export interface PartialServiceDataType {
  id?: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
}
export interface serviceDataType {
  id: string;
  name: { pl: string; en: string };
  type: string;
  filterCategory: string;
  type2: { pl: string; en: string };
  description: { pl: string; en: string };
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  altText2: { pl: string; en: string };
  therapist: therapistTypes;
  therapistFullName: string;
  text: string[];
  text2: { pl: string; en: string };
}
export interface therapistTypes {
  id: string;
  firstname: string;
  surname: string;
  shortBio: { pl: string; en: string };
  therapistImage: string;
  therapistAltText: string;
  therapistAltText2: { pl: string; en: string };
}
