import { Timestamp } from 'firebase/firestore';

export interface TimetableType<T> {
  day?: T;
  hoursOfService?: string[];
  timetableId: string;
}

export type FullTimetableType = Required<TimetableType<Date>>;
