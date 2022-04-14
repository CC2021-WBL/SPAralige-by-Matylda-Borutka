import { HandleInputChangeType } from '../../../Types/EventFunctions';

export type LoginInputsProps = {
  email: string;
  password: string;
  handleEmailChange: HandleInputChangeType;
  handlePasswordChange: HandleInputChangeType;
};

export type SignOrResetPropType = { issueText: string; linkText: string };
