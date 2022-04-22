import React from 'react';

export interface TimetableType<T> {
  day?: T;
  hoursOfService?: string[];
  timetableId: string;
}

export type FullTimetableType = Required<TimetableType<Date>>;

export interface HandleReservationType {
  (
    event: React.MouseEvent<HTMLElement>,
    chosenDate: Date,
    chosenHour: string,
  ): void;
}
