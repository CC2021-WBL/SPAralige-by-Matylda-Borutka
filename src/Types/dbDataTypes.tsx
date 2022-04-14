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
