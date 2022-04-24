export interface serviceDataType {
  id: string;
  name: string;
  type: string;
  filterCategory: string;
  description: string;
  priceInZloty: number;
  durationInHours: number;
  image: string;
  altText: string;
  therapist: therapistTypes;
  therapistFullName: string;
}

export interface therapistTypes {
  id: string;
  firstname: string;
  surname: string;
  shortBio: string;
  therapistImage: string;
  therapistAltText: string;
}
