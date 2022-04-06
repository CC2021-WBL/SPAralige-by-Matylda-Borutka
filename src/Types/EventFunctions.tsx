/* eslint-disable no-unused-vars */

import { ChangeEvent } from 'react';

export interface HandleInputChangeType {
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

export interface HandleOnClickButtonType {
  (event: React.MouseEvent<HTMLElement>): void;
}
