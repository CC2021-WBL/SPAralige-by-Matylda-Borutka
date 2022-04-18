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
  name: string;
  type: string;
  description: string;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  therapist: therapistTypes;
}
export interface FullServiceDataType {
  id?: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  therapist: string;
  type: string;
}
export interface therapistTypes {
  id: string;
  firstname: string;
  surname: string;
  shortBio: string;
  therapistImage: string;
  therapistAltText: string;
}
